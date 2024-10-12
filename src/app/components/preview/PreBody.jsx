'use client'
import React from "react";

export default function PreBody({userData}) {
  console.log(userData)
  return (
    <section className="mt-[-8rem]">
      <div className="max-w-custom-container mx-auto">
        <div className="">
          <div className=" ">
            <div className="flex justify-center">
              <div className="text-center shadow-2xl bg-white rounded-lg px-5 py-10">
                <div className="w-24 h-24 mb-4 bg-gray-200 rounded-full mx-auto">
                  <img src="" alt="" />
                </div>
              <h1 className="mb-2 text-xl">{`${userData?.firstName} ${userData?.lastName}`}</h1>
                <p className="mb-12 text-sm text-gray-500">{userData?.email}</p>
                {/* link card  */}
                <div className="bg-gray-100 w-56 h-10 rounded-lg mb-5 cursor-pointer">
                  <div className="px-3 w-full bg-black h-full rounded-lg flex items-center justify-between text-white">
                    <div className="flex items-center gap-1 text-white text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <g clipPath="url(#a)">
                          <path
                            fill="currentColor"
                            d="M9.982 2.288a8.756 8.756 0 0 0-3.963 0c-.754-.462-1.329-.674-1.747-.764a2.315 2.315 0 0 0-.544-.056 1.342 1.342 0 0 0-.247.03l-.01.002-.005.002h-.003l.146.513-.146-.512a.533.533 0 0 0-.342.294 3.328 3.328 0 0 0-.17 2.241 3.578 3.578 0 0 0-.817 2.287c0 1.657.488 2.77 1.321 3.486.584.501 1.292.768 2.002.92a2.496 2.496 0 0 0-.123 1.022v.638c-.434.09-.735.062-.95-.008-.267-.089-.473-.267-.67-.523a5.118 5.118 0 0 1-.289-.429l-.06-.099a9.772 9.772 0 0 0-.24-.378c-.202-.3-.503-.675-.99-.803l-.515-.135-.271 1.032.516.136c.085.021.196.101.379.369.07.106.137.213.202.322l.073.117c.1.162.215.342.349.517.27.352.637.707 1.184.887.373.124.797.154 1.282.079v1.992a.533.533 0 0 0 .533.533h4.267a.533.533 0 0 0 .533-.534v-3.8c0-.336-.015-.644-.11-.931.707-.15 1.41-.416 1.99-.918.833-.72 1.32-1.845 1.32-3.511v-.001a3.578 3.578 0 0 0-.82-2.267 3.328 3.328 0 0 0-.169-2.24.533.533 0 0 0-.34-.295l-.146.512c.146-.512.145-.512.144-.512l-.002-.001-.005-.002-.01-.003a1.344 1.344 0 0 0-.248-.03 2.318 2.318 0 0 0-.544.057c-.417.09-.992.302-1.745.764Z"
                          />
                        </g>
                        <defs>
                          <clipPath id="a">
                            <path fill="#fff" d="M0 0h16v16H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                      <h1 className="">GitHub</h1>
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
                </div>
                {/* link card end  */}
                {/* link card  */}
                <div className="bg-gray-100 w-56 h-10 rounded-lg mb-5">
                  <div className="px-3 w-full bg-red-600 h-full rounded-lg flex items-center justify-between text-white">
                    <div className="flex items-center gap-1 text-white text-sm">
                      <img src="/images/icon-github.svg" alt="" />
                      <h1 className="">GitHub</h1>
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
                </div>
                {/* link card end  */}
                {/* link card  */}
                <div className="bg-gray-100 w-56 h-10 rounded-lg">
                  <div className="px-3 w-full bg-blue-600 h-full rounded-lg flex items-center justify-between text-white">
                    <div className="flex items-center gap-1 text-white text-sm">
                      <img src="/images/icon-github.svg" alt="" />
                      <h1 className="">GitHub</h1>
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
                </div>
                {/* link card end  */}
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
