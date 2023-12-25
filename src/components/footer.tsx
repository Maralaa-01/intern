import CliconIcon from "../../public/assets/clicon"
import RightArrow from "../../public/assets/right-arrow"
import GooglePlayIcon from "../../public/assets/google-play"
import AppleStoreIcon from "../../public/assets/apple-store"

export default function Footer(){
    return (
        <div className="flex bottom-0 flex-col bg-grey-900">
            <div className="flex paddingy72px gap-24px text-grey-0 footer padding-x">
                <div className="flex flex-col items-start w-1/4 gap24px">
                    <div className="flex items-center justify-start gap8px foot-clicon">
                        <CliconIcon/>
                        <span className="heading-01">CLICON</span>
                    </div>
                    <div className="flex flex-col items-start gap12px">
                        <div className="flex flex-col">
                            <span className="text-grey-500 body-small-400">Customer Supports:</span>
                            <span className="body-large-500">(629) 555-0129</span>
                        </div>
                        <span className="text-grey-300 body-medium-400 w-2/3">4517 Washington Ave. Manchester, Kentucky 39495</span>
                        <span className="body-medium-500">info@kinbo.com</span>
                    </div>
                </div>
                <div className="flex flex-col items-start w-1/6 gap18px">
                    <span className="label-02 uppercase">Top Category</span>
                    <div className="flex flex-col items-start text-grey-400 body-small-500 gap-2.5">
                        <a>Computer & Laptop</a>
                        <a>SmartPhone</a>
                        <a>Headphone</a>
                        <div className="divider divider-end before:bg-warning-500 text-grey-0 ml-0 mx-3 my-0 before:h-0.5">Accessories</div>
                        <a>Camera & Photo</a>
                        <a>TV & Homes</a>
                        <button className="flex flex-row items-center gap8px text-warning-500 foot-category h-3">
                            Browse All Product
                            <RightArrow/>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col w-1/6 gap18px">
                    <span className="label-02 uppercase">quick links</span>
                    <div className="flex flex-col items-start text-grey-400 body-small-500 gap-2.5">
                        <a >Shop Product</a>
                        <a >Shopping Cart</a>
                        <a >Wishlist</a>
                        <a >Compare</a>
                        <a >Track Order</a>
                        <a >Customer Help</a>
                        <a >About Us</a>
                    </div>
                </div>
                <div className="flex flex-col w-1/6 gap18px foot-download">
                    <span className="label-02 uppercase">download app</span>
                    <div className="flex gap16px rounded-[3px] bg-grey-800 px-4 py-3 w-11/12">
                        <GooglePlayIcon/>
                        <div className="flex flex-col text-grey-0 gap4px">
                            <span className="text-body_xxs_400">Get it now</span>
                            <span className="text-body_tiny_600">Google Play</span>
                        </div>
                    </div>
                    <div className="flex gap16px rounded-[3px] bg-grey-800 px-4 py-3 w-11/12">
                        <AppleStoreIcon/>
                        <div className="flex flex-col text-grey-0 gap4px">
                            <span className="text-body_xxs_400">Get it now</span>
                            <span className="text-body_tiny_600">App Store</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-1/4 gap18px">
                  <span className="label-02 uppercase">popular tag</span>
                  <div className="flex flex-wrap justify-start gap8px text-grey-0 body-small-500 w-full">
                    <div className="padding6px12px rounded-sm border border-grey-800">Game</div>
                    <div className="padding6px12px rounded-sm border border-grey-800">Iphone</div>
                    <div className="padding6px12px rounded-sm border border-grey-800">TV</div>
                    <div className="padding6px12px rounded-sm border border-grey-800">Asus Laptops</div>
                    <div className="padding6px12px rounded-sm border border-grey-800">Macbook</div>
                    <div className="padding6px12px rounded-sm border border-grey-800">SSD</div>
                    <div className="padding6px12px rounded-sm border border-grey-800">Graphics Card</div>
                    <div className="padding6px12px rounded-sm border border-grey-800">Power bank</div>
                    <div className="padding6px12px rounded-sm border border-grey-800">Smart TV</div>
                    <div className="padding6px12px rounded-sm border border-grey-800">Speaker</div>
                    <div className="padding6px12px rounded-sm border border-grey-800">Tablet</div>
                    <div className="padding6px12px rounded-sm border border-grey-800">Microwave</div>
                    <div className="padding6px12px rounded-sm border border-grey-800">Samsung</div>
                  </div>
                </div>
            </div>
            <div className="text-grey-300 padding-x body-small-400 text-center sm:py-2 md:py-3 lg:py-3.5 xl:py-4 2xl:py-5 3xl:py-6 shadow-footer">Kinbo - eCommerce Template © 2021. Design by Templatecookie</div>
        </div>
    )
}