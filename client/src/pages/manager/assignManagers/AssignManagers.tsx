import DashboardLayout from "@/components/dashboard/DashboardLayout";
import AdminSidebarNav from "@/pages/admin/components/AdminSidebarNav";
import { useParams } from "react-router-dom";

const AssignManagers = () => {
  const { eventId } = useParams();
  return (
    <>
    <DashboardLayout  title="Create Event" MenuComponent={<AdminSidebarNav/>}>
      Assign Managers to the event with Event Id: {eventId}
    </DashboardLayout>
    </>
  );
};

export default AssignManagers;
