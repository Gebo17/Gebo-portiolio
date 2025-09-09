'use client'; // Important for framer-motion animations!

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loading() {
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
      classname='w-[100px]'
        animate={{
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <Image
          src="/assets/logo.png" // ensure this is in the /public folder!
          alt="Loading..."
          fill
          priority
        />
      </motion.div>
    </div>
  );
}
