"use client";
import React from "react";
import MainLinksItem from "./MainLinksItem";

export default function LinksStart({
  links,
  onPlatformSelect,
  newHandlChange,
  addNewLink,
  removeLink,
  profileData, // Pass profileData as a prop
}) {
  // Set the maximum number of links allowed
  const MAX_LINKS = 5;

  const handleSave = async () => {
    try {
      // Check if the profile exists
      let userId = profileData.id;

      // If the profile does not exist, create it first
      if (!userId) {
        const newProfile = {
          firstName: "", // Default value
          lastName: "",  // Default value
          email: "",     // Default value
          imageProfile: "/images/man.png", // Default value
        };

        const profileResponse = await fetch('/api/profile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newProfile),
        });

        if (!profileResponse.ok) {
          throw new Error('Failed to create profile');
        }

        const savedProfile = await profileResponse.json();
        userId = savedProfile.data.id; // Get the newly created user ID
      }

      // Create a payload with the user ID and links
      const payload = {
        id: userId, // Use the profile ID
        link: links.map(link => ({
          platform: link.platform,
          link: link.link,
        })),
      };

      console.log('Sending payload:', payload);  // Log the payload
      const response = await fetch('/api/profile/savelinks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        throw new Error('Failed to save links');
      }

      // Handle success
      const savedLinks = await response.json();
      console.log('Saved links:', savedLinks);

      // Update localStorage with the new links
      const updatedProfileData = {
        id: userId, // Use the user ID from the profile
        firstName: profileData.firstName || '', // Ensure firstName is included
        lastName: profileData.lastName || '', // Ensure lastName is included
        email: profileData.email || '', // Ensure email is included
        imageProfile: profileData.imageProfile || '/images/man.png', // Ensure imageProfile is included
        links: savedLinks.userProfile.link, // Assuming the response contains the updated links
      };
      localStorage.setItem('profileData', JSON.stringify(updatedProfileData));

      alert("Links saved successfully!");
    } catch (error) {
      console.error('Error saving links:', error);
    }
  };

  // console.log(`here is LinksStart component : ${links} : length is : ${links.length}`);

  return (
    <div className="">
      {/* heading  */}
      <div className="mb-7">
        <h1 className="lg:text-3xl sm:text-xl font-bold mb-2">
          Customize your links
        </h1>
        <p className="text-sm text-gray-500">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </div>
      {/* heading end  */}

      {/* Add links start */}
      <div className="mb-5">
        {/* Disable button if links have reached max */}
        {links.length < MAX_LINKS && (
          <button
            onClick={addNewLink} // Add onClick event to call the addNewLink function
            className="w-full text-center border border-[#633cff] py-3 rounded-lg text-[#633cff] font-medium transition-all hover:bg-[#633cff] hover:text-white"
          >
            + Add new link
          </button>
        )}
        {/* Optionally display a message when the max limit is reached */}
        {links.length >= MAX_LINKS && (
          <p className="text-sm text-red-500">
            Maximum of {MAX_LINKS} links reached.
          </p>
        )}
      </div>
      {/* Add links end  */}

      {/* list items  */}
      <div className="">
        {links.length === 0 ? (
          <div className="">
            <img
              className="w-full"
              src="/images/illustration-empty.svg"
              alt=""
            />
          </div>
        ) : (
          <div className="max-h-96 md:h-[30rem] overflow-auto">
            {links.map((link, index) => (
              <MainLinksItem
                key={index} // Use index as key
                newLink={link} // Pass the current link object
                onPlatformSelect={(platform) =>
                  onPlatformSelect(index, platform)
                }
                newHandlChange={(e) => newHandlChange(index, e)}
                index={index}
                onRemove={removeLink}
              />
            ))}
          </div>
        )}
        {/* horizontal line  */}
        <div className="h-[1px] border mb-4 mt-6 sm:mt-20"></div>
        <div className="w-full text-end">
          <input
            className="w-full sm:w-20 px-5 py-2 border rounded-lg bg-[#633CFF] text-white"
            type="submit"
            defaultValue="Save"
            onClick={handleSave}
          />
        </div>
      </div>
      {/* list items end  */}
    </div>
  );
}
