import CustomDialog from "@/components/customComponents/CustomDialogForm/CustomDialogForm";
import { CustomTable } from "@/components/customComponents/table/CustomTable";
import { KeyCloakContext } from "@/context/KeyCloakContext";
import { useContext, useEffect, useState } from "react";
import { KeycloakProfile } from "keycloak-js";
import {
  useGetAllGuestShipmentsByUserId,
  useGetShipmentsForUser,
} from "@/services/shipment/shipmentGet";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Accordion } from "@/components/ui/accordion";
import { updateShipmentByUser } from "@/services/shipment/shipmentPatch";
import ShipmentClaimCard from "@/components/customComponents/shipmentClaim/ShipmentClaimCard";
import { updateUser } from "@/services/user/userPatch";

function ProfilePage() {
  const keycloak = useContext(KeyCloakContext);
  const [shipment, setShipment] = useState<Shipment[]>([]);
  const [user, setUser] = useState<KeycloakProfile | undefined>(undefined);
  const navigate = useNavigate();

  const [unclaimedShipments, setUnclaimedShipments] = useState<
    UnclaimedShipment[]
  >([]);

  const shipmentByUserHook = useGetShipmentsForUser(
    user?.id ?? "error",
    true,
    keycloak.keycloak?.token ?? ""
  );

  const guestShipmentByUserIdHook = useGetAllGuestShipmentsByUserId(
    keycloak.keycloak?.token ?? "",
    user?.id ?? ""
  );

  function handleSaveShipmentToUser(shipmentId: number) {
    updateShipmentByUser(
      keycloak.keycloak?.token ?? "",
      shipmentId,
      user?.id ?? ""
    ).then((res) => {
      window.location.reload();
      console.log(res);
    });
  }

  function handleEditUser(values: Record<string, string>) {
    if (values.address === "") {
      window.location.reload();
    }
    updateUser(keycloak.keycloak?.token!, user!, values).then((res) => {
      window.location.reload();
      console.log(res);
    });
  }

  useEffect(() => {
    keycloak.keycloak?.loadUserProfile().then((profile) => {
      setUser(profile);
    });
    if (!shipmentByUserHook.isLoading) {
      setShipment(shipmentByUserHook.data as Shipment[]);
    }

    if (!guestShipmentByUserIdHook.isLoading) {
      setUnclaimedShipments(
        guestShipmentByUserIdHook.data as UnclaimedShipment[]
      );
    }
  }, [shipmentByUserHook.data, guestShipmentByUserIdHook.data]);

  return (
    <div>
      {keycloak.keycloak && keycloak.keycloak?.authenticated && (
        <main className="flex flex-col justify-start items-center pt-20 text-background-color bg-primary-color min-h-screen">
          <div className="min-w-[10rem] flex flex-col items-center justify-center">
            <img className="rounded-full" src="./images/freddy.png" alt="" />
            <h1 className="my-6 font-bold text-2xl">
              {user?.firstName + " " + user?.lastName}
            </h1>
            <CustomDialog
              title="Edit User"
              description="Edit your User details below."
              fields={[
                {
                  type: "text",
                  id: "address",
                  label: "Address",
                  defaultValue: "",
                },
              ]}
              onSubmit={handleEditUser}
            >
              <Button variant="outline">Edit Profile</Button>
            </CustomDialog>
            <Button
              onClick={() => keycloak.keycloak?.logout()}
              className="bg-error-color w-full mt-5"
            >
              Logout
            </Button>
            {keycloak.keycloak?.hasRealmRole("ADMIN") && (
              <Button
                onClick={() => navigate("/admin")}
                className="bg-error-color w-full mt-5"
              >
                Admin
              </Button>
            )}
          </div>
          <div className="w-[70%] mx-auto">
            {shipment.length === 0 ? (
              <div></div>
            ) : (
              <CustomTable shipments={shipment} />
            )}
          </div>
          <div className="w-[70%] mx-auto">
            {unclaimedShipments.length === 0 ? (
              <div></div>
            ) : (
              unclaimedShipments.map((shipment, index) => (
                <Accordion
                  key={index}
                  type="single"
                  collapsible
                  className="w-full"
                >
                  <ShipmentClaimCard
                    shipment={shipment}
                    handleSaveShipmentToUser={handleSaveShipmentToUser}
                  />
                </Accordion>
              ))
            )}
          </div>
        </main>
      )}
    </div>
  );
}

export default ProfilePage;
