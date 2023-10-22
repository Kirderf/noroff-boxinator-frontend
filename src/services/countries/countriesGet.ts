import { useQuery } from "@tanstack/react-query";
import { api } from "../config";

const fetchAllCountries = async () => {
  return await fetch(api + "countries").then((data) => data.json());
};
const fetchCountriesById = async (id: number) => {
  return await fetch(api + "countries/" + id).then((data) => data.json());
};

export const useGetAllCountries = () => {
  return useQuery({
    queryKey: ["getAllCountries"],
    queryFn: fetchAllCountries,
  });
};
export const useGetCountriesById = (id: number) => {
  return useQuery({
    queryKey: ["getCountriesById"],
    queryFn: () => fetchCountriesById(id),
  });
};
