import React,{ useRef} from 'react'
import RestaurantCard from './RestaurantCard'
import { FaCircleArrowLeft,FaCircleArrowRight } from "react-icons/fa6";

function RestaurantCardRow({restaurantRowData}) {
  const scroll=useRef(null)
 
  

  return (
    <div className='flex flex-col justify-center  md:px-6 -x-2 mt-10 '>
      <h1 className='font-bold md:text-2xl text-xl'>Top restaurant chains in Mumbai</h1>

      <div className='relative w-full flex '>
      
      <div 
        className={`flex flex-wrap w-full  ${restaurantRowData?.length<4?"justify-start":"justify-center"}`}
        style={{
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none', 
        }}
      >
        {restaurantRowData?.length===0?"Loading...":restaurantRowData?.map((item)=><div className='' key={item?.info?.id}><RestaurantCard {...item?.info} /></div>)}
      </div>
      </div>
    </div>
  )
}

export default RestaurantCardRow