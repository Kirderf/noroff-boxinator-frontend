/** @format */

import { useState, useEffect } from "react";
import Keycloak from "keycloak-js";
import { api } from "../config";

function useKeyCloak() {
  const [keycloak, setKeycloak] = useState<Keycloak>();
  useEffect(() => {
    if (keycloak?.authenticated) {
      post();
    }
  }, [keycloak?.token]);

  const post = async () => {
    const user = (await keycloak?.loadUserInfo()) as any;
    console.log(user.sub);

    const u: User = {
      id: user.sub,
      username: user.name,
      address: "",
      email: user.email,
    };
    try {
      await fetch(api + "user", {
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
  //TODO må va ein annæ måte :/
  useEffect(() => {
    var _keycloak = new Keycloak({
      url: "https://lemur-10.cloud-iam.com/auth/",
      realm: "boxinator2",
      clientId: "clientazure",
    });
    _keycloak
      .init({
        checkLoginIframe: false,
        onLoad: "check-sso",
      })
      .then(() => {
        setKeycloak(_keycloak);
      });
  }, []);

  return keycloak;
}

export default useKeyCloak;
