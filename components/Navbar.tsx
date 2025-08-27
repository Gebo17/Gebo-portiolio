"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { NAVLINKS } from "../constants";

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

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  return (
    <div className="sticky left-0 top-0 z-60 bg-primary-red text-white h-[50px] flex justify-between items-center pl-4">
      <div>
        <Image src="/assets/logo.png" alt="logo" width={80} height={80} />
      </div>
      <div className="pr-4 flex gap-2 uppercase h-full rounded-tl-full rounded-bl-full justify-end items-center w-[70vw] bg-deep-red ">
        <div className="max-sm:hidden">
          {NAVLINKS.map((navlink, index) => (
            <div key={index}>
              <p> {navlink.text} </p>
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="top-menu-panel"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-xl p-2 outline-none ring-0 transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-white/70"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>

        <div
          id="top-menu-panel"
          ref={panelRef}
          className={`fixed left-0 right-0 top-0 z-50 origin-top overflow-hidden bg-primary-red backdrop-blur-sm shadow-2xl transition-transform duration-300 ${
            open ? "translate-y-0 top-[60px]" : "-translate-y-full"
          }`}
        >
          <nav className="mx-auto max-w-7xl px-6 py-4 sm:py-8">
            <ul className="space-y-3 sm:space-y-4">
              {NAVLINKS.map((item, i) => (
                <li
                  key={item.path}
                  className={`transition translate-y-0 ${
                    open ? `delay-[${(i + 1) * 50}ms]` : ""
                  }`}
                >
                  <a
                    ref={i === 0 ? firstLinkRef : null}
                    href={item.path}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-lg font-medium text-white/95 outline-none ring-0 transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/60"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>

          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
