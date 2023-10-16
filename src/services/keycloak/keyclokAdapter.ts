/** @format */

import { useState, useEffect } from "react";
import Keycloak from "keycloak-js";

function useKeyCloak() {
  const [keycloak, setKeycloak] = useState<Keycloak>();
  //TODO må va ein annæ måte :/
  useEffect(() => {
    var _keycloak = new Keycloak({
      url: "https://lemur-10.cloud-iam.com/auth/",
      realm: "boxinator2",
      clientId: "clientazure",
    });
    _keycloak.init({ onLoad: "login-required" }).then(() => {
      setKeycloak(_keycloak);
    });

    const post = async () => {
      const user = (await keycloak?.loadUserInfo()) as any;

      const u: UserPost = {
        id: user.sub,
        username: user.name,
        address: "",
        email: user.email,
        roles: "",
      };
      try {
        await fetch("https://boxinator2.azurewebsites.net/api/v1/user", {
          method: "POST",
          //  mode: 'no-cors',
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: "bearer " + keycloak?.token,
          },
          body: JSON.stringify(u),
        }).then((data) => {
          if (data?.ok) {
            console.log("user made in db!");
          } else {
            console.log("error");
          }
        });
      } catch (e) {
        console.log(e);
      }
    };
    if (keycloak) {
      post();
    }
  }, []);

  return keycloak;
}

export default useKeyCloak;
