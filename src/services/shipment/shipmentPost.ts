export const shipmentPostWithUser = async (shipment: ShipmentPost): Promise<Response> => {
    return await fetch('https://boxinator2.azurewebsites.net/api/v1/shipment', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        //  authorization: "bearer " + token,
        },
        body: JSON.stringify(shipment)
      });
    }
