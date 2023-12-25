'use client';
import TwitterIcon from '../../public/assets/twitter';
import FacebookIcon from '../../public/assets/facebook';
import PinterestIcon from '../../public/assets/pinterest';
import RedditIcon from '../../public/assets/reddit';
import YoutubeIcon from '../../public/assets/youtube';
import InstagramIcon from '../../public/assets/instagram';
import Check from '../../public/assets/check';
import DownArrow from '../../public/assets/down-arrow';
import { useState } from 'react';

export const NavTop = () => {
  const [cur, setCur] = useState(0)
  const [lang, setLang] = useState(0)
  return (
    <div className="navbar shadow-topNav padding-x">
      <div className="text-grey-0 text-body_xs_400 2xl:text-body_small_400">Welcome to Clicon online eCommerce store.</div>
      <div className="flex justify-between items-centersm:gap-2 lg:gap-4 2xl:gap-6">
        <div className="flex justify-center items-center text-grey-0 gap-1.5 text-body_xs_400 2xl:gap-3 2xl:text-body_small_400">
          Follow us:
          <div className="flex flex-start gap-3">
            <TwitterIcon/>
            <FacebookIcon/>
            <PinterestIcon/>
            <RedditIcon/>
            <YoutubeIcon/>
            <InstagramIcon/>
          </div>
        </div>
        <div className="border border-grey-0 border-opacity-10 h-4 2xl:h-6"></div>
        <div className="dropdown dropdown-bottom dropdown-end flex items-center">
          <label tabIndex={0} className="btn min-h-0 p-0 bg-transparent border-0 shadow-none text-grey-0 hover:bg-transparent gap-1 h-3 text-body_xs_400 2xl:gap-2 2xl:h-5 2xl:text-body_small_400">
            {lang==0 ? "Eng" : lang==1 ? "Cns" : "Rus"}
            <DownArrow/>
          </label>
          <ul tabIndex={0} className="dropdown-content z-10 menu lang-dropdown rounded-[3px]">
            <li><a onClick={() => {setLang(0)}}>
              <img src='/USflag.png' alt="USFlag" className="lang-flags" />
              English
              {lang==0 ? <Check /> : null } 
            </a></li>
            <li><a onClick={() => {setLang(1)}}>
              <img src='/CNflag.png' alt="USFlag" className="lang-flags" />
              Mandarin
              {lang==1 ? <Check /> : null } 
            </a></li>
            <li><a onClick={() => {setLang(2)}}>
              <img src='/RUflag.png' alt="USFlag" className="lang-flags" />
              Russian
              {lang==2 ? <Check /> : null } 
            </a></li>
          </ul>
        </div>
        <div className="dropdown dropdown-bottom flex items-center">
          <label tabIndex={0} className="btn min-h-0 p-0 bg-transparent border-0 shadow-none text-grey-0 hover:bg-transparent gap-1 h-3 text-body_xs_400 2xl:gap-2 2xl:h-5 2xl:text-body_small_400">
            {cur==0 ? "USD" : "EUR" }
            <DownArrow/>
          </label>
          <ul tabIndex={0} className="dropdown-content z-[1] menu lang-dropdown rounded-[3px]">
            <li><a onClick={() => {setCur(0)}} className='flex justify-between'>Dollar (USD) {cur==0 ? <Check /> : null } </a></li>
            <li><a onClick={() => {setCur(1)}} className='flex justify-between'>Euro (EUR) {cur==1 ? <Check /> : null } </a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}