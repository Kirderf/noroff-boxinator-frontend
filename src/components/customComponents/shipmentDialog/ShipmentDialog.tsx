import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { useEffect } from "react"


function ShipmentDialog(props: Shipment) {




    useEffect(() => {

        const timer = setTimeout(() => 66, 500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <Dialog>
            <DialogTrigger asChild className="bg-accent-color-1 border-none w-full text-background-color hover:bg-accent-color-2 hover:bg-opacity-20">
                <Button variant="outline">View more</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[50rem] h-auto bg-primary-color">
                <DialogHeader>
                    <DialogTitle>Order {props.id}</DialogTitle>
                </DialogHeader>
                <Separator className="bg-background-color" />
                <div className="flex flex-col gap-10 text-primary-color bg-background-color rounded-lg p-5">
                    <div className=" w-full h-auto flex items-center justify-start gap-10 flex-wrap ">
                        <div className="flex flex-col">
                            <h1 className="font-bold">Status</h1>
                            <h2>{props.status}</h2>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-bold">Purchase Date</h1>
                            <h2>{props.timestamp}</h2>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-bold">From</h1>
                            <h2>Boxinator</h2>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-bold">Purchased By</h1>
                            <h2>UsEr</h2>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="font-bold">Latest Shipment Updates</h1>
                        <p>nicely done gard</p>
                    </div>
                    <div>
                        <h1 className="font-bold">Billing Information</h1>
                        <p>User</p>
                        <p>Shipping</p>
                        <p>Phonenumber</p>
                    </div>
                    <div>
                        <h1 className="font-bold">Delivery Information</h1>
                        <p>User</p>
                        <p>Shipping</p>
                        <p>Phonenumber</p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ShipmentDialog