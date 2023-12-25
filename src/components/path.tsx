import House from "../../public/assets/house"

export default function Path({  }) {
  return (
    <div className="padding-x bg-grey-50 h-12 flex items-center">
      <div className="text-sm breadcrumbs">
        <ul className="body-small-400 text-grey-600">
          <li><House/><a className="ml-2">Home</a></li> 
          <li><a>a</a></li> 
          <li className="text-secondary-500 body-small-500">Sign Up</li>
        </ul>
      </div>
    </div>
  )
}