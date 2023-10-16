import { useState, useEffect } from 'react'
import Keycloak from 'keycloak-js';

function useKeyCloak() {
    const [keycloak, setKeycloak] = useState<Keycloak>();
    //TODO må va ein annæ måte :/
    useEffect(() => {
        const post = async () => {
            const user = await keycloak?.loadUserInfo() as any
          
            const u: UserPost = {
                "id": user.sub,
                "username": user.name,
                "address": "",
                "email": user.email,
                "roles": ""
            }
            try{ 
                await fetch("https://boxinator2.azurewebsites.net/api/v1/user", {
                method: "POST",
              //  mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': "bearer " + keycloak?.token
                },
                body: JSON.stringify(u),
               
            }).then((data) => {
                if(data?.ok){
                    console.log("user made in db!")
                }else{
                    console.log("error")
                }
            })
        }catch(e){
            console.log(e)
        }
        }
        if(keycloak){
           post()
        }
    },[keycloak?.clientId])
    useEffect(() => {
        var _keycloak = new Keycloak({
            url: 'https://lemur-10.cloud-iam.com/auth/',
            realm: 'boxinator2',
            clientId: 'clientazure',
            
        });
      /*  const LogIn = async ()  => {
            const data = await fetch("https://lemur-10.cloud-iam.com/auth/realms/boxinator2/protocol/openid-connect/token", {
                method: "POST",
                body: new URLSearchParams({
                    "client_id": 'clientazure',
                    "client_secret": "3vB2PgVyLPgjfPUG2yvXe5U4laZFqpvo",
                    "username": 'gard',
                    "password": 'gard',
                    "grant_type": "password"
                }),
                headers: {
                    "Content-type": "application/x-www-form-urlencoded"
                }
            })
            .then((data) => data.json())    
                
        }
        LogIn() */
        _keycloak.init({onLoad: "login-required"})
            .then(()  => {
                setKeycloak(_keycloak)
            });
       
    }, []);

    return keycloak
}

export default useKeyCloak