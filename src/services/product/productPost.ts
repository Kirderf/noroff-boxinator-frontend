export const productPostWithAdmin = async (product: ProductPost, token: string): Promise<Response> => {
    console.log(JSON.stringify(product))
    return await fetch('https://boxinator2.azurewebsites.net/api/v1/product', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          authorization: "bearer " + token,
        },
        body: JSON.stringify(product)
      })
    }