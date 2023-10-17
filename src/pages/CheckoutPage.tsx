import CustomCheckoutForm from '@/components/customComponents/checkoutForm/CustomCheckoutForm'
import ProductCartCard from '@/components/customComponents/productCartCard/ProductCartCard';
import { Separator } from '@/components/ui/separator';
import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { useGetAllCountries } from '@/services/countries/countriesGet';
import { KeyCloakContext } from '@/context/KeyCloakContext';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

function checkoutPage() {
    const cart = useSelector((state: { product: Product, quantity: number }[]) => state)
    const [shippingCost, setShippingCost] = useState(0);

    const keycloak = useContext(KeyCloakContext);
    const [loggedIn, setLoggedIn] = useState<boolean>();
    useEffect(() => {
        setLoggedIn(keycloak.keycloak?.authenticated)
        console.log(loggedIn)
    }, [keycloak.keycloak])
    const [guest, setGuest] = useState<boolean>(false)

    const [countries, setCountries] = useState<Country[]>([])
    const getAllCountriesHook = useGetAllCountries()

    useEffect(() => {
        if (!getAllCountriesHook.isLoading)
            setCountries(getAllCountriesHook.data as Country[])
    }, [getAllCountriesHook.data])
    const onFormSubmit = (data: any) => {
        console.log(data)

    }

    return (
        <main className=' flex justify-center items-center bg-background-color'>
            {keycloak.keycloak?.authenticated == undefined ?
                <div></div>
                : <>
                    {guest || keycloak.keycloak?.authenticated
                        ?
                        <div className=' p-10 flex justify-center md:flex-nowrap flex-wrap'>
                            {guest ?
                                <CustomCheckoutForm country={countries} setShippingCost={setShippingCost} onFormSubmit={onFormSubmit} />
                                :
                                <CustomCheckoutForm country={countries} setShippingCost={setShippingCost} onFormSubmit={onFormSubmit} user={keycloak.keycloak.loadUserProfile()} />
                            }

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
                        :
                        <AlertDialog open={!(keycloak.keycloak?.authenticated || guest)}>
                            <AlertDialogContent className=' bg-primary-color'>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Welcome to Checkout!</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        Login to your account for a faster, personalized shopping experience, and to track your orders.
                                        Or, continue as a guest to quickly complete your purchase without creating an account.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel onClick={() => setGuest(true)}>Continue as Guest</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => keycloak.keycloak?.login()}>Login</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    }
                </>
            }
        </main >
    )
}

export default checkoutPage