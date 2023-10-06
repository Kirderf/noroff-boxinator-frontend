
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'

const formSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email.",
    }),
    username: z.string().min(3, {
        message: "Username must be at least 3 characters.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
})

function SignUpPage() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            username: "",
            password: "",
        },
    })

    const { toast } = useToast()

    function onSubmit(data: z.infer<typeof formSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-secondary-color p-4">
                    <code className="text-black">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }

    return (
        <main className='flex items-center justify-center min-h-screen bg-primary-color relative'>
            <Form {...form}>

                <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md w-full flex flex-col gap-5 bg-background-color p-10 rounded-lg">
                    <h1 className='text-primary-color text-center text-2xl font-bold'>Register</h1>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className='text-primary-color'>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage className='text-error-color' />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem className='text-primary-color'>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="Username" {...field} />
                                </FormControl>
                                <FormMessage className='text-error-color' />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem className='text-primary-color'>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="Password" {...field} />
                                </FormControl>
                                <FormMessage className='text-error-color' />
                            </FormItem>
                        )}
                    />
                    <Button className='bg-accent-color-1 w-full' type="submit">Login</Button>
                </form>
            </Form>

            <img className='absolute bottom-20 left-20 w-[20%] -rotate-[30deg]' src="./images/BoxinatorLogo.png" alt="" />
            <img className='absolute top-20 right-20 w-[20%] rotate-[30deg]' src="./images/BoxinatorLogo.png" alt="" />


        </main>
    )
}

export default SignUpPage