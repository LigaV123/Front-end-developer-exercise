type ProductProps = {
    name: string,
    price: number,
    currency: string,
    category: string
}

const flexCenter = "flex justify-center justify-items-center z-30";
const border = "border-solid border-2 border-red-950 rounded-xl";
const hoverPower = "hover:bg-orange-300/90 hover:shadow-2xl hover:shadow-gray-700";
const background = "bg-orange-300/75 transition-colors duration-150";
const respMd = "md:gap-y-1 md:h-40";
const respLg = "lg:gap-y-3 lg:h-56";
   
const Product = ({ name, price, currency, category} : ProductProps) => (
    <div className="flex">
        <div className={`${flexCenter} flex-col gap-y-0 w-56 h-28 ${background} ${border} ${hoverPower} ${respMd} ${respLg}`}>
            <h3 className={`${flexCenter} text-2xl md:text-3xl  font-semibold text-orange-950`}>{name}</h3>
            <h4 className={`${flexCenter} mt-2 md:mt-4 lg:mt-6 text-xl`}>{currency} {price}</h4>
            <p className={`${flexCenter} text-lg`}>{category}</p>
        </div>
    </div>
)

export default Product
