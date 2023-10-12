import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity } from '../../../redux/chartSlice';

interface Props {
    productWithCount: { product: Product, quantity: number }
}
function ProductCartCard(props: Props) {
    const dispatch = useDispatch()
    let NOK = new Intl.NumberFormat('NO', {
        style: 'currency',
        currency: 'NOK',
    });

    return (
        <div className='text-primary-color  flex items-center w-full flex-wrap '>
            <div className='flex items-center w-full'>
                <div className="relative">
                    <img src={props.productWithCount.product.image} className='w-full min-w-[5rem] max-w-[5rem] h-20 border rounded-md relative' alt={props.productWithCount.product.name} />
                    <Badge className="absolute -top-2 -right-2 bg-green-color text-background-color">{props.productWithCount.quantity}</Badge>
                </div>
                <div className="flex flex-col w-full">
                    <div className='font-bold flex justify-between'>
                        <p className="pl-2">{props.productWithCount.product.name}</p>
                        <div className="">
                            {NOK.format(props.productWithCount.product.price * props.productWithCount.quantity)}
                        </div>
                    </div>
                    <div className="flex text-background-color bottom-1 gap-1 pl-2">
                        <Button className="bg-accent-color-1 w-2 h-5" onClick={() => {
                            dispatch(decrementQuantity(
                                props.productWithCount.product
                            ))
                        }}>-</Button>
                        <Button className="bg-accent-color-1 w-2 h-5" onClick={() => {
                            dispatch(incrementQuantity(
                                props.productWithCount.product
                            ))
                        }}>+</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductCartCard