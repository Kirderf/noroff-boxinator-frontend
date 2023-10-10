import { useState } from "react"
import { productColumns, orderColumns, userColumns } from "../components/customComponents/adminTable/columns"
import { DataTable } from "../components/customComponents/adminTable/data-table"
import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"

//extract to service files?
async function getProductData(): Promise<Product[]> {
    // Fetch data from your API here.
    return [
        {
            id: 1,
            name: "Product 1",
            description: "This is a product",
            price: 100,
            imageUrl: "https://picsum.photos/200",
            weight: 100,
            height: 100,
            width: 100,
        },
    ];
}

//extract to service files?
async function getOrderData(): Promise<Order[]> {
    // Fetch data from your API here.
    return [

    ]
}

//extract to service files?
async function getUserData(): Promise<User[]> {
    // Fetch data from your API here.
    return [
        {
            id: 1,
            username: "Håkon",
            email: "haakonfs@hotmail.com",
            roles: "ADMIN",
            address: "Trondheim",
        }
    ]
}

type DataItem = Product | Order | User

type ColumnItem = ColumnDef<DataItem>


function AdminPage() {

    const [data, setData] = useState<DataItem[]>([])
    const [columns, setColumns] = useState<ColumnItem[]>(productColumns as ColumnItem[])

    async function getProducts() {
        const productData = await getProductData();
        setData(productData);
        setColumns(productColumns as ColumnItem[])
    }

    async function getOrder() {
        const orderData = await getOrderData();
        setData(orderData);
        setColumns(orderColumns as ColumnItem[])
    }

    async function getUser() {
        const userData = await getUserData();
        setData(userData);
        setColumns(userColumns as ColumnItem[])
    }




    return (
        <main className="min-h-screen bg-primary-color flex flex-col gap-10 items-center justify-center">
            <h1 className="text-4xl text-background-color text-center mt-10">Welcome Admin!</h1>
            <div className="flex gap-10 max-w-md w-[50%] mx-auto">
                <Button onClick={() => getProducts()} className="bg-accent-color-1 w-full"> Products</Button>
                <Button onClick={() => getUser()} className="bg-accent-color-1 w-full"> User</Button>
                <Button onClick={() => getOrder()} className="bg-accent-color-1 w-full"> Order</Button>
            </div>
            <div className="w-[70%] mx-auto">
                <DataTable columns={columns} data={data} />
            </div>
        </main>
    )
}

export default AdminPage