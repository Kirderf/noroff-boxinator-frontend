import { useContext, useEffect, useState } from "react"
import { productColumns, orderColumns, userColumns } from "../components/customComponents/adminTable/columns"
import { DataTable } from "../components/customComponents/adminTable/data-table"
import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { useGetAllProducts } from "@/services/product/productGet"
import { useGetAllShipment } from "@/services/shipment/shipmentGet"
import { useGetAllUsers } from "@/services/user/userGet"
import { KeyCloakContext } from "@/context/KeyCloakContext"



type DataItem = Product | Shipment | User

type ColumnItem = ColumnDef<DataItem>


function AdminPage() {

    const keycloak = useContext(KeyCloakContext);
    const [data, setData] = useState<DataItem[]>([])
    const [columns, setColumns] = useState<ColumnItem[]>(productColumns as ColumnItem[])

    const [fetchUsers, setFetchUsers] = useState(false);
    const [fetchOrders, setFetchOrders] = useState(false);
    const [filterValue, setFilterValue] = useState("");

    const token = keycloak.keycloak?.token || ''

    const getAllProductsHook = useGetAllProducts()
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
                    <div className="flex md:flex-nowrap flex-wrap gap-10 max-w-md w-[50%] mx-auto">
                        <Button onClick={() => getProducts()} className="bg-accent-color-1 w-full"> Products</Button>
                        <Button onClick={() => getUsers()} className="bg-accent-color-1 w-full"> User</Button>
                        <Button onClick={() => getShipment()} className="bg-accent-color-1 w-full"> Shipment</Button>
                    </div>
                    <div className="w-[70%] mx-auto">
                        <DataTable filterValue={filterValue} columns={columns} data={data} />
                    </div>
                </>
            ) : (
                // JSX for non-admin user
                <h1 className="text-4xl text-background-color text-center mt-10">Not Admin</h1>
            )}
        </main>
    )


}

export default AdminPage