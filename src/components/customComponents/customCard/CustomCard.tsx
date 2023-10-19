import { useEffect, useState } from 'react'
import { Button } from '../../ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../ui/card'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/redux/chartSlice'
import { useInView } from 'react-intersection-observer';

interface Props {
    product: Product
}

function CustomCard(props: Props) {
    const [product, setProduct] = useState<Product>()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });


    useEffect(() => {
        setProduct(props.product)
    }, [])
    function handleCardClick() {
        navigate(`/product/${props.product.id}`)
    }

    return (
        <div className={`${inView ? 'animate-fade-up' : 'opacity-0'}`}>
            <Card ref={ref} onClick={() => handleCardClick()} className=" hover:animate-pop-up  flex flex-col  justify-between h-auto  max-w-[25rem] w-[20rem]">
                <CardHeader>
                    <img src={props.product.image} className='  object-cover h-[10rem]' alt="Product" />
                </CardHeader>
                <CardContent>
                    <CardTitle>
                        {props.product.name}
                    </CardTitle>
                    <CardDescription className='mt-2'>
                        {props.product.description}

                    </CardDescription>
                    <div className='text-2xl mt-3'>NOK {props.product.price}</div>
                </CardContent>
                <CardFooter className=''>
                    <Button
                        onClick={(event: any) => {
                            event.stopPropagation();
                            dispatch(addToCart(
                                { product }
                            ))
                        }}
                        className="hover:animate-pop-up bg-accent-color-1 z-20 w-full mx-auto hover:bg-accent-color-1-focus" >
                        Add to cart
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default CustomCard