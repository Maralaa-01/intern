'use client';
import { useEffect, useState } from "react"
import RightArrow from "../../public/assets/right-arrow";
import HeartIcon from "../../public/assets/heart";
import CartIcon from "../../public/assets/cart";
import EyesOpen from "../../public/assets/eyes-open";
import EyesNotOpen from "../../public/assets/eyes-not-open";

function calculateTime() {
    const year = new Date().getFullYear();
    var diff = +new Date(`${year}-12-31`) - +new Date();
    let time = [];
  
    if (diff > 0) {
        time['days'] = Math.floor(diff / (1000 * 60 * 60 * 24))
        time['hours'] = Math.floor((diff / (1000 * 60 * 60)) % 24)
        time['minutes'] = Math.floor((diff / 1000 / 60) % 60)
        time['seconds'] = Math.floor((diff / 1000) % 60)
    }
    return time
}

export default function bestDeals(){
    const [time, setTime] = useState(calculateTime())
  
    useEffect(() => {
      const id = setTimeout(() => {
        setTime(calculateTime())
      }, 1000)
      return () => clearTimeout(id)
    })

    return(
        <div className="flex flex-col justsify-center items-center gap24px padding-x paddingy72px">
            <div className="flex flex-row justify-between w-full items-center">
                <div className="flex justify-start items-center gap24px">
                    <span className="heading-03">Best Deals</span>
                    <div className="flex items-center gap12px">
                        <span className="body-small-400 text-black">Deals ends in</span>
                        <div className="countdown flex items-center bg-warning-300 rounded-sm body-medium-400 padding6px12px">
                            <span style={{'--value':time['days']}}></span>d :&nbsp;
                            <span style={{'--value':time['hours']}}></span>h :&nbsp;
                            <span style={{'--value':time['minutes']}}></span>m :&nbsp;
                            <span style={{'--value':time['seconds']}}></span>s
                        </div>
                    </div>
                </div>
                <button className="flex flex-row items-center gap8px text-secondary-500 body-small-600">
                    Browse All Product
                    <RightArrow/>
                </button>
            </div>
            <div className="w-full flex flex-row sm:h-48 md:h-56 lg:h-74 xl:h-[410px] 2xl:h-[470px] 3xl:h-[592px]">
                <div className="flex flex-col w-1/4 h-full border border-grey-100 padding24px gap24px">
                    <div className="flex justify-center align-center overflow-hidden w-full h-1/2"><img src="Xbox-Series-S.png" className="max-h-full"/></div>
                    <div className="flex flex-col h-1/2 w-full justify-between">
                        <div className="flex flex-col justify-start gap6px">
                            <div className="flex flex-row gap-1">
                                <div className="rating sm:rating-xs md:rating-sm 2xl:rating-md">
                                    <input type="radio" name="rating-5" className="mask mask-star bg-warning-500" disabled />
                                    <input type="radio" name="rating-5" className="mask mask-star bg-warning-500" disabled />
                                    <input type="radio" name="rating-5" className="mask mask-star bg-warning-500" disabled />
                                    <input type="radio" name="rating-5" className="mask mask-star bg-warning-500" disabled />
                                    <input type="radio" name="rating-5" className="mask mask-star bg-warning-500" disabled checked />
                                </div>
                                <div className=" flex items-center text-grey-500 body-small-400 sm:pt-0 md:pt-0.5 xl:pt-1 3xl:pt-1.5">(52,677)</div>
                            </div>
                            <span className="body-medium-400">Xbox Series S - 512GB SSD Console with Wireless Controller - EU Versio...</span>
                        </div>
                        <div className="flex flex-row items-center gap4px">
                            <span className="text-grey-300 body-medium-400 line-through">$865.99</span>
                            <span className="text-secondary-500 body-large-600">$442.12</span>
                        </div>
                        <span className="flex justify-start text-grey-600 body-small-400">Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.</span>
                        <div className="flex flex-row items-center gap8px">
                            <div className="flex justify-center items-center bg-primary-100 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-10 xl:w-10 2xl:h-11 2xl:w-11 3xl:h-12 3xl:w-12">
                                <label className="swap swap-rotate best-deals-icon">
                                    <input type="checkbox" />
                                    <HeartIcon />
                                </label>
                            </div>
                            <button className="flex-grow btn yellow-btn best-deal-btn sm:h-4 md:h-5 lg:h-6 xl:h-10 2xl:h-11 3xl:h-12 gap8px w-auto">
                                <CartIcon />
                                add to cart
                            </button>
                            <div className="flex justify-center items-center bg-primary-100 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-9 lg:w-6 xl:h-10 xl:w-10 2xl:h-10 2xl:w-10 3xl:h-12 3xl:w-12">
                                <label className="swap swap-rotate best-deals-icon">
                                    <input type="checkbox" />
                                    <EyesOpen />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-3/4 h-full flex flex-wrap border-t border-grey-100">
                    <div className="h-1/2 w-1/4 border-r border-b border-grey-100 flex flex-col justify-center items-start gap8px sm:p-1 md:p-1.5 lg:p-2 xl:p-2.5 2xl:p-3 3xl:p-4">
                        <div className="flex w-full justify-center items-center overflow-hidden"><img src="/bose-sport-earbuds.png" className="max-h-full"/></div>
                        <span className="body-small-400">Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</span>
                        <span className="body-small-600 text-secondary-500">$2,300</span>
                    </div>
                    <div className="h-1/2 w-1/4 border-r border-b border-grey-100 flex flex-col justify-center items-start gap8px sm:p-1 md:p-1.5 lg:p-2 xl:p-2.5 2xl:p-3 3xl:p-4">
                        <div className="flex w-full justify-center items-center overflow-hidden"><img src="/simpl-mobile.png" className="max-h-full"/></div>
                        <span className="body-small-400">Simple Mobile 4G LTE Prepaid Smartphone</span>
                        <span className="body-small-600 text-secondary-500">$220</span>
                    </div>
                    <div className="h-1/2 w-1/4 border-r border-b border-grey-100 flex flex-col justify-center items-start gap8px sm:p-1 md:p-1.5 lg:p-2 xl:p-2.5 2xl:p-3 3xl:p-4">
                        <div className="flex w-full justify-center items-center overflow-hidden"><img src="/4k-uhd-led.png" className="max-h-full"/></div>
                        <span className="body-small-400">4K UHD LED Smart TV with Chromecast Built-in</span>
                        <div className="inline-flex body-small-600 text-secondary-500">
                            <span className="line-through text-grey-400">$865</span>&nbsp;
                            $1,50
                        </div>
                    </div>
                    <div className="h-1/2 w-1/4 border-r border-b border-grey-100 flex flex-col justify-center items-start gap8px sm:p-1 md:p-1.5 lg:p-2 xl:p-2.5 2xl:p-3 3xl:p-4">
                        <div className="flex w-full justify-center items-center overflow-hidden"><img src="/Sony-DSCHX8.png" className="max-h-full"/></div>
                        <span className="body-small-400">Sony DSCHX8 High Zoom Point & Shoot Camera</span>
                        <span className="body-small-600 text-secondary-500">$1,200</span>
                    </div>
                    <div className="h-1/2 w-1/4 border-r border-b border-grey-100 flex flex-col justify-center items-start gap8px sm:p-1 md:p-1.5 lg:p-2 xl:p-2.5 2xl:p-3 3xl:p-4">
                        <div className="flex w-full justify-center items-center overflow-hidden"><img src="/Dell-Optiplex.png" className="max-h-full"/></div>
                        <span className="body-small-400">Dell Optiplex 7000x7480 All-in-One Computer Monitor</span>
                        <span className="body-small-600 text-secondary-500">$299</span>
                    </div>
                    <div className="h-1/2 w-1/4 border-r border-b border-grey-100 flex flex-col justify-center items-start gap8px sm:p-1 md:p-1.5 lg:p-2 xl:p-2.5 2xl:p-3 3xl:p-4">
                        <div className="flex w-full justify-center items-center overflow-hidden"><img src="/Portable-Wshing-Machine.png" className="max-h-full"/></div>
                        <span className="body-small-400">Portable Wshing Machine, 11lbs capacity Model 18NMFIAM</span>
                        <div className="inline-flex body-small-600 text-secondary-500">
                            <span className="line-through text-grey-400">$865,99</span>&nbsp;
                            $70
                        </div>
                    </div>
                    <div className="h-1/2 w-1/4 border-r border-b border-grey-100 flex flex-col justify-center items-start gap8px sm:p-1 md:p-1.5 lg:p-2 xl:p-2.5 2xl:p-3 3xl:p-4">
                        <div className="flex w-full justify-center items-center overflow-hidden"><img src="/2-Barrel-Carburetor.png" className="max-h-full"/></div>
                        <span className="body-small-400">2-Barrel Carburetor Carb 2100 Engine Increase Horsepower</span>
                        <span className="body-small-600 text-secondary-500">$160</span>
                    </div>
                    <div className="h-1/2 w-1/4 border-r border-b border-grey-100 flex flex-col justify-center items-start gap8px sm:p-1 md:p-1.5 lg:p-2 xl:p-2.5 2xl:p-3 3xl:p-4">
                        <div className="flex w-full justify-center items-center overflow-hidden"><img src="/JBL-FLIP-4.png" className="max-h-full"/></div>
                        <span className="body-small-400">JBL FLIP 4 - Waterproof Portable Bluetooth Speaker - Black</span>
                        <div className="inline-flex body-small-600 text-secondary-500">
                            <span className="line-through text-grey-400">$360</span>&nbsp;
                            $250
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}