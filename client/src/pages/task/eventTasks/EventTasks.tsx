import DashboardLayout from "@/components/dashboard/DashboardLayout"
import AdminSidebarNav from "@/pages/admin/components/AdminSidebarNav"

const EventTasks = () => {
  return (
    <DashboardLayout  title="Create Event" MenuComponent={<AdminSidebarNav/>}>
      Event Tasks
    </DashboardLayout>
  )
}

export default EventTasks