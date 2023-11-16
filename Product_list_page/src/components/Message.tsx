const text = "text-orange-950 text-4xl font-extrabold text-center";
const space = "h-full w-full pt-6 pb-6 z-30";
const respLg = "lg:pt-12 lg:pb-12 lg:text-5xl";

const Message = () => (
    <div className="flex">
        <p className={`${text} ${space} ${respLg}`}>Not found</p>
    </div>
)

export default Message