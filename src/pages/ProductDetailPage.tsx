import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useGetProductById } from "@/services/product/productGet"

function ProductDetailPage() {
    const { id } = useParams()
    const [product, setProduct] = useState<Product>()
    const getProductByIdHook = useGetProductById(id as unknown as number)
    
    useEffect(() => {
        if(!getProductByIdHook.isLoading)
            setProduct(getProductByIdHook.data as Product)
    }, [getProductByIdHook.isLoading])

    return (
        <main className="bg-primary-color h-auto flex justify-center items-center ">
            <div className="bg-background-color w-full max-w-[70rem] h-auto flex flex-col md:flex-row items-center justify-center rounded-lg text-primary-color p-4 m-10">
                <div className="flex flex-col items-start mb-4 md:mb-0 w-full order-2">
                    <img src={product?.image} alt={product?.name} className="object-cover max-w-[40rem] w-full h-[20rem]" />
                    <Table className="max-w-[40rem]">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px] text-2xl">Statistics</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="odd:bg-">
                            <TableRow >
                                <TableCell>Weight</TableCell>
                                <TableCell>10 kg</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Height</TableCell>
                                <TableCell>10 cm</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Width</TableCell>
                                <TableCell>20 cm</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <div className="flex flex-col justify-between items-center max-w-md m-10">
                    <div className="text-center mb-20">
                        <h1 className="text-2xl mb-2 font-bold">{product?.name}</h1>
                        <p className="">{product?.description}</p>
                    </div>
                    <div className="flex gap-10 w-full mt-10 text-background-color">
                        <Button className="bg-accent-color-1 w-full font-bold" > Add to cart</Button>
                        <Button className="bg-error-color w-full font-bold" > Buy Now</Button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProductDetailPage