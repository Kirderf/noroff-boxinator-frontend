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
import { useNavigate } from "react-router-dom";


const DropDownProducts = () => {
    const cart = useSelector((state: { product: Product, quantity: number }[]) => state)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <img src="./icons/cart-icon.png" alt="Cart" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[27rem] bg-primary-color">
                <DropdownMenuLabel>Products</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {cart?.map((item) => (
                        <DropdownMenuItem key={item.product.id}>
                            <div className="flex flex-row gap-10" >
                                <a href={"/product/" + item.product.id}>{item.product.name}</a>
                                <div className="flex gap-4 flex-row justify-center text-center content-center top-0 right-0" onClick={(e: any) => e.preventDefault()}>
                                    <p>Quantity:</p>
                                    <div className="flex bg-accent-color-1 gap-2 px-5 rounded-xl">
                                        <Button className="h-5 p-0" onClick={() => {
                                            dispatch(incrementQuantity(
                                                item.product
                                            ))
                                        }}>+</Button>
                                        <p>{item.quantity}</p>
                                        <Button className="h-5 p-0" onClick={() => {
                                            dispatch(decrementQuantity(
                                                item.product
                                            ))
                                        }}>-</Button>
                                    </div>
                                    <p>Price: {(item.product.price * item.quantity).toFixed(2)} NOK</p>
                                </div>
                            </div>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
                <div className="flex justify-between pt-5 px-1">
                    <Button className=" bg-error-color right-0" onClick={() => {
                        dispatch(removeAllItems())
                    }}>Empty Cart</Button>
                    <Button className="bg-accent-color-1 right-0" onClick={() => {
                        location.href = "/checkout"
                    }}>Go to Checkout</Button>
                </div>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DropDownProducts