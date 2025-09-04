import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';


const Hero = () => {
  const [text] = useTypewriter({
    words: ['Creativity', 'And', 'Transformation'],
    loop: true,
    delaySpeed: 1500, 
  });


  return (
    <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh]">
      <div className="absolute z-10 left-0 top-0 md:h-[70vh] h-[50vh] w-full">
  <video
    src="/assets/videos/dan.mp4"
    className="w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
  />
</div>

      <div className="absolute z-20 inset-0 bg-black/70"></div>
      <div className="text-center font-semibold w-full z-30 text-2xl sm:text-4xl text-white uppercase absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p>Hello!</p>
        <p>Welcome To The World Of </p>
        <div className="flex gap-0 justify-center items-center">
          <p className="text-red-400 font-semibold"> {text} </p>
        <Cursor cursorColor="red-400" cursorStyle="|" />
        </div>
      </div>

       <Link
          href="https://wa.me/255688043125?text=Hello%20GEBO"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open WhatsApp chat"
          className="inline-flex"
          >
      <button className="px-2 py-0 flex items-center justify-center cursor-pointer absolute z-30 left-1/2 -translate-1/2 bottom-8 bg-white border-1 rounded-l-full rounded-tr-full border-amber-50 text-white">
        <div className="flex justify-center items-center">
      <img
        src="/assets/gif/whatsaap.gif"
        alt="Animated demo"
        className=" sm:w-10 sm:h-10 w-7 h-7"
      />
    </div>
    <p className="text-primary-green sm:text-xl font-semibold"> Send SMS </p>
      </button>
      </Link>
    </div>
  );
};

export default Hero;
