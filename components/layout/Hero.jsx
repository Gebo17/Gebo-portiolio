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

    </div>
  );
};

export default Hero;
