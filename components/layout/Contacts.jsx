import React from 'react'
import { FadeUp } from '..'
import Link from 'next/link'


const Contacts = () => {
  return (
    <div className='px-4 mt-4 pb-8'>
      <FadeUp>
      <p>I’m always excited to hear from new people about their ideas project, whether you need a fresh brand identity, stunning visuals, or Event promotion. Feel free to reach out I would love to discuss your ideas and create something impactful together.</p>
      </FadeUp>
      <FadeUp>
        <p className="mt-12 text-center">Get in Touch Today</p>
        <p className="mt-1 text-center">Send a message</p>


      <div className="flex w-full gap-4 justify-center mt-4">
          <Link
          href="https://wa.me/255688043125?text=Hello%20GEBO"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open WhatsApp chat"
          className="inline-flex"
          >
          
        <button className="px-8 flex gap-1 hover:scale-105 transition-all duration-300 py-1 cursor-pointer  bg-primary-red border-1 rounded-l-full rounded-tr-full border-amber-50 text-white">
        <div className="flex justify-center items-center">
          
      <img
        src="/assets/icons/whatsaap_white.svg"
        alt="Animated demo"
        className="w-7 h-7"
      />
    </div> <span>Whatsaap</span>
      </button>
      </Link>
      <Link
  href="mailto:gebodaniel17@gmail.com"
  className="text-blue-600 underline"
>
      <button className="flex gap-2 items-center justify-center px-8 py-1 transition-all duration-300 hover:scale-105 cursor-pointer  bg-primary-red border-1 rounded-l-full rounded-tr-full border-amber-50 text-white">
        <div className="flex justify-center items-center">
      <img
        src="/assets/icons/email.png"
        alt="Animated demo"
        className="w-7 h-7"
      />
    </div> <span>Email</span>
      </button>
      </Link>
      </div>
      </FadeUp>

    </div>
  )
}

export default Contacts

            