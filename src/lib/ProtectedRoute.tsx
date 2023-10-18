// src/components/ProtectedElement.tsx

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { KeyCloakContext } from '@/context/KeyCloakContext';

interface ProtectedElementProps {
    children: React.ReactNode;
    roles?: string[];
}

const ProtectedElement: React.FC<ProtectedElementProps> = ({ children, roles }) => {
    const keycloak = useContext(KeyCloakContext);
    const navigate = useNavigate();

    if (!keycloak?.keycloak?.authenticated) {
        keycloak?.keycloak?.login();
        return null;
    }

    if (roles && roles.length && !roles.some(role => keycloak.keycloak?.hasRealmRole(role))) {
        navigate('/not-authorized');
        return null;
    }

    return <>{children}</>;
};

export default ProtectedElement;




