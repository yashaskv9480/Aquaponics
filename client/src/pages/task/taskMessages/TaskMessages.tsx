import DashboardLayout from "@/components/dashboard/DashboardLayout"
import AdminSidebarNav from "@/pages/admin/components/AdminSidebarNav"

const TaskMessages = () => {
  return (
    <DashboardLayout  title="Create Event" MenuComponent={<AdminSidebarNav/>}>
      Task Messages
    </DashboardLayout>
  )
}

export default TaskMessages