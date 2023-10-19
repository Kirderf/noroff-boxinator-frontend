/** @format */

import { useQuery } from "@tanstack/react-query";

const fetchAllProduct = async () => {
  return await fetch(
    "https://boxinator2.azurewebsites.net/api/v1/product?active=true"
  ).then((data) => data.json());
};

const fetchAllProductAll = async (token?: string) => {
  return await fetch("https://boxinator2.azurewebsites.net/api/v1/product", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: "bearer " + token,
    },
  }).then((data) => data.json());
};

const fetchProductById = async (id: number) => {
  return await fetch(
    "https://boxinator2.azurewebsites.net/api/v1/product/" + id
  ).then((data) => data.json());
};

export const useGetAllProductAll = (token?: string) => {
  return useQuery({
    queryKey: ["getAllProductAll"],
    queryFn: () => fetchAllProductAll(token),
  });
};

export const useGetAllProducts = () => {
  return useQuery({
    queryKey: ["getAllProduct"],
    queryFn: fetchAllProduct,
  });
};

export const useGetProductById = (id: number) => {
  return useQuery(["getProductById", id], () => fetchProductById(id));
};
