import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Creativity", "And", "Transformation"],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <div className="relative w-full h-[40vh] md:h-[70vh] overflow-hidden">
      {/* Video background without object-cover */}
      <div className="absolute inset-0 z-0 flex justify-center items-center">
        <video
          src="/assets/videos/dan.mp4"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Text content */}
      <div className="absolute z-20 inset-0 flex flex-col justify-center items-center text-center text-white uppercase font-bold text-2xl sm:text-4xl">
        <p>Hello!</p>
        <p>Welcome To The World Of</p>
        <div className="flex gap-1 justify-center items-center">
          <p className="text-red-400 font-semibold">{text}</p>
          <Cursor cursorColor="rgb(248,113,113)" cursorStyle="|" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
