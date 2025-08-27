import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[60vh] bg-amber-400 mt-4">
      <div className="absolute z-10 left-0 top-0 w-full h-full">
        <Image
          src="/assets/photos/hero.jpg"
          alt="bg photo"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute z-20 inset-0 bg-black/70"></div>
      <div className="text-center w-full z-30 text-3xl sm:text-4xl text-white uppercase absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p>Hello!</p>
        <p>Welcome To Gebo</p>
      </div>

      <button className="px-8 py-1 cursor-pointer absolute z-30 left-1/2 -translate-1/2 bottom-8 bg-primary-green border-1 rounded-l-full rounded-tr-full border-amber-50 text-white">
        Send sms
      </button>
    </div>
  );
};

export default Hero;
