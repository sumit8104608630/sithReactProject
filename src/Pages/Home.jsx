import React from 'react'
import RestaurantCard from '../Components/RestaurantCard'
import BgImage from "../assets/images/backgroundImage.jpg"
function Home() {
  return (
  <div className='pt-32'>
    <div className='hidden justify-center px-15 md:flex  overflow-hidden '>
      <img
        className='rounded-2xl border-amber-300 border-4  bg-white h-[400px] w-full object-cover'
      src={BgImage}></img>
    </div>
    <div className='flex gap-5 px-5 justify-start mt-5 w-full overflow-x-auto overflow-y-hidden scrollbar-hide'>
    <div className='flex gap-5 px-5 justify-center  '>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
       <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
    </div>
    </div>
    </div>  )
}

export default Home