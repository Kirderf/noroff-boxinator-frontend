/** @format */

//TODO: Fix this
async function updateProduct(token?: string) {
  try {
    const response = await fetch(
      "https://boxinator2.azurewebsites.net/api/v1/product" +
        {
          method: "Patch",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: "bearer " + token,
          },
        }
    );
    if (!response.ok) {
      throw new Error("Failed to update Product");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
