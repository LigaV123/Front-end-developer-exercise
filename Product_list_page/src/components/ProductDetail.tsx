import { useParams } from 'react-router-dom'

const ProductDetail = ({ products }: { products: Product[] }) => {
    const { id } = useParams<{ id: string }>();
    const product = products.find((p) => p.id === Number(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    const { name, price, category, description } = product;

    return (
        <div className="detail">
            <h3 className="product__name">{name}</h3>
            <h4 className="product__price">{price}</h4>
            <p className="product__category">{category}</p>
            <p className="product__description">{description}</p>
        </div>
    );
};

export default ProductDetail;
