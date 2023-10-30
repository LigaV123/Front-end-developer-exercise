

type DetailsProps = {
    name: string,
    price: number,
    category: string,
    description: string
}

const ProductDetails = ({ name, price, category, description }: DetailsProps) => {
    return (
        <div className="details">
            <h3 className='product__name'>{name}</h3>
            <h4 className='product__price'>{price}</h4>
            <p className="product__category">{category}</p>
            <p className="product__description">{description}</p>
        </div>
    )
}

export default ProductDetails;
