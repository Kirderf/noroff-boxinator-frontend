import { useGetShipmentHistory } from '@/services/shipment/shipmentGet'
import { useEffect, useState } from 'react'


interface Props {
    shipment: Shipment
}
const ShipmentDialogData = (props: Props) => {
    const [shipmentHistory, setShipmentHistory] = useState<{ id: number, status: String, timestamp: string }[]>([])
    const useD = useGetShipmentHistory(props.shipment.id)

    useEffect(() => {
        if (!useD.isLoading) {
            setShipmentHistory(useD.data)
        }
    }, [useD.isLoading])
    const getHistoryList = () => {
        const enumStatusList: string[] = ["ORDER_PLACED", "ORDER_PROCESSING", "SHIPPED", "DELIVERED"]
        return (
            <>
                {
                    enumStatusList.map((e: string, index: number) =>
                    (<li key={index} className={`${props.shipment.status == e ? " text-green-color" : ""}`}>
                        {e}
                        {shipmentHistory.map((history, index) => (
                            <div key={index}>
                                {(history.status == e) && <span>{history.timestamp}</span>}
                            </div>
                        ))}
                    </li>))
                }
            </>
        )
    }
    return (
        <div className="flex flex-col gap-10 text-primary-color bg-background-color rounded-lg p-5">
            <div className=" w-full h-auto flex items-center justify-start gap-10 flex-wrap ">
                <div className="flex flex-col">
                    <h1 className="font-bold">Status</h1>
                    <h2>{props.shipment.status}</h2>
                </div>
                <div className="flex flex-col">
                    <h1 className="font-bold">Purchase Date</h1>
                    <h2>{props.shipment.timestamp}</h2>
                </div>
                <div className="flex flex-col">
                    <h1 className="font-bold">From</h1>
                    <h2>Boxinator</h2>
                </div>
            </div>
            <div className="flex gap-24">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col">
                        <h1 className="font-bold">Purchased By</h1>
                        <h2>User: {props.shipment.email}</h2>
                    </div>
                    <div>
                        <h1 className="font-bold">Billing Information</h1>
                        <p>User: {props.shipment.email}</p>
                        <p>Address: {props.shipment.billingAddress}</p>
                        <p>Phonenumber: {props.shipment.phoneNumber}</p>
                    </div>
                    <div>
                        <h1 className="font-bold">Delivery Information</h1>
                        <p>User: {props.shipment.email}</p>
                        <p>Delivery Instruction: {props.shipment.deliveryInstruction}</p>
                    </div>
                </div>
                <div>
                    <h1 className="font-bold">Order History</h1>
                    <ul className=" list-disc pl-8">
                        {getHistoryList()}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ShipmentDialogData