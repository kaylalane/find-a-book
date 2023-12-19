import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const Dropdown = () => (
    <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
           
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
            <DropdownMenu.Content>
                <DropdownMenu.Label />
                <DropdownMenu.Item />

                <DropdownMenu.Group>
                    <DropdownMenu.Item />
                </DropdownMenu.Group>

                <DropdownMenu.CheckboxItem>
                    <DropdownMenu.ItemIndicator />
                </DropdownMenu.CheckboxItem>

                <DropdownMenu.Sub>
                    <DropdownMenu.SubTrigger />
                    <DropdownMenu.Portal>
                        <DropdownMenu.SubContent />
                    </DropdownMenu.Portal>
                </DropdownMenu.Sub>

                <DropdownMenu.Separator />
                <DropdownMenu.Arrow />
            </DropdownMenu.Content>
        </DropdownMenu.Portal>
    </DropdownMenu.Root>
);
