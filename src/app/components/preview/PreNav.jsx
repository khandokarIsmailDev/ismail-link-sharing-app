import React from "react";
import Link from "next/link";
// import { toast } from 'react-toastify'; // Import Toastify

export default function PreNav() {
  const handleShareLink = () => {
    navigator.clipboard.writeText(window.location.href) // Copy current URL
      .then(() => {
        alert("Link copied to clipboard!"); // Show success message
      })
      .catch(err => {
        alert("Failed to copy link."); // Show error message
      });
  };

  return (
    <nav className="bg-[#633CFF] h-72 rounded-b-3xl">
      <div className="max-w-custom-container mx-auto">
        <div className="pt-5">
          <div className="flex justify-between items-center bg-white rounded-lg p-3 ">
            <div className="">
              <Link href="/" className="px-4 py-2 border border-[#633CFF] rounded-lg text-[#633CFF] font-semibold">
                Back to Editor
              </Link>
            </div>
            <div 
              className="px-4 py-2 border bg-[#633CFF] rounded-lg text-white font-semibold cursor-pointer" 
              onClick={handleShareLink} // Add click handler
            >
              <p>Share Link</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
