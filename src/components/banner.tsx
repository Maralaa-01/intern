import RightArrow from "../../public/assets/right-arrow"

export default function HomeBanner(){
    return (
        <div className="padding-x gap24px flex w-full h-[248px]">
            <div className="flex justify-center items-center padding44px gap40px rounded bg-grey-50 w-1/2">
                <div className="w-1/2 flex flex-col items-start gap20px">
                    <div className="flex flex-col items-start gap12px">
                        <div className="flex flex-col items-start gap8px">
                            <div className="badge deals-badge body-small-600">introducing</div>
                            <span className="heading-01">New Apple Homepod Mini</span>
                        </div>
                        <span className="body-medium-400 text-grey-700">Jam-packed with innovation, HomePod mini delivers unexpectedly.</span>
                    </div>
                    <button className="btn yellow-btn flex btn-height-1">SHOP NOW <RightArrow/></button>
                </div>
                <div className="w-1/2"><img src="/banner-1.png" /></div>
            </div>
            <div className="flex justify-center items-center w-1/2 rounded bg-grey-900 overflow-hidden">
                <div className="flex flex-col items-start w-1/2 gap20px sm:py-5 md:py-6 lg:py-7 xl:py-8 2xl:py-9 3xl:py-11 sm:pl-5 md:pl-6 lg:pl-7 xl:pl-8 2xl:pl-9 3xl:pl-11">
                    <div className="flex flex-col items-start gap12px">
                        <div className="flex flex-col items-start gap8px">
                            <div className="badge off-badge body-small-600">INTRODUCING NEW</div>
                            <span className="text-grey-0 heading-01">New Apple Homepod Mini</span>
                        </div>
                        <span className="body-medium-400 text-grey-300">*Data provided by internal laboratories. Industry measurment.</span>
                    </div>
                    <button className="btn yellow-btn btn-height-1 flex">SHOP NOW <RightArrow/></button>
                </div>
                <div className="h-full w-1/2 mt-6 flex justify-center"><img src="/banner-2.png" className="max-h-full" /></div>
            </div>
        </div>
    )
}