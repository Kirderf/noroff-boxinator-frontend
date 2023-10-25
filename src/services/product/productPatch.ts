/** @format */
import { api } from "../config";
//TODO: Fix this
export async function updateProduct(
  token?: string,
  product?: Product,
  productValues?: Record<string, string>
) {
  try {
    const response = await fetch(api + "product", {
      method: "PATCH",
      body: JSON.stringify({
        id: product?.id,
        price: productValues?.price,
        stock: productValues?.stock,
        description: productValues?.description,
        name: productValues?.name,
        image: product?.image,
        width: product?.width,
        height: product?.height,
        depth: product?.depth,
        weight: product?.weight,
        active: product?.active,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: "bearer " + token,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to update Shipment");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function updateProductActive(
  token?: string,
  product?: Product,
  active?: boolean
) {
  try {
    console.log(active);
    const response = await fetch(api + "product", {
      method: "PATCH",
      body: JSON.stringify({
        id: product?.id,
        price: product?.price,
        stock: product?.stock,
        description: product?.description,
        name: product?.name,
        image: product?.image,
        width: product?.width,
        height: product?.height,
        depth: product?.depth,
        weight: product?.weight,
        active: active,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: "bearer " + token,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to update Shipment");
    }
    return response;
  } catch (error) {
    throw error;
  }
}
