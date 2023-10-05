import CustomCard from './CustomCard';



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
];

function TopSellingCardList() {
    return (
        <div className='flex gap-20 mt-10 flex-wrap justify-center max-w-[80%] mx-auto'>
            {
                Products.map((product, index) => (
                    <CustomCard key={index} {...product} />
                ))
            }
        </div>

    )
}

export default TopSellingCardList