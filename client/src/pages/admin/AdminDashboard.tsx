import DashboardLayout from "@/components/dashboard/DashboardLayout";
import AdminSidebarNav from "./components/AdminSidebarNav";

const AdminPage = () => {
  return (
    <DashboardLayout title="Admin Dashboard" MenuComponent={<AdminSidebarNav />}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa error
      nihil laboriosam incidunt recusandae! Dolore harum eveniet placeat
      consequatur repudiandae officia cumque doloribus porro eos, quidem,
      quaerat asperiores, ducimus suscipit.
    </DashboardLayout>
  );
};

export default AdminPage;
