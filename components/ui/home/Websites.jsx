import { FadeUp } from "@/components";
import { createClient } from "contentful";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Websites = () => {
  const [posters, setPosters] = useState(null);
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const scrollRef = useRef(null);
  const [loadedImages, setLoadedImages] = useState({}); // ✅ Tracks each image load separately

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




  // ✅ Fetch posters from Contentful
  useEffect(() => {
    const getItems = async () => {
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

    getItems();
  }, []);

  return (
    <div className="relative">
      <FadeUp>
        <h1 className="mt-4 px-4 mx-auto max-w-[400px]">
          I create professional and eye-catching designs that communicate your
          message effectively
        </h1>
      </FadeUp>

      <div className="mt-4 md:mt-8">
        {posters === null ? (
          <div className="text-red-500 absolute left-1/2 top-[100px] -translate-x-1/2">
            <p className="w-10 h-10 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></p>
          </div>
        ) : (
          <div
            ref={scrollRef}
            className="overflow-x-scroll scroll-smooth hide-scrollbar mx-auto w-[80vw] flex items-start gap-4 sm:gap-12"
          >
            {posters[4].fields.posters.map((poster) => {
              const title = poster.fields.title || "Untitled";
              const imageUrl = poster?.fields?.file?.url
                ? `https:${poster.fields.file.url}`
                : null;

              const isCardHovered = hoveredCardId === poster.sys.id;
              const isImageLoaded = loadedImages[poster.sys.id];

              return (
                <div
                  key={poster.sys.id}
                  onMouseEnter={() => setHoveredCardId(poster.sys.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  className="sm:w-[200px] w-[230px] rounded shadow-md relative"
                >
                  {/* Image */}
                  <div className="w-[230px] relative">
                    {imageUrl ? (
                      <>
                        {!isImageLoaded && (
                          <div className="text-red-500 text-center absolute inset-0 flex items-center justify-center z-10">
                            <p className="w-6 h-6 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></p>
                          </div>
                        )}
                        <img
                          src={imageUrl}
                          alt={title}
                          onLoad={() =>
                            setLoadedImages((prev) => ({
                              ...prev,
                              [poster.sys.id]: true,
                            }))
                          }
                          className={`w-full h-auto transition-opacity duration-500 ${
                            isImageLoaded ? "opacity-100" : "opacity-0"
                          }`}
                        />
                      </>
                    ) : (
                      <div className="w-full h-48 bg-red-400 flex items-center justify-center text-gray-500">
                        No Image
                      </div>
                    )}
                  </div>

                  {/* Red Overlay */}
                  {isCardHovered && (
                    <div className="absolute inset-0 z-10 bg-red-700/70 transition-opacity duration-400" />
                  )}

                  {/* Overlay Text */}
                  {isCardHovered && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-200">
                      <div className="text-white text-center flex gap-2 items-center justify-center">
                        <Link
                          href="/"
                          className="hover:scale-125 transition-all duration-300"
                        >
                          <Image
                            src="/assets/icons/eye.png"
                            alt="eye icon"
                            width={35}
                            height={35}
                          />
                        </Link>
                        <Link
                          href="/"
                          className="hover:scale-125 transition-all duration-300"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path
                              d="M12 0C5.37 0 0 5.373 0 12c0 5.303 
                        3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
                        0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 
                        1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 
                        1.304 3.492.997.108-.775.42-1.305.763-1.605-2.665-.3-5.466-1.334-5.466-5.931 
                        0-1.31.468-2.381 1.236-3.221-.123-.303-.536-1.523.117-3.176 
                        0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 
                        2.042.138 3.003.404 2.29-1.552 3.296-1.23 
                        3.296-1.23.655 1.653.242 2.873.12 3.176.77.84 
                        1.234 1.911 1.234 3.221 0 4.609-2.803 5.628-5.475 
                        5.921.431.372.815 1.102.815 2.222 0 1.606-.015 
                        2.898-.015 3.293 0 .321.216.694.825.576C20.565 
                        21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Websites;

