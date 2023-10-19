import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import CustomPopOver from "./CustomPopOver"
import { useEffect } from "react"




const formSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email.",
    }),
    destination: z.string().min(3, {
        message: "Destination must be at least 3 characters.",
    }),
    billingAddress: z.string().min(3, {
        message: "Billing Address must be at least 3 characters.",
    }),
    city: z.string().min(3, {
        message: "City must be at least 3 characters.",
    }),
    country: z.string().min(2, {
        message: "Select country",
    }).optional(),
    postalCode: z.string().min(4, {
        message: "Please enter a valid postal code.",
    }),
    phoneNumber: z.string().regex(/^\d{8,}$/, {
        message: "Please enter a valid phone number.",
    }),
    deliveryInstruction: z.string().min(3, {
        message: "Delivery Instruction must be at least 3 characters.",
    }).optional(),
})
interface Props {
    country: Country[],
    setShippingCost: React.Dispatch<React.SetStateAction<number>>
    onFormSubmit: (data: any) => void
    user?: any
}
function CustomCheckoutForm(props: Props) {


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            destination: "",
            billingAddress: "",
            city: "",
            country: "",
            postalCode: "",
            phoneNumber: "",
            deliveryInstruction: "",
        },
    })
    useEffect(() => {
        const c = props.country.filter(c => c.shortName === form.getValues("country"))
        if (c.length == 1) {
            props.setShippingCost(c[0].shippingCost)
        }

    }, [form.watch("country")])

    //TODO lægg tel felt
    useEffect(() => {
        const putUserData = async () => {
            const userData = await props.user
            form.setValue("email", userData.email)
        }
        if (props.user) putUserData()
    }, [props.user])

    function onSubmit(data: z.infer<typeof formSchema>) {
        props.onFormSubmit(data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md w-full flex flex-col gap-5 p-10 rounded-lg">
                <h1 className='text-primary-color text-center text-2xl font-bold'>Shipping Details</h1>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className='text-primary-color'>
                            <FormControl>
                                <Input placeholder="Email" {...field} />
                            </FormControl>
                            <FormMessage className='text-error-color' />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="destination"
                    render={({ field }) => (
                        <FormItem className='text-primary-color'>
                            <FormControl>
                                <Input placeholder="Destination" {...field} />
                            </FormControl>
                            <FormMessage className='text-error-color' />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="billingAddress"
                    render={({ field }) => (
                        <FormItem className='text-primary-color'>
                            <FormControl>
                                <Input placeholder="Billing Adress" {...field} />
                            </FormControl>
                            <FormMessage className='text-error-color' />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                        <FormItem className='text-primary-color w-full'>
                            <FormControl>
                                <Input placeholder="City" {...field} />
                            </FormControl>
                            <FormMessage className='text-error-color' />
                        </FormItem>
                    )}
                />
                <div className="flex w-full gap-5">
                    <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                            <FormItem className="flex flex-col text-primary-color">
                                <CustomPopOver field={field} form={form} country={props.country} />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="postalCode"
                        render={({ field }) => (
                            <FormItem className='text-primary-color w-full'>
                                <FormControl>
                                    <Input placeholder="PostalCode" {...field} />
                                </FormControl>
                                <FormMessage className='text-error-color' />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                        <FormItem className='text-primary-color'>
                            <FormControl>
                                <Input placeholder="PhoneNumber" {...field} />
                            </FormControl>
                            <FormMessage className='text-error-color' />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="deliveryInstruction"
                    render={({ field }) => (
                        <FormItem className='text-primary-color'>
                            <FormControl>
                                <Input placeholder="Delivery Instructions" {...field} />
                            </FormControl>
                            <FormMessage className='text-error-color' />
                        </FormItem>
                    )}
                />
                <Button className='bg-accent-color-1 w-full hover:bg-accent-color-1-focus hover:animate-pop-up' type="submit">Continue to Payment</Button>
            </form>
        </Form>
    )
}

export default CustomCheckoutForm