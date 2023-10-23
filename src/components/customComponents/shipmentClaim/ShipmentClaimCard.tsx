import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'



interface ShipmentClaimCardProps {
    shipment?: UnclaimedShipment
    handleSaveShipmentToUser: (Shipment: any) => void
}



function ShipmentClaimCard(props: ShipmentClaimCardProps) {

    return (

        <AccordionItem value={'item-1'} className='bg-accent-color-1 rounded-md bs'>

            <div className='flex justify-between items-center p-5 flex-wrap'>
                <AccordionTrigger className='h-full'>
                    <div className='w-full flex items-center justify-between mt-3'>
                        <div className='flex gap-10 items-center'>
                            <p className='font-bold text-md'>Shipping address: <span className='italic text-1xl'>{props.shipment?.shippingAddress}</span> </p>
                            <p className='font-bold text-md'>Status: <span className='italic text-1xl'>{props.shipment?.status}</span> </p>
                        </div>
                    </div>
                </AccordionTrigger>
                <Button onClick={() => props.handleSaveShipmentToUser(props.shipment)} className='bg-accent-color-2 z-10'>
                    Claim
                </Button>
            </div>

            <hr />
            <AccordionContent>
                {
                    props.shipment?.shipmentProducts.map((shipmentItem, index) => (
                        <div key={index} className='flex justify-between items-center p-5'>
                            <div className='w-full flex items-center justify-between mt-3 '>
                                <div className='flex gap-10 items-center flex-wrap'>
                                    <div key={index} className='flex gap-10 items-center flex-wrap'>
                                        <img className='w-20 h-20 rounded-full' src={shipmentItem.product.image} alt="" />
                                        <p className='font-bold text-md'>Name: <span className='italic text-1xl'>{shipmentItem.product.name}</span> </p>
                                        <p className='font-bold text-md'>Price: <span className='italic text-1xl'>{shipmentItem.product.price}</span> </p>
                                    </div>
                                    <p className='font-bold text-md'>Quantity: <span className='italic text-1xl'>{shipmentItem.quantity}</span> </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </AccordionContent>

        </AccordionItem>
    )
}

export default ShipmentClaimCard