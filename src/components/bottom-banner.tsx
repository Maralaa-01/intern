import RightArrow from "../../public/assets/right-arrow"

export default function BottomBanner(){
    return (
        <div className="bg-primary-100 flex justify-between mx-[184px] h-[356px]">
            <div className="flex flex-col py-16 pl-14 gap22px w-1/3 items-start justify-center">
                <div className="flex flex-col gap12px items-start">
                    <div className="deals-badge body-small-600">SAVE UP TO $200.00</div>
                    <span className="display-03">Macbook Pro</span>
                </div>
                <span className="body-xxl-400">Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage</span>
                <button className="btn yellow-btn paddingx32px h-11">SHOP NOW <RightArrow/></button>
            </div>
            <div className="flex relative w-2/5 h-full">
                <div className="badge rounded-full py-8.5 top-10 left-6 absolute bg-primary-200 text-grey-900 body-xl-600 border-grey-0 border-2">$1999</div>
                <img src="/macbook-pro.png"/>
            </div>
        </div>
    )
}