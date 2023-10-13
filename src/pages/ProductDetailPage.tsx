import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useGetProductById } from "@/services/product/productGet"
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/chartSlice';

function ProductDetailPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams()
    const [product, setProduct] = useState<Product>()
    const getProductByIdHook = useGetProductById(id as unknown as number)

    useEffect(() => {
        if (!getProductByIdHook.isLoading)
            setProduct(getProductByIdHook.data as Product)
    }, [getProductByIdHook.isLoading])
    const pdesEx = `:Contents:
    Exploration gear for the rugged adventurer, including a thermos, pocket knife, compass, warm gloves, and a guidebook to Arctic wildlife.
   
   :Surprise Element: 
   A collection of stunning Northern Lights photographs or a video message from a Scandinavian adventurer.`
    return (
        <main className="bg-primary-color flex justify-center w-full items-center h-auto">
            <div className="bg-background-color max-w-[70rem] w-fit h-auto flex items-center rounded-lg text-primary-color p-4 m-10 flex-wrap justify-center">
                <div className="flex items-start mb-4 md:mb-0 w-full order-2 max-w-[30rem] flex-wrap">
                    <img src={product?.image} alt={product?.name} className="object-cover max-w-[40rem] w-full min-w-[15rem] h-[20rem]" />
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
                <div className="flex flex-col justify-between items-center max-w-[25rem] m-10  ">
                    <div className="text-center mb-20">
                        <h1 className="text-2xl mb-2 font-bold">{product?.name}</h1>
                        <p className="">{pdesEx.split(":").map((word, index) => {
                            console.log(word)
                            if (word == "Contents" || word == "Surprise Element") {
                                return <span key={index} className=" text-green-color text-lg"><br />{word}:<br /></span>
                            } else {
                                return word + " "
                            }

                        })}</p>
                    </div>
                    <div className="flex gap-10 w-full mt-10 text-background-color">
                        <Button className="bg-accent-color-1 w-full font-bold" onClick={() => {
                            dispatch(addToCart({
                                product
                            }))
                        }} > Add to cart</Button>
                        <Button className="bg-error-color w-full font-bold" onClick={() => {
                            dispatch(addToCart({
                                product
                            }))
                            navigate("/checkout")
                        }} > Buy Now</Button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProductDetailPage