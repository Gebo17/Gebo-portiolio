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
      <motion.img
        src="assets/logo.png"
        animate={{
          scale: [1,1.2,1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        alt="Loading..."
        className="w-[80px]"
      />
    </div>
  );
}
