import CustomDialog from "@/components/customComponents/CustomDialogForm/CustomDialogForm"
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

    const shipmentByUserHook = useGetShipmentsForUser(user?.id ?? "error", true, keycloak.keycloak?.token ?? '')

    useEffect(() => {
        keycloak.keycloak?.loadUserProfile().then((profile) => {
            setUser(profile)
        })
        if (!shipmentByUserHook.isLoading) {
            setShipment(shipmentByUserHook.data as Shipment[])
        }
    }, [shipmentByUserHook.data])


    function handleSave(values: Record<string, string>) {
        console.log(values)
    }

    return (

        <div>
            {keycloak.keycloak && keycloak.keycloak?.authenticated && (
                <main className='flex flex-col justify-start items-center pt-20 text-background-color bg-primary-color min-h-screen'>
                    <div className="min-w-[10rem] flex flex-col items-center justify-center">
                        <img className='rounded-full' src="./images/freddy.png" alt="" />
                        <h1 className='mt-10 font-bold text-2xl'>{user?.username}</h1>
                        <CustomDialog
                            title="Edit User"
                            description="Edit your User details below."
                            fields={[
                                { type: 'text', id: 'name', label: 'Name', defaultValue: keycloak.keycloak.profile?.username as string },
                                { type: 'text', id: 'email', label: 'Email', defaultValue: keycloak.keycloak.profile?.email as string },
                                { type: 'text', id: 'address', label: 'Address', defaultValue: '' },
                            ]}
                            onSubmit={handleSave}
                        >
                            <Button variant="outline">Edit Profile</Button>
                        </CustomDialog>
                        <Button onClick={() => keycloak.keycloak?.logout()} className="bg-error-color w-full mt-5">Logout</Button>
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