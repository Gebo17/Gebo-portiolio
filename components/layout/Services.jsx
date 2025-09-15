import React from 'react'
import { FadeUp } from '..'

const Services = () => {
  return (
    <div className='px-4 mt-4 pb-4'>
      <p className='max-w-[500px] sm:mx-auto '>I offer a wide range of professional design and visual communication solutions tailored to help individuals, brands, and organizations stand out.</p>
      <div className="flex flex-wrap gap-2 md:gap-4 mt-4">
      <FadeUp>
      <div className="mt-2 h-[180px] flex flex-col justify-center shadow-lg shadow-red-200 rounded-md p-4 min-w-[350px] ">
        <p>Brand Identity Design</p>
        <p>➤ Logo design</p>
        <p>➤ Brand style guides</p>
        <p>➤ Color palettes & typography systems</p>
      </div>
      </FadeUp>
      <FadeUp>
      <div className="mt-2 h-[180px] flex flex-col justify-center shadow-lg shadow-red-200 rounded-md p-4 min-w-[350px]">
        <p>Publication Design & Printing</p>
        <p>➤ Posters, flyers, brochures</p>
        <p>➤ Business cards, T-Shirts</p>
        <p>➤ Magazines, books, and Company profiles</p>
      </div>
      </FadeUp>

      <FadeUp>
      <div className="mt-2 h-[180px] flex flex-col justify-center shadow-lg shadow-red-200 rounded-md p-4 min-w-[350px]">
        <p>Digital & Web Design</p>
        <p>➤ Website design (UI/UX)</p>
        <p>➤ Web development & Management</p>
        <p>➤ Social media graphics</p>
      </div>
      </FadeUp>

      <FadeUp>
      <div className="mt-2 h-[180px] flex flex-col justify-center shadow-lg shadow-red-200 rounded-md p-4 min-w-[350px]">
        <p>Advertising & Marketing Materials</p>
        <p>➤ Product packaging & labels</p>
        <p>➤ Billboards, banners, roll-ups</p>
        <p>➤ Infographics and promotional visuals</p>
      </div>
      </FadeUp>
      <FadeUp>
      <div className="mt-2 h-[180px] flex flex-col justify-center shadow-lg shadow-red-200 rounded-md p-4 min-w-[350px]">
        <p>Advertising & Marketing Materials</p>
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





