import React from 'react'

function ProductCartCard(props: Product) {

    let NOK = new Intl.NumberFormat('NO', {
        style: 'currency',
        currency: 'NOK',
    });


    return (
        <div className='text-primary-color flex items-center w-full flex-wrap'>
            <div className='flex items-center'>
                <img src="../images/productimage.png" className='w-full max-w-[4rem] object-cover border rounded-md' alt={props.name} />
                <div className='p-2 font-bold'>{props.name}</div>
            </div>
            <div className='flex-grow text-right p-2 font-bold'>
                {NOK.format(props.price)}
            </div>
        </div>
    )
}

export default ProductCartCard