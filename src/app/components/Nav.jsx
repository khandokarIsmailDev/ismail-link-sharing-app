'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Nav() {
    
  const pathname = usePathname();
  const router = useRouter();
  const [userId, setUserId] = useState(null);

  // Function to fetch user ID from localStorage
  const fetchUserId = () => {
    if (typeof window !== 'undefined') { // Check if running in the browser
      const userData = localStorage.getItem('profileData');
      console.log("User data from local storage:", userData); // Log raw user data

      if (userData) {
        try {
          const parsedResponse = JSON.parse(userData);
          console.log("Parsed response:", parsedResponse); // Log parsed response

          // Check if the expected structure is present
          if (parsedResponse) {
            const id = parsedResponse.id; // Access user ID directly
            console.log("User ID found:", id); // Log user ID

            if (id) {
              setUserId(id);
            } else {
              console.error("User ID is undefined or null!");
            }
          } else {
            console.error("Parsed response is null or undefined!");
          }
        } catch (error) {
          console.error("Error parsing user data:", error); // Log any parsing errors
        }
      } else {
        console.error("No user data found in local storage!"); // Log if no data found
      }
    }
  };

  // Extract user id from localStorage when component mounts and when localStorage changes
  useEffect(() => {
    // Fetch user ID initially
    fetchUserId();

    // Listen for storage events (this won't trigger for the same tab)
    const handleStorageChange = (event) => {
      if (event.key === "profileData") {
        fetchUserId(); // Fetch user ID when profileData changes
      }
    };

    // Add event listener for storage events
    window.addEventListener("storage", handleStorageChange);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handlePreviewClick = () => {
    if (userId) {
      // Redirect to /preview/:id if userId exists
      router.push(`/preview/${userId}`);
    } else {
      alert("No user ID found in local storage!");
    }
  };

  return (
    <>
      {/* nav section desktop */}
      <section className="mt-5 mb-5 hidden sm:block">
        <div className="max-w-custom-container mx-auto bg-white px-5 py-5 rounded-lg">
          <div className="flex justify-between">
            <Link href="/" className="flex items-center">
              <img
                className="w-28"
                src="/images/logo-devlinks-large.svg"
                alt=""
              />
            </Link>
            <div className="flex gap-5">
              <Link href="/links" className={`flex items-center gap-1  font-medium px-2 rounded-lg ${pathname === "/links" ? "text-[#633CFF] bg-[#EFEBFF]" : "text-[#737373]"}`}>
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      d="M8.523 11.72a.749.749 0 0 1 0 1.063l-.371.371A3.751 3.751 0 1 1 2.847 7.85l1.507-1.506A3.75 3.75 0 0 1 9.5 6.188a.753.753 0 0 1-1 1.125 2.25 2.25 0 0 0-3.086.091L3.908 8.91a2.25 2.25 0 0 0 3.183 3.183l.37-.371a.748.748 0 0 1 1.062 0Zm4.63-8.874a3.756 3.756 0 0 0-5.305 0l-.371.37A.751.751 0 1 0 8.539 4.28l.372-.37a2.25 2.25 0 0 1 3.182 3.182l-1.507 1.507a2.25 2.25 0 0 1-3.086.09.753.753 0 0 0-1 1.125 3.75 3.75 0 0 0 5.144-.152l1.507-1.507a3.756 3.756 0 0 0 .002-5.307v-.001Z"
                    />
                  </svg>
                </div>
                <p>Links</p>
              </Link>
              <Link href="/" className={`flex items-center gap-1  font-medium px-5  rounded-lg ${pathname === "/" ? "text-[#633CFF] bg-[#EFEBFF]" : "text-[#737373]"}`}>
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={21}
                    height={20}
                    fill="currentColor"
                    viewBox="0 0 21 20"
                  >
                    <path
                      fill="currentColor"
                      d="M10.5 1.563A8.437 8.437 0 1 0 18.938 10 8.447 8.447 0 0 0 10.5 1.562ZM6.716 15.357a4.688 4.688 0 0 1 7.568 0 6.54 6.54 0 0 1-7.568 0Zm1.596-5.982a2.188 2.188 0 1 1 4.376 0 2.188 2.188 0 0 1-4.376 0Zm7.344 4.683a6.523 6.523 0 0 0-2.265-1.83 4.062 4.062 0 1 0-5.782 0 6.522 6.522 0 0 0-2.265 1.83 6.562 6.562 0 1 1 10.304 0h.008Z"
                    />
                  </svg>
                </div>
                <p>Profile Details</p>
              </Link>
            </div>
            <button onClick={handlePreviewClick} className="text-[#633CFF] hover:bg-[#633CFF] hover:text-white transition-all  rounded-lg font-medium ">
              <p className="px-6 py-2 border rounded-lg font-medium border-[#633CFF]">
                Preview
              </p>
            </button>
          </div>
        </div>
      </section>
      {/* end nav section */}
      {/* nav section mobile  */}
      <section className="mt-5 mb-5 sm:hidden">
        <div className="max-w-custom-container mx-auto bg-white px-5 py-5 rounded-lg">
          <div className="flex justify-between">
            <Link href="/" className="flex items-center">
              <img
                className=""
                src="/images/logo-devlinks-small.svg"
                alt=""
              />
            </Link>
            <div className="flex gap-1">
              <div className="flex items-center gap-1 text-[#737373] font-medium">
                <Link href="/links" className="bg-[#EFEBFF] px-3 py-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      d="M8.523 11.72a.749.749 0 0 1 0 1.063l-.371.371A3.751 3.751 0 1 1 2.847 7.85l1.507-1.506A3.75 3.75 0 0 1 9.5 6.188a.753.753 0 0 1-1 1.125 2.25 2.25 0 0 0-3.086.091L3.908 8.91a2.25 2.25 0 0 0 3.183 3.183l.37-.371a.748.748 0 0 1 1.062 0Zm4.63-8.874a3.756 3.756 0 0 0-5.305 0l-.371.37A.751.751 0 1 0 8.539 4.28l.372-.37a2.25 2.25 0 0 1 3.182 3.182l-1.507 1.507a2.25 2.25 0 0 1-3.086.09.753.753 0 0 0-1 1.125 3.75 3.75 0 0 0 5.144-.152l1.507-1.507a3.756 3.756 0 0 0 .002-5.307v-.001Z"
                    />
                  </svg>
                </Link>
                <Link href="/" className="bg-[#EFEBFF] px-3 py-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={21}
                    height={20}
                    fill="currentColor"
                    viewBox="0 0 21 20"
                  >
                    <path
                      fill="currentColor"
                      d="M10.5 1.563A8.437 8.437 0 1 0 18.938 10 8.447 8.447 0 0 0 10.5 1.562ZM6.716 15.357a4.688 4.688 0 0 1 7.568 0 6.54 6.54 0 0 1-7.568 0Zm1.596-5.982a2.188 2.188 0 1 1 4.376 0 2.188 2.188 0 0 1-4.376 0Zm7.344 4.683a6.523 6.523 0 0 0-2.265-1.83 4.062 4.062 0 1 0-5.782 0 6.522 6.522 0 0 0-2.265 1.83 6.562 6.562 0 1 1 10.304 0h.008Z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <button onClick={handlePreviewClick} className="bg-[#633CFF] text-white transition-all rounded-lg font-medium">
              <p className="px-6 py-2">Preview</p>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
