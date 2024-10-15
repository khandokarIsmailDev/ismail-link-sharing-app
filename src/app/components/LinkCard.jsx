'use client'
import { getPlatformBgColor, getPlatformIcon } from "@/iconsUtils";
import React from "react";

export default function LinkCard({link}) {

 


  // Ensure the link starts with 'http://' or 'https://'
  const validLink = link.link.startsWith('http://') || link.link.startsWith('https://') 
    ? link.link : `https://${link.link}`;

  return (
    <div className="bg-gray-100 w-56 h-10 rounded-lg mb-5 cursor-pointer">
      <a href={validLink} target="blank">
        <div className={`px-3 w-full ${getPlatformBgColor(link?.platform)} h-full rounded-lg flex items-center justify-between text-white`}>
          <div className="flex items-center gap-1 text-white text-sm">
            <img src={getPlatformIcon(link?.platform)} alt="" /> {/* Ensure this is rendering the icon */}
            <h1 className="">{link?.platform}</h1>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fill="#fff"
              d="M2.667 7.333v1.334h8L7 12.333l.947.947L13.227 8l-5.28-5.28L7 3.667l3.667 3.666h-8Z"
            />
          </svg>
        </div>
      </a>
    </div>
  );
}
