"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { NAVLINKS } from "../constants";
import Loading from "./ui/Loading";
import Link from "next/link";

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-7 w-7 text-white"
      aria-hidden="true"
    >
      <path d="M3.75 5.25h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5Zm0 6h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5Zm0 6h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5Z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-7 w-7 text-white"
      aria-hidden="true"
    >
      <path d="M6.225 4.811a.9.9 0 0 1 1.273 0L12 9.314l4.502-4.503a.9.9 0 1 1 1.273 1.273L13.314 10.586l4.461 4.462a.9.9 0 1 1-1.273 1.273L12 11.859l-4.502 4.462a.9.9 0 1 1-1.273-1.273l4.462-4.462L6.225 6.084a.9.9 0 0 1 0-1.273Z" />
    </svg>
  );
}

const Navbar = ({ currentTab, setCurrentTab }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [currentTab]);

  return (
    <>
      {loading && (
        <div className="fixed w-full z-40 left-0 top-0">
          <Loading />
        </div>
      )}
      <div className="sticky left-0 top-0 z-60 bg-primary-red text-white h-[50px] flex justify-between items-center pl-2 sm:pl-4">
        <div>
          <Image src="/assets/logo.png" alt="logo" width={70} height={70} />
        </div>
        <div className="pr-2 sm:pr-4 flex gap-2 sm:gap-4 uppercase h-full rounded-tl-full rounded-bl-full justify-end items-center w-[72vw] md:w-[80vw] bg-deep-red ">
          {NAVLINKS.map((navlink, index) => (
            <div
              className="cursor-pointer text-[10px] md:text-[16px] sm:text-[15px] max-sm:font-semibold uppercase"
              key={index}
            >
              <p
                onClick={() => {
                  setLoading(true);
                  setCurrentTab(navlink.text);
                }}
                className={`p-1 border-[1px] rounded-md transition-all duration-150 ${
                  currentTab === navlink.text
                    ? "border-white"
                    : "border-transparent"
                }`}
              >
                  <Link
                   href='/'
                  >
                {navlink.text}
              </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
