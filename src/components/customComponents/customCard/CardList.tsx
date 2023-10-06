import CustomCard from './CustomCard';





const Products: Product[] = [
    {
        id: 1,
        name: 'Product 1',
        price: 100,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.',
        imageUrl: './images/productimage.png',
        width: 100,
        height: 100,
        weight: 100,
    },
    {
        id: 2,
        name: 'Product 2',
        price: 100,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.',
        imageUrl: './images/productimage.png',
        width: 100,
        height: 100,
        weight: 100,
    },
    {
        id: 3,
        name: 'Product 3',
        price: 100,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.',
        imageUrl: './images/productimage.png',
        width: 100,
        height: 100,
        weight: 100,
    },
    {
        id: 4,
        name: 'Product 1',
        price: 100,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.',
        imageUrl: './images/productimage.png',
        width: 100,
        height: 100,
        weight: 100,
    },
    {
        id: 5,
        name: 'Product 2',
        price: 100,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.',
        imageUrl: './images/productimage.png',
        width: 100,
        height: 100,
        weight: 100,
    },
    {
        id: 6,
        name: 'Product 3',
        price: 100,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.',
        imageUrl: './images/productimage.png',
        width: 100,
        height: 100,
        weight: 100,
    },
    {
        id: 7,
        name: 'Product 1',
        price: 100,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.',
        imageUrl: './images/productimage.png',
        width: 100,
        height: 100,
        weight: 100,
    },
    {
        id: 8,
        name: 'Product 2',
        price: 100,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.',
        imageUrl: './images/productimage.png',
        width: 100,
        height: 100,
        weight: 100,
    },
    {
        id: 9,
        name: 'Product 3',
        price: 100,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.',
        imageUrl: './images/productimage.png',
        width: 100,
        height: 100,
        weight: 100,
    },
];

function CardList() {
    return (
        <div className='flex gap-20 my-20 flex-wrap justify-center max-w-[80%] mx-auto'>
            {
                Products.map((product, index) => (
                    <CustomCard key={index} {...product} />
                ))
            }
        </div>

    )
}

export default CardList