import { useContext, useEffect, useState } from "react"
import { productColumns, orderColumns, userColumns } from "../components/customComponents/adminTable/columns"
import { DataTable } from "../components/customComponents/adminTable/data-table"
import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { useGetAllProductAll } from "@/services/product/productGet"
import { useGetAllShipment } from "@/services/shipment/shipmentGet"
import { useGetAllUsers } from "@/services/user/userGet"
import { KeyCloakContext } from "@/context/KeyCloakContext"
import CustomDialog from "@/components/customComponents/CustomDialogForm/CustomDialogForm"
import { isProductValid } from "@/lib/isProductValid"
import { productPostWithAdmin } from "@/services/product/productPost"
import { useToast } from "@/components/ui/use-toast"

type DataItem = Product | Shipment | User
type ColumnItem = ColumnDef<DataItem>

function AdminPage() {

    const keycloak = useContext(KeyCloakContext);
    const [data, setData] = useState<DataItem[]>([])
    const [columns, setColumns] = useState<ColumnItem[]>(productColumns as ColumnItem[])

    const [fetchUsers, setFetchUsers] = useState(false);
    const [fetchOrders, setFetchOrders] = useState(false);
    const [filterValue, setFilterValue] = useState("");

    const { toast } = useToast()

    const token = keycloak.keycloak?.token || ''

    const getAllProductsHook = useGetAllProductAll(token)
    const getAllUsersHook = useGetAllUsers(token, fetchUsers)
    const getAllShipmentHook = useGetAllShipment(true, token, fetchOrders)

    function getProducts() {
        if (!getAllProductsHook.isLoading) {
            setData(getAllProductsHook.data as Product[])
            setColumns(productColumns as ColumnItem[])
            setFilterValue("name")
        }
    }

    function getUsers() {
        setFetchUsers(true);
        if (!getAllUsersHook.isLoading) {
            setData(getAllUsersHook.data as User[])
            setColumns(userColumns as ColumnItem[])
            setFilterValue("username")
        }
    }

    function getShipment() {
        setFetchOrders(true);
        if (!getAllShipmentHook.isLoading) {
            setData(getAllShipmentHook.data as Shipment[])
            setColumns(orderColumns as ColumnItem[])
            setFilterValue("email")
        }
    }
    const addProduct = async (values: Record<string, string>, token: string, _shipment?: Shipment, _product?: Product | undefined) => {
        const productPost: ProductPost = {
            name: values.name,
            description: values.description,
            image: values.image,
            price: Number(values.price),
            stock: Number(values.stock),
            active: (values.active == "true"),
            height: Number(values.height),
            weight: Number(values.weight),
            depth: Number(values.depth),
        }
        if (isProductValid(productPost)) {
            await productPostWithAdmin(productPost, token).then((result) => {
                if (result.ok) {
                    toast({
                        variant: "success",
                        title: "Success <3",
                        description: (
                            <div className="mt-2 w-[340px] rounded-md p-4">
                                Product was successfully made, money farm activated. ^_^
                            </div>
                        ),
                    })
                    window.location.reload()
                } else {
                    toast({
                        variant: "error",
                        title: "Error",
                        description: (
                            <div className="mt-2 w-[340px] rounded-md  p-4">
                                Oops! It seems our magical product elves are taking an unexpected nap. ^_^
                            </div>
                        ),
                    })
                }
            })
        } else {
            toast({
                variant: "error",
                title: "Error",
                description: (
                    <div className="mt-2 w-[340px] rounded-md  p-4">
                        input error.
                    </div>
                ),
            })
        }

    }
    useEffect(() => {
        if (!getAllProductsHook.isLoading) {
            getProducts()
        }
    }, [getAllProductsHook.isLoading])

    useEffect(() => {
        if (!getAllUsersHook.isLoading) {
            getUsers()
        }
    }, [getAllUsersHook.isLoading])

    useEffect(() => {
        if (!getAllProductsHook.isLoading) {
            getShipment()
        }
    }, [getAllShipmentHook.isLoading])

    return (
        <main className="min-h-screen bg-primary-color flex flex-col gap-10 items-center justify-start">
            {keycloak.keycloak?.hasRealmRole("ADMIN") ? (
                // JSX for admin user
                <>
                    <h1 className="text-4xl text-background-color text-center mt-10">Welcome Admin!</h1>

                    <div className="flex w-[50%] justify-center  flex-wrap gap-10 max-w-md  mx-auto">
                        <Button onClick={() => getProducts()} className="bg-accent-color-1 w-[100px]"> Products</Button>
                        <Button onClick={() => getUsers()} className="bg-accent-color-1 w-[100px]"> User</Button>
                        <Button onClick={() => getShipment()} className="bg-accent-color-1 w-[100px]"> Shipment</Button>
                        <div className="w-[30em] self-center">
                            <CustomDialog
                                title="Add Product"
                                description="Add product details below."
                                fields={[
                                    { type: 'text', id: 'name', label: 'Name' },
                                    { type: 'text', id: 'description', label: 'Description' },
                                    { type: 'url', id: 'image', label: 'Image' },
                                    { type: 'number', id: 'price', label: 'Price' },
                                    { type: 'number', id: 'stock', label: 'Stock' },
                                    { type: 'number', id: 'height', label: 'Height' },
                                    { type: 'number', id: 'depth', label: 'Depth' },
                                    { type: 'number', id: 'weight', label: 'Weight' },
                                    { type: 'checkbox', id: 'active', label: 'Active' },
                                ]}
                                onSubmit={addProduct}
                            >
                                <Button className="bg-accent-color-1">Add Product</Button>
                            </CustomDialog>
                        </div>
                    </div>
                    <div className="w-[70%] mx-auto">
                        <DataTable filterValue={filterValue} columns={columns} data={data} />
                    </div>
                </>

            ) : (
                // JSX for non-admin user
                <h1 className="text-4xl text-background-color text-center mt-10">Not Admin</h1>
            )
            }
        </main >
    )


}

export default AdminPage