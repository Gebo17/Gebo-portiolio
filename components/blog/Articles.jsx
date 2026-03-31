"use client";
//import { blog_content } from "@/constants";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { createClient } from "contentful";
import { SyncLoader } from "react-spinners";
import Navbar from "../Navbar";



const page = () => {useState
  const [initialArticlesLoad, setInitialArticlesLoad] = useState(3);
  const [articlesData, setArticlesData] = useState(3);
  const [hasMore, setHasMore] = useState(true);


  const loadMoreHandler = () => {
    if (initialArticlesLoad < articlesData.fields.length) {
      initialArticlesLoad((prev) => {
        const newsLoad = prev + 2;
        if (newsLoad == articlesData.fields.length) {
          setHasMore(false);
        }

        return newsLoad;
      });
    } else {
      setInitialArticlesLoad(3);
      setHasMore(true);
    }
  };

  useEffect(() => {
    const getitems = async () => {
      const client = createClient({
              space: "stcousdpdkot",
              accessToken: "Byr1nrLF2uHGrnViJS6LQllhuiYc7Aeb9Lh6WTcwptM",
            }); 

      const response = await client.getEntries({ content_type: "blog" });
      console.log(response.items)
      setArticlesData(response.items);
    };
    getitems();
  }, []);

  return (
    <>
      <div className=" pb-16 px-8 sm:px-16 ">
      <div className="flex items-center gap-4 mt-2">
        <div className="w-[4px] h-[25px] shadow-lg bg-primary-dark " />
      </div>

      <div className=" flex flex-col gap-8 justify-center sm:justify-start items-center md:flex-row flex-wrap">
        {articlesData && articlesData.length > 0 ? (
          articlesData.map((content, index) => (
            <Fade key={index}>
              <div className="max-w-[350px] min-w-[300px] shadow-md rounded-md">
                <div className="h-[150px] md:h-[200px]">
                  <img
                    src={content.fields.featuredImage.fields.file.url}
                    alt={`poster`}
                    className="object-cover w-full h-full rounded-tl-md rounded-tr-md"
                  />
                </div>
                <div className="px-2 pb-4">
                  <p className="mt-4 text-primary-dark min-h-[50px] font-bold">
                    {" "}
                    {content.fields.title}
                  </p>
                 

                  <button className=" mx-auto block px-2 py-1 rounded-md text-primary-dark capitalize mt-4 cursor-pointer border-orange border-[1px]">
                    <Link href={`/blog/${content.sys.id}`}>
                      <p>Read More</p>
                    </Link>
                  </button>
                </div>
              </div>
            </Fade>
          ))
        ) : (
          <>
            <div className="w-full h-[60vh] flex items-center justify-center">
              <SyncLoader size={10} color="#A33131" />
            </div>
          </>
        )}
      </div>

      
    </div>
    </>
  );
};

export default page;

