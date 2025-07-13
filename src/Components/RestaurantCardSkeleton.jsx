import React from 'react';

const RestaurantCardSkeleton = () => {
  return (
    <div 
      style={{boxShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"}} 
      className='flex flex-col m-4 md:min-w-[280px] min-w-[250px] md:max-w-[280px] max-w-[250px] shadow-lg object-cover overflow-hidden bg-white rounded-2xl animate-pulse'
    >
      <div className='relative'>
        {/* Image skeleton */}
        <div className='w-full h-48 bg-gray-300'></div>
        
        {/* Discount text skeleton */}
        <div className='absolute bottom-0 w-full py-2 pt-20 px-2 bg-gradient-to-b from-[rgba(27,30,36,0)] to-[rgb(27,30,36)] to-[84.21%]'>
          <div className='w-32 h-6 bg-gray-400 rounded'></div>
        </div>
      </div>

      <div className='p-4'>
        {/* Restaurant name skeleton */}
        <div className='w-full h-7 bg-gray-300 rounded mb-2'></div>
        
        {/* Rating and delivery time skeleton */}
        <div className='flex justify-between py-1 px-2'>
          <div className='flex gap-1 items-center'>
            <div className='w-4 h-4 bg-gray-300 rounded'></div>
            <div className='w-8 h-4 bg-gray-300 rounded'></div>
          </div>
          <div className='flex items-center gap-1'>
            <div className='w-4 h-4 bg-gray-300 rounded'></div>
            <div className='w-16 h-4 bg-gray-300 rounded'></div>
          </div>
        </div>
        
        {/* Cuisines skeleton */}
        <div className='py-2'>
          <div className='w-full h-4 bg-gray-300 rounded'></div>
        </div>
        
        {/* Location skeleton */}
        <div className='flex gap-1 items-center py-1'>
          <div className='w-4 h-4 bg-gray-300 rounded'></div>
          <div className='w-32 h-4 bg-gray-300 rounded'></div>
        </div>
      </div>
    </div>
  );
};



export default RestaurantCardSkeleton;