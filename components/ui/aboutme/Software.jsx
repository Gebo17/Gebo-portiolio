import { FadeUp } from '@/components'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'


const Software = () => {
   const scrollRef = useRef(null)

   
useEffect(() => {
  const el = scrollRef.current;
  if (!el) return;

  let direction = 1;           // 1 → right, -1 → left
  const speed = 1;           // px per frame; tweak to taste
  let hovered = false;
  let rafId = 0;

  const tick = () => {
    if (!hovered) {
      // bounce at edges
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
        direction = -1;
      } else if (el.scrollLeft <= 0) {
        direction = 1;
      }
      el.scrollLeft += speed * direction;
    }
    rafId = requestAnimationFrame(tick);
  };

  // pause/resume on hover
  const onEnter = () => { hovered = true; };
  const onLeave = () => { hovered = false; };

  // allow natural manual scroll:
  //  - vertical wheel → horizontal scroll in the strip
  //  - prevent page from scrolling while interacting with the strip
  const onWheel = (e) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    }
  };

  el.addEventListener("pointerenter", onEnter);
  el.addEventListener("pointerleave", onLeave);
  el.addEventListener("wheel", onWheel, { passive: false });

  rafId = requestAnimationFrame(tick);

  return () => {
    cancelAnimationFrame(rafId);
    el.removeEventListener("pointerenter", onEnter);
    el.removeEventListener("pointerleave", onLeave);
    el.removeEventListener("wheel", onWheel);
  };
}, [scrollRef.current]);


  
  const SOFTWARE_ICONS = [
    {
      name: 'photoshop',
      url: "/assets/icons/PS.svg",
    },
    {
      name: 'Adobe Illustrator',
      url: "/assets/icons/AI.svg",
    },
    {
      name: 'Lightroom',
      url: "/assets/icons/LR.svg",
    },
    {
      name: 'figma',
      url: "/assets/icons/figma.svg",
    },
    {
      name: 'pixellab',
      url: "/assets/icons/pixellab.png",
    },
    {
      name: 'primier pro',
      url: "/assets/icons/PR.svg",
    },
    {
      name: 'capcut',
      url: "/assets/icons/capcut.svg",
    },
  ]

  return (
    <div className='px-4 pb-8'>
      <FadeUp>
        <h1 className="mt-4">I am proficient in a wide range of industry standard software tools that support high quality visual design, branding, and digital content creation</h1>
      </FadeUp>
     

      <div
       ref={scrollRef}
      className="mt-2 overflow-x-scroll hide-scrollbar mx-auto w-[80vw] flex items-start gap-4 sm:gap-12">
        {
        SOFTWARE_ICONS.map( (icon, index) => (
            <div key={index} className="cursor-pointer block relative  py-2 flex-shrink-0 shadow-lg rounded-md hover:scale-110 transition duration-200">
          <div className="rounded-full inline-block p-[2px]">
            <div className=" flex flex-col gap-x-2">
              <div>
              <img
                src={icon.url}
                alt="icon"
                className={`rounded-full block ${icon.name === 'figma' || icon.name === 'pixellab' ? 'w-8 h-8 mb-[12px] mt-1' : 'w-12 h-12'}`}
              />
              </div>
              <p className="text-sm text-gray-700 text-center">
  {icon.name.split(" ").map((word, i) => (
    <React.Fragment key={i}>
      {word}
      <br />
    </React.Fragment>
  ))}
</p>
            </div>
          </div>
        
        </div>
        ))
      }
      </div>
    </div>
  )
}

export default Software