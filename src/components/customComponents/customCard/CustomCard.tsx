import { Button } from '../../ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../ui/card'





function handleAddToCart() {
    console.log('Added to cart')
}


function CustomCard(props: Product) {
    return (
        <Card className='flex flex-col w-full justify-between h-auto shadow-lg hover:scale-105 max-w-[20rem]'>
            <CardHeader>
                <img src={props.image} className='object-cover h-[10rem]' alt="Product" />
            </CardHeader>
            <CardContent>
                <CardTitle>
                    {props.name}
                </CardTitle>
                <CardDescription className='mt-2'>
                    {props.description}

                </CardDescription>
                <div className='text-2xl mt-3'>NOK {props.price}</div>
            </CardContent>
            <CardFooter className=''>
                <Button onClick={handleAddToCart} className="bg-accent-color-1 w-full mx-auto" >
                    Add to cart
                </Button>
            </CardFooter>
        </Card>
    )
}

export default CustomCard