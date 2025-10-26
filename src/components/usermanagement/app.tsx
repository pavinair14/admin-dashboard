import { users } from "@/app/users/constants"
import UserTable from "./dataTable"

export const UserManagement = async () => {
    type Payment = {
        id: string
        amount: number
        status: "pending" | "processing" | "success" | "failed"
        email: string
    }

    async function getData(): Promise<Payment[]> {
        // Fetch data from your API here.
        return [
            {
                id: "728ed52f",
                amount: 100,
                status: "pending",
                email: "m@example.com",
            },
            {
                id: "678ed52f",
                amount: 200,
                status: "success",
                email: "mwewe@example.com",
            },
            // ...
        ]
    }
    const data = await getData()

    return (
        <div className="container mx-auto w-full bg-white dark:bg-[var(--darkpurple)] ">
            <UserTable users={users} />
        </div>
    )
}