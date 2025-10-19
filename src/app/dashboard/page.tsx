import { DashboardCards } from "./DashboardCards";
import { UserManagement } from "../../components/usermanagement/app";
import { LineCharts } from "./charts/lineChart";
import { BarCharts } from "./charts/barChart";
import { PieCharts } from "./charts/pieChart";
import { AreaCharts } from "./charts/areaChart";

const Dashboard = () => {
    return (
        <div className="w-full grid gap-12">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                <DashboardCards />
                <BarCharts />
            </div>
            <div className="grid grid-cols-1 gap-4">
                <LineCharts />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                <PieCharts />
                <AreaCharts />
            </div>

            <UserManagement />
        </div>
    );
}

export default Dashboard;