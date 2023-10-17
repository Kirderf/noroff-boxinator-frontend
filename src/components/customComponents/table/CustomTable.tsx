
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import ShipmentDialog from "../shipmentDialog/ShipmentDialog"


interface CustomTableProps {
    shipments: Shipment[]
}

export function CustomTable(props: CustomTableProps) {

    return (
        <Table className="rounded-md border h-auto bg-accent-color-1 my-20">
            <TableCaption>Order history</TableCaption>
            <TableHeader >
                <TableRow className="bg-accent-color-2">
                    <TableHead className="w-[100px]">Id</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>ProductQuantity</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead className="text-center">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {props.shipments?.map((shipment) => (
                    <TableRow key={shipment?.id}>
                        <TableCell className="font-medium">{shipment?.id}</TableCell>
                        <TableCell>{shipment?.status}</TableCell>
                        <TableCell>{shipment.shipmentProducts?.length}</TableCell>
                        <TableCell className="text-right">{shipment?.user}</TableCell>
                        <TableCell className="text-center w-[10rem]">{<ShipmentDialog {...shipment} />} </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
