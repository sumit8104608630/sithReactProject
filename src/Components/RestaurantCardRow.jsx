import React,{useEffect, useRef, useState} from 'react'
import RestaurantCard from './RestaurantCard'
import {cardUrl} from "../Util/constant.js"
import { FaCircleArrowLeft,FaCircleArrowRight } from "react-icons/fa6";

function RestaurantCardRow() {
  let [restaurantRowData,setRestaurantRowData]=useState([])
  const scroll=useRef(null)
  const fetchCardDataFromUrl=async ()=>{
    try {
      const data = await fetch(cardUrl);
      const json = await data.json();
      setRestaurantRowData(json?.data?.cards[1].card.card?.gridElements?.infoWithStyle?.restaurants)
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
    <div className='flex flex-col px-6 mt-10 '>
      <h1 className='font-bold text-2xl'>Top restaurant chains in Mumbai</h1>

      <div className='relative'>
      <div className='absolute right-0 pr-5 top-0'><button onClick={()=>handleScrollLeft("left")} className='text-2xl text-gray-600 hover:text-gray-500 cursor-pointer'><FaCircleArrowLeft/></button> <button onClick={()=>handleScrollLeft("right")} className='text-2xl text-gray-600 hover:text-gray-500 cursor-pointer'><FaCircleArrowRight/></button></div>
      
      <div 
      ref={scroll}
        className='flex gap-5 px-5 justify-start mt-5  w-full overflow-x-auto overflow-y-hidden'
        style={{
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none', 
        }}
      >
        {restaurantRowData.length===0?"Loading...":restaurantRowData.map((item)=><div key={item?.info?.id}><RestaurantCard {...item?.info} /></div>)}
      </div>
      </div>
    </div>
  )
}

export default RestaurantCardRow