import { useEffect, useState } from "react"
import { productColumns, orderColumns, userColumns } from "../components/customComponents/adminTable/columns"
import { DataTable } from "../components/customComponents/adminTable/data-table"
import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { useGetAllProducts } from "@/services/product/productGet"
import { useGetAllOrder } from "@/services/order/orderGet"
import { useGetAllUsers } from "@/services/user/userGet"


type DataItem = Product | Order | User

type ColumnItem = ColumnDef<DataItem>


function AdminPage() {

    const [data, setData] = useState<DataItem[]>([])
    const [columns, setColumns] = useState<ColumnItem[]>(productColumns as ColumnItem[])

    const getAllProductsHook = useGetAllProducts()
    const getAllUsersHook = useGetAllUsers()
    const getAllOrderHook = useGetAllOrder()

    function getProducts() {
        if (!getAllProductsHook.isLoading) {
            setData(getAllProductsHook.data as Product[])
            setColumns(productColumns as ColumnItem[])
        }
    }

    function getUsers() {
        if (!getAllUsersHook.isLoading) {
            setData(getAllUsersHook.data as User[])
            setColumns(userColumns as ColumnItem[])
        }
    }

    function getOrder() {
        if (!getAllOrderHook.isLoading) {
            setData(getAllOrderHook.data as Order[])
            setColumns(orderColumns as ColumnItem[])
        }
    }


    return (
        <main className="min-h-screen bg-primary-color flex flex-col gap-10 items-center justify-center">
            <h1 className="text-4xl text-background-color text-center mt-10">Welcome Admin!</h1>
            <div className="flex md:flex-nowrap flex-wrap gap-10 max-w-md w-[50%] mx-auto">
                <Button onClick={() => getProducts()} className="bg-accent-color-1 w-full"> Products</Button>
                <Button onClick={() => getUsers()} className="bg-accent-color-1 w-full"> User</Button>
                <Button onClick={() => getOrder()} className="bg-accent-color-1 w-full"> Order</Button>
            </div>
            <div className="w-[70%] mx-auto">
                <DataTable columns={columns} data={data} />
            </div>
        </main>
    )
}

export default AdminPage