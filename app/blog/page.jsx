'use client'
import React, { useState } from "react";
import {
  CoreValues,
  Mission,
  Software,
  Vision,
  WhoIAm,
  Articles,
  Gallery,
  Resource,
  News
} from "../../components/";                                                                             
import { BLOG_LINKS } from "../../constants";
import Navbar from "../../components/Navbar";


const AboutMe = () => {
  const [aboutTab, setAboutTab] = useState("default");

  return (
    <div className="min-h-[50vh] w-full">
      <Navbar/> 
      <div>
        <div
          className={`mx-auto mt-4 sm:pr-4 py-2 bg-amber-50 flex flex-wrap justify-center items-center gap-2 capitalize w-full`}
        >
          {BLOG_LINKS.map((navlink, index) => (
            <div
              className={`cursor-pointer text-[12px] md:text-[18px] sm:text-[16px] max-sm:font-semibold capitalize `}
              key={index}
            >
              <p
                onClick={() => setAboutTab(navlink)}
                className={`${
                  aboutTab === navlink ||
                  (aboutTab === "default" && navlink === "articles")
                    ? "bg-primary-red text-white"
                    : "bg-white text-black"
                } p-1 rounded-md`}
              >
                {" "}
                {navlink}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>

      {(aboutTab === "articles" || aboutTab === "default") && <Articles />}

      {aboutTab === "news and trends" && <News />}
      {aboutTab === "resources" && <Resource />}
      {aboutTab === "gallery" && <Gallery />}
    </div>
  );
};

export default AboutMe;
