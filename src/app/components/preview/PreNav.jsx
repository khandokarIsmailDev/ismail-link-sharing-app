import React from "react";

export default function PreNav() {
  return (
    <nav className="bg-[#633CFF] h-72 rounded-b-3xl">
      <div className="max-w-custom-container mx-auto">
        <div className="pt-5">
          <div className="flex justify-between bg-white rounded-lg p-3 ">
            <div className="">
              <p className="px-4 py-2 border border-[#633CFF] rounded-lg text-[#633CFF] font-semibold">
                Back to Editor
              </p>
            </div>
            <div className="px-4 py-2 border bg-[#633CFF] rounded-lg text-white font-semibold">
              <p>Share Link</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
