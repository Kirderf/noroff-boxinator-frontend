/** @format */
import { api } from "../config";
export async function updateShipment(
  token?: string,
  shipment?: Shipment,
  shipmentValues?: Record<string, string>
) {
  try {
    const response = await fetch(api + "shipment", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: "bearer " + token,
      },
      body: JSON.stringify({
        id: shipment?.id,
        email: shipmentValues?.email,
        billingAddress: shipmentValues?.billingAddress,
        deliveryInstruction: shipmentValues?.deliveryInstruction,
        shippingAddress: shipmentValues?.shippingAddress,
        countries: shipmentValues?.countries,
        city: shipmentValues?.city,
        phoneNumber: shipmentValues?.phoneNumber,
        postalCode: shipmentValues?.postalCode,
        status: shipment?.status,
        timestamp: shipment?.timestamp,
        gift: shipment?.gift,
        user: shipment?.user,
        shipmentProducts: shipment?.shipmentProducts,
      }),
    });
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

export async function updateShipmentByUser(
  token?: string,
  shipmentId?: number,
  userId?: string
) {
  try {
    const response = await fetch(
      api + "shipment/" + shipmentId + "/" + userId,
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: "bearer " + token,
        },
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
