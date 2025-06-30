import FirstRestCard from './FirstRestCard'
import React,{useEffect, useRef, useState} from 'react'
import {cardUrl} from "../Util/constant.js"
import { FaCircleArrowLeft, FaCircleArrowRight } from 'react-icons/fa6'
function FirstRestaurantRow() {
  let [firstRowData,setFirstRowData]=useState([])
  const scroll=useRef(null)
  const fetchCardDataFromUrl=async ()=>{
      try {
            const data = await fetch(cardUrl);
            const json = await data.json();
            setFirstRowData(json?.data?.cards[0].card.card?.gridElements?.infoWithStyle?.info)
        }

        catch (err) {
            console.log("err", err);
        }

  }
  useEffect(()=>{
    fetchCardDataFromUrl()
  },[])


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
    <div className='flex flex-col px-6 mt-5'>
    <h1 className='font-bold  text-2xl'>SUMIT, what's on your mind?</h1>
       <div className='relative'>
          <div className='absolute right-0 pr-5 top-0'><button onClick={()=>handleScrollLeft("left")} className='text-2xl text-gray-600 hover:text-gray-500 cursor-pointer'><FaCircleArrowLeft/></button> <button onClick={()=>handleScrollLeft("right")} className='text-2xl text-gray-600 hover:text-gray-500 cursor-pointer'><FaCircleArrowRight/></button></div>
          
      <div
      ref={scroll}
          style={{
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none', 
        }}
       className='flex   justify-start  w-full overflow-x-auto overflow-y-hidden scrollbar-hide'>
          {firstRowData.length===0?"Loading...":firstRowData.map((item)=><div key={item?.id}><FirstRestCard {...item}/></div>)}
      </div>
      </div>
    </div>
  )
}

export default FirstRestaurantRow