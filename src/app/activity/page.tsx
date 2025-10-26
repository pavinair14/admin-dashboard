import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { activeUsersTableData, activitySummary } from "./constants"
import { BarCharts } from "./charts/barChart";
import { LineCharts } from "./charts/lineChart";
import { PieCharts } from "./charts/pieChart";
import { AreaCharts } from "./charts/areaChart";
import { UserManagement } from "@/components/usermanagement/app";
import UserTable from "@/components/usermanagement/dataTable";

const Activity = () => {
    return (
        <div>
            <h1> Activity Overview</h1>
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-2 gap-4">
                {activitySummary.map((card, index) => (
                    <Card key={index} >
                        <CardHeader>
                            <CardTitle>{card.label}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{card.value}</p>
                        </CardContent>
                        <CardFooter>
                            <p>{card.change} from last week(up icon)</p>
                        </CardFooter>
                    </Card>

                ))}
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">

                    <BarCharts />
                </div>
                <div className="grid grid-cols-1 gap-4">
                    <LineCharts />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                    <PieCharts />
                    <AreaCharts />
                </div>

                <UserTable users={activeUsersTableData} />

                <h1> Recent Activity</h1>
            </div>
        </div>
    )
}

export default Activity;