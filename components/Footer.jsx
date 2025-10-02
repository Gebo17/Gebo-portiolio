import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-footer-red pb-4 text-white text-center px-4'>
        <p className='pt-4 capitalize'>Just be creative</p>
        <div className='max-w-[300px] mx-auto mt-4 flex items-center justify-around py-2 w-full bg-[#FFF1F1] rounded-2xl'>
             <Link
              href='https://www.instagram.com/gebo_creative?igsh=YXE2bmp4dmFzdzR1'
             >
             <Image
               src='/assets/icons/instagram.svg'
               alt='instagram'
               width={20}
               height={20}
             />
             </Link>

              <Link
              href='https://www.facebook.com/share/1DEH6fDNx1/'
             >
             <Image
               src='/assets/icons/facebook.svg'
               alt='facebook'
               width={20}
               height={20}
             />
             </Link>
    
             <Link
              href='https://www.linkedin.com/in/gebo-creative-671088362?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
             >
             <Image
               src='/assets/icons/Linkedin.svg'
               alt='linkedin'
               width={20}
               height={20}
             />
             </Link>
        </div>
        <div className="mt-4 flex max-sm:text-[9px] max-sm:flex-row justify-center items-center gap-1 md:gap-4 text-sm">
          <div className="flex gap-1">
            <Image
               src='/assets/icons/location.svg'
               alt='location icon'
               width={8}
               height={8}
             />
             <p> Tanzania, Dar Es Salaam</p>
          </div>

          <div className="flex gap-1 items-center justify-start">
            <div className="shrink-0">
            <Image
               src='/assets/icons/email.png'
               alt='email icon'
               width={12}
               height={12}
             />
            </div>
             <p>info@gebocreative.com</p>
          </div>

          <div className="flex items-center justify-start">
            <div className="shrink-0">
            <Image
               src='/assets/icons/call.svg'
               alt='call icon'
               width={25}
               height={25}
             />
            </div>
             <p>+255 612 843 125</p>
          </div>

        
        </div>
        <p className="mt-4 text-sm"> ©{new Date().getFullYear()} Copyright By Gebo</p>
    </div>
  )
}

export default Footer