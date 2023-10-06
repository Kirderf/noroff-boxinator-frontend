import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import CustomDropDown from "../dropDown/CustomDropDown"


//Column structure for product and order table
// This is how you build the columns and rows for the tables
export const productColumns: ColumnDef<Product>[] = [

    {
        accessorKey: "id",
        header: "Id",
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    className="hover:bg-accent-color-2 hover:bg-opacity-[.50]"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("name")}</div>,
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "price",
        header: () => <div className="text-right">Amount</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("price"))
            const formatted = new Intl.NumberFormat("no", {
                style: "currency",
                currency: "NOK",
            }).format(amount)

            return <div className="text-right font-medium">{formatted}</div>
        },
    },
    {
        id: "actions",
        enableHiding: false,
        cell: () => {
            return (
                <CustomDropDown action1="Delete product" action2="Edit product" />
            )
        },
    },
]




export const orderColumns: ColumnDef<Order>[] = [
    {
        accessorKey: "id",
        header: "Id",
    },
    {
        accessorKey: "user",
        header: "User",
    },
    {
        accessorKey: "status",
        header: () => <div className="text-right">Status</div>,
        cell: () => <div className="text-right font-medium">Status</div>
    },
    {
        id: "actions",
        enableHiding: false,
        cell: () => {
            return (
                <CustomDropDown action1="Delete order" action2="Edit order" />
            )
        },
    },
]

export const userColumns: ColumnDef<User>[] = [
    {
        accessorKey: "id",
        header: "Id",
    },
    {
        accessorKey: "username",
        header: "Username",
    },
    {
        accessorKey: "address",
        header: "Address",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "roles",
        header: "Roles",
    },
    {
        id: "actions",
        enableHiding: false,
        cell: () => {
            return (
                <CustomDropDown action1="Delete user" action2="Edit user" />
            )
        },
    },
]

