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
    return (
        <main className="bg-primary-color flex justify-center w-full items-center h-auto">
            <div className="bg-background-color max-w-[70rem] min-[350px]:w-[100%] lg:rounded-xl  w-fit h-auto flex items-center rounded-none text-primary-color p-4 flex-wrap-reverse gap-3 justify-center">
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
                                <TableCell>{product?.weight}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Height</TableCell>
                                <TableCell>{product?.height}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Width</TableCell>
                                <TableCell>{product?.width}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Depth</TableCell>
                                <TableCell>{product?.depth}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <div className="flex flex-col justify-between items-center md:max-w-[25em] md:m-10">
                    <div className="text-center mb-20">
                        <h1 className="text-2xl mb-2 font-bold text-green-color">{product?.name}</h1>
                        {/* <p className="">{pdesEx.split(":").map((word, index) => {
                            if (word == "Contents" || word == "Surprise Element") {
                                return <span key={index} className=" text-green-color text-lg"><br />{word}:<br /></span>
                            } else {
                                return word + " "
                            }

                        })}</p> */}
                        {product?.description}
                    </div>
                    <div className="flex gap-10 w-full mt-10 text-background-color">
                        <Button className="hover:animate-pop-up bg-accent-color-1 hover:bg-accent-color-1-focus w-full font-bold" onClick={() => {
                            dispatch(addToCart({
                                product
                            }))
                        }} > Add to cart</Button>
                        <Button className="hover:animate-pop-up bg-error-color hover:bg-error-color-focus w-full font-bold" onClick={() => {
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