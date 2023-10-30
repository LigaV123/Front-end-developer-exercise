import { useParams } from 'react-router-dom'

type Product = {
    id: number,
    name: string,
    price: number,
    currency: string,
    category: string,
    description: string
};  

const ProductDetail = ({ products }: { products: Product[] }) => {
    const { id } = useParams<{ id: string }>();
    const product = products.find((p) => p.id === Number(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    const { name, price, currency, category, description } = product;
    const flexCenter = "flex justify-center justify-items-center";
    const border = "border-solid border-2 border-red-950 rounded-xl";

    return (
        <div className={`${flexCenter} flex-col gap-y-3 w-80 h-96 p-6 bg-orange-300/90 ${border}`}>
            <h3 className={`${flexCenter} text-4xl font-semibold text-orange-950`}>{name}</h3>
            <div className={`${flexCenter} ${border}`}></div>
            <h4 className={`${flexCenter} mt-6 text-2xl`}>{currency} {price}</h4>
            <p className={`${flexCenter} text-xl font-semibold`}>{category}</p>
            <p className={`${flexCenter} text-center text-xl leading-relaxed`}>{description}</p>
        </div>
    );
};

export default ProductDetail;
