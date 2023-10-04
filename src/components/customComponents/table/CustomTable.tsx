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

const invoices = [
    {
        Id: "1",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        productQuantity: 2,
    },
    {
        Id: "2",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        productQuantity: 1,
    },
    {
        Id: "3",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        productQuantity: 3,
    },
    {
        Id: "4",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        productQuantity: 4,
    },
    {
        Id: "5",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        productQuantity: 5,
    },
    {
        Id: "6",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        productQuantity: 2,
    },
    {
        Id: "7",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        productQuantity: 3,
    },
]

export function CustomTable() {
    return (
        <Table className="max-w-[80%] m-auto my-20">
            <TableCaption>Order history</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Id</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>ProductQuantity</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((Id) => (
                    <TableRow key={Id.Id}>
                        <TableCell className="font-medium">{Id.Id}</TableCell>
                        <TableCell>{Id.paymentStatus}</TableCell>
                        <TableCell>{Id.productQuantity}</TableCell>
                        <TableCell className="text-right">{Id.totalAmount}</TableCell>
                        <TableCell className="text-center w-[10rem]">{<Button className="bg-accent-color-1 w-full">View Order</Button>} </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
