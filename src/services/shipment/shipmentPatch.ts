/** @format */

//TODO: Fix this
export default async function updateShipment(
  token?: string,
  shipment?: Shipment,
  shipmentValues?: Record<string, string>
) {
  try {
    console.log({
      id: shipment?.id,
      email: shipment?.email,
      billingAddress: shipmentValues?.billingAddress,
      deliveryInstruction: shipmentValues?.deliveryInstruction,
      shippingAddress: shipmentValues?.shippingAddress,
      countries: shipment?.countries,
      city: shipment?.city,
      phoneNumber: shipmentValues?.phoneNumber,
      postalCode: shipment?.postalCode,
      status: shipment?.status,
      timestamp: shipment?.timestamp,
      gift: shipment?.gift,
      user: shipment?.user,
      shipmentProducts: shipment?.shipmentProducts,
    });
    const response = await fetch(
      "https://boxinator2.azurewebsites.net/api/v1/shipment",
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: "bearer " + token,
        },
        body: JSON.stringify({
          id: shipment?.id,
          email: shipment?.email,
          billingAddress: shipmentValues?.billingAddress,
          deliveryInstruction: shipmentValues?.deliveryInstruction,
          shippingAddress: shipmentValues?.shippingAddress,
          countries: shipment?.countries,
          city: shipment?.city,
          phoneNumber: shipmentValues?.phoneNumber,
          postalCode: shipment?.postalCode,
          status: "ORDER_PROCESSING",
          timestamp: shipment?.timestamp,
          gift: shipment?.gift,
          user: shipment?.user,
          shipmentProducts: shipment?.shipmentProducts,
        }),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to update Shipment");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
