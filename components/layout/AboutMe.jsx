import React, { useState } from 'react'
import { CoreValues, Mission, Software, Vision, WhoIAm } from "../../components";
import { ABOUT_LINKS } from '@/constants';



const AboutMe = () => {
 const [aboutTab, setAboutTab] = useState('default')

  return (
    <div className='min-h-[50vh] w-full'>
      
            <div>
              <div className={`mx-auto sm:pr-4 py-2 bg-amber-50 flex flex-wrap justify-center items-center gap-2 capitalize w-full`}>
                        {ABOUT_LINKS.map((navlink, index) => (
                          <div className={`cursor-pointer text-[12px] md:text-[18px] sm:text-[16px] max-sm:font-semibold capitalize `} key={index}>
                            <p onClick={ () => setAboutTab(navlink.text) } className={`${aboutTab === navlink.text || (aboutTab === 'default' && navlink.text === 'Who am i') 
      ? 'bg-primary-red text-white'
      : 'bg-white text-black'} p-1 rounded-md`}  > {navlink.text} </p>
                          </div>
                        ))}
                </div>
            </div>

      {
  (aboutTab === 'Who am i' || aboutTab === 'default') && (
    <WhoIAm/>
  )
}

       {aboutTab === 'vision' && (<Vision/>)}
       {aboutTab === 'mission' && (<Mission/>)}
       {aboutTab === 'core values' && (<CoreValues/>)}
       {aboutTab === 'software skills' && (<Software/>)}
      
    </div>
  )
}

export default AboutMe
