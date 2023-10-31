const text = "text-orange-950 text-4xl font-extrabold text-center";
const space = "h-full w-full bg-orange-300/80 pt-6 pb-6 z-30";
const respLg = "lg:pt-12 lg:pb-12 lg:text-5xl";

const Header = () => (
    <div className="flex">
        <h1 className={`${text} ${space} ${respLg}`}>
            Products with love from <span className="text-red-800">Chili</span>
        </h1>
    </div>
)

export default Header