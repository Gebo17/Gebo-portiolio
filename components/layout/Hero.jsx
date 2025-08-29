import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh]">
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

      <button className="px-8 py-0 flex items-center justify-center cursor-pointer absolute z-30 left-1/2 -translate-1/2 bottom-8 bg-white border-1 rounded-l-full rounded-tr-full border-amber-50 text-white">
        <div className="flex justify-center items-center">
      <img
        src="/assets/gif/whatsaap.gif"
        alt="Animated demo"
        className=" sm:w-10 sm:h-10 w-7 h-7"
      />
    </div>
    <p className="text-primary-green sm:text-xl"> Send Sms </p>
      </button>
    </div>
  );
};

export default Hero;
