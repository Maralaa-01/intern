
import Footer from "../../../components/footer";
import { Navigation } from "../../../components/navigation";
import House from "../../../../public/assets/house";
import { Item } from "./item";

const VerifyEmail = () => {

  return (
    <>
      <Navigation/>
      <div className="padding-x bg-grey-50 h-12 flex items-center">
        <div className="text-sm breadcrumbs">
          <ul className="body-small-400 text-grey-600">
            <li><House/><a className="ml-2">Home</a></li> 
            <li><a>User Account</a></li> 
            <li className="text-secondary-500 body-small-500">Forget Password</li>
          </ul>
        </div>
      </div>
      <Item/>
      <Footer/>
    </>
  )
}

export default VerifyEmail;