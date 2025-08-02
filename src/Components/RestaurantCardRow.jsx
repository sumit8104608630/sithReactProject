import { useState } from 'react'
import RestaurantCard from './RestaurantCard'
import RestaurantCardSkeleton from './RestaurantCardSkeleton'
function RestaurantCardRow({restaurantRowData,errorMessage}) {
  
  const [isLoading,setIsLoading]=useState(true)

console.log(restaurantRowData)

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
        {restaurantRowData?.length===0 && errorMessage.length===0?new Array(20).fill("").map((_,i)=><div className='' key={i}><RestaurantCardSkeleton/></div>):restaurantRowData?.map((item)=><div className='' key={item?.info?.id}><RestaurantCard {...item?.info} /></div>)}
      </div>
      </div>
    </div>
  )
}

export default RestaurantCardRow