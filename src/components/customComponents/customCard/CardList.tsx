import CustomCard from './CustomCard';

interface Props {
    product: Product[]
}

function CardList(props: Props) {
    return (
        <div className='flex gap-20 my-20 flex-wrap justify-center max-w-[80%] mx-auto'>
            {
                props.product.map((product, index) => (
                    <CustomCard key={index} {...product} />
                ))
            }
        </div>

    )
}

export default CardList