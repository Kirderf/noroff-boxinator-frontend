import React from 'react'
import CustomCard from './customCard';




const Products: Product[] = [
    {
        id: 1,
        name: 'Product 1',
        price: 100,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.',
        imageUrl: './images/productimage.png',
    },
    {
        id: 2,
        name: 'Product 2',
        price: 100,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.',
        imageUrl: './images/productimage.png',
    },
    {
        id: 3,
        name: 'Product 3',
        price: 100,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.',
        imageUrl: './images/productimage.png',
    },
    {
        id: 4,
        name: 'Product 1',
        price: 100,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.',
        imageUrl: './images/productimage.png',
    },
    {
        id: 5,
        name: 'Product 2',
        price: 100,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.',
        imageUrl: './images/productimage.png',
    },
    {
        id: 6,
        name: 'Product 3',
        price: 100,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.',
        imageUrl: './images/productimage.png',
    },
    {
        id: 7,
        name: 'Product 1',
        price: 100,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.',
        imageUrl: './images/productimage.png',
    },
    {
        id: 8,
        name: 'Product 2',
        price: 100,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.',
        imageUrl: './images/productimage.png',
    },
    {
        id: 9,
        name: 'Product 3',
        price: 100,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.',
        imageUrl: './images/productimage.png',
    },
];

function CardList() {
    return (
        <div className='flex gap-20 m-20 flex-wrap justify-center'>
            {
                Products.map((product, index) => (
                    <CustomCard key={index} {...product} />
                ))
            }
        </div>

    )
}

export default CardList