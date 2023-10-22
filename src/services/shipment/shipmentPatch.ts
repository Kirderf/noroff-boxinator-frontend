/** @format */
import { api } from "../config";
export async function updateShipment(
  token?: string,
  shipment?: Shipment,
  shipmentValues?: Record<string, string>
) {
  try {
    const data = {
      id: shipment?.id,
      email: shipmentValues?.email,
      billingAddress: shipmentValues?.billingAddress,
      deliveryInstruction: shipmentValues?.deliveryInstruction,
      shippingAddress: shipmentValues?.shippingAddress,
      countries: shipmentValues?.countries,
      city: shipmentValues?.city,
      phoneNumber: shipmentValues?.phoneNumber,
      postalCode: shipmentValues?.postalCode,
      status: shipmentValues?.status,
      timestamp: shipment?.timestamp,
      gift: shipment?.gift,
      user: shipment?.user,
    //  shipmentProducts: shipment?.shipmentProducts,
    }
    console.log(data)

    const response = await fetch(
      api + "shipment/" + shipmentId + "/" + userId,
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: "bearer " + token,
        },
        body: JSON.stringify(data),
      }
    );
    if (response.status === 401) {
      throw new Error("Unauthorized");
    }
    if (!response.ok) {
      throw new Error("Failed to update Shipment");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
