import React from 'react'
import { FaStar } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import {restaurantImagesConstUrl} from "../Util/constant.js"
function RestaurantCard({cloudinaryImageId,cuisines,id,avgRating,name,locality,sla,aggregatedDiscountInfoV3}) {

  return (
    <div  key={id} style={{boxShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"}} 
 className='flex flex-col m-4 md:min-w-[280px] min-w-[250px] md:max-w-[280px] max-w-[250px] cursor-pointer shadow-lg object-cover overflow-hidden bg-white hover:border-2  border-amber-300 rounded-2xl '>
        <div className='relative'>
            
            <img
            className='object-cover w-full h-48'
             src={restaurantImagesConstUrl+cloudinaryImageId}></img>
            
          <span className='absolute font-bold bottom-0 w-full py-2 pt-20 text-xl px-2 bg-gradient-to-b from-[rgba(27,30,36,0)] to-[rgb(27,30,36)] to-[84.21%] text-white'>{
   aggregatedDiscountInfoV3?.header 
  ? aggregatedDiscountInfoV3.header + " " + (aggregatedDiscountInfoV3?.subHeader || "")
  : (aggregatedDiscountInfoV3?.subHeader || "")          }</span>
        </div>

        <div className='p-4'>
            <h1 className='text-xl font-bold truncate w-full'>{name}</h1>
            <div className='flex justify-between py-1 px-2'>
                <span className='flex gap-1 font-semibold items-center'><FaStar className='text-amber-500' />{avgRating}</span>
                <span className='flex text-amber-700 items-center gap-1 font-semibold'><IoTimeOutline className='text-amber-700' />{sla?.slaString}</span>
            </div>
<p className='text-gray-700 text-[16px] truncate w-full py-2'>{cuisines.join(", ")}</p>
            <p className='flex gap-1 items-center py-1 truncate w-full font-medium'><IoLocationOutline className='text-amber-600' /><span className='truncate w-full'>{locality}</span></p>
            <button className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white font-semibold md:py-3 py-1 px-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/30 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">View Details</button>
        </div>

    </div>
  )
}

export default RestaurantCard