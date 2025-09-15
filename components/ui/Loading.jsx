"use client"; // Important for framer-motion animations!

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Loading() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="bg-red-400"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {!imageLoaded && (
          <div className="text-white text-center absolute inset-0 flex items-center justify-center">
            <p className="w-6 h-6 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></p>
          </div>
        )}
        <img
          src="/assets/logo.png"
          alt="Loading..."
          className={`w-[100px] h-auto transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
      </motion.div>
    </div>
  );
}
