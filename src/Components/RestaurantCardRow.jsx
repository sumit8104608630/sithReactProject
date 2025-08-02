import { useState } from 'react'
import RestaurantCard from './RestaurantCard'
import { Search, Utensils, Coffee } from 'lucide-react';
import RestaurantCardSkeleton from './RestaurantCardSkeleton'
function RestaurantCardRow({restaurantRowData,errorMessage ,isLoading}) {
  
  if(isLoading){
    return(
         <div 
        className={`flex flex-wrap w-full justify-center }`}
        style={{
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none', 
        }}
      >{new Array(20).fill("").map((_,i)=><div className='' key={i}><RestaurantCardSkeleton/></div>)}</div>
    )
  }

  if(restaurantRowData.length===0 ){
    return (
    <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
      {/* Icon container with gradient background */}
      <div className="relative mb-6">
        <div className="w-24 h-24 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center shadow-lg">
          <Search className="w-10 h-10 text-amber-500" />
        </div>
        {/* Decorative food icons */}
        <Utensils className="w-6 h-6 text-gray-400 absolute -top-2 -right-2 transform rotate-12" />
        <Coffee className="w-5 h-5 text-gray-400 absolute -bottom-1 -left-3 transform -rotate-12" />
      </div>

      {/* Main heading */}
      <h2 className="text-2xl font-bold text-gray-800 mb-3">
        No Food Items Found
      </h2>

      {/* Subtitle */}
      <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
        We couldn't find any food items matching your search criteria. 
        Try adjusting your filters or search terms.
      </p>


   
    </div>
  );
  }

  return (
    <div 
     className='flex flex-col justify-center   md:px-26 px-6 mt-10 '>
      <h1 className='font-bold md:text-2xl text-xl'>Top restaurant chains in Mumbai</h1>

      <div className='relative w-full flex '>
      
      <div 
        className={`flex flex-wrap w-full justify-center }`}
        style={{
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none', 
        }}
      >
        {restaurantRowData?.map((item)=><div className='' key={item?.info?.id}><RestaurantCard {...item?.info} /></div>)}
      </div>
      </div>
    </div>
  )
}

export default RestaurantCardRow