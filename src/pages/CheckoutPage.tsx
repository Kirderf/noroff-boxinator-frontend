import CustomCheckoutForm from '@/components/customComponents/checkoutForm/CustomCheckoutForm'
import ProductCartCard from '@/components/customComponents/productCartCard/ProductCartCard';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';


const products: Product[] = [
    {
        id: 1,
        name: "Product A",
        price: 29.99,
        description: "This is a wonderful product that solves all your problems.",
        imageUrl: "https://via.placeholder.com/150",
        weight: 1.2,
        height: 10,
        width: 5
    },
    {
        id: 2,
        name: "Product B",
        price: 19.99,
        description: "An amazing product at an unbeatable price.",
        imageUrl: "https://via.placeholder.com/150",
        weight: 0.8,
        height: 8,
        width: 4
    },
    {
        id: 3,
        name: "Product C",
        price: 39.99,
        description: "The premium product in our lineup, for discerning customers.",
        imageUrl: "https://via.placeholder.com/150",
        weight: 1.5,
        height: 12,
        width: 6
    },
];


const country = [
    {
        id: 1,
        fullName: "United States",
        shortName: "US",
        shippingCost: 10,
    },
    {
        id: 2,
        fullName: "Canada",
        shortName: "CA",
        shippingCost: 20,
    },
    {
        id: 3,
        fullName: "United Kingdom",
        shortName: "UK",
        shippingCost: 30,
    }
]




function checkoutPage() {

    function handleValue(value: string) {
        console.log(value);
    }

    return (
        <main className='min-h-screen flex justify-center items-center bg-background-color'>
            <div className='border border-primary-color p-10 flex justify-center md:flex-nowrap flex-wrap'>
                <CustomCheckoutForm onValueChange={handleValue} country={country} />
                <div className='flex flex-col gap-5 p-20 w-full items-start'>
                    {
                        products.map((product, index) => (
                            <ProductCartCard key={index} {...product} />
                        ))
                    }
                    <Separator className='bg-primary-color opacity-20' />
                    <div className='text-primary-color flex flex-col gap-2 w-full'>
                        <div className='flex justify-between'>
                            <h1>Subtotal</h1>
                            <p className='font-bold'>
                                {
                                    new Intl.NumberFormat('NO', {
                                        style: 'currency',
                                        currency: 'NOK',
                                    }).format(products.reduce((a, b) => a + b.price, 0))
                                }
                            </p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Shipping</h1>
                            <p className='font-bold'>

                            </p>
                        </div>

                    </div>
                    <Separator className='bg-primary-color opacity-20' />
                    <div className='flex text-primary-color'>
                        <h1 className=' font-bold'>Total</h1>
                        <p className='font-bold'>{ }</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default checkoutPage