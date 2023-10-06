import CustomCard from './CustomCard';


///TODO: Make Fetch method in landing page
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