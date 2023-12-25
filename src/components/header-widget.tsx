'use client'
import XIcon from "../../public/assets/x"
import RightArrow from "../../public/assets/right-arrow"
import { useState } from "react"

export default function headerWidget() {
  const [show, setShow] = useState(true)
  return (
      <>
      {show ? (
          <div className="flex justify-end items-center">
              <div className='bg-grey-900 flex items-center justify-between w-full padding-x md:h-10 lg:h-14 xl:h-12 2xl:h-16 3xl:h-20'>
                  <div className='inline-flex items-center'>
                      <div className='-rotate-3 bg-warning-300 sm:py-0 sm:px-0.5 lg:py-0.5 lg:px-1.5 body-xl-600 2xl:py-1.5 2xl:px-2.5 text-grey-900'>Black</div>
                      <div className='text-grey-0 heading-03 ml-1.5 2xl:ml-3'>Friday</div>
                  </div>
                  <div className='inline-flex items-center justify-between gap-1 2xl:gap-2'>
                      <div className='text-grey-0 body-small-400'>Up to</div>
                      <div className='text-warning-500 display-04'>59%</div>
                      <div className='text-grey-0 body-xl-600'>OFF</div>
                  </div>
                  <button className='btn bg-warning-500 text-grey-900 rounded-sm min-h-0 px-3 heading-05 gap-1 2xl:px-6 sm:h-6 md:h-8 lg:h-8 xl:h-9 2xl:h-12 2xl:gap-2'>
                      SHOP NOW
                      <RightArrow/>
                  </button>
              </div>
              <button onClick={() => setShow(false)} className="btn btn-square bg-grey-800 rounded-sm min-h-0 flex absolute h-5 w-5 mr-3 2xl:h-8 2xl:w-8 2xl:mr-6 head-widget">
                  <XIcon />
              </button>
          </div>
      ) : null}
      </>
      
  )
}