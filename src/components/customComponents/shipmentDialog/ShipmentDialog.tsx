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
import ShipmentDialogData from "./ShipmentDialogData"


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
                <ShipmentDialogData shipment={props} />
            </DialogContent>
        </Dialog>
    )
}

export default ShipmentDialog