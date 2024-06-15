import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useParams } from "react-router-dom";
import AdminSidebarNav from "../admin/components/AdminSidebarNav";

const Manager = () => {
  const { username } = useParams();
  return (
    <DashboardLayout  title="Create Event" MenuComponent={<AdminSidebarNav/>}>
      Hello {username}
    </DashboardLayout>
  )
}

export default Manager