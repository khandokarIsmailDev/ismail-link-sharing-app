'use client'

import React, { useState } from "react";
import MobileMoc from "./MobileMoc";
import DropdownItem from "./DropdownItem";

export default function Hero({ ProfileDetail, LinksStart }) {
  
   // Initialize state to manage the links, now including 'icon' for each link
  const [links, setLinks] = useState([{ platform: '', link: '', icon: '' }]); // Add 'icon' to each link
  const [newLink, setNewLink] = useState({ platform: '', link: '', icon: '' });

  // Add a new link when "Add new link" button is clicked
  const addNewLink = () => {
    setLinks([...links, { platform: '', link: '', icon: '' }]); // Add an empty new link with icon
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
    if (platform === 'GitHub') {
      updatedLinks[index].icon = "/images/icon-github.svg";
    }else if(platform === 'Twitter'){
        updatedLinks[index].icon = '/images/twiiter-white.svg'
    }else if(platform === 'Twitch'){
        updatedLinks[index].icon = '/images/twitch-white.svg'
    }else if(platform === 'Facebook'){
        updatedLinks[index].icon = '/images/facebook-white.svg'
    }else if(platform === 'Gitlab'){
        updatedLinks[index].icon = '/images/gitlab-white.svg'
    }

    setLinks(updatedLinks); // Update the state
  };

 


  console.log(links)

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
            {LinksStart && <LinksStart newLink={newLink} onPlatformSelect={handlePlatformSelect} newHandlChange={handleInputChange} addNewLink={addNewLink} links={links} />}
            
            {/* Links end */}
          </div>
        </div>
      </div>
    </section>
  );
}
