import React from 'react';

const ShimmerMenuEffect = () => {
  return (
    <div className="w-full max-w-2xl mt-32 pt-20 sm:pt-24 md:pt-32 mx-auto p-4 sm:p-6 lg:p-8 min-h-screen">
      {/* CSS for shimmer effect */}
      <style jsx>{`
        .shimmer {
          background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%);
          background-size: 200px 100%;
          animation: loading 1.5s infinite;
        }
        
        @keyframes loading {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: calc(200px + 100%) 0;
          }
        }
      `}</style>
      
      {/* Restaurant Header Card */}
      <div className="bg-amber-50 rounded-2xl border border-amber-500 p-4 sm:p-6 mb-4 sm:mb-6 shadow-lg">
        {/* Restaurant Name */}
        <div className="shimmer h-6 sm:h-8 md:h-10 w-48 sm:w-64 rounded-lg mb-3 sm:mb-4" />
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
          <div className="shimmer h-5 sm:h-6 w-16 sm:w-20 rounded-full" />
          <div className="shimmer h-5 sm:h-6 w-12 sm:w-16 rounded-full" />
          <div className="shimmer h-5 sm:h-6 w-14 sm:w-18 rounded-full" />
        </div>
        
        {/* Rating and Info Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            {/* Rating */}
            <div className="shimmer h-6 sm:h-7 w-16 sm:w-20 rounded" />
            {/* Reviews */}
            <div className="shimmer h-4 sm:h-5 w-20 sm:w-28 rounded" />
          </div>
          {/* Price */}
          <div className="shimmer h-5 sm:h-6 w-24 sm:w-32 rounded" />
        </div>
        
        {/* Location and Time */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4 sm:mb-6">
          <div className="shimmer h-4 sm:h-5 w-24 sm:w-32 rounded" />
          <div className="shimmer h-4 sm:h-5 w-20 sm:w-24 rounded" />
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-2 sm:gap-4">
          <div className="shimmer h-10 sm:h-12 md:h-14 flex-1 rounded-lg" />
          <div className="shimmer h-10 sm:h-12 md:h-14 flex-1 rounded-lg" />
        </div>
      </div>
      
      {/* Offers Section */}
      <div className="mb-4 sm:mb-6">
        <div className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto pb-2 px-2">
          {[1, 2, 3, 4].map((item, i) => (
            <div key={i} className="shimmer min-w-[180px] sm:min-w-[220px] md:min-w-[250px] h-14 sm:h-16 md:h-18 rounded-lg border border-amber-200 flex-shrink-0" />
          ))}
        </div>
      </div>
      
      {/* Menu Categories */}
      <div className="space-y-4 sm:space-y-6">
        {new Array(6).fill("").map((item, i) => (
          <div key={i} className="w-full border-t border-amber-200 py-3 sm:py-4 first:border-t-0">
            {/* Category Header */}
            <div className="w-full flex justify-between items-center mb-3 sm:mb-4">
              <div className="shimmer h-6 sm:h-7 md:h-8 w-32 sm:w-40 md:w-48 rounded" />
              <div className="shimmer h-8 sm:h-9 md:h-10 w-8 sm:w-9 md:w-10 rounded" />
            </div>
            
            {/* Menu Items */}
            <div className="space-y-3 sm:space-y-4">
              {[1, 2, 3].map((menuItem, j) => (
                <div key={j} className="flex justify-between items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border border-amber-100">
                  {/* Item Details */}
                  <div className="flex-1 space-y-2 sm:space-y-3">
                    {/* Item Name */}
                    <div className="shimmer h-4 sm:h-5 w-3/4 sm:w-2/3 rounded" />
                    {/* Price */}
                    <div className="shimmer h-3 sm:h-4 w-16 sm:w-20 rounded" />
                    {/* Description */}
                    <div className="space-y-1 sm:space-y-2">
                      <div className="shimmer h-3 sm:h-4 w-full rounded" />
                      <div className="shimmer h-3 sm:h-4 w-4/5 rounded" />
                    </div>
                  </div>
                  
                  {/* Item Image & Add Button */}
                  <div className="flex-shrink-0 space-y-2 sm:space-y-3">
                    <div className="shimmer w-20 sm:w-24 md:w-28 h-16 sm:h-20 md:h-24 rounded-lg" />
                    <div className="shimmer h-8 sm:h-9 w-16 sm:w-20 rounded-lg mx-auto" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom Spacing */}
      <div className="h-8 sm:h-12 md:h-16" />
    </div>
  );
};

export default ShimmerMenuEffect;