import { ReactNode, createContext } from "react";
import Keycloak from 'keycloak-js';
import useKeyCloak from "@/services/keycloak/keyclokAdapter";

interface Props {
  children?: ReactNode;
}

export const KeyCloakContext = createContext({
  keycloak: {} as Keycloak | undefined
})
export const KeyCLoakProvider = ({ children }: Props) => {
  const keycloak = useKeyCloak()

  const value = {
    keycloak
  }
  return <KeyCloakContext.Provider value={value}>{children}</KeyCloakContext.Provider>;
}