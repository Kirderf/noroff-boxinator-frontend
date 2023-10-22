/** @format */

import { useQuery } from "@tanstack/react-query";
import { api } from "../config";

async function fetchAllUsers(token: string) {
  try {
    const response = await fetch(api + "/user", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: "bearer " + token,
      },
    });
    if (!response.ok) {
      console.error("Error:", response.statusText);
      throw new Error("Failed to fetch Users");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

const fetchUserById = async (id: number) => {
  return await fetch(api + "/user/" + id).then((data) => data.json());
};

export const useGetAllUsers = (token: string, enabled = false) => {
  return useQuery({
    queryKey: ["getAllUsers"],
    queryFn: () => fetchAllUsers(token as string),
    enabled: enabled,
  });
};
export const useGetProductById = (id: number) => {
  return useQuery({
    queryKey: ["getUserById"],
    queryFn: () => fetchUserById(id),
  });
};
