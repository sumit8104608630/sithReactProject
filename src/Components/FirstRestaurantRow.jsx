import FirstRestCard from './FirstRestCard'
import React,{ useEffect, useRef, useState} from 'react'
import { FaCircleArrowLeft, FaCircleArrowRight } from 'react-icons/fa6'
import MenuLoader from './MenuLoader'
function FirstRestaurantRow({firstRowData,errorMessage}) {
  const scroll=useRef(null)
const [isLoading,setIsLoading]=useState(false)
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

  useEffect(()=>{
    if(errorMessage?.length===0 && firstRowData?.length===0){
  setIsLoading(true)
}
else{
  setIsLoading(false)
}
  },[errorMessage,firstRowData])


  return (
    <div className='md:px-20 w-full px-5'>
    {isLoading?<MenuLoader/>:<div className='flex flex-col md:px-6 w-full mt-5'>
    <h1 className='font-bold md:text-2xl text-xl '>SUMIT, what's on your mind?</h1>
       <div className='relative '>
                <div className='absolute md:block hidden right-2 sm:right-4 md:right-0 md:pr-5 top-0 z-10'>
                          <div className='flex gap-1 sm:gap-2 bg-white/90 backdrop-blur-sm rounded-full p-1'>

<button onClick={()=>handleScrollLeft("left")}           className='text-xl sm:text-2xl text-gray-600 hover:text-amber-500 cursor-pointer transition-colors duration-200 p-1'
><FaCircleArrowLeft/></button> <button onClick={()=>handleScrollLeft("right")}           className='text-xl sm:text-2xl text-gray-600 hover:text-amber-500 cursor-pointer transition-colors duration-200 p-1'
><FaCircleArrowRight/></button></div></div>
      <div
      ref={scroll}
          style={{
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none', 
        }}
       className='flex justify-start w-full overflow-x-auto overflow-y-hidden scrollbar-hide'>
          {firstRowData?.map((item)=><div key={item?.id}><FirstRestCard {...item}/></div>)}
      </div>
      </div>
    </div>}
    </div>
  )
}

export default FirstRestaurantRow