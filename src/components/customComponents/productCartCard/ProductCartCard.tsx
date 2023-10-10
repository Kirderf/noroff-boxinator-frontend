import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

function ProductCartCard(props: { product: Product, onUpdateCounter: any }) {

    const [counter, setCounter] = useState(1);
    const [show, setShow] = useState(false);

    const handleDecrement = () => {
        if (counter > 0) {
            setCounter(counter - 1);
            props.onUpdateCounter(props.product.id, counter - 1);
        }
    }

    const handleIncrement = () => {
        setCounter(counter + 1);
        props.onUpdateCounter(props.product.id, counter + 1);
    }

    let NOK = new Intl.NumberFormat('NO', {
        style: 'currency',
        currency: 'NOK',
    });

    useEffect(() => {
        if (counter === 0) {
            setShow(true);
        }
    }, [counter])


    return (
        show ? <div></div> :
            <div className='text-primary-color flex items-center w-full flex-wrap'>
                <div className='flex items-center relative'>
                    <div className="relative">
                        <img src="../images/productimage.png" className='w-full max-w-[5rem] object-cover border rounded-md relative' alt={props.product.name} />
                        <Badge className="absolute -top-2 -right-2 bg-green-color text-background-color">{counter}</Badge>
                    </div>
                    <div className='p-2 font-bold'>{props.product.name}</div>
                    <div className="flex absolute text-background-color bottom-1 right-3 gap-1">
                        <Button className="bg-accent-color-1 w-2 h-5" onClick={handleDecrement}>-</Button>
                        <Button className="bg-accent-color-1 w-2 h-5" onClick={handleIncrement}>+</Button>
                    </div>
                </div>
                <div className='flex-grow text-right p-2 font-bold'>
                    {NOK.format(props.product.price * counter)}
                </div>
            </div>
    )
}

export default ProductCartCard