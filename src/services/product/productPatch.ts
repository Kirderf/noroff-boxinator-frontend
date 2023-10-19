/** @format */

//TODO: Fix this
export async function updateProduct(
  token?: string,
  product?: Product,
  productValues?: Record<string, string>
) {
  try {
    console.log({
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
    });
    const response = await fetch(
      "https://boxinator2.azurewebsites.net/api/v1/product" +
        {
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
