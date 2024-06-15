import DashboardLayout from "@/components/dashboard/DashboardLayout"
import AdminSidebarNav from "@/pages/admin/components/AdminSidebarNav"

const CreateTasks = () => {
  return (
    <DashboardLayout  title="Create Event" MenuComponent={<AdminSidebarNav/>}>
      Create Task
    </DashboardLayout>
  )
}

export default CreateTasks