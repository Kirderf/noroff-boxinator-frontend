import { useNavigate } from "react-router-dom"
import DropDownProducts from "../dropDown/DropDownProducts"
import { useContext } from "react";
import { KeyCloakContext } from "@/context/KeyCloakContext";
import { Button } from "@/components/ui/button";


function Header() {
    const keycloak = useContext(KeyCloakContext);
    const navigate = useNavigate()

    return (
        <header className='w-full bg-primary-color p-5 sticky top-0 z-50'>
            <div className='w-[90%] mx-auto flex justify-between items-center gap-5 flex-wrap'>
                <a onClick={() => navigate("/")}>
                    <h1 className='text-[2rem] font-bold text-green-color hover:cursor-pointer'>Boxinator</h1>
                </a>
                <div className="flex gap-7 items-center">
                    <a className="hover:cursor-pointer">
                        <DropDownProducts />
                    </a>
                    <Button onClick={() => keycloak.keycloak?.login()}>
                        <img src="./icons/loginicon.svg" alt="Login" />
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header