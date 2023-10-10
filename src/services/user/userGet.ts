import { useQuery } from "@tanstack/react-query";


const fetchAllUsers = async () => {
    return await fetch("https://boxinator2.azurewebsites.net/api/v1/user")
    .then(data => data.json())
}
const fetchUserById = async (id: number) => {
    return await fetch("https://boxinator2.azurewebsites.net/api/v1/user/"+id)
    .then(data => data.json())
}


export const useGetAllUsers = () => {
    return useQuery({
        queryKey: ["getAllUsers"], 
        queryFn: fetchAllUsers
    })
}
export const useGetProductById = (id: number) => {
    return useQuery(
        ["getUserById", id], 
        () => fetchUserById(id)
    )
} 