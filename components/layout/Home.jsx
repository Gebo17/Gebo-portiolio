import { ABOUT_LINKS } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Home = ({setCurrentTab, CurrentTab}) => {
console.log('')
  return (
    <div className='min-h-[50vh] relative w-full'>
      <div className="absolute z-10 left-0 top-0 w-full h-full">
              <Image
                src="/assets/photos/aboutbg.png"
                alt="bg photo"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div>
              <div className="mx-auto absolute z-20 top-0 left-0 sm:pr-4 py-2 bg-amber-50 flex flex-wrap justify-center items-center gap-1 capitalize w-full">
                        {ABOUT_LINKS.map((navlink, index) => (
                          <div className="cursor-pointer text-[10px] md:text-[18px] sm:text-[16px] max-sm:font-semibold capitalize" key={index}>
                            <p onClick={ () => setCurrentTab(navlink.text) } className={`p-1 text-white rounded-md bg-primary-red`}  > {navlink.text} </p>
                          </div>
                        ))}
                </div>
            </div>

       { CurrentTab === 'home' && <div className="text-center w-full absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
        <p className='font-semibold text-4xl'>Let's Build</p>
        <p className='font-semibold text-4xl'>Amazing Things</p>
        <p className='font-semibold text-4xl'>That Stand Out</p>
        <div className="mt-4 flex gap-2 justify-center items-center">
          <div className='w-20 h-[2px] bg-white ' />
          Together
          <div className='w-20 h-[2px] bg-white ' />
        </div>
      </div>}
      {CurrentTab == 'branding' && <p>brand</p> }
      
    </div>
  )
}

export default Home
