import { Command, CommandGroup, CommandItem } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { FormControl } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CheckIcon } from 'lucide-react'


interface CustomPopOverProps {
    field: any;
    form: any;
    country: Country[];
}


function CustomPopOver(props: CustomPopOverProps) {

    return (
        <Popover>
            <PopoverTrigger asChild>
                <FormControl>
                    <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                            "w-[200px] justify-between",
                            !props.field.value && "text-muted-foreground"
                        )}
                    >
                        {props.field.value
                            ? props.country.find(
                                (country) => country.fullName === props.field.value
                            )?.fullName
                            : "Select Country"}
                    </Button>
                </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0 bg-background-color text-primary-color">
                <Command>
                    <CommandGroup>
                        {props.country.map((country) => (
                            <CommandItem
                                value={country.fullName}
                                key={country.shortName}
                                onSelect={() => {
                                    props.form.setValue("country", country.fullName)
                                }}
                            >
                                <CheckIcon
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        country.fullName === props.field.value
                                            ? "opacity-100"
                                            : "opacity-0"
                                    )}
                                />
                                {country.fullName}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

export default CustomPopOver