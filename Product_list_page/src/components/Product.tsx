

type ProductProps = {
    name: string,
    price: number,
    category: string
}

const Product = ({ name, price, category} : ProductProps) => (
    <div className='product'>
        <h3 className='product__name'>{name}</h3>
        <h4 className='product__price'>{price}</h4>
        <p className="product__category">{category}</p>
    </div>
)

export default Product
