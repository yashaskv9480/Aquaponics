import DashboardLayout from "@/components/dashboard/DashboardLayout"
import AdminSidebarNav from "@/pages/admin/components/AdminSidebarNav"

const UserTickets = () => {
  return (
    <DashboardLayout  title="Create Event" MenuComponent={<AdminSidebarNav/>}>
      User Tickets
    </DashboardLayout>
  )
}

export default UserTickets