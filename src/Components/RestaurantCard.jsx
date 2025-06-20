import React from 'react'
import { FaStar } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

function RestaurantCard() {
    const restaurants = 
    {
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop&crop=center",
      title: "Golden Spice Restaurant",
      rating: 4.5,
      timing: "25-30 min",
      description: "Authentic Indian cuisine with a modern",
      location: "Mumbai, Maharashtra",
    }
  return (
    <div className='flex flex-col m-4 min-w-[300px] max-w-[300px] shadow-lg object-cover overflow-hidden bg-white hover:border-2 border-amber-300 rounded-2xl '>
        <div>
            <img
            className='object-cover w-full h-48'
             src={restaurants?.image}></img>
        </div>

        <div className='p-4'>
            <h1 className='text-xl font-bold'>{restaurants?.title}</h1>
            <div className='flex justify-between py-1 px-2'>
                <span className='flex gap-1 font-semibold items-center'><FaStar className='text-amber-500' />{restaurants?.rating}</span>
                <span className='flex text-amber-700 items-center gap-1 font-semibold'><IoTimeOutline className='text-amber-700' />{restaurants.timing}</span>
            </div>
            <p className='text-gray-700 text-[16px] py-2'>{restaurants?.description}</p>
            <p className='flex gap-1 items-center py-2 font-medium'><IoLocationOutline className='text-amber-600' />{restaurants?.location}</p>
            <button className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/30 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">View Details</button>
        </div>

    </div>
  )
}

export default RestaurantCard