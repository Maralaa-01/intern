import RightArrow from "../../public/assets/right-arrow";
import DotIcon from "../../public/assets/dot";
import PackageIcon from "../../public/assets/package";
import TrophyIcon from "../../public/assets/trophy";
import CreditCard from "../../public/assets/credit-card";
import Headphones from "../../public/assets/headphones";

export default function HomeWidgets() {
    return (
        <div className="padding-x">
            {/*Widgets*/}
            <div className="flex items-start gap24px sm:py-2 lg:py-4 3xl:py-6">
                {/*Widget*/}
                <div className="relative w-2/3 sm:h-44 md:h-52 lg:h-[275px] xl:h-[380px] 2xl:h-[420px] 3xl:h-[520px] rounded-md bg-grey-50 flex flex-row items-center sm:p-4.5 md:p-5.5 lg:p-7.5 xl:p-9 2xl:p-11 3xl:p-14">
                    <div className="absolute bottom-0 inline-flex items-start gap8px sm:mb-4.5 md:mb-5.5 lg:mb-7.5 xl:mb-9 2xl:mb-11 3xl:mb-14">
                        <span className="dot"><DotIcon/></span>
                        <span className="ndot"><DotIcon/></span>
                        <span className="ndot"><DotIcon/></span>
                    </div>
                    <div className="flex flex-col w-1/2 gap24px">
                        <div className="flex flex-col gap16px w-auto">
                            <div>
                                <div className="divider divider-end before:bg-secondary-500 w-2/3 m-0"><span className="text-secondary-500 body-small-600">THE BEST PLACE TO PLAY</span></div>
                                <span className="display-03 text-grey-900">Xbox Consoles</span>
                            </div>
                            <span className="body-large-400 text-grey-700 w-auto">Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.</span>
                        </div>
                        <button className="btn yellow-btn w-1/2 heading-04">
                            Shop now
                            <RightArrow/>
                        </button>
                    </div>
                    <div className="w-1/2 h-full relative">
                        <img src="/xbox.png" className="h-full"/>
                        <div className=" absolute top-0 right-1 flex justify-center items-center rounded-full border-4 border-grey-0 bg-secondary-500 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 3xl:w-[100px] 3xl:h-[100px]">
                            <span className="text-grey-0 body-large-600">$299</span>
                        </div>
                    </div>
                </div>
                {/*Small Widget*/}
                <div className="flex flex-col items-start w-1/3 gap24px lg:h-[275px] xl:h-[380px] 2xl:h-[420px] 3xl:h-[520px] small-widget">
                    <div className="flex flex-row rounded-md bg-grey-900 w-full h-1/2">
                        <div className="w-1/2 h-full inline-flex flex-col items-start justify-center gap18px sm:px-3 md:px-3.5 lg:px-5 xl:px-6 2xl:px-8 3xl:px-10">
                            <div className="flex flex-col items-start justify-center gap5px">
                                <span className="text-warning-500 label-03 uppercase">Summer Sales</span>
                                <span className="text-grey-0 heading-03">New Google Pixel 6 Pro</span>
                            </div>
                            <button className="btn yellow-btn w-full sm:h-4 md:h-5 lg:h-6 xl:h-8 2xl:h-[38px] 3xl:h-12 gap8px p-0">
                                SHOP NOW
                                <RightArrow/>
                            </button>
                        </div>
                        <div className="w-1/2 h-full relative flex items-end">
                            <div className="absolute right-0 top-0 sm:mt-2 md:mt-2.5 lg:mt-3 xl:mt-4 2xl:mt-5 3xl:mt-6 sm:mr-2 md:mr-2.5 lg:mr-3 xl:mr-4 2xl:mr-5 3xl:mr-6 flex bg-warning-400 rounded-sm uppercase text-[#141414] body-medium-600 sm:py-0.5 md:py-0.5 lg:py-1 xl:py-1.25 2xl:py-1.5 3xl:py-2 sm:px-1.5 md:px-2 lg:px-2.5 xl:px-3 2xl:px-3.5 3xl:px-4">29% off</div>
                            <img src="/pixel6pro.png"/>
                        </div>
                    </div>
                    <div className="rounded-md bg-grey-50 w-full h-1/2 flex flex-row items-center gap20px sm:p-3 md:p-3.5 lg:p-5 xl:p-6 2xl:p-8 3xl:p-10">
                        <div className="flex justify-end w-1/2 h-full ">
                            <img src="/xiaomi-flipbuds.png" />
                        </div>
                        <div className="flex flex-col items-start gap20px w-1/2">
                            <div className="flex flex-col gap12px">
                                <span className="text-grey-900 heading-03">Xiaomi<br/> FlipBuds Pro</span>
                                <span className="text-secondary-500 body-large-600">$299 USD</span>
                            </div>
                            <button className="btn yellow-btn w-10/12 sm:h-4 md:h-5 lg:h-6 xl:h-8 2xl:h-[38px] 3xl:h-12 gap8px p-0">
                                SHOP NOW
                                <RightArrow/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/*Features*/}
            <div className="flex justify-center items-center border border-grey-100 rounded-md gap28px padding16px features divide-x">
                <div className="w-1/4 flex justify-center items-center padding16px gap16px">
                    <PackageIcon/>
                    <div className="flex flex-col gap4px">
                        <span className="label-03 uppercase">Fasted Delivery</span>
                        <span className="text-grey-600 body-small-400">Delivery in 24/H</span>
                    </div>
                </div>
                <div className="w-1/4 flex justify-center items-center padding16px gap16px">
                    <TrophyIcon/>
                    <div className="flex flex-col gap4px">
                        <span className="label-03 uppercase">24 Hours Return</span>
                        <span className="text-grey-600 body-small-400">100% money-back guarantee</span>
                    </div>
                </div>
                <div className="w-1/4 flex justify-center items-center padding16px gap16px">
                    <CreditCard/>
                    <div className="flex flex-col gap4px">
                        <span className="label-03 uppercase">Secure Payment</span>
                        <span className="text-grey-600 body-small-400">Your money is safe</span>
                    </div>
                </div>
                <div className="w-1/4 flex justify-center items-center padding16px gap16px">
                    <Headphones/>
                    <div className="flex flex-col gap4px">
                        <span className="label-03 uppercase">Support 24/7</span>
                        <span className="text-grey-600 body-small-400">Live contact/message</span>
                    </div>
                </div>                
            </div>
        </div>
    )
}