import CustomDialog from "@/components/customComponents/editUserDialog/CustomDialog"
import { CustomTable } from "@/components/customComponents/table/CustomTable"
import useKeyCloak from "@/services/keycloak/keyclokAdapter";
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
                        image: "https://picsum.photos/200",
                    },
                },
                {
                    quantity: 3,
                    product: {
                        id: 2,
                        name: "Product 2",
                        description: "This is a product",
                        price: 100,
                        image: "https://picsum.photos/200",
                    },
                },
            ],
            status: "Pending",
            timeStamp: "2021-10-10",
        },
    ];
}

function ProfilePage() {
    const keycloak = useKeyCloak()
    const [orders, setOrders] = useState<Order[]>([])

    async function getOrdersByUser() {
        const orderData = await getOrderByUser();
        setOrders(orderData);
    }

    useEffect(() => {
        getOrdersByUser()
    }, [])


    return (
        <div>
            {keycloak && keycloak.authenticated && (
                <main className='flex flex-col justify-center items-center pt-20 text-background-color bg-primary-color min-h-screen'>
                    <div className="min-w-[10rem] flex flex-col items-center justify-center">
                        <img className='rounded-full' src="./images/freddy.png" alt="" />
                        <h1 className='mt-10 font-bold text-2xl'>{ }</h1>
                        <CustomDialog />
                    </div>

                    <div className="w-[70%] mx-auto">
                        <CustomTable orders={orders} />
                    </div>
                </main>
            )}

        </div>
    )
}

export default ProfilePage