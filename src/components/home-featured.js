'use client';
import RightArrow from "../../public/assets/right-arrow";
import { useState } from "react";
import {items, tabs} from "./data";


export default function Featured(){
    const [ind, setInd] = useState(0)
    const arr = [1,2,3,4,5]
    return(
        <div className="padding-x h-auto flex gap24px sm:py-6 md:py-7 lg:py-9.5 xl:py-12 2xl:py-14.5 3xl:py-18">
            <div className="flex flex-col justify-between items-center w-1/4 h-auto rounded-[3px] bg-warning-300">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col sm:py-2.5 xl:py-5 3xl:py-8">
                        <div className="flex flex-col gap16px">
                            <div className="flex flex-col gap12px">
                                <div className="flex flex-col items-center gap8px">
                                    <span className="text-danger-600 body-small-600 uppercase">computer & accessories</span>
                                    <span className="heading-01">32% Discount</span>
                                </div>
                                <span className="text-grey-700 body-medium-400 text-center">For all ellectronics products</span>
                            </div>
                            <div className="flex justify-center items-center gap8px">
                                <span className="body-small-500">Offers ends in:</span>
                                <div className="border rounded-sm bg-grey-0 body-small-600 padding6px12px">ENDS OF CHRISTMAS</div>
                            </div>
                        </div>
                    </div>
                    <button className="btn yellow-btn sm:h-3.5 md:h-5 lg:h-7 xl:h-9 2xl:h-11 3xl:h-14 w-auto">
                        SHOP NOW
                        <RightArrow/>
                    </button>
                </div>
                <img src="/banner-1.jfif" className="h-max-full w-max-full"/>
            </div>
            <div className="w-3/4 flex flex-col">
                <div className="flex justify-between items-center">
                    <span className="heading-03">Featured Products</span>
                    <div className="h-full flex justify-center items-center gap16px">
                        <div className="flex justify-start">
                            {tabs.map((tab) => (
                                tab.i == ind ? (
                                    <button key={tab.i} className="shadow-feat-prod body-small-600 padding8px">
                                        {tab.title}
                                    </button>
                                ) : (
                                    <button key={tab.i} onClick={() => (setInd(tab.i))} className="body-small-400 text-grey-600 padding8px">
                                        {tab.title}
                                    </button>
                                )
                            ))}
                        </div>
                        <button className="flex flex-row items-center gap8px text-primary-500 body-small-600">
                            Browse All Product
                            <RightArrow/>
                        </button>
                    </div>
                </div>
                <div className="w-max-full h-full mt-4 inline-grid grid-cols-4 border-t border-l border-grey-100">
                    {items.map((item) => (
                        <div key={item.id} className=" border-r border-b border-grey-100 flex flex-col gap8px sm:p-1 md:p-1.5 lg:p-2 xl:p-2.5 2xl:p-3 3xl:p-4">
                            <div className="relative flex h-full justify-center items-center">
                                {item.badge ? 
                                    <span className={`badge body-tiny-600 absolute top-0 left-0 ${item.badge}-badge`}>{item.badge}</span>
                                 : null}
                                <img src={item.src} className="h-max-full w-max-full"/>
                            </div>
                            <div className="flex flex-col gap8px h-1/4">
                                    <div className="rating rating-xs">        
                                        {arr.map((a) => (
                                            a == item.rate
                                                ? <input key={a} type="radio" name={`rating-${item.id}0`}  className="mask mask-star-2 bg-primary-500" checked readOnly/>
                                                : <input key={a} type="radio" name={`rating-${item.id}0`}  className="mask mask-star-2 bg-primary-500"/>
                                        ))}
                                    </div>
                                    <span className="body-small-400">{item.title}</span>
                                    <div className="inline-flex body-small-600 text-secondary-500">
                                        {item.priceb ? <div><span className="line-through text-grey-400">{item.priceb}</span>&nbsp;</div> : ''}
                                        {item.price}
                                    </div>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}