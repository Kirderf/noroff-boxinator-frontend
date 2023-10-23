import { useNavigate } from "react-router-dom"
import DropDownProducts from "../dropDown/DropDownProducts"
import { useContext } from "react";
import { KeyCloakContext } from "@/context/KeyCloakContext";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


function Header() {
    const keycloak = useContext(KeyCloakContext);
    const navigate = useNavigate()
    return (
        <header className='w-full bg-primary-color p-5 sticky top-0 z-50'>
            <div className='w-[90%] mx-auto flex justify-between items-center gap-2 '>
                <a onClick={() => navigate("/")}>
                    <h1 className='hover:animate-pop-up text-[1.7rem] font-bold text-green-color hover:cursor-pointer'>Boxinator</h1>
                </a>
                <div className="flex gap-5 items-center">
                    <a className="hover:cursor-pointer order-1">
                        <DropDownProducts />
                    </a>
                    {
                        keycloak.keycloak?.authenticated ? (
                            <div className="hover:animate-pop-up">
                                <a onClick={() => navigate("/profile")} className="hover:cursor-pointer flex  gap-4 items-center">
                                    <h1 className="text-lg ">PROFILE</h1>
                                    <Avatar className="border">
                                        <AvatarImage src="../images/freddy.png" alt="@shadcn" />
                                        <AvatarFallback>{keycloak.keycloak.profile?.username?.substring(0, 1)}</AvatarFallback>
                                    </Avatar>
                                </a>
                            </div>
                        ) : (
                            <div className="flex gap-7 items-center hover:animate-pop-up">
                                <Button onClick={() => keycloak.keycloak?.login()}>
                                    <h1 className="text-lg">LOGIN</h1>
                                </Button>
                            </div>
                        )
                    }
                </div>
            </div>
        </header>
    )
}

export default Header