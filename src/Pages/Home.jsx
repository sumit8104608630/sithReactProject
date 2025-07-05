import React,{useEffect, useState} from 'react'
import RestaurantCard from '../Components/RestaurantCard'
import BgImage from "../assets/images/backgroundImage.jpg"
import RestaurantCardRow from '../Components/RestaurantCardRow'
import FirstRestaurantRow from '../Components/FirstRestaurantRow'
function Home({firstRowData,restaurantRowData}) {


  return (
  <div className='pt-32'>
    <div className='hidden justify-center mx-auto px-10 md:flex  overflow-hidden '>
      <img
        className='rounded-2xl border-amber-300 border-4  bg-white h-[400px] w-full object-cover'
      src={BgImage}></img>
    </div>

    <div className='flex gap-5 md:px-20 px-5 flex-col justify-center'>
        <FirstRestaurantRow firstRowData={firstRowData}/>
        <RestaurantCardRow restaurantRowData={restaurantRowData} />
    </div>
    </div>
    )
}

export default Home