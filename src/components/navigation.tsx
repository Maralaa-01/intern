
import CliconIcon from '../../public/assets/clicon';
import SearchIcon from '../../public/assets/search';
import Cart from '../../public/assets/cart';
import HeartIcon from '../../public/assets/heart';
import XIcon from '../../public/assets/x';
import RightArrow from '../../public/assets/right-arrow';
import { NavTop } from './nav-top'
import { NavMiddle } from './nav-middle'
import { UserNavMiddle } from './nav-middle-user';
import { NavBottom } from './nav-bottom'
import { getServerSideUser } from '../lib/payload-utils';
import { cookies } from 'next/headers'

//Navigation Bar
export const Navigation = async () => {
  const nextCookies = cookies()
  const { user } = await getServerSideUser( nextCookies )
    
  return (
    <header className="flex items-start flex-col bg-secondary-700 sticky top-0 w-full z-50">
      <NavTop />
      <div className="navbar padding-x">
        <div className="flex justify-between items-center text-grey-0 font-bold min-h-0 gap-1 text-heading4 2xl:gap-2 2xl:text-heading1 middle-nav-icon">
          <CliconIcon/>
          CLICON
        </div>
        <div className="flex flex-row items-center border-0 w-1/2 relative">
          <input type="text" placeholder="Search for anything..." className="w-full placeholder-grey-500 bg-grey-0 h-8 m-0 pl-3 placeholder:text-body_xs_400 text-body_xs_400 gap-1 py-2 pr-8 rounded-sm shadow-middleNavSearch " />
          <span className='absolute right-3 z-50 bg-grey-0'><SearchIcon/></span>
        </div>
        <div className="flex items-center sm:gap-2 lg:gap-4 2xl:gap-6">
          {user 
          ? <div className="dropdown dropdown-end">
              <div className="flex items-center">
                <label tabIndex={0} className="btn btn-ghost btn-circle h-auto w-auto min-h-0">
                  <div className="indicator middle-nav-icon">
                    <Cart/>
                    <span className="badge badge-sm indicator-item -translate-y-1/4 translate-x-1/4 border-grey-0 text-secondary-700 bg-grey-0 px-1 h-auto text-body_xxs_600 2xl:px-2 2xl:text-body_small_600">2</span>
                  </div>
                </label>
              </div>
              <div tabIndex={0} className="card card-compact dropdown-content middle-nav-dropdown z-[1] shadow-navDropdown rounded">
                <div className="card-body gap-3">
                  <div className='form-control flex flex-col items-start gap-4 2xl:gap-5 pb-5 2xl:pb-6'>
                    <span className='text-start text-body_small_400 w-[300px] py-3 px-5 2xl:py-4 2xl:px-6 2xl:text-body_medium_400 2xl:w-[376px] shadow-navCart'>
                      Shopping cart 
                      <span className='text-grey-600'> (02)</span>
                    </span>
                    <div className='flex flex-col w-full items-start px-5 2xl:px-6 gap-3 2xl:gap-4'>
                      <div className='flex w-full justify-between items-center gap-3 2xl:gap-4 rounded-[3px]'>
                        <img src='/JBL-FLIP-4.png' className='border border-grey-100 w-16 h-16 2xl:w-20 2xl:h-20' />
                        <div className='flex flex-col items-start gap-2'>
                          <span className='text-body_xs_400 2xl:text-body_small_400'>
                            Canon EOS 1500D DSLR Camera Body+ 18-55 mm
                          </span>
                          <div className='flex items-start gap-1'>
                            <span className='text-grey-600 text-body_xs_400 2xl:text-body_small_400'>1 x</span>
                            <span className='text-secondary-500 text-body_xs_600 2xl:text-body_small_600'>$1,500</span>
                          </div>
                        </div>
                        <button className="navCartX">
                          <XIcon/>
                        </button>
                      </div>
                      <div className='flex w-full justify-between items-center gap-3 2xl:gap-4 rounded-[3px]'>
                        <img src='/Sony-DSCHX8.png' className='border border-grey-100 w-16 h-16 2xl:w-20 2xl:h-20' />
                        <div className='flex flex-col items-start gap-2'>
                          <span className='text-body_xs_400 2xl:text-body_small_400'>
                            Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone
                          </span>
                          <div className='flex items-start gap-1'>
                            <span className='text-grey-600 text-body_xs_400 2xl:text-body_small_400'>2 x</span>
                            <span className='text-secondary-500 text-body_xs_600 2xl:text-body_small_600'>$269</span>
                          </div>
                        </div>
                        <button className="navCartX">
                          <XIcon/>
                        </button>
                      </div>
                    </div>
                    <div className="divider m-0 divider-grey-100"></div> 
                    <div className='flex justify-between w-full px-5 2xl:px-6'>
                      <span className='text-grey-700 text-body_xs_400 2xl:text-body_small_400'>Sub-Total:</span>
                      <span className='text-body_xs_500 2xl:text-body_small_500'>$2038.00 USD</span>
                    </div>
                    <div className='flex flex-col items-start w-full px-5 2xl:px-6 gap-2 2xl:gap-3'>
                      <button className='btn btn-block yellow-btn sm:h-6 md:h-8 lg:h-9 xl:h-10 2xl:h-12 3xl:h-14'>Checkout Now<RightArrow/></button>
                      <button className='btn btn-block white-btn sm:h-6 md:h-8 lg:h-9 xl:h-10 2xl:h-12 3xl:h-14'>View cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          : null}
          <div className=' middle-nav-icon'>
            <HeartIcon/>
          </div>
          {user 
          ? <UserNavMiddle user={user} />
          : <NavMiddle />}
        </div>
      </div>
      <NavBottom />    
    </header>
  )
}