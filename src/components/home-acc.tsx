'use client';
import RightArrow from "../../public/assets/right-arrow";
import { useState } from "react";
import {items, acctabs} from "./data";


export default function HomeAccess(){
  const [ind, setInd] = useState(0)
  const arr = [1,2,3,4,5]
  
  return(
    <div className="padding-x h-[650px] flex items-end gap24px sm:py-6 md:py-7 lg:py-9.5 xl:py-12 2xl:py-14.5 3xl:py-18">
      <div className="w-3/4 flex flex-col h-full items-stretch">
        <div className="flex justify-between items-center">
          <span className="heading-03">Computer Accessories</span>
          <div className="h-full flex justify-center items-center gap16px">
            <div className="flex justify-start">
              {acctabs.map((tab) => (
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
                <div className="rating rating-xs flex items-center">        
                  {arr.map((a) => (
                    a == item.rate
                      ? <input key={a} type="radio" name={`rating-${item.id}0`}  className="mask mask-star-2 bg-primary-500" checked readOnly/>
                      : <input key={a} type="radio" name={`rating-${item.id}0`}  className="mask mask-star-2 bg-primary-500"/>
                  ))}
                  <span className="body-tiny-400 text-grey-500">({item.rateNum})</span>
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
            <div className="flex flex-col gap24px w-1/4 h-full">
                <div className="flex flex-col justify-between items-center w-full h-3/5 padding32px gap24px rounded bg-warning-200">
                    <div className="flex flex-col justify-center items-center gap12px">
                        <div className="flex h-[108px]"><img src="/xiaomi-true-wireless.png" className="max-h-full"/></div>
                        <div className="flex flex-col justify-center items-center gap16px">
                            <div className="flex flex-col items-center justify-center">
                                <span className="heading-02 text-center">Xiaomi True Wireless Earbuds</span>
                                <span className="text-grey-700 text-center body-medium-400">Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.</span>
                            </div>
                            <div className="flex items-center gap8px">
                                <span className="text-grey-700 body-small-400">Only for:</span>
                                <div className="padding6px12px rounded-[3px] bg-grey-0 body-medium-600">$299 USD</div>
                            </div>
                        </div>
                    </div>
                    <button className="btn yellow-btn w-full sm:h-4 md:h-5 lg:h-6 xl:h-8 2xl:h-10 3xl:h-12">SHOP NOW <RightArrow/></button>
                </div>
                <div className="flex flex-col w-full h-2/5 rounded justify-evenly bg-[#124261] text-grey-0 padding24px sm:px-3.5 md:px-4 lg:px-5 xl:px-6 2xl:px-7 3xl:px-8 sm:py-3 md:py-4 lg:py-5 xl:py-6.5 2xl:py-8 3xl:py-10">
                    <div className="flex flex-col items-center gap12px">
                        <div className="bg-white-rgba rounded-sm padding6px12px"><span className="body-small-600">SUMMER SALES</span></div>
                        <span className="heading-02">37% DISCOUNT</span>
                        <div className="body-large-400">only for <span className="text-warning-500 body-large-600">SmartPhone</span> product.</div>
                    </div>
                    <button className="btn blue-btn w-full sm:h-4 md:h-5 lg:h-6 xl:h-8 2xl:h-10 3xl:h-12">SHOP NOW <RightArrow/></button>
                </div>
            </div>
        </div>
    )
}