'use client'
import Image from "next/image";
import { Board, Hero } from "../components";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  const [currentTab, setCurrentTab] = useState("home");
  
  return (
    <div>
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <Hero />
      <Board currentTab = {currentTab} setCurrentTab={setCurrentTab} />
      <div>
         <Link
          href="https://wa.me/255688043125?text=Hello%20GEBO"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-26 right-6 z-50 animate-bounce"
    >
      <div className="bg-green-500/70 hover:bg-green-600/50 text-white rounded-full p-4 shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.157 5.318 5.48 0 12.079 0c3.22 0 6.245 1.254 8.516 3.524a11.924 11.924 0 013.507 8.511c-.003 6.6-5.385 11.924-11.984 11.924a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.426 1.593 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.416-9.89-9.888-9.893-5.452 0-9.885 4.434-9.885 9.885a9.842 9.842 0 001.58 5.26l-.999 3.648 3.877-1.608zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.204-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414z" />
        </svg>
      </div>
    </Link>
      </div>
    </div>
  ); 
}


