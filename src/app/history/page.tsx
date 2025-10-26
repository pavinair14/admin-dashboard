import UserTable from "../../components/usermanagement/dataTable"
import { historyData } from "./constants";

// include pagination, bulk edit, search filter, export csv option
const History = () => {
    return (
        <UserTable users={historyData} />
    )
}

export default History;