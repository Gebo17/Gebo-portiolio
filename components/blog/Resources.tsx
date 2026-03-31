'use client';

import React, { useEffect, useState } from 'react';
import { createClient, Entry, EntrySkeletonType, EntryFieldTypes } from 'contentful';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import { SyncLoader } from 'react-spinners';

// Type
type ResourceSkeleton = EntrySkeletonType & {
  contentTypeId: 'resources';
  fields: {
    title: EntryFieldTypes.Symbol;
    file: EntryFieldTypes.AssetLink;
    thumbnail: EntryFieldTypes.AssetLink;
  };
};

// Card Component
const FileCard = ({ entry }: { entry: Entry<ResourceSkeleton> }) => {
  const { title } = entry.fields;

  const file = entry.fields.file as any;
  const thumbnail = entry.fields.thumnail as any; 

  const fileUrl = file?.fields?.file?.url
    ? "https:" + file.fields.file.url
    : null;

  const thumbnailUrl = thumbnail?.fields?.file?.url
    ? "https:" + thumbnail.fields.file.url
    : "https://cdn-icons-png.flaticon.com/512/337/337946.png";

  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    if (!fileUrl) return alert("File not available");
    if (downloading) return;

    try {
      setDownloading(true);

      const response = await fetch(fileUrl);
      if (!response.ok) throw new Error("Download failed");

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${String(title)}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => URL.revokeObjectURL(url), 2000);
    } catch (err) {
      console.error(err);
      window.open(fileUrl, "_blank");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer">
      
      {/* Thumbnail */}
      <img
        src={thumbnailUrl}
        alt={String(title)}
        className="w-full h-56 object-cover"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-center p-4">
        
        {/* Title */}
        <h3 className="text-white font-bold text-lg mb-4">
          {String(title)}
        </h3>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-2 bg-primary-red/80 text-white rounded-lg hover:bg-primary-red transition"
        >
          <DocumentArrowDownIcon className="w-5 h-5" />
          {downloading ? "Downloading..." : "Download"}
        </button>

      </div>
    </div>
  );
};

// Page Component
const ResourcesPage = () => {
  const [data, setData] = useState<Entry<ResourceSkeleton>[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = createClient({
          space: "stcousdpdkot",
          accessToken: "Byr1nrLF2uHGrnViJS6LQllhuiYc7Aeb9Lh6WTcwptM",
        });

        const res = await client.getEntries({
          content_type: "resources",
        });

        setData(res.items);
        console.log("Fetched resources:", res.items);
      } catch (error) {
        console.error("Error fetching:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
                   <div className="w-full h-[60vh] flex items-center justify-center">
                     <SyncLoader size={10} color="#A33131" />
                   </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((item) => (
            <FileCard key={item.sys.id} entry={item} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ResourcesPage;