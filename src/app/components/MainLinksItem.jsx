'use client';
import React from 'react';
import DropdownItem from './DropdownItem';

export default function MainLinksItem({ newLink, onPlatformSelect, newHandlChange,index,onRemove }) {
  return (
    <div className="mb-5">
      <div className="bg-gray-100 p-4 rounded-lg">
        <div className="flex justify-between">
          <div className="flex gap-2 text-gray-500">
            <img src="/images/icon-drag-and-drop.svg" alt="" />
            <p className="font-medium text-gray-500">Link #{index+1}</p> {/* Display link number dynamically */}
          </div>
          <p className="text-gray-500 font-light cursor-pointer"
          onClick={() => onRemove(index)}
          >Remove</p>
        </div>
        {/* dropdown start */}
        <DropdownItem 
          newLink={newLink} 
          onPlatformSelect={onPlatformSelect} 
        />
        {/* dropdown end  */}
        <div className="mt-3">
          <label htmlFor="platform" className="block text-gray-700 mb-1">
            Link
          </label>
          <div className="flex gap-2 items-center bg-white p-2 rounded-lg border">
            <img src="/images/icon-link.svg" alt="" />
            <input
              className="w-full focus:outline-none"
              type="text"
              name="link"
              value={newLink.link}
              onChange={newHandlChange} 
              placeholder="www.github.com.."
            />
          </div>
        </div>
      </div>
    </div>
  );
}









// 'use client'
// import React from 'react'
// import DropdownItem from './DropdownItem'

// export default function MainLinksItem({newLink ,onPlatformSelect, newHandlChange}) {
//   return (
//     <div className="mb-5">
//             <div className="bg-gray-100 p-4 rounded-lg">
//               <div className="flex justify-between">
//                 <div className="flex gap-2 text-gray-500">
//                   <img src="/images/icon-drag-and-drop.svg" alt="" />
//                   <p className="font-medium text-gray-500">Link #1</p>
//                 </div>
//                 <p className="text-gray-500 font-light">Remove</p>
//               </div>
//               {/* dropdown start */}
//               <DropdownItem newLink={newLink} onPlatformSelect={onPlatformSelect}/>
//               {/* dropdown end  */}
//               <div className="mt-3">
//                 <label htmlFor="platform" className="block text-gray-700 mb-1">
//                   Link
//                 </label>
//                 <div className="flex gap-2 items-center bg-white p-2 rounded-lg border">
//                   <img src="/images/icon-link.svg" alt="" />
//                   <input
//                     className="w-full"
//                     type="text"
//                     name="link"
//                     value={newLink.link}
//                     onChange={newHandlChange}
//                     placeholder="www.github.com.."
//                     id=""
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//   )
// }
