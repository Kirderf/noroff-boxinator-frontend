import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import CustomDropDown from "../dropDown/CustomDropDown"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"



function handleDeleteProduct() {
    return () => {
        console.log("delete product")
    }
}

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
                    className="hover:bg-accent-color-2 px-0 hover:bg-opacity-[.50]"
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
        header: () => <div className="text-left">Amount</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("price"))
            const formatted = new Intl.NumberFormat("no", {
                style: "currency",
                currency: "NOK",
            }).format(amount)

            return <div className="text-left font-medium">{formatted}</div>
        },
    },
    {
        id: "actions",
        enableHiding: false,
        cell: () => {
            return (
                <CustomDropDown>
                    <Button onClick={handleDeleteProduct()} className="bg-accent-color-1">
                        Delete product
                    </Button>
                    <Select>
                        <SelectTrigger className="w-[180px] bg-accent-color-1 flex justify-center gap-2 h-auto border-none">
                            <h1>Active:</h1>
                            <SelectValue className="" />
                        </SelectTrigger>
                        <SelectContent className="bg-accent-color-1">
                            <SelectGroup>
                                <SelectLabel>Active</SelectLabel>
                                <SelectItem value="true">True</SelectItem>
                                <SelectItem value="false">False</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </CustomDropDown>
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
                <CustomDropDown>
                    <Button className="bg-accent-color-1">
                        Delete product
                    </Button>
                    <Button className="bg-accent-color-1">
                        Edit product
                    </Button>
                </CustomDropDown>
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
                <CustomDropDown>
                    <Button className="bg-accent-color-1">
                        Delete product
                    </Button>
                    <Button className="bg-accent-color-1">
                        Edit product
                    </Button>
                </CustomDropDown>
            )
        },
    },
]

