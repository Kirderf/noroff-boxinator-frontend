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
import { decrementQuantity, incrementQuantity } from '../../../redux/chartSlice';

const DropDownProducts = () => {
    const cart = useSelector((state: { product: Product, quantity: number }[]) => state)
    const dispatch = useDispatch()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <img src="./icons/cart-icon.png" alt="Cart" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-primary-color">
                <DropdownMenuLabel>Products</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {cart?.map((item) => (
                        <DropdownMenuItem key={item.product.id}>
                            <div className="flex flex-row gap-10" >
                                <a href={"/product/" + item.product.id}>{item.product.name}</a>
                                <div className="flex flex-row justify-center text-center content-center top-0 right-0" onClick={(e: any) => e.preventDefault()}>
                                    <Button className="py-0 pb-5" onClick={() => {
                                        dispatch(incrementQuantity(
                                            item.product
                                        ))
                                    }}>+</Button>
                                    <p>{item.quantity}</p>
                                    <Button className="py-0 pb-5" onClick={() => {
                                        dispatch(decrementQuantity(
                                            item.product
                                        ))
                                    }}>-</Button>
                                </div>
                            </div>
                        </DropdownMenuItem>

                    ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DropDownProducts