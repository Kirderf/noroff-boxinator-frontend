/** @format */

import { useQuery } from "@tanstack/react-query";

let fullorderParam = "";

async function fetchAllOrders(token?: string) {
  try {
    const response = await fetch(
      "https://boxinator2.azurewebsites.net/api/v1/order" + fullorderParam,
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
      throw new Error("Failed to fetch orders");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

const fetchOrderById = async (id: number) => {
  return await fetch(
    "https://boxinator2.azurewebsites.net/api/v1/order/" + id + fullorderParam
  ).then((data) => data.json());
};

const fetchOrdersFromUser = async (userId: number) => {
  return await fetch(
    "https://boxinator2.azurewebsites.net/api/v1/order?userId=" +
      userId +
      fullorderParam
  ).then((data) => data.json());
};

export const useGetAllOrder = (
  fullorder?: boolean,
  token?: string,
  enabled = false
) => {
  if (fullorder) fullorderParam = "?fullorder=true";
  return useQuery({
    queryKey: ["getAllOrder"],
    queryFn: () => fetchAllOrders(token as string),
    enabled: enabled,
  });
};

export const useGetOrdertById = (id: number, fullorder?: boolean) => {
  if (fullorder) fullorderParam = "?fullorder=true";
  return useQuery(["getOrderById", id], () => fetchOrderById(id));
};
export const useGetOrdersForUser = (userId: number, fullorder?: boolean) => {
  if (fullorder) fullorderParam = "&fullorder=true";
  return useQuery(["getOrdersFromUser", userId], () =>
    fetchOrdersFromUser(userId)
  );
};
