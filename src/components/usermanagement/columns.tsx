import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const columns: ColumnDef[] = [
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => (
            <div className="font-medium text-sky-950">{row.getValue("name")}</div>
        ),
    },
    {
        accessorKey: "email",
        header: "Email",
        cell: ({ row }) => (
            <div className="text-sky-500">{row.getValue("email")}</div>
        ),
    },
    {
        accessorKey: "signupDate",
        header: "Signup Date",
        cell: ({ row }) => {
            const date = new Date(row.getValue("signupDate"));
            return <div>{date.toLocaleDateString()}</div>;
        },
    },
    {
        accessorKey: "plan",
        header: "Plan",
        cell: ({ row }) => {
            const plan = row.getValue("plan");
            const colors = {
                Free: "bg-gray-200 text-sky-700",
                Basic: "bg-blue-100 text-blue-800",
                Premium: "bg-yellow-100 text-yellow-800",
            };
            return (
                <Badge className={colors[plan] || "bg-gray-100 text-gray-600"}>
                    {plan}
                </Badge>
            );
        },
    },
    {
        accessorKey: "resumesCreated",
        header: "Created",
    },
    {
        accessorKey: "resumesDownloaded",
        header: "Downloaded",
    },
    {
        accessorKey: "revenue",
        header: "Revenue",
        cell: ({ row }) => (
            <div className="text-right font-medium">
                ${row?.getValue?.("revenue")?.toFixed(2)}
            </div>
        ),
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.getValue("status");
            const colorMap = {
                Active: "bg-green-100 text-green-800",
                Inactive: "bg-gray-100 text-gray-600",
                Banned: "bg-red-100 text-red-800",
            };
            return (
                <Badge className={colorMap[status] || "bg-gray-100 text-gray-600"}>
                    {status}
                </Badge>
            );
        },
    },
    {
        id: "actions",
        header: "",
        cell: ({ row }) => (
            <div className="flex gap-2 justify-end">
                <Button variant="outline" size="sm">View</Button>
                <Button variant="ghost" size="sm">Edit</Button>
            </div>
        ),
    },
];
