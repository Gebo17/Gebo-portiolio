'use client'
import Image from "next/image";
import { Board, Hero } from "../components";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [currentTab, setCurrentTab] = useState("home");
  
  return (
    <>
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <Hero />
      <Board currentTab = {currentTab} setCurrentTab={setCurrentTab} />
    </>
  );
}


