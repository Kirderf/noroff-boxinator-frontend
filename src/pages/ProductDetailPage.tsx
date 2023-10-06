import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

//extract to service file?
async function getSingleProduct(id: number): Promise<Product> {
    //Fetch singleProduct with id and store it in state. Redux?
    const product = {
        id: 1,
        name: "Product 1",
        description: "This is a product",
        price: 100,
        imageUrl: "https://picsum.photos/200",
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
        <div>{product?.name}</div>
    )
}

export default ProductDetailPage