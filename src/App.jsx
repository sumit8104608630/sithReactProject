import React,{useEffect, useState} from 'react'
import Header from './Components/Header'
import RestaurantCard from './Components/RestaurantCard'
import BgImage from "./assets/images/backgroundImage.jpg"
import Home from './Pages/Home'
import Footer from './Components/Footer'
import {cardUrl} from "./Util/constant.js"
import ErrorMessage from './Components/ErrorMessage.jsx'

function App() {
      let [filtration,setFiltration]=useState([])
      let [firstRowData,setFirstRowData]=useState([])
      let [restaurantRowData,setRestaurantRowData]=useState([]);
      let [errorMessage,setErrorMessage]=useState("");

      const fetchCardDataFromUrl=async ()=>{
          const data = await fetch(cardUrl);
     
        try {
              if(!data.ok){
          switch (data.status) {
  case 400:
    throw new Error("400 Bad Request: The server could not understand the request.");
  case 401:
    throw new Error("401 Unauthorized: Access is denied due to invalid credentials.");
  case 403:
    throw new Error("403 Forbidden: You do not have permission to access this resource.");
  case 404:
    throw new Error("Not found.");
  case 405:
    throw new Error("405 Method Not Allowed: The HTTP method is not supported.");
  case 408:
    throw new Error("408 Request Timeout: The server timed out waiting for the request.");
  case 409:
    throw new Error("409 Conflict: The request could not be completed due to a conflict.");
  case 422:
    throw new Error("422 Unprocessable Entity: The request was well-formed but could not be followed due to semantic errors.");
  case 429:
    throw new Error("429 Too Many Requests: You have sent too many requests in a given time.");
  case 500:
    throw new Error("500 Internal Server Error: The server encountered an unexpected condition.");
  default:
    throw new Error(`${data.status} Error: An unknown error occurred.`);
          }

        }
          const json = await data.json();
          setFirstRowData(json?.data?.cards[0].card.card?.gridElements?.infoWithStyle?.info)
          setRestaurantRowData(json?.data?.cards[1].card.card?.gridElements?.infoWithStyle?.restaurants)
          setFiltration(json?.data?.cards[1].card.card?.gridElements?.infoWithStyle?.restaurants)
        }
        catch (err) {
          setErrorMessage(err.message);
        }
      }
      useEffect(()=>{
        fetchCardDataFromUrl()
      },[])

      if(errorMessage){
        return <ErrorMessage errorMessage={errorMessage} />
      }
  return (
    <>
    <Header filtration={filtration}  setRestaurantRowData={setRestaurantRowData} />
    {<>
    <Home  firstRowData={firstRowData} errorMessage={errorMessage} restaurantRowData={restaurantRowData} />
    <div className='hidden md:block'>
    <Footer/>
    </div>
    </>}
    </>
  )
}

export default App