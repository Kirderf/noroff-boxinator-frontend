/** @format */

import { useQuery } from "@tanstack/react-query";
import { api } from "../config";

const fetchAllProduct = async () => {
  return await fetch(api + "product?active=true").then((data) => data.json());
};

const fetchAllProductAll = async (token?: string) => {
  return await fetch(api + "product", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: "bearer " + token,
    },
  }).then((data) => data.json());
};

const fetchProductById = async (id: number) => {
  return await fetch(api + "product/" + id).then((data) => data.json());
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
  return useQuery({
    queryKey: ["getProductById"],
    queryFn: () => fetchProductById(id),
  });
};
