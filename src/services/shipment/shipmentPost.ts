import { api } from "../config";

export const shipmentPostWithUser = async (
  shipment: ShipmentPost
): Promise<Response> => {
  return await fetch(api + "shipment", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      //  authorization: "bearer " + token,
    },
    body: JSON.stringify(shipment),
  });
};
