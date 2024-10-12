'use client'
import React from "react";
import LinkCard from "./LinkCard";

export default function MobileMoc({links}) {
  const totalBoxes = 5;
  const emptyBoxes = totalBoxes - links.length;

  return (
    <div className="hero-custom lg:bg-[6rem] md:bg-[2rem] relative">
      <div className="flex absolute lg:left-[8.7rem] md:left-[4.5rem] top-40">
        <div className="text-center">
          <div className="w-24 h-24 mb-4 bg-gray-200 rounded-full mx-auto">
            <img src="" alt="" />
          </div>
          <h1 className="mb-2 text-xl">Ben Wright</h1>
          <p className="mb-12 text-sm text-gray-500">ben@gmail.com</p> 

          {/* Display links */}
          {links.map((link, index) => (
            <LinkCard key={index} link={link} />
          ))}

          {/* Render empty boxes if links are less than 5 */}
          {Array.from({ length: emptyBoxes }).map((_, index) => (
            <div
              key={index + links.length}
              className="bg-gray-100 w-56 h-10 rounded-lg mb-5 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
