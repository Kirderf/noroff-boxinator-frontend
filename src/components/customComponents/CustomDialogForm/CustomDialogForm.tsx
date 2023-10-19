import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { KeyCloakContext } from "@/context/KeyCloakContext";
import { FunctionComponent, useContext } from "react";

interface Field {
    id: string;
    label: string;
    type: string;
    defaultValue?: string;
    className?: string;
}

interface CustomDialogProps {
    title: string;
    description: string;
    fields: Field[];
    shipment?: Shipment;
    product?: Product;
    onSubmit: (values: Record<string, string>, token: string, shipment?: Shipment, product?: Product) => void;
    children: React.ReactNode;
}

const CustomDialog: FunctionComponent<CustomDialogProps> = ({ title, description, fields, shipment, product, onSubmit, children, ...rest }) => {
    const keycloak = useContext(KeyCloakContext);

    return (
        <Dialog {...rest}>
            <DialogTrigger asChild className="bg-accent-color-1 border-none w-full mt-5 text-background-color">
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-primary-color">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    {fields.map((field, index) => (
                        <div key={index} className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor={field.id} className="text-right">
                                {field.label}
                            </Label>
                            <Input
                                type={field.type}
                                id={field.id}
                                defaultValue={field.defaultValue}
                                className={`col-span-3 text-primary-color ${field.className}`}
                            />
                        </div>
                    ))}
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={() => {
                        const values = fields.reduce((acc, field) => {
                            const element = document.getElementById(field.id) as HTMLInputElement;
                            if (element.type == "checkbox") {
                                console.log(element.checked)
                                acc[field.id] = `${element.checked}`
                            } else acc[field.id] = element.value;

                            return acc;
                        }, {} as Record<string, string>);
                        onSubmit(values, keycloak.keycloak?.token as string, shipment, product);
                    }}>Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default CustomDialog;