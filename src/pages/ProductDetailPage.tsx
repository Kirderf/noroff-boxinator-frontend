import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


//extract to service file?
async function getSingleProduct(id: number): Promise<Product> {
    //Fetch singleProduct with id and store it in state. Redux?
    const product = {
        id: 1,
        name: "Arctic Adventure Box",
        description: "Exploration gear for the rugged adventurer, including a thermos, pocket knife, compass, warm gloves, and a guidebook to Arctic wildlife.",
        price: 100,
        imageUrl: "../images/productimage.png",
        weight: 100,
        height: 100,
        width: 100,
    }

    return product
}


function ProductDetailPage() {


    const { id } = useParams<{ id: string }>()

    const [product, setProduct] = useState<Product | undefined>()

    async function getProduct() {
        const productData = await getSingleProduct(Number(id))
        setProduct(productData)
    }

    useEffect(() => {
        getProduct()
    }, [])

    console.log(product)
    console.log(id)

    return (
        <main className="bg-primary-color h-auto flex justify-center items-center ">
            <div className="bg-background-color w-full max-w-[70rem] h-auto flex flex-col md:flex-row items-center justify-center rounded-lg text-primary-color p-4 m-10">
                <div className="flex flex-col items-start mb-4 md:mb-0 w-full order-2">
                    <img src={product?.imageUrl} alt={product?.name} className="object-cover max-w-[40rem] w-full h-[20rem]" />
                    <Table className="max-w-[40rem]">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px] text-2xl">Statistics</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="odd:bg-">
                            <TableRow >
                                <TableCell>Weight</TableCell>
                                <TableCell>{product?.weight} kg</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Height</TableCell>
                                <TableCell>{product?.height} cm</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Width</TableCell>
                                <TableCell>{product?.width} cm</TableCell>
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