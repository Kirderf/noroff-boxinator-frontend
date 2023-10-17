import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import CustomDropDown from "../dropDown/CustomDropDown"
import CustomDialog from "../CustomDialogForm/CustomDialogForm"



function handleProductSave(product: Record<string, string>) {
    console.log(product)
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
        accessorKey: "active",
        header: "Active",
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
        cell: ({ row }) => {
            const product = row.original
            return (
                <CustomDropDown>
                    <CustomDialog
                        title="Edit Product"
                        description="Edit your Product details below."
                        fields={[
                            { id: 'name', label: 'Name', defaultValue: product.name },
                            { id: 'description', label: 'Description', defaultValue: product.description },
                            { id: 'active', label: 'Active', defaultValue: product.isActive as unknown as string },
                            { id: 'stock', label: 'Stock', defaultValue: product.stock.toString() },
                            { id: 'width', label: 'Width', defaultValue: product.width.toString() },
                            { id: 'depth', label: 'Depth', defaultValue: product.depth.toString() },
                            { id: 'height', label: 'Height', defaultValue: product.height.toString() },
                            { id: 'weight', label: 'Weight', defaultValue: product.weight.toString() },
                        ]}
                        onSubmit={handleProductSave}
                    >
                        <Button className="bg-accent-color-1">Edit Product</Button>
                    </CustomDialog>
                </CustomDropDown>

            )
        },
    },
]




export const orderColumns: ColumnDef<Shipment>[] = [
    {
        accessorKey: "id",
        header: "Id",
    },
    {
        accessorKey: "email",
        header: "User",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "shippingAddress",
        header: "Shipping Address",
    },
    {
        accessorKey: "postalCode",
        header: "Postal Code",
    },
    {
        id: "actions",
        enableHiding: false,
        cell: () => {
            return (
                <CustomDropDown>
                    <Button className="bg-accent-color-1">
                        Edit Order
                    </Button>
                    <Button className="bg-error-color">
                        Delete Order
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
        id: "actions",
        enableHiding: false,
        cell: () => {
            return (
                <CustomDropDown>
                    <Button className="bg-accent-color-1">
                        Edit User
                    </Button>
                    <Button className="bg-error-color">
                        Delete User
                    </Button>
                </CustomDropDown>
            )
        },
    },
]

