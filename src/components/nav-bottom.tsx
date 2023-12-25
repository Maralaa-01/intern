'use client'

import DownArrow from '../../public/assets/down-arrow';
import MapPin from '../../public/assets/mappin';
import ArrowClockwise from '../../public/assets/arrow-clockwise';
import Headphones from '../../public/assets/headphones';
import Info from '../../public/assets/info';
import PhoneCall from '../../public/assets/phone-call';
import { useState } from 'react';
import { Categories } from '../config';

export const NavBottom = () => {
  const [cat,setcat] = useState(false)
  const [subcat, setsubcat] = useState(false)
  const [sub, setsub] = useState(0)

  return (
    <div className='navbar bg-grey-0 shadow-bottomNav padding-x'>
      <div className='flex justify-center items-center sm:gap-2 lg:gap-4 2xl:gap-6'>
        <details className='dropdown'>
          <summary tabIndex={0} onClick={() => setcat(!cat)} 
            className={`btn border-none h-10 2xl:h-12 shadow-none rounded-sm min-h-0 px-5 py-2.5 2xl:px-6 2xl:py-3.5
            ${cat == false ? "bg-grey-50 hover:bg-grey-50" : "bg-primary-500 hover:bg-primary-500"}`}
          >
            <span className='text-grey-900 text-body_xs_500 2xl:text-body_small_500'>All Category</span>
            {cat == false 
              ? <div className='navAllCatArrow'><DownArrow/></div>
              : <div className='navAllCatArrow rotate-180'><DownArrow/></div>}
          </summary>
          <ul className="dropdown-content second-dropdown mt-2 z-[1] menu py-3 px-0 bg-grey-0 rounded-[3px] w-46">
            {Categories.map((cat) => (
              <>
              <li key={cat.index} onClick={() => { 
                if( sub == cat.index ){
                  setsubcat(!subcat)
                } else {
                  setsub(cat.index)
                  setsubcat(true)
                }
                  
              }}>
                <a>{cat.label}</a>
              </li>
              </>
            ))}
            {subcat == false 
              ? ''
              : <div className={'absolute border border-grey-100 flex start-full top-0 ml-2.5 w-[400px] bg-grey-0 p-5 shadow-navDropdown rounded-[3px] gap20px'}>
                  <ul className='w-1/3'>
                    {Categories.map((cat) => (
                      cat.index == sub
                      ? cat.subCat.map((subc, i) => (
                        <li key={subc} className={`${i == 0 ? 'bg-grey-50 text-grey-900' : 'text-grey-600'}`}><a>{subc}</a></li>
                      ))
                      : ''
                    ))}
                    
                  </ul>
                  <div className='w-2/3 justify-between flex flex-col'>
                    <div className='uppercase body-medium-600'>Featured Phones</div>
                    <div></div>
                  </div>
                </div>
            }
          </ul>
        </details>
        <div className='bottomNavLeft'>
          <MapPin />
          <span className='body-small-400 text-grey-600'>Track Order</span>
        </div>
        <div className='bottomNavLeft'>
          <ArrowClockwise/>
          <span className='body-small-400 text-grey-600'>Track Order</span>
        </div>
        <div className='bottomNavLeft'>
          <Headphones/>
          <span className='body-small-400 text-grey-600'>Track Order</span>
        </div>
        <div className='bottomNavLeft'>
          <Info/>
          <span className='body-small-400 text-grey-600'>Track Order</span>
        </div>
      </div>
      <div className='flex justify-center items-center sm:gap-0.5 lg:gap-1 2xl:gap-2'>
        <PhoneCall/>
        <span className='body-large-400 text-grey-900'>+1-202-555-0104</span>
      </div>
    </div>      
  )
}