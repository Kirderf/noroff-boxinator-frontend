import CustomDialog from "@/components/customComponents/editUserDialog/CustomDialog"
import { CustomTable } from "@/components/customComponents/table/CustomTable"
import { KeyCloakContext } from "@/context/KeyCloakContext";
import { useContext, useEffect, useState } from "react";
import { KeycloakProfile } from "keycloak-js";
import { useGetShipmentsForUser } from "@/services/shipment/shipmentGet";
import { Button } from "@/components/ui/button";



function ProfilePage() {
    const keycloak = useContext(KeyCloakContext);
    const [shipment, setShipment] = useState<Shipment[]>([])
    const [user, setUser] = useState<KeycloakProfile | undefined>(undefined)

    const shipmentByUserHook = useGetShipmentsForUser(user?.id ?? '', true, keycloak.keycloak?.token ?? '')

    useEffect(() => {
        keycloak.keycloak?.loadUserProfile().then((profile) => {
            setUser(profile)
        })
        if (!shipmentByUserHook.isLoading) {
            setShipment(shipmentByUserHook.data as Shipment[])
        }
    }, [keycloak.keycloak?.authenticated, shipmentByUserHook.data])


    return (
        <div>
            {keycloak.keycloak && keycloak.keycloak?.authenticated && (
                <main className='flex flex-col justify-start items-center pt-20 text-background-color bg-primary-color min-h-screen'>
                    <div className="min-w-[10rem] flex flex-col items-center justify-center gap-2">
                        <img className='rounded-full' src="./images/freddy.png" alt="" />
                        <h1 className='mt-10 font-bold text-2xl'>{user?.username}</h1>
                        <CustomDialog />
                        <Button onClick={() => keycloak.keycloak?.logout()} className="bg-error-color w-full">Logout</Button>
                    </div>
                    <div className="w-[70%] mx-auto">
                        <CustomTable shipments={shipment} />
                    </div>
                </main>
            )}
        </div>
    )
}

export default ProfilePage