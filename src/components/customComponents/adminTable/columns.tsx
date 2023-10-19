import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import CustomDropDown from "../dropDown/CustomDropDown"
import CustomDialog from "../CustomDialogForm/CustomDialogForm"
import { updateShipment } from "@/services/shipment/shipmentPatch"
import { updateProduct } from "@/services/product/productPatch"
import ToggleActiveButton from "../toggleActiveButton/toggleActiveButton"


function handleProductSave(productValues: Record<string, string>, token?: string, shipment?: Shipment, product?: Product) {
    updateProduct(token, product, productValues)
        .then(() => {
            window.location.reload();
        })
}

function handleShipmentSave(shipmentValues: Record<string, string>, token?: string, shipment?: Shipment) {
    updateShipment(token, shipment, shipmentValues)
        .then(() => {
            window.location.reload();
        })
}


//Column structure for product and order table
// This is how you build the columns and rows for the tables
export const productColumns: ColumnDef<Product>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => {
            return (
                <Button
                    className="hover:bg-accent-color-2 px-0 hover:bg-opacity-[.50]"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Id
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
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
        cell: ({ row }) => {
            const product = row.original
            const active = row.getValue("active") as boolean
            return (
                <div className="text-center font-medium">
                    {active ? "Active" : "Inactive"}
                    <ToggleActiveButton active={active} product={product} />
                </div>
            )
        },
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
                        product={product}
                        fields={[
                            { type: 'text', id: 'name', label: 'Name', defaultValue: product.name },
                            { type: 'text', id: 'description', label: 'Description', defaultValue: product.description },
                            { type: 'number', id: 'price', label: 'Price', defaultValue: product.price.toString() },
                            { type: 'number', id: 'stock', label: 'Stock', defaultValue: product.stock.toString() },

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
        header: ({ column }) => {
            return (
                <Button
                    className="hover:bg-accent-color-2 px-0 hover:bg-opacity-[.50]"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Id
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
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
        cell: ({ row }) => {
            const shipment = row.original
            return (
                <CustomDropDown>
                    <CustomDialog
                        title="Edit Shipment"
                        description="Edit your Shipment details below."
                        shipment={shipment}
                        fields={[
                            { type: 'text', id: 'billingAddress', label: 'BillingAddress', defaultValue: shipment.billingAddress },
                            { type: 'text', id: 'deliveryInstruction', label: 'DeliveryInstruction', defaultValue: shipment.deliveryInstruction },
                            { type: 'text', id: 'email', label: 'Email', defaultValue: shipment.email },
                            { type: 'text', id: 'city', label: 'City', defaultValue: shipment.city },
                            { type: 'text', id: 'countries', label: 'Countries', defaultValue: shipment.countries },
                            { type: 'text', id: 'postalCode', label: 'PostalCode', defaultValue: shipment.postalCode },
                            { type: 'text', id: 'phoneNumber', label: 'PhoneNumber', defaultValue: shipment.phoneNumber },
                            { type: 'text', id: 'shippingAddress', label: 'ShippingAddress', defaultValue: shipment.shippingAddress },
                        ]}
                        onSubmit={handleShipmentSave}
                    >
                        <Button className="bg-accent-color-1">Edit Shipment</Button>
                    </CustomDialog>
                </CustomDropDown>
            )
        },
    },
]

export const userColumns: ColumnDef<User>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => {
            return (
                <Button
                    className="hover:bg-accent-color-2 px-0 hover:bg-opacity-[.50]"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Id
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
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
]

