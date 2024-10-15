"use client";

import React, { useState, useEffect } from "react";
import MobileMoc from "./MobileMoc";
import DropdownItem from "./DropdownItem";

export default function Hero({ ProfileDetail, LinksStart }) {
  // Initialize profileData first
  const [profileData, setProfileData] = useState(JSON.parse(localStorage.getItem('profileData')) || {});
  
  // Initialize links with existing links from profileData, ensuring it's always an array
  const [links, setLinks] = useState(Array.isArray(profileData.links) ? profileData.links : []); // Ensure links is an array
  const [newLink, setNewLink] = useState({ platform: "", link: "", icon: "" });

  // Effect to update links when profileData changes
  useEffect(() => {
    // Set icons based on platform when loading from local storage
    const updatedLinks = profileData.links?.map(link => {
      if (link.platform === "GitHub") {
        link.icon = "/images/icon-github.svg";
      } else if (link.platform === "Twitter") {
        link.icon = "/images/twiiter-white.svg";
      } else if (link.platform === "Twitch") {
        link.icon = "/images/twitch-white.svg";
      } else if (link.platform === "Facebook") {
        link.icon = "/images/facebook-white.svg";
      } else if (link.platform === "Gitlab") {
        link.icon = "/images/gitlab-white.svg";
      }
      return link;
    });
    setLinks(updatedLinks);
  }, [profileData]);

  // Add a new link when "Add new link" button is clicked
  const addNewLink = () => {
    setLinks([...links, { platform: "", link: "", icon: "" }]); // Add an empty new link with icon
  };

  // Handle form input changes
  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedLinks = [...links];
    updatedLinks[index][name] = value; // Update the specific link at the index
    setLinks(updatedLinks); // Update the state
  };

  // Handle platform selection from the dropdown, and set the correct icon
  const handlePlatformSelect = (index, platform) => {
    const updatedLinks = [...links];
    updatedLinks[index].platform = platform; // Update the platform for the specific link

    // Set the correct icon based on the platform
    if (platform === "GitHub") {
      updatedLinks[index].icon = "/images/icon-github.svg";
    } else if (platform === "Twitter") {
      updatedLinks[index].icon = "/images/icon-twitter.svg";
    } else if (platform === "Twitch") {
      updatedLinks[index].icon = "/images/icon-twitch.svg";
    } else if (platform === "Facebook") {
      updatedLinks[index].icon = "/images/icon-facebook.svg";
    } else if (platform === "Gitlab") {
      updatedLinks[index].icon = "/images/icon-gitlab.svg";
    }

    setLinks(updatedLinks); // Update the state
  };

  const removeLink = (indexToRemove) => {
    setLinks((prevLinks) =>
      prevLinks.filter((_, index) => index !== indexToRemove)
    );
  };

  console.log(links);

  return (
    <section>
      <div className="max-w-custom-container mx-auto">
        <div className="flex gap-5">
          <div className="lg:w-5/12 md:w-1/2 hidden md:block bg-white rounded-lg">
            {/* mobile mock */}
            <MobileMoc links={links} />
            {/* mobile mock end */}
          </div>
          <div className="lg:w-7/12 md:w-1/2 w-full bg-white rounded-lg px-6 py-10">
            {/* profile detail */}
            {ProfileDetail && <ProfileDetail />}
            {/* profile detail end */}

            {/* Links start */}
            {LinksStart && (
              <LinksStart
                profileData={profileData} // Pass profileData to LinksStart
                newLink={newLink}
                onPlatformSelect={handlePlatformSelect}
                newHandlChange={handleInputChange}
                addNewLink={addNewLink}
                links={links}
                removeLink={removeLink}
              />
            )}

            {/* Links end */}
          </div>
        </div>
      </div>
    </section>
  );
}
