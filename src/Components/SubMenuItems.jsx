import React from 'react';

const SubMenuItems = ({ 
  name, 
  description, 
  price, 
  offerPrice, 
  imageId, 
  id, 
  isVeg,
  onAddToCart
}) => {
  const handleAddClick = () => {
    if (onAddToCart) {
      onAddToCart({ id, name, price, offerPrice });
    }
  };

  return (
    <div className="flex justify-between w-full gap-4 p-4 bg-white rounded-lg shadow-sm border-b border-gray-100 last:border-b-0">
      {/* Left Section - Item Details */}
      <div className="flex-1 min-w-0">
        {/* Veg/Non-Veg Indicator */}
        <div className="flex items-center mb-2">
          <div className={`w-4 h-4 border-2 ${isVeg ? "border-green-600" : "border-red-600"} rounded-sm flex items-center justify-center`}>
            <div className={`w-2 h-2 ${isVeg ? "bg-green-600" : "bg-red-600"} rounded-full`}></div>
          </div>
        </div>
        
        {/* Item Name */}
        <h3 className="font-bold text-start mb-1 text-lg text-gray-900 leading-tight">
          {name}
        </h3>
        
        {/* Price Display */}
        <div className="mb-2 flex gap-2 items-center">
          {!isNaN(offerPrice) && !isNaN(price) && (
            <del className="text-sm text-gray-400">₹{offerPrice}</del>
          )}
          <span className="text-black font-bold text-sm">
            ₹{isNaN(price) ? offerPrice : price}
          </span>
        </div>
        
        {/* Description */}
        <p className="text-sm text-start text-gray-600 leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
      
      {/* Right Section - Image & Add Button */}
      <div className="flex-shrink-0 w-24 flex flex-col items-center justify-center">
        {/* Image with Add Button or Just Add Button */}
        {imageId ? (
          <div className="flex relative justify-center flex-col items-center">
            <img
              className="w-20 h-20 rounded-lg object-cover hover:scale-105 transition-transform duration-300"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
              alt={name}
              loading="lazy"
            />
            <div className="absolute w-full -bottom-2">
              <div className="flex justify-center">
                <div 
                  className="px-3 py-1 cursor-pointer border border-white bg-green-600 hover:bg-green-700 text-white font-semibold text-xs rounded shadow-lg transition-colors duration-200"
                  onClick={handleAddClick}
                >
                  Add
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <div 
              className="px-3 py-1 cursor-pointer border border-white bg-green-600 hover:bg-green-700 text-white font-semibold text-xs rounded shadow-lg transition-colors duration-200"
              onClick={handleAddClick}
            >
              Add
            </div>
          </div>
        )}
        
        {/* Customisable Label */}
        <div className="mt-2 text-center">
          <span className="text-xs font-medium text-gray-500">
            Customisable
          </span>
        </div>
      </div>
    </div>
  );
};

export default SubMenuItems;