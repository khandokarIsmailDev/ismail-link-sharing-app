"use client";
import React, { useEffect, useState } from "react";
import LinkCard from "./LinkCard";

export default function MobileMoc({ links }) {
  const totalBoxes = 5;
  const emptyBoxes = totalBoxes - links.length;

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loadUserProfile = () => {
      try {
        // Retrieve profile data from localStorage
        const profileData = JSON.parse(localStorage.getItem("profileData"));

        // Check if profileData and required fields are present
        if (profileData && profileData.data && profileData.data.id) {
          setUserData(profileData.data); // Set user data into state
        } else {
          console.error("No profile data found in localStorage");
        }
      } catch (err) {
        console.error(err.message);
      }
    };

    loadUserProfile();
  }, []);

  console.log(userData);

  return (
    <div className="hero-custom lg:bg-[6rem] md:bg-[2rem] relative">
      <div className="flex absolute lg:left-[8.7rem] md:left-[4.5rem] top-40">
        <div className="text-center">
          <div className="w-24 h-24 mb-4 bg-gray-200 rounded-full mx-auto">
            <img src={userData?.imageProfile} alt="" className="rounded-full w-full h-full object-cover" />
          </div>

          {userData ? (
            <>
              <h1 className="mb-2 text-xl">{`${userData.firstName} ${userData.lastName}`}</h1>
              <p className="mb-12 text-sm text-gray-500">{userData.email}</p>
            </>
          ) : (
            <>
              <div className="w-36 mx-auto h-4 rounded-lg mt-7 mb-4 bg-gray-100"></div>
              <div className="w-16 mx-auto h-2 rounded-lg mb-7 bg-gray-100"></div>
            </>
          )}

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
