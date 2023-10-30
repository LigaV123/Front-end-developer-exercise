type ProductProps = {
    name: string,
    price: number,
    currency: string,
    category: string
}

const flexCenter = "flex justify-center justify-items-center";
const border = "border-solid border-2 border-red-950 rounded-xl";
const hoverPower = "hover:bg-orange-300/90 hover:border-4";
   
const Product = ({ name, price, currency, category} : ProductProps) => (
    <div className={`${flexCenter} flex-col gap-y-3 w-56 h-56 bg-orange-300/75 ${border} ${hoverPower}`}>
        <h3 className={`${flexCenter} text-3xl font-semibold text-orange-950`}>{name}</h3>
        <h4 className={`${flexCenter} mt-6 text-xl`}>{currency} {price}</h4>
        <p className={`${flexCenter} text-lg`}>{category}</p>
    </div>
)

export default Product
