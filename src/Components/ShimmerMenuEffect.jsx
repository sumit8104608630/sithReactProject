import React from 'react';

const ShimmerMenuEffect = () => {
  return (
    <div className="w-1/2 pt-30 mx-auto p-4">
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
      <div className="bg-white rounded-2xl border-2 border-orange-200 p-6 mb-6">
        {/* Restaurant Name */}
        <div className="shimmer h-8 w-32 rounded-lg mb-4" />
        
        {/* Tags */}
        <div className="flex gap-2 mb-4">
          <div className="shimmer h-6 w-16 rounded-full" />
          <div className="shimmer h-6 w-12 rounded-full" />
        </div>
        
        {/* Rating and Info Row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            {/* Rating */}
            <div className="shimmer h-6 w-12 rounded" />
            {/* Reviews */}
            <div className="shimmer h-4 w-24 rounded" />
          </div>
          {/* Price */}
          <div className="shimmer h-6 w-20 rounded" />
        </div>
        
        {/* Location and Time */}
        <div className="flex items-center gap-4 mb-6">
          <div className="shimmer h-4 w-20 rounded" />
          <div className="shimmer h-4 w-16 rounded" />
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-4">
          <div className="shimmer h-12 flex-1 rounded-lg" />
          <div className="shimmer h-12 flex-1 rounded-lg" />
        </div>
      </div>
      
      {/* Offers Section */}
      <div className="flex gap-4 mb-6 overflow-hidden ">
        <div className="shimmer min-w-[200px] h-16 rounded-lg border border-orange-200" />
        <div className="shimmer min-w-[200px] h-16 rounded-lg border border-orange-200" />
        <div className="shimmer min-w-[200px] h-16 rounded-lg border border-orange-200" />
        <div className="shimmer min-w-[200px] h-16 rounded-lg border border-orange-200" />
      </div>
      
      {/* Menu Categories */}
      <div className='my-5'>
      {new Array(5).fill("").map(item=><div className='w-full border-amber-500 py-2 px-1 border-t-1'>
         <div className='w-full flex justify-between'>
                 <h1 className='text-xl font-semibold shimmer h-10 w-100 rounded text-amber-500 '></h1>
                 <button  className='cursor-pointer shimmer h-10 w-10 rounded  px-1 py-1'>
                 </button>
                </div>
      </div>)}
      </div>
    </div>
  );
};

export default ShimmerMenuEffect;