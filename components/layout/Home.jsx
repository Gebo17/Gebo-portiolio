import Image from 'next/image'
import React from 'react'

const Home = () => {
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
      <div className="text-center w-full absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
          <p className='font-semibold text-4xl'>Let's Build</p>
        <p className='font-semibold text-4xl'>Amazing Things</p>
        <p className='font-semibold text-4xl'>That Stand Out</p>
        <div className="mt-4 flex gap-2 justify-center items-center">
          <div className='w-20 h-[2px] bg-white ' />
          Together
          <div className='w-20 h-[2px] bg-white ' />
        </div>
      </div>
      
    </div>
  )
}

export default Home
