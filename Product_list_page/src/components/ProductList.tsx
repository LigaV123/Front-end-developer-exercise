import { Link } from 'react-router-dom'
import Product from './Product'

type ProductProps = {
    id: number,
    name: string,
    price: number,
    currency: string,
    category: string,
    description: string
};

type ProductListProps = {
    productList: ProductProps[];
  };

const ProductList = ( selectedProductList : ProductListProps ) => {
    return (
        <>
          {selectedProductList.productList.map(({ id, name, price, currency, category }) => (
            <Link to={`/product/${id}`} key={id}>
              <Product name={name} price={price} currency={currency} category={category} />
            </Link>
          ))}
        </>
    );
};

export default ProductList;