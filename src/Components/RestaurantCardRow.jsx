import React,{ useRef} from 'react'
import RestaurantCard from './RestaurantCard'
import { FaCircleArrowLeft,FaCircleArrowRight } from "react-icons/fa6";

function RestaurantCardRow({restaurantRowData}) {
  const scroll=useRef(null)
 
    const handleScrollLeft=(direction)=>{
    if(direction==="left"){
      scroll.current.scrollBy({
        left: -1000, // Scroll amount in pixels
        behavior: 'smooth'
      })
    }
       if(direction==="right"){
           scroll.current.scrollBy({
        left: +1000, 
        behavior: 'smooth'
      })
      }
  }


  return (
    <div className='flex flex-col md:px-6 -x-2 mt-10 '>
      <h1 className='font-bold md:text-2xl text-xl'>Top restaurant chains in Mumbai</h1>

      <div className='relative'>
      <div className='absolute hidden md:block right-0 pr-5 top-0'><button onClick={()=>handleScrollLeft("left")} className='text-2xl text-gray-600 hover:text-gray-500 cursor-pointer'><FaCircleArrowLeft/></button> <button onClick={()=>handleScrollLeft("right")} className='text-2xl text-gray-600 hover:text-gray-500 cursor-pointer'><FaCircleArrowRight/></button></div>
      
      <div 
      ref={scroll}
        className='flex gap-5 px-5 justify-start mt-5  w-full overflow-x-auto overflow-y-hidden'
        style={{
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none', 
        }}
      >
        {restaurantRowData?.length===0?"Loading...":restaurantRowData?.map((item)=><div key={item?.info?.id}><RestaurantCard {...item?.info} /></div>)}
      </div>
      </div>
    </div>
  )
}

export default RestaurantCardRow