import { useState } from 'react'
import RestaurantCard from './RestaurantCard'
import { Search, Utensils, Coffee } from 'lucide-react';
import RestaurantCardSkeleton from './RestaurantCardSkeleton'

function RestaurantCardRow({ restaurantRowData, errorMessage, isLoading }) {
  
  // Loading State with Grid Layout
  if (isLoading) {
    return (
      <div className="flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-6 sm:mt-8 md:mt-10">
        <div className="w-full max-w-7xl mx-auto">
          <div className="h-8 bg-gray-200 rounded-lg animate-pulse mb-6 w-64"></div>
          
          <div 
            className="grid gap-4 sm:gap-5 md:gap-6 w-full
              grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-2 
              lg:grid-cols-3 
              xl:grid-cols-4 
              2xl:grid-cols-5
            "
          >
            {new Array(20).fill("").map((_, i) => (
              <div key={i} className="w-full">
                <RestaurantCardSkeleton />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Empty State
  if (restaurantRowData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 sm:py-16 px-6 sm:px-8 text-center max-w-2xl mx-auto">
        {/* Icon container with gradient background */}
        <div className="relative mb-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center shadow-lg">
            <Search className="w-8 h-8 sm:w-10 sm:h-10 text-amber-500" />
          </div>
          {/* Decorative food icons */}
          <Utensils className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 absolute -top-2 -right-2 transform rotate-12" />
          <Coffee className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 absolute -bottom-1 -left-3 transform -rotate-12" />
        </div>

        {/* Main heading */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
          No Food Items Found
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-md leading-relaxed">
          We couldn't find any food items matching your search criteria. 
          Try adjusting your filters or search terms.
        </p>
      </div>
    );
  }

  // Main Content with Grid Layout
  return (
    <div className="flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-6 sm:mt-8 md:mt-10">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="mb-6 sm:mb-8">
          <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 leading-tight">
            Top restaurant chains in Mumbai
          </h1>
          <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mt-2"></div>
        </div>

        {/* Restaurant Cards Grid */}
        <div className="w-full">
          <div 
            className="grid gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 w-full
              grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-2 
              lg:grid-cols-3 
              xl:grid-cols-4 
              2xl:grid-cols-4
              auto-rows-fr
            "
            style={{
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none', 
            }}
          >
            {restaurantRowData?.map((item) => (
              <div 
                key={item?.info?.id} 
                className="w-full h-full flex"
              >
                <div className="w-full">
                  <RestaurantCard {...item?.info} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Show count info */}
        {restaurantRowData?.length > 0 && (
          <div className="mt-8 sm:mt-10 text-center">
            <p className="text-sm sm:text-base text-gray-500">
              Showing {restaurantRowData.length} restaurant{restaurantRowData.length !== 1 ? 's' : ''}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default RestaurantCardRow