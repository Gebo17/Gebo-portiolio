import { FadeUp } from '@/components'
import Image from 'next/image'
import React from 'react'



const WhoIAm = () => {
  return (
    <div className="mt-4 flex justify-center items-center max-sm:flex-col gap-4 md:gap-8 xl:gap-12">
     
     <div className="shrink-0">
      <div className='rounded-full'>
         <Image
          src='/assets/photos/aboutgebo.svg'
          alt='about gebo'
          width={300}
          height={300}
          className=''
       />
     </div>
     </div>

      <div className='mt-2 px-4 mb-4 max-sm:mx-2 max-w-[450px] shadow-lg shadow-red-300 rounded-md p-4'>
     
         <p>Hello! I’m Daniel Gabriel, also known as Gebo, a freelance visual communication designer from Tanzania. I am passionate about transforming ideas into visuals that inspire, inform, and connect.</p>
     
      <FadeUp>
        <p className="mt-2">I specialize in creating professional logos, posters, flyers, packaging, banners, websites, and brand identity that help people and organizations communicate clearly, attract attention, and stand out and my journey in this design industry began in 2022, and since then I have embraced every project as an opportunity to learn and grow. </p>
      </FadeUp>
      <FadeUp>
        <p className="mt-2">I strongly believe in self-consistency and that learning never ends. This mindset has taught me that creativity is not optional it is the energy that makes life interesting, meaningful, solution-driven, and full of possibility.</p>
      </FadeUp>
    </div>
    </div>
  )
}

export default WhoIAm