import { useQuery } from "@tanstack/react-query";


let fullProductParam = ""

const fetchAllOrders = async () => {
    return await fetch("https://boxinator2.azurewebsites.net/api/v1/order" + fullProductParam)
    .then(data => data.json())
}
const fetchOrderById = async (id: number) => {
    return await fetch("https://boxinator2.azurewebsites.net/api/v1/order/"+ id + fullProductParam)
    .then(data => data.json())
}
const fetchOrdersFromUser = async (userId: number) => {
    return await fetch("https://boxinator2.azurewebsites.net/api/v1/order?userId="+userId + fullProductParam)
    .then(data => data.json())
}

export const useGetAllProducts = (fullProduct?: boolean) => {
    if(fullProduct) fullProductParam = "?fullProduct=true"
    return useQuery({
        queryKey: ["getAllOrders"], 
        queryFn: fetchAllOrders
    })
}
export const useGetOrdertById = (id: number, fullProduct?: boolean) => {
    if(fullProduct) fullProductParam = "?fullProduct=true"
    return useQuery(
        ["getOrderById", id], 
        () => fetchOrderById(id)
    )
}
export const useGetOrdersForUser = (userId: number, fullProduct?: boolean) => {
    if(fullProduct) fullProductParam = "&fullProduct=true"
    return useQuery(
        ["getOrdersFromUser", userId], 
        () => fetchOrdersFromUser(userId)
    )
} 
