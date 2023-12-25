import { items } from "./data"

export default function HomeProducts(){
    return (
        <div className="flex padding-x gap24px paddingy72px">
            <div className="flex flex-col w-1/4 gap16px">
                <span className="body-medium-600">FLASH SALE TODAY</span>
                <div className="flex flex-col w-full gap16px">
                    {items.slice(0,3).map((item) => (
                        <div className="flex justify-start items-center rounded-[3px] border-grey-100 border padding12px gap12px">
                            <div className="w-16"><img src={item.src}/></div>
                            <div className="flex flex-col w-full gap8px">
                                <span className="body-small-400">{item.title}</span>
                                <span className="body-small-600 text-secondary-500">{item.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col w-1/4 gap16px">
                <span className="body-medium-600">BEST SELLERS</span>
                <div className="flex flex-col w-full gap16px">
                    {items.slice(0,3).map((item) => (
                        <div className="flex justify-start items-center rounded-[3px] border-grey-100 border padding12px gap12px">
                            <div className="w-16"><img src={item.src}/></div>
                            <div className="flex flex-col w-full gap8px">
                                <span className="body-small-400">{item.title}</span>
                                <span className="body-small-600 text-secondary-500">{item.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col w-1/4 gap16px">
                <span className="body-medium-600">TOP RATED</span>
                <div className="flex flex-col w-full gap16px">
                    {items.slice(0,3).map((item) => (
                        <div className="flex justify-start items-center rounded-[3px] border-grey-100 border padding12px gap12px">
                            <div className="w-16"><img src={item.src}/></div>
                            <div className="flex flex-col w-full gap8px">
                                <span className="body-small-400">{item.title}</span>
                                <span className="body-small-600 text-secondary-500">{item.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col w-1/4 gap16px">
                <span className="body-medium-600">NEW ARRIVAL</span>
                <div className="flex flex-col w-full gap16px">
                    {items.slice(0,3).map((item) => (
                        <div className="flex justify-start items-center rounded-[3px] border-grey-100 border padding12px gap12px">
                            <div className="w-16"><img src={item.src}/></div>
                            <div className="flex flex-col w-full gap8px">
                                <span className="body-small-400">{item.title}</span>
                                <span className="body-small-600 text-secondary-500">{item.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}