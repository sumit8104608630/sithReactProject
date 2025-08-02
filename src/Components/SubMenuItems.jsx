import React from 'react';
import { Plus, ChevronDown } from 'lucide-react';

const SubMenuItems = ({ 
  name, 
  description, 
  price, 
  offerPrice, 
  imageId, 
  id, 
  isVeg 
}) => {
  const symbol = (veg = 0) => {
    return (
      <div className="flex items-center">
        <div className={`w-4 h-4 sm:w-5 sm:h-5 border-2 ${veg ? "border-green-600" : "border-red-600"} rounded-sm flex items-center justify-center`}>
          <div className={`w-2 h-2 sm:w-2.5 sm:h-2.5 ${veg ? "bg-green-600" : "bg-red-600"} rounded-full`}></div>
        </div>
      </div>
    );
  };

  return (
    <div key={id} className="flex justify-between w-full gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg shadow-sm border-b border-gray-100 last:border-b-0">
      <div className="flex-1 min-w-0">
        <div className="flex flex-col">
          <span className="mb-2">
            {symbol(isVeg)}
          </span>
          
          <h1 className="font-bold mb-1 text-base sm:text-lg md:text-xl text-gray-900 leading-tight">
            {name}
          </h1>
          
          <div className="font-medium mb-2 flex gap-2 text-gray-500 items-center">
            {!isNaN(offerPrice) && !isNaN(price) && (
              <del className="text-sm sm:text-base text-gray-400">₹{offerPrice}</del>
            )}
            <span className="text-black font-bold text-sm sm:text-base">
              ₹{isNaN(price) ? offerPrice : price}
            </span>
          </div>
        </div>
        
        <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed line-clamp-2 sm:line-clamp-3">
          {description}
        </p>
      </div>
      
      <div className="flex-shrink-0 w-24 sm:w-32 md:w-36">
        <div className="flex relative justify-center flex-col items-center">
          <img
            className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 z-10 rounded-lg object-cover hover:scale-105 transition-transform duration-300"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
            alt={name}
            loading="lazy"
          />
          
          <div className="absolute w-full z-20 -bottom-2 sm:-bottom-3">
            <div className="flex w-full justify-center">
              <button className="px-3 py-1 sm:px-4 sm:py-1.5 outline-2 outline-green-600 md:px-5 md:py-1 cursor-pointer border border-white z-20 bg-green-600 hover:bg-green-700 text-white font-semibold text-xs sm:text-sm rounded shadow-lg transition-colors duration-200">
                Add
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-2 sm:mt-3 text-center">
          <span className="text-xs sm:text-sm font-medium text-gray-500">
            Customisable
          </span>
        </div>
      </div>
    </div>
  );
};

export default SubMenuItems;