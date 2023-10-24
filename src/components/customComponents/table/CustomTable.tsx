
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import ShipmentDialog from "../shipmentDialog/ShipmentDialog"


interface CustomTableProps {
    shipments: Shipment[]
}

export function CustomTable(props: CustomTableProps) {

    return (
        <Table className="rounded-md border h-auto bg-accent-color-1 my-20">
            <TableHeader >
                <TableRow className="bg-accent-color-2">
                    <TableHead className="">Id</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Products</TableHead>
                    <TableHead className="">User</TableHead>
                    <TableHead className="text-center">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    props.shipments?.length === 0 ?
                        <TableRow>
                            <TableCell className="text-center" colSpan={5}>No Shipments</TableCell>
                        </TableRow>
                        :
                        <>{props.shipments?.map((shipment) => (
                    <TableRow key={shipment?.id}>
                        <TableCell className="font-medium">{shipment?.id}</TableCell>
                        <TableCell>{shipment?.status}</TableCell>
                        <TableCell>{shipment.shipmentProducts?.length}</TableCell>
                        <TableCell className="">{shipment?.user}</TableCell>
                        <TableCell className="">{<ShipmentDialog {...shipment} />} </TableCell>
                    </TableRow>
                ))}
                </>
                }
                
            </TableBody>
        </Table>
    )
}
