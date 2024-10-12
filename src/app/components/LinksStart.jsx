
'use client';
import React from "react";
import MainLinksItem from "./MainLinksItem";

export default function LinksStart({ links, onPlatformSelect, newHandlChange, addNewLink }) {
  // Set the maximum number of links allowed
  const MAX_LINKS = 5;

  return (
    <div className="">
      {/* heading  */}
      <div className="mb-7">
        <h1 className="lg:text-3xl sm:text-xl font-bold mb-2">
          Customize your links
        </h1>
        <p className="text-sm text-gray-500">
          Add/edit/remove links below and then share all your profiles with the world!
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
        <div className="max-h-96 overflow-auto">
          {links.map((link, index) => (
            <MainLinksItem
              key={index} // Use index as key
              newLink={link} // Pass the current link object
              onPlatformSelect={(platform) => onPlatformSelect(index, platform)} 
              newHandlChange={(e) => newHandlChange(index, e)} 
              index={index}
            />
          ))}
        </div>
        {/* horizontal line  */}
        <div className="h-[1px] border mb-4 mt-6 sm:mt-32" />
        <div className="w-full text-end">
          <input
            className="w-full sm:w-20 px-5 py-2 border rounded-lg bg-[#633CFF] text-white"
            type="submit"
            defaultValue="Save"
          />
        </div>
      </div>
      {/* list items end  */}
    </div>
  );
}

















// 'use client'
// import React from "react";
// import MainLinksItem from "./MainLinksItem";

// export default function LinksStart({newLink,onPlatformSelect,newHandlChange}) {
//   return (
//     <div className="">
//       {/* heading  */}
//       <div className="mb-7">
//         <h1 className="lg:text-3xl sm:text-xl font-bold mb-2">
//           Customize your links
//         </h1>
//         <p className="text-sm text-gray-500">
//           Add/edit/remove links below and then share all your profiles with the
//           world!
//         </p>
//       </div>
//       {/* heading end  */}
//       {/* Add links start  */}
//       <div className="mb-5">
//         <button className="w-full text-center border border-[#633cff] py-3 rounded-lg text-[#633cff] font-medium transition-all hover:bg-[#633cff] hover:text-white">
//           + Add new link
//         </button>
//       </div>
//       {/* Add links end  */}
//       {/* list items  */}
//       <div className="">
//         <div className="max-h-96 overflow-auto">
//           <MainLinksItem newLink={newLink} onPlatformSelect={onPlatformSelect} newHandlChange={newHandlChange}/>
//           {/* <MainLinksItem/> */}
          
//         </div>
//         {/* horizontal line  */}
//         <div className="h-[1px] border mb-4 mt-6 sm:mt-32" />
//         <div className="w-full text-end">
//           <input
//             className="w-full sm:w-20 px-5 py-2 border rounded-lg bg-[#633CFF] text-white"
//             type="submit"
//             defaultValue="Save"
//           />
//         </div>
//       </div>
//       {/* list items end  */}
//     </div>
//   );
// }
