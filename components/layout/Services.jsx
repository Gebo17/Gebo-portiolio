import React, { useState } from 'react'
import { FadeUp } from '..'

const Services = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  return (
    <div className='px-4 mt-4 pb-4 bg-[#E9FFFD] flex flex-col'>
      <div className="flex flex-col lg:flex-row md:gap-4 items-center justify-center pt-4">
      <p className='max-w-[500px] shrink-0 sm:ml-auto '>I offer a wide range of professional design and visual communication solutions tailored to help individuals, brands, and organizations stand out.</p>
      <div className="rounded-full shrink-0 relative mt-4 flex items-center justify-center mx-auto">
          {!imageLoaded && (
            <div className="text-red-500 text-center absolute inset-0 flex items-center justify-center">
              <p className="w-6 h-6 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></p>
            </div>
          )}
          <img
            src="/assets/photos/dan2.jpg"
            alt="about gebo"
            onLoad={() => setImageLoaded(true)}
            className={`w-[300px] h-auto transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-1 md:gap-4 mt-4">
      <FadeUp>
      <div className="mt-2 h-[160px] hover:scale-105 transition-all duration-300 mx-auto flex flex-col justify-center shadow-lg shadow-red-200 rounded-md px-4 min-w-[340px] ">
        <p className='font-semibold'>Brand Identity Design</p>
        <p>➤ Logo design</p>
        <p>➤ Brand style guides</p>
        <p>➤ Color palettes & typography systems</p>
      </div>
      </FadeUp>
      <FadeUp>
      <div className="mt-2 h-[160px] hover:scale-105 transition-all duration-300 mx-auto flex flex-col justify-center shadow-lg shadow-red-200 rounded-md px-4 min-w-[340px]">
        <p className='font-semibold'>Publication Design & Printing</p>
        <p>➤ Posters, flyers, brochures</p>
        <p>➤ Business cards, T-Shirts</p>
        <p>➤ Magazines, books, and Company profiles</p>
      </div>
      </FadeUp>

      <FadeUp>
      <div className="mt-2 h-[160px] hover:scale-105 transition-all duration-300 flex flex-col justify-center shadow-lg shadow-red-200 rounded-md px-4 min-w-[340px]">
        <p className='font-semibold'>Digital & Web Design</p>
        <p>➤ Website design (UI/UX)</p>
        <p>➤ Web development & Management</p>
        <p>➤ Social media graphics</p>
      </div>
      </FadeUp>

      <FadeUp> 
      <div className="mt-2 h-[160px] hover:scale-105 transition-all duration-300 flex flex-col justify-center shadow-lg shadow-red-200 rounded-md px-4 min-w-[340px]">
        <p className='font-semibold'>Advertising & Marketing Materials</p>
        <p>➤ Product packaging & labels</p>
        <p>➤ Billboards, banners, roll-ups</p>
        <p>➤ Infographics and promotional visuals</p>
      </div>
      </FadeUp>
      <FadeUp>
      <div className="mt-2 h-[160px] hover:scale-105 transition-all duration-300 mx-auto flex flex-col justify-center shadow-lg shadow-red-200 rounded-md px-4 min-w-[340px]">
        <p className='font-semibold'>Consultation & Creative Strategy</p>
        <p>➤ Visual communication strategy</p>
        <p>➤ Rebranding and design improvement</p>
        <p>➤ Design for campaigns and events</p>
      </div>
      </FadeUp>

      </div>

    </div>
  )
}

export default Services





