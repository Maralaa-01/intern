
import House from "../../../public/assets/house"
import CartIcont from "../../../public/assets/cart"
import RightArrow from "../../../public/assets/right-arrow"
import Footer from "../../components/footer"
import SearchIcon from "../../../public/assets/search"
import DownArrow from "../../../public/assets/down-arrow"
import XIcon from "../../../public/assets/x"
import { Navigation } from "../../components/navigation"
import { Categories, PopularBrands, PopularTag } from "../../config"
import Items from "./items"

const Shop = () => {
  return (
    <>
      <Navigation/>
      <div className="padding-x bg-grey-50 h-12 flex items-center">
        <div className="text-sm breadcrumbs">
          <ul className="body-small-400 text-grey-600">
            <li><House/><a className="ml-2">Home</a></li> 
            <li><a>Shop</a></li> 
            <li><a>Shop Grid</a></li> 
            <li className="text-secondary-500 body-small-500">Computer & Laptop</li>
          </ul>
        </div>
      </div>
      <div className="padding-x pt-10 pb-14 gap24px flex">
        <form className="flex flex-col items-start gap24px w-1/5 filter">
          <div className="flex flex-col items-start gap16px">
            <label className="uppercase label-02">Category</label>
            <div className="flex flex-col gap12px">
              <label className="label label-fil p-0 justify-start cursor-pointer">
                <input type="radio" className="radio fil" name="category" checked />
                <span className='label-text text-grey-700 body-small-400'>All</span>
              </label>
              {Categories.map((cat) => (
                <label key={cat.index} className="label label-fil p-0 justify-start cursor-pointer">
                  <input type="radio" className="radio fil" name="category" />
                  <span className='label-text text-grey-700 body-small-400'>{cat.label}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="divider m-0 body-small-400 text-grey-100"></div>
          <div className="flex flex-col items-start gap16px">
            <label className="uppercase label-02">Price Range</label>
            <div><input type="range" min={0} max="100" value="40" className="range range-xs" /> </div>
            <div className="flex gap12px">
              <input type="number" className="w-1/2 rounded-[3px] flex items-center pl-2 py-2 body-small-400 placeholder:text-grey-500" placeholder="Min price" />
              <input type="number" className="w-1/2 rounded-[3px] flex items-center pl-2 py-2 body-small-400 placeholder:text-grey-500" placeholder="Max price" />
            </div>
            <div className="flex flex-col gap12px">
              <label className="label label-fil p-0 justify-start cursor-pointer">
                <input type="radio" className="radio fil" name="price" checked />
                <span className='label-text text-grey-700 body-small-400'>All price</span>
              </label>
              <label className="label label-fil p-0 justify-start cursor-pointer">
                <input type="radio" className="radio fil" name="price" />
                <span className='label-text text-grey-700 body-small-400'>Under $20</span>
              </label>
              <label className="label label-fil p-0 justify-start cursor-pointer">
                <input type="radio" className="radio fil" name="price" />
                <span className='label-text text-grey-700 body-small-400'>$25 - $100</span>
              </label>
              <label className="label label-fil p-0 justify-start cursor-pointer">
                <input type="radio" className="radio fil" name="price" />
                <span className='label-text text-grey-700 body-small-400'>$100 - $300</span>
              </label>
              <label className="label label-fil p-0 justify-start cursor-pointer">
                <input type="radio" className="radio fil" name="price" />
                <span className='label-text text-grey-700 body-small-400'>$300 - $500</span>
              </label>
              <label className="label label-fil p-0 justify-start cursor-pointer">
                <input type="radio" className="radio fil" name="price" />
                <span className='label-text text-grey-700 body-small-400'>$500 - $1,000</span>
              </label>
              <label className="label label-fil p-0 justify-start cursor-pointer">
                <input type="radio" className="radio fil" name="price" />
                <span className='label-text text-grey-700 body-small-400'>$1,000 - $10,000</span>
              </label>
            </div>
          </div>
          <div className="divider m-0 body-small-400 text-grey-100"></div>
          <div className="flex flex-col items-start gap16px w-full">
            <label className="uppercase label-02">popular brands</label>
            <div className="grid grid-cols-2 gap-2 w-full">
              {PopularBrands.map((brand) => (
                <label key={brand} className="flex items-center text-grey-700 body-small-400">
                  <input type="checkbox" className="checkbox mr-1.5 rounded-sm h-4 w-4 border-grey-200 checked:border-primary-500 [--chkbg:theme(colors.primary.500)] [--chkfg:white]" />
                  <span>{brand}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="divider m-0 body-small-400 text-grey-100"></div>
          <div className="flex flex-col gap18px">
            <label className="uppercase label-02">popular tag</label>
            <div className="flex flex-wrap justify-start gap8px body-small-500 w-full">
              {PopularTag.map((tag) => (
                <label key={tag} className="padding6px12px rounded-sm border border-grey-100 cursor-pointer hover:border hover:border-primary-500 hover:bg-primary-50 hover:text-primary-500">{tag}</label>
              ))}
            </div>
          </div>
          <div className="flex flex-col padding32px gap24px w-full">
            <img src="/watch-series-7.png"/>
            <div className="flex flex-col justify-center items-center gap12px">
              <div className="flex flex-col justify-center items-center gap8px">
                <img src="/series-7.png" className="h-12" />
                <label className="text-center heading-03">Heavy on Features. Light on Price.</label>
              </div>
              <div className="flex justify-center items-center gap8px">
                <label className="body-small-400 text-grey-700">Only for:</label>
                <a className="padding6px12px rounded-[3px] bg-warning-300 text-center cursor-pointer body-medium-600">$299 USD</a>
              </div>
            </div>
            <div className="flex flex-col gap12px">
              <a className="btn yellow-btn h-9"><CartIcont/>add to cart</a>
              <a className="btn white-btn h-9">view details<RightArrow/></a>
            </div>
          </div>
        </form> 
        <div className="flex flex-col w-4/5">
          <div className="flex justify-between items-center w-full">
            <div className="flex py-2.5 px-3.5 gap8px rounded-sm border border-grey-100 items-center w-1/3">
              <input type="text" className="body-small-400 placeholder:text-grey-500 border-none focus-visible:outline-0 w-full" placeholder="Search for anything..." />
              <SearchIcon/>
            </div>
            <div className="flex gap22px items-center">
              <label className="body-small-400">Sort by:</label>
              <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button" className="flex justify-center py-2.5 items-center text-grey-700 body-small-400 bg-grey-0 h-full p-0 gap-8 border border-grey-100 rounded-sm px-3">Most Recent <DownArrow/></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu bg-grey-0 rounded-sm w-full mt-1 px-0 py-2">
                  <li><a>Most Recent</a></li>
                  <li><a>Most Popular</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center rounded bg-grey-50 py-2.5 px-4 mt-3">
            <div className="flex items-center h-4 body-small-400 gap16px">
              <label className="text-grey-600">Active Filters:</label>
              <div className="flex gap6px items-center icon">
                <label>Computer & Laptop</label>
                <XIcon />
              </div>
            </div>
            <div className="flex">
              <label className="body-small-600">65,867</label>
              <label className="text-grey-600 body-small-400">&nbsp; Results found.</label>
            </div>
          </div>
          <Items query={{ sort: 'desc', limit: 24 }} href='/products?sort=recent' />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="join-item btn">1</button>
        <button className="join-item btn btn-active">2</button>
        <button className="join-item btn">3</button>
        <button className="join-item btn">4</button>
      </div>
      <Footer/>
    </>
  )
}
export default Shop