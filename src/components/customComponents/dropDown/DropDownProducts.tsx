import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeAllItems } from '../../../redux/chartSlice';
import { Badge } from "@/components/ui/badge";



const DropDownProducts = () => {
    const cart = useSelector((state: { product: Product, quantity: number }[]) => state)
    const dispatch = useDispatch()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="relative hover:animate-pop-up">
                    <img src="/./icons/cart-icon.png" alt="Cart" className="w-10" />
                    <Badge className="absolute -top-2 -right-4 bg-green-color text-background-color">{cart.reduce((acc, val) => acc + val.quantity, 0)}</Badge>
                </div>


            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[27rem] bg-primary-color">
                <DropdownMenuLabel>Products</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {cart?.map((item, index) => (
                        <DropdownMenuItem key={index}>
                            <div className="">
                                <img src={item.product?.image} alt="" className="object-fill w-10 h-10" />
                            </div>
                            <div className="flex flex-row gap-5 items-center justify-between ml-2" >
                                <a className="max-w-[6rem] w-full" href={"/product/" + item.product?.id}>{item.product?.name}</a>
                                <div className="flex flex-row justify-center h-[20px] text-center content-center top-0 right-0 bg-accent-color-1 rounded-xl" onClick={(e: any) => e.preventDefault()}>
                                    <Button className="h-[20px]" onClick={() => {
                                        dispatch(incrementQuantity(
                                            item?.product
                                        ))
                                    }}>+</Button>
                                    {item?.quantity}
                                    <Button className="h-[20px]" onClick={() => {
                                        dispatch(decrementQuantity(
                                            item?.product
                                        ))
                                    }}>-</Button>
                                </div>
                                <div>
                                    Price: {(item.product.price).toFixed(2)}
                                </div>
                                <div>
                                    Price Total: {(item.quantity * item.product.price).toFixed(2)}
                                </div>
                            </div>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
                <div className="flex gap-2 m-2">
                    <Button className=" bg-error-color right-0 w-full" onClick={() => {
                        dispatch(removeAllItems())
                    }}>Empty Cart</Button>
                    <Button disabled={cart.length == 0} className="bg-accent-color-1 right-0 w-full" onClick={() => {
                        location.href = "/checkout"
                    }}>Go to Checkout</Button>
                </div>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DropDownProducts