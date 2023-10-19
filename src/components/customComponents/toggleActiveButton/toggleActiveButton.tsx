import { Button } from '@/components/ui/button'
import { KeyCloakContext } from '@/context/KeyCloakContext';
import { updateProductActive } from '@/services/product/productPatch';
import React, { useContext, useEffect } from 'react'

interface ToggleActiveButtonProps {
    active: boolean;
    product: Product;
}

const ToggleActiveButton: React.FC<ToggleActiveButtonProps> = ({ active: prevActive, product: product }) => {

    const [active, setActive] = React.useState(prevActive);

    const keycloak = useContext(KeyCloakContext);

    function handleActiveProduct() {
        updateProductActive(keycloak.keycloak?.token, product, active);
        window.location.reload();
    }

    useEffect(() => {
        setActive(!active);
    }, [])


    return (
        <>
            <Button onClick={handleActiveProduct} className="bg-background-color text-primary-color px-0 h-0 rounded-md p-3 mt-1">toggle</Button>
        </>
    );
};

export default ToggleActiveButton;
