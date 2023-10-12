import CustomCheckoutForm from '@/components/customComponents/checkoutForm/CustomCheckoutForm'
import ProductCartCard from '@/components/customComponents/productCartCard/ProductCartCard';
import { Separator } from '@/components/ui/separator';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { useGetAllCountries } from '@/services/countries/countriesGet';


function checkoutPage() {
    const cart = useSelector((state: { product: Product, quantity: number }[]) => state)
    const [shippingCost, setShippingCost] = useState(0);

    const [countries, setCountries] = useState<Country[]>([])
    const getAllCountriesHook = useGetAllCountries()

    useEffect(() => {
        if (!getAllCountriesHook.isLoading)
            setCountries(getAllCountriesHook.data as Country[])
    }, [getAllCountriesHook.data])


    return (
        <main className=' flex justify-center items-center bg-background-color'>
            <div className=' p-10 flex justify-center md:flex-nowrap flex-wrap'>
                <CustomCheckoutForm country={countries} setShippingCost={setShippingCost} />
                <div className='flex flex-col gap-5 p-20 w-full items-start'>
                    {
                        cart.map((item, index) => (
                            <div key={index} className='w-full'>
                                <ProductCartCard productWithCount={item} />
                            </div>
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
                                    }).format(cart.reduce((a, b) => a + b.product.price * b.quantity, 0))
                                }
                            </p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Shipping</h1>
                            <p className='font-bold'>
                                {
                                    new Intl.NumberFormat('NO', {
                                        style: 'currency',
                                        currency: 'NOK',
                                    }).format(shippingCost)
                                }
                            </p>
                        </div>

                    </div>
                    <Separator className='bg-primary-color opacity-20' />
                    <div className='flex text-primary-color justify-between w-full'>
                        <h1 className='font-bold'>Total</h1>
                        <p className='font-bold'>
                            {
                                new Intl.NumberFormat('NO', {
                                    style: 'currency',
                                    currency: 'NOK',
                                }).format(cart.reduce((a, b) => a + b.product.price * b.quantity, shippingCost))
                            }
                        </p>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default checkoutPage