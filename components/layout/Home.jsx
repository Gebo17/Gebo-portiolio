import { HOME_LINKS } from "@/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Advertising,
  Branding,
  Blog,
  GraphicDesigns,
  Printing,
  Websites,
  FadeUp,
  Loading,
} from "../";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Home = ({ setCurrentTab, currentTab }) => {
  const [homeTab, setHomeTab] = useState("default");
  const [loading, setLoading] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [homeTab]);

  useEffect(() => {
    if (inView) {
      setStartAnimation(true);
    } else {
      setStartAnimation(false);
    }
  }, [inView]);

  return (
    <div>
      {loading ? (
        <div className="fixed w-full z-50 left-0 top-0">
          <Loading />
        </div>
      ) : (
        <div className="min-h-[50vh] w-full">
          <div className="">
            <div className="mx-auto sm:pr-4 py-2 bg-amber-50 flex flex-wrap justify-center items-center gap-1 sm:gap-2 md:gap-4 capitalize w-full">
              {HOME_LINKS.map((navlink, index) => {
                const isActive = homeTab === navlink.text;

                return (
                  <div
                    key={index}
                    className="cursor-pointer text-[10px] md:text-[15px] sm:text-[13px] max-sm:w-[90px] max-sm:font-semibold capitalize"
                  >
                    <p
                      onClick={() => {
                        if (homeTab !== navlink.text) {
                          setLoading(true);
                          setHomeTab(navlink.text);
                        }
                      }}
                      className={`
            text-center p-1 rounded-md border transition-colors duration-200
            ${
              isActive
                ? "bg-primary-red text-white border-primary-red"
                : "bg-white text-primary-red border-primary-red hover:bg-primary-red hover:text-white"
            }
          `}
                    >
                      {navlink.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {homeTab === "default" && (
            <div className="relative w-full min-h-[42vh] ">
              <div className="absolute z-10 left-0 top-0 w-full h-full">
                <Image
                  src="/assets/photos/aboutbg.png"
                  alt="bg photo"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20  text-center w-full text-white">
                <p className="font-bold text-4xl">Let's Build</p>
                <p className="font-bold text-4xl">Amazing Things</p>
                <p className="font-bold text-4xl">That Stand Out</p>
                <div className="mt-2 flex gap-2 justify-center items-center">
                  <div className="w-20 h-[2px] bg-white " />
                  Together
                  <div className="w-20 h-[2px] bg-white " />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 10 }
                  }
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  ref={ref}
                  className="mt-6 flex items-start justify-around font-bold"
                >
                  <div>
                    <CountUp start={0} end={60} /> <span>+</span>
                    <p>Clients</p>
                  </div>
                  <div>
                    <CountUp start={0} end={4} /> <span>+</span>
                    <p>
                      Years of <br /> Experience
                    </p>
                  </div>
                  <div>
                    <CountUp start={0} end={220} /> <span>+</span>
                    <p>Projects</p>
                  </div>
                </motion.div>
              </div>
            </div>
          )}

          {homeTab === "branding" && <Branding />}

          {homeTab === "advertising" && <Advertising />}
          {homeTab === "blog" && <Blog />}
          {homeTab === "graphic designs" && <GraphicDesigns />}
          {homeTab === "printing" && <Printing />}
          {homeTab === "websites" && <Websites />}
        </div>
      )}
    </div>
  );
};

export default Home;
