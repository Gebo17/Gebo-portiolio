'use client'
import { FadeUp } from "@/components";
import { createClient } from "contentful";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Branding = () => {
  const [posters, setPosters] = useState(null);
  const [hoveredCardId, setHoveredCardId] = useState(null); // ✅ Only one hook, at top
  const scrollRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const el = scrollRef.current; 
    if (!el) return;

    let direction = 1; // 1 → right, -1 → left
    const speed = 1; // px per frame; tweak to taste
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
    const onEnter = () => {
      hovered = true;
    };
    const onLeave = () => {
      hovered = false;
    };

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

  useEffect(() => {
    const getitems = async () => {
      const client = createClient({
        space: "stcousdpdkot",
        accessToken: "Byr1nrLF2uHGrnViJS6LQllhuiYc7Aeb9Lh6WTcwptM",
      });

      const response = await client.getEntries({
        content_type: "graphicDesigns",
        order: "fields.title",
      });
      setPosters(response.items);
    };

    getitems();
  }, []);

  return (
    <div className="relative mb-8">
      <FadeUp>
        <h1 className="mt-4 px-4 max-w-[380px] mx-auto">
          I create professional and eye-catching designs that communicate your
          message effectively
        </h1>
      </FadeUp>

      <div className="mt-8">
        {posters === null ? (
          <div className="text-red-500 absolute left-1/2 top-[100px] -translate-x-1/2">
            <p className="w-10 h-10 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></p>
          </div>
        ) : (
          <div
            ref={scrollRef}
            className="mb-8 overflow-x-scroll hide-scrollbar mx-auto w-[80vw] flex items-start gap-4 sm:gap-12"
          >
            {posters[1].fields.posters.slice(0,8).map((poster) => {
              const title = poster.fields.title || "Untitled";
              const imageUrl = poster?.fields?.file?.url
                ? `https:${poster.fields.file.url}`
                : null;

              const isCardHovered = hoveredCardId === poster.sys.id;

              return (
                <div
                  key={poster.sys.id}
                  onMouseEnter={() => setHoveredCardId(poster.sys.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  className="sm:w-[200px] w-[230px] cursor-pointer rounded shadow-black/40 shadow-lg relative"
                >
                  {/* Image */}
                  <div className="w-[230px]">
                    {imageUrl ? (
                      <div className="relative">
                        {!imageLoaded ? (
                          <div className="text-red-500 text-center absolute inset-0 flex items-center justify-center">
                            <p className="w-6 h-6 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></p>
                          </div>
                        ) : null}

                        <img
                          src={imageUrl}
                          alt={title}
                          onLoad={() => setImageLoaded(true)}
                          className={`w-full border border-black/40 rounded h-auto transition-opacity duration-500 ${
                            imageLoaded ? "opacity-100" : "opacity-0"
                          }`}
                        />
                      </div>
                    ) : (
                      <div className="w-full h-48 bg-red-400 flex items-center justify-center text-gray-500">
                        No Image
                      </div>
                    )}
                  </div>

                  {/* Red Overlay */}
                  {isCardHovered && (
                    <div className="absolute w-[230px] inset-0 z-10 bg-red-700/70 transition-opacity duration-400" />
                  )}

                  {/* Overlay Text */}
                  {isCardHovered && (
                    <div className="absolute w-[230px] inset-0 z-20 flex flex-col items-center justify-center transition-opacity duration-200">
                      <div className="hover:scale-125 transition-all duration-300">
                                                                      <Image
                                                                        src="/assets/icons/eye.png"
                                                                        alt="eye icon"
                                                                        width={35}
                                                                        height={35}
                                                                      />
                                              </div>
                      <div className="text-white text-center">
                        <h2 className="text-lg font-bold">{title}</h2>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

     <Link href="/branding" className="block text-center mx-auto mt-4 text-red-800 capitalize hover:scale-105 transition-all duration-300">
          view more
        </Link>

    </div>
  );
};

export default Branding;
