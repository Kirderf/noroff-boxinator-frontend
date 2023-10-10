import { useQuery } from "@tanstack/react-query";


const fetchAllShipments = async () => {
    return await fetch("https://boxinator2.azurewebsites.net/api/v1/shipment")
    .then(data => data.json())
}
const fetchShipmentById = async (id: number) => {
    return await fetch("https://boxinator2.azurewebsites.net/api/v1/shipment/"+id)
    .then(data => data.json())
}


export const useGetAllShipments = () => {
    return useQuery({
        queryKey: ["getAllShipments"], 
        queryFn: fetchAllShipments
    })
}
export const useGetShipmentById = (id: number) => {
    return useQuery(
        ["getShipmentById", id], 
        () => fetchShipmentById(id)
    )
} 