import CustomCard from './CustomCard';


///TODO: Make Fetch method in landing page
const Products: Product[] = [
    {
        id: 1,
        name: 'Product 1',
        price: 100,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.',
        image: './images/productimage.png',
        stock: 10,
        isActive: true,
        width: 10,
        depth: 10,
        height: 10,
        weight: 10
    },
    {
        id: 2,
        name: 'Product 2',
        price: 100,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.',
        image: './images/productimage.png',
        stock: 10,
        isActive: true,
        width: 10,
        depth: 10,
        height: 10,
        weight: 10
    },
    {
        id: 3,
        name: 'Product 3',
        price: 100,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.',
        image: './images/productimage.png',
        stock: 10,
        isActive: true,
        width: 10,
        depth: 10,
        height: 10,
        weight: 10
    },
];

function TopSellingCardList() {
    return (
        <div className='flex gap-20 mt-10 flex-wrap justify-center max-w-[80%] mx-auto'>
            {
                Products.map((product, index) => (
                    <CustomCard key={index} product={product} />
                ))
            }
        </div>

    )
}

export default TopSellingCardList