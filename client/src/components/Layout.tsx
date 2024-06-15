import React, { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const hideHeaderForRoutes: string[] = ["/admin/*"]; // add routes where you want to hide navbar: ['/signin', '/signup']
  const hideFooterForRoutes: string[] = ["/admin/*"]; // add routes where you want to hide footer
  const headerExceptionRoutes: string[] = []; // add routes where you want to show the header
  const footerExceptionRoutes: string[] = []; // add routes where you want to show the footer

  const isPathInHiddenRoutes = (
    path: string,
    hiddenRoutes: string[],
    exceptionRoutes: string[]
  ) => {
    // If the path is in the exceptionRoutes, return false to show the header
    if (exceptionRoutes.includes(path)) {
      return false;
    }

    return hiddenRoutes.some((hiddenRoute) => {
      if (hiddenRoute.endsWith("*")) {
        // If the route ends with '*', remove the '*' and match the start of the path
        const routeWithoutStar = hiddenRoute.slice(0, -1);
        return path.startsWith(routeWithoutStar);
      } else {
        // If the route doesn't end with '*', match the exact route
        const regex = new RegExp(`^${hiddenRoute}$`);
        return regex.test(path);
      }
    });
  };

  return (
    <div>
      {!isPathInHiddenRoutes(
        location.pathname,
        hideHeaderForRoutes,
        headerExceptionRoutes
      ) && <Header />}
      {children}
      {!isPathInHiddenRoutes(
        location.pathname,
        hideFooterForRoutes,
        footerExceptionRoutes
      ) && <Footer />}
    </div>
  );
};

export default Layout;
