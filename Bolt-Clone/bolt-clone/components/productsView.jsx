import productsData from "./extendedMenuData"
import ProdViewContent from "./productsViewContent"

const Items = ({itemsElement}) => {
    return (
        <>
            <div className="flex justify-between items-center p-2 cursor-pointer group hover hover:bg-gray-600 hover:rounded-lg">
                <div className="w-[140px] group-hover:font-bold transition-all">
                    {itemsElement}
                </div>
                {/* <div className="ml-2"> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right opacity-0 group-hover:opacity-100 transition-opacity duration-200" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>
                {/* </div> */}
            </div>
        </>
    )
}

const Products = () => {
    return (
        <>
            <div className="grid grid-flow-row w-[95%]">
                <div className="grid grid-cols-3 gap-y-10">
                    {productsData.map((element, index) => (
                        <ProdViewContent key={index} title={element.title} item={element.items.map((items, index) => (
                            <Items itemsElement={items} key={index} />
                        ))}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Products