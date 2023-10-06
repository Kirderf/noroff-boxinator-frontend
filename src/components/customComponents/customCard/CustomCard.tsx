import { Button } from '../../ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../ui/card'
import { useNavigate } from 'react-router-dom'

function CustomCard(props: Product) {

    const navigate = useNavigate()

    function handleAddToCart() {
        console.log('Added to cart')
    }

    function handleCardClick() {
        navigate(`/product/${props.id}`)
    }

    return (
        <Card onClick={() => handleCardClick()} className='flex flex-col w-full justify-between h-auto shadow-lg hover:scale-105 max-w-[20rem]'>
            <CardHeader>
                <img src={props.imageUrl} className='object-cover h-[10rem]' alt="Product" />
            </CardHeader>
            <CardContent>
                <CardTitle>
                    <h1>{props.name}</h1>
                </CardTitle>
                <CardDescription className='mt-2'>
                    <p>{props.description}</p>

                </CardDescription>
                <h1 className='text-2xl mt-3'>NOK {props.price}</h1>
            </CardContent>
            <CardFooter className=''>
                <Button onClick={() => handleAddToCart()} className="bg-accent-color-1 w-full mx-auto" >
                    Add to cart
                </Button>
            </CardFooter>
        </Card>
    )
}

export default CustomCard