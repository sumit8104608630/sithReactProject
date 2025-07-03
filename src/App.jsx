import React,{useEffect, useState} from 'react'
import Header from './Components/Header'
import RestaurantCard from './Components/RestaurantCard'
import BgImage from "./assets/images/backgroundImage.jpg"
import Home from './Pages/Home'
import Footer from './Components/Footer'
import {cardUrl} from "./Util/constant.js"

function App() {
      let [filtration,setFiltration]=useState([])
      let [firstRowData,setFirstRowData]=useState([])
      let [restaurantRowData,setRestaurantRowData]=useState([])
      const fetchCardDataFromUrl=async ()=>{
        try {
          const data = await fetch(cardUrl);
          const json = await data.json();
          setFirstRowData(json?.data?.cards[0].card.card?.gridElements?.infoWithStyle?.info)
          setRestaurantRowData(json?.data?.cards[1].card.card?.gridElements?.infoWithStyle?.restaurants)
          setFiltration(json?.data?.cards[1].card.card?.gridElements?.infoWithStyle?.restaurants)
        }
        catch (err) {
          console.log("err", err);
        }
      }
      
      useEffect(()=>{
        fetchCardDataFromUrl()
      },[])
  return (
    <>
    <Header filtration={filtration} setRestaurantRowData={setRestaurantRowData} />
    <Home  firstRowData={firstRowData} restaurantRowData={restaurantRowData} />
    <div className='hidden md:block'>
    <Footer/>
    </div>
    </>
  )
}

export default App