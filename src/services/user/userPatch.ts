/** @format */

import { KeycloakProfile } from "keycloak-js";

export async function updateUser(
  token?: string,
  user?: KeycloakProfile,
  userValues?: Record<string, string>
) {
  try {
    const response = await fetch(
      "https://boxinator2.azurewebsites.net/api/v1/user",
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: "bearer " + token,
        },
        body: JSON.stringify({
          id: user?.id,
          address: userValues?.address,
          email: user?.email,
          username: user?.username,
        }),
      }
    );
    if (response.status === 401) {
      throw new Error("Unauthorized");
    }
    if (!response.ok) {
      throw new Error("Failed to update Shipment");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
