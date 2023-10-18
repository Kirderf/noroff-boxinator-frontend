import CustomCheckoutForm from '@/components/customComponents/checkoutForm/CustomCheckoutForm'
import ProductCartCard from '@/components/customComponents/productCartCard/ProductCartCard';
import { Separator } from '@/components/ui/separator';
import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
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
} from "@/components/ui/alert-dialog"
import { shipmentPostWithUser } from '@/services/shipment/shipmentPost';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { removeAllItems } from '@/redux/chartSlice';

function checkoutPage() {
    const cart = useSelector((state: { product: Product, quantity: number }[]) => state)
    const [shippingCost, setShippingCost] = useState(0);
    const navigate = useNavigate()
    const keycloak = useContext(KeyCloakContext);
    const userData = keycloak.keycloak?.loadUserInfo()
    const [loggedIn, setLoggedIn] = useState<boolean>();
    const dispatch = useDispatch()
    useEffect(() => {
        if (loggedIn != undefined)
            setLoggedIn(keycloak.keycloak?.authenticated)
        console.log(loggedIn)
    }, [keycloak.keycloak])

    const [guest, setGuest] = useState<boolean>(false)

    const [countries, setCountries] = useState<Country[]>([])
    const getAllCountriesHook = useGetAllCountries()
    const { toast } = useToast()

    useEffect(() => {
        if (cart.length == 0) {
            navigate("/")
        }
    }, [cart.length])
    useEffect(() => {
        if (!getAllCountriesHook.isLoading)
            setCountries(getAllCountriesHook.data as Country[])
    }, [getAllCountriesHook.data])

    const onFormSubmit = async (data: any) => {
        let productQuantity: { productId: number, quantity: number }[] = []
        cart.map(item => {
            const productId = item.product.id
            const quantity = item.quantity
            productQuantity.push({ productId, quantity })
        })
        const shipment: ShipmentPost = {
            user: undefined,
            shipmentProducts: productQuantity,
            email: data.email,
            billingAddress: data.billingAddress,
            deliveryInstruction: data.deliveryInstruction,
            shippingAddress: data.destination,
            countries: data.country,
            city: data.city,
            phoneNumber: data.phoneNumber,
            postalCode: data.postalCode as number,
            status: "ORDER_PLACED",
            gift: false
        }
        if (keycloak.keycloak?.tokenParsed) {
            const user: any = await userData
            if (userData) {
                shipment.user = user.sub

            }
        }
        shipmentPostWithUser(shipment).then(async (r) => {
            if (!r.ok) {
                toast({
                    variant: "error",
                    title: "Error",
                    description: (
                        <div className="mt-2 w-[340px] rounded-md  p-4">
                            Oops! It seems our magical ordering elves are taking an unexpected nap. ^_^
                        </div>
                    ),
                })
                navigate("/")
            } else {
                toast({
                    variant: "success",
                    title: "Success <3",
                    description: (
                        <div className="mt-2 w-[340px] rounded-md p-4">
                            The shipment was successfully placed, and will soon arrive. ^_^
                        </div>
                    ),
                })
                navigate("/")
                dispatch(removeAllItems())
            }
        })
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