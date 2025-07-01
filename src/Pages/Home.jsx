import React,{useEffect, useState} from 'react'
import RestaurantCard from '../Components/RestaurantCard'
import BgImage from "../assets/images/backgroundImage.jpg"
import RestaurantCardRow from '../Components/RestaurantCardRow'
import FirstRestaurantRow from '../Components/FirstRestaurantRow'
import {cardUrl} from "../Util/constant.js"
function Home() {

      let [firstRowData,setFirstRowData]=useState([])
      let [restaurantRowData,setRestaurantRowData]=useState([])
      const fetchCardDataFromUrl=async ()=>{
        try {
          const data = await fetch(cardUrl);
          const json = await data.json();
          setFirstRowData(json?.data?.cards[0].card.card?.gridElements?.infoWithStyle?.info)
          setRestaurantRowData(json?.data?.cards[1].card.card?.gridElements?.infoWithStyle?.restaurants)

        }
        catch (err) {
          console.log("err", err);
        }
      }
      
      useEffect(()=>{
        fetchCardDataFromUrl()
      },[])

  return (
  <div className='pt-32'>
    <div className='hidden justify-center px-15 md:flex  overflow-hidden '>
      <img
        className='rounded-2xl border-amber-300 border-4  bg-white h-[400px] w-full object-cover'
      src={BgImage}></img>
    </div>

    <div className='flex gap-5 px-20 flex-col justify-center'>
        <FirstRestaurantRow firstRowData={firstRowData}/>
        <RestaurantCardRow restaurantRowData={restaurantRowData} />
    </div>
    </div>
    )
}

export default Home