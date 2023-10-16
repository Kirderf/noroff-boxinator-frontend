/** @format */

import { useQuery } from "@tanstack/react-query";

let fullorderParam = "";

const fetchAllOrders = async () => {
  return await fetch(
    "https://boxinator2.azurewebsites.net/api/v1/order" + fullorderParam
  ).then((data) => data.json());
};

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

export const useGetAllOrder = (fullorder?: boolean) => {
  if (fullorder) fullorderParam = "?fullorder=true";
  return useQuery({
    queryKey: ["getAllOrders"],
    queryFn: fetchAllOrders,
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
