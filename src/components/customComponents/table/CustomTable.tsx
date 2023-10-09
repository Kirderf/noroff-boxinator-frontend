import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


interface CustomTableProps {
    orders: Order[]
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
                {props.orders.map((order) => (
                    <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.status}</TableCell>
                        <TableCell>{order.products.length}</TableCell>
                        <TableCell className="text-right">{order.user}</TableCell>
                        <TableCell className="text-center w-[10rem]">{<Button className="bg-accent-color-1 w-full hover:bg-accent-color-2 hover:bg-opacity-[.50]">View Order</Button>} </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
