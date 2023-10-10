import CustomDialog from "@/components/customComponents/editUserDialog/CustomDialog"
import { CustomTable } from "@/components/customComponents/table/CustomTable"
import { useEffect, useState } from "react";



async function getOrderByUser(): Promise<Order[]> {
    //fetch data from API order by user
    return [
        {
            id: 1,
            user: 1,
            ordersProducts: [
                {

                    quantity: 2,
                    product: {
                        id: 1,
                        name: "Product 1",
                        description: "This is a product",
                        price: 100,
                        imageUrl: "https://picsum.photos/200",
                        weight: 100,
                        height: 100,
                        width: 100,
                    },
                },
                {
                    quantity: 3,
                    product: {
                        id: 2,
                        name: "Product 2",
                        description: "This is a product",
                        price: 100,
                        imageUrl: "https://picsum.photos/200",
                        weight: 100,
                        height: 100,
                        width: 100,
                    },
                },
            ],
            status: "Pending",
            timeStamp: "2021-10-10",
        },
    ];
}

function ProfilePage() {

    const [orders, setOrders] = useState<Order[]>([])

    async function getOrdersByUser() {
        const orderData = await getOrderByUser();
        setOrders(orderData);
    }

    useEffect(() => {
        getOrdersByUser()
    }, [])


    return (
        <main className='flex flex-col justify-center items-center pt-20 text-background-color bg-primary-color min-h-screen'>
            <div className="min-w-[10rem] flex flex-col items-center justify-center">
                <img className='rounded-full' src="./images/freddy.png" alt="" />
                <h1 className='mt-10 font-bold text-2xl'>Freddy Freddison</h1>
                <CustomDialog />
            </div>

            <div className="w-[70%] mx-auto">
                <CustomTable orders={orders} />
            </div>
        </main>
    )
}

export default ProfilePage