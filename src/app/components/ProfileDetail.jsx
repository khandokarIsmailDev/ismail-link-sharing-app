'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import DragDrop from "./DragDrop"

export default function ProfileDetail() {
  // const router = useRouter();
  const [formData, setFormData] = useState({
    id: null,
    firstName: '',
    lastName: '',
    email: '',
    imageProfile: '/images/man.png'
  });

  useEffect(() => {
    // Fetch stored profile data from localStorage on component mount
    const storedData = localStorage.getItem('profileData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      // Ensure formData structure matches
      setFormData({
        id:parsedData.data.id,
        firstName: parsedData.data.firstName || '',
        lastName: parsedData.data.lastName || '',
        email: parsedData.data.email || '',
        imageProfile: parsedData.data.imageProfile || '/images/man.png'
      });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (imageUrl) => {
    setFormData(prevData => ({
      ...prevData,
      imageProfile: imageUrl,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const userProfile = {
      id: formData.id,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      imageProfile: formData.imageProfile
    };
  
    try {
      const res = await fetch('/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userProfile),
      });
  
      if (res.ok) {
        const savedProfile = await res.json();
        localStorage.setItem('profileData', JSON.stringify(savedProfile));
        alert("Profile saved successfully!");
  
        window.location.reload()
      } else {
        const errorData = await res.json();
        console.error("Error response:", errorData);
        alert(`Error saving profile: ${errorData.error}`)
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };
  
  return (
    <div className="">
      {/* profile heading */}
      <div className="mb-7">
        <h1 className="lg:text-3xl sm:text-xl font-bold mb-2">Profile Details</h1>
        <p className="text-sm text-gray-500">Add your details to create a personal touch to your profile.</p>
      </div>
      {/* upload image */}
      <div className="sm:flex block gap-4 justify-between items-center bg-gray-100 h-56 rounded-lg px-4 py-4 text-gray-500 mb-4">
        <div className="sm:w-1/3 block text-sm">
          <h1>Profile picture</h1>
        </div>
        <DragDrop onImageChange={handleImageChange} />
        <div className="sm:w-1/3 text-[.6rem]">
          <p>
            Image must be below 1024x1024px. <br />
            Use PNG, JPG, or BMP format.
          </p>
        </div>
      </div>
      {/* info field */}
      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="bg-gray-100 py-4 px-4 rounded-lg">
            <div className="flex flex-col sm:flex-row gap-2 sm:justify-between sm:items-center mb-4">
              <label htmlFor="firstName" className="w-1/3 text-sm text-gray-400">First name*</label>
              <input
                type="text"
                name="firstName"
                className="w-full sm:w-2/3 placeholder-gray-400 placeholder-opacity-60 py-2 px-3 border border-gray-200 rounded-lg bg-white focus:shadow-[0_0_32px_#633cff40] focus:ring-2 focus:ring-[#633CFF] focus:outline-none"
                placeholder="Your First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:justify-between sm:items-center mb-4">
              <label htmlFor="lastName" className="w-1/3 text-sm text-gray-400">Last name*</label>
              <input
                type="text"
                name="lastName"
                className="w-full sm:w-2/3 placeholder-gray-400 placeholder-opacity-60 py-2 px-3 border border-gray-200 rounded-lg"
                placeholder="Your Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:justify-between sm:items-center mb-4">
              <label htmlFor="email" className="w-1/3 text-sm text-gray-400">Email*</label>
              <input
                type="email"
                name="email"
                className="w-full sm:w-2/3 placeholder-gray-400 placeholder-opacity-60 py-2 px-3 border border-gray-200 rounded-lg"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {/* horizontal line */}
          <div className="h-[1px] border mb-4 mt-6 sm:mt-32" />
          <div className="w-full text-end">
            <button type="submit" className="w-full sm:w-20 px-5 py-2 border rounded-lg bg-[#633CFF] text-white">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
