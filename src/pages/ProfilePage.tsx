import CustomDialog from "@/components/customComponents/editUserDialog/CustomDialog"
import { CustomTable } from "@/components/customComponents/table/CustomTable"
import useKeyCloak from "@/services/keycloak/keyclokAdapter";
import { useEffect, useState } from "react";




function ProfilePage() {
    const keycloak = useKeyCloak()
    const [orders, setOrders] = useState<Order[]>([])



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