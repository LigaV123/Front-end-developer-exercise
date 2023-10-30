import { ReactNode } from "react";

interface ListProps<T> {
    items: T[],
    render: (item: T) => ReactNode
}

const SearchedProductList = <T,>({ items, render }: ListProps<T>) => {
    return (
        <div className="item__wrapper">
            {items.map((item, i) => (
                <div className="item" key={i}>
                    {render(item)}
                </div>
            ))}
        </div>
    )
}

export default SearchedProductList;
