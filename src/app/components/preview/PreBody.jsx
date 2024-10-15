"use client";
import React from "react";
import { getPlatformIcon, getPlatformBgColor } from "../../../iconsUtils";

export default function PreBody({ userData }) {
  console.log(`Preview Body userData : ${JSON.stringify(userData, null, 2)} `);

  // Function to get the icon based on the platform
  

  return (
    <section className="mt-[-8rem]">
      <div className="max-w-custom-container mx-auto">
        <div className="">
          <div className=" ">
            <div className="flex justify-center">
              <div className="text-center shadow-2xl bg-white rounded-lg px-5 py-10">
                <div className="w-24 h-24 mb-4 bg-gray-200 rounded-full mx-auto">
                  <img
                    src={userData?.imageProfile}
                    alt=""
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <h1 className="mb-2 text-xl">{`${userData?.firstName} ${userData?.lastName}`}</h1>
                <p className="mb-12 text-sm text-gray-500">{userData?.email}</p>
                {/* link card  */}

                {/* Map through the links and display them */}
                {userData?.link?.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-100 w-56 h-10 rounded-lg mb-5"
                  >
                    <a  href={item.link.startsWith('https') ? item.link : `http://${item.link}`} target="blank">
                      <div
                        className={`px-3 w-full h-full rounded-lg flex items-center justify-between text-white ${
                         getPlatformBgColor(item.platform)
                        }`}
                      >
                        <div className="flex items-center gap-1 text-white text-sm">
                        {getPlatformIcon(item.platform) && (
                            <img src={getPlatformIcon(item.platform)} alt={item.platform} />
                          )}
                          <h1 className="">{item.platform}</h1>
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
                ))}
                <div />
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
