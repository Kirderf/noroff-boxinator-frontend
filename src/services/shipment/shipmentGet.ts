/** @format */

import { useQuery } from "@tanstack/react-query";

let fullShipmentParam = "";

async function fetchAllShipments(token?: string) {
  try {
    const response = await fetch(
      "https://boxinator2.azurewebsites.net/api/v1/shipment" +
        fullShipmentParam,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: "bearer " + token,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch Shipments");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

const fetchShipmentById = async (id: number) => {
  return await fetch(
    "https://boxinator2.azurewebsites.net/api/v1/shipment/" +
      id +
      fullShipmentParam
  ).then((data) => data.json());
};

async function fetchShipmentsFromUser(userId: string, token?: string) {
  try {
    const response = await fetch(
      "https://boxinator2.azurewebsites.net/api/v1/shipment/" +
        userId +
        fullShipmentParam,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: "bearer " + token,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch Shipments");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

export const useGetAllShipment = (
  fullShipment?: boolean,
  token?: string,
  enabled = false
) => {
  if (fullShipment) fullShipmentParam = "?fullShipment=true";
  return useQuery({
    queryKey: ["getAllShipment"],
    queryFn: () => fetchAllShipments(token as string),
    enabled: enabled,
  });
};

export const useGetShipmenttById = (id: number, fullShipment?: boolean) => {
  if (fullShipment) fullShipmentParam = "?fullShipment=true";
  return useQuery(["getShipmentById", id], () => fetchShipmentById(id));
};

export const useGetShipmentsForUser = (
  userId: string,
  fullShipment?: boolean,
  token?: string
) => {
  if (fullShipment) fullShipmentParam = "&fullShipment=true";
  return useQuery(["getShipmentsFromUser", userId], () =>
    fetchShipmentsFromUser(userId, token as string)
  );
};
