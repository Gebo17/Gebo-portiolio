"use client";
import { FadeUp } from "@/components";
import { createClient } from "contentful";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar";

const Advertising = () => {
  const [posters, setPosters] = useState(null);
  const [hoveredCardId, setHoveredCardId] = useState(null); // ✅ Only one hook, at top
  const scrollRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerImage, setViewerImage] = useState({ url: null, title: "" });

  
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

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setViewerOpen(false);
    };
    if (viewerOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [viewerOpen]);

  const openViewer = (url, title) => {
    if (!url) return;
    setViewerImage({ url, title });
    setViewerOpen(true);
  };

  const closeViewer = () => setViewerOpen(false);

  return (
    <div>
      <Navbar/>
    <div className="relative mb-8 min-h-[80vh] ">
        <h1 className="mt-4 uppercase text-center font-bold">Advertising designs</h1>

      <div className="mt-4 md:mt-2">
        {posters === null ? (
          <div className="text-red-500 absolute left-1/2 top-[100px] -translate-x-1/2">
            <p className="w-10 h-10 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></p>
          </div>
        ) : (
          <div
            className="mx-auto w-full px-1 flex flex-wrap items-start justify-center sm:items-center sm:justify-center gap-4 sm:gap-12"
          >
            {posters[0].fields.posters.map((poster) => {
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
                  className="sm:w-[200px] w-[160px] cursor-pointer rounded shadow-black/40 shadow-md relative"
                >
                  {/* Image */}
                  <div className="w-[160px]">
                    {imageUrl ? (
                      <div>
                        <div>
                          {!imageLoaded ? (
                            <div className="text-red-500 text-center">
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
                      </div>
                    ) : (
                      <div className="w-full h-48 bg-red-400 flex items-center justify-center text-gray-500">
                        No Image
                      </div>
                    )}
                  </div>

                  {/* Red Overlay */}
                  {isCardHovered && (
                    <div className="absolute sm:w-[200px] w-[160px] inset-0 z-10 bg-red-700/70 transition-opacity duration-400" />
                  )}

                  {/* Overlay Text */}
                  {isCardHovered && (
                    <div className="absolute sm:w-[200px] w-[160px] inset-0 z-20 flex flex-col items-center justify-center transition-opacity duration-200">
                      <button
                        type="button"
                        aria-label={`View ${title}`}
                        onClick={() => openViewer(imageUrl, title)}
                        className="hover:scale-125 transition-all duration-300"
                      >
                        <Image
                          src="/assets/icons/eye.png"
                          alt="eye icon"
                          width={35}
                          height={35}
                        />
                      </button>
                      <div className="text-white text-center mt-2">
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
    
      {viewerOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
          onClick={closeViewer}
        >
          <div
            className="relative max-w-5xl w-full max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute -top-3 -right-3 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center shadow"
              onClick={closeViewer}
            >
              ×
            </button>
            {viewerImage.url ? (
              <img
                src={viewerImage.url}
                alt={viewerImage.title || "Selected image"}
                className="w-full h-full object-contain rounded border border-white/20 bg-black"
                style={{ maxHeight: "85vh" }}
              />
            ) : null}
            {viewerImage.title ? (
              <div className="mt-2 text-center text-white">
                <span className="text-sm opacity-80">{viewerImage.title}</span>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Advertising;
