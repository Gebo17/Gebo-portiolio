'use client'
import Image from "next/image";
import { Board, Hero } from "../components";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  return (
    <>
      <Navbar currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      <Hero />
      <Board currentIndex = {currentIndex} />
    </>
  );
}
