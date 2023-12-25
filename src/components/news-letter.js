import RightArrow from "../../public/assets/right-arrow"
import GoogleIcon from "../../public/assets/google"
import AmazonIcon from "../../public/assets/amazon"
import PhilipsIcon from "../../public/assets/philips"
import ToshibaIcon from "../../public/assets/toshiba"
import SamsungIcon from "../../public/assets/samsung"

export default function Newsletter(){
    return (
        <div className="flex flex-col items-center padding-x paddingy72px gap32px bg-secondary-700">
            <div className="w-1/2 flex flex-col items-center justify-center gap12px text-grey-0 text-center heading-01">
                Subscribe to our newsletter
                <span className=" body-medium-400 opacity-70">Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.</span>
            </div>
            <div className="w-1/2 flex padding12px gap16px items-center bg-grey-0 rounded-[3px] shadow-newsletter">
                <input type="text" placeholder="Email address" className="input h-10 w-full bg-transparent placeholder:text-body_tiny_400 placeholder:text-grey-500"></input>
                <button className="btn yellow-btn h-min-0 h-10">SUBSCRIBE <RightArrow/></button>
            </div>
            <div className="flex items-start gap48px opacity-60">
                <GoogleIcon/>
                <AmazonIcon/>
                <PhilipsIcon/>
                <ToshibaIcon/>
                <SamsungIcon/>
            </div>
        </div>
    )
}