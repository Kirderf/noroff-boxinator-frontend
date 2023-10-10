import { useQuery } from "@tanstack/react-query";


const fetchAllProduct = async () => {
    return await fetch("https://boxinator2.azurewebsites.net/api/v1/product")
    .then(data => data.json())
}
const fetchProductById = async (id: number) => {
    return await fetch("https://boxinator2.azurewebsites.net/api/v1/product/"+id)
    .then(data => data.json())
}


export const useGetAllProducts = () => {
    return useQuery({
        queryKey: ["getAllProduct"], 
        queryFn: fetchAllProduct
    })
}
export const useGetProductById = (id: number) => {
    return useQuery(
        ["getProductById", id], 
        () => fetchProductById(id)
    )
} 
