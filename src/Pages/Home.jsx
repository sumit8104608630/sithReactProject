import React, { useEffect, useRef, useState } from 'react'
import RestaurantCard from '../Components/RestaurantCard'
import BgImage from "../assets/images/backgroundImage.jpg"
import RestaurantCardRow from '../Components/RestaurantCardRow'
import FirstRestaurantRow from '../Components/FirstRestaurantRow'
import SearchBar from '../Components/SearchBar'
import { IoFilter, IoStarSharp, IoTimeOutline, IoLocationOutline } from "react-icons/io5"

function Home({ firstRowData, restaurantRowData, errorMessage, filtration,isLoading, setRestaurantRowData }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  // Filter functions - UI only
  const handleFilterClick = (filterType) => {
    setActiveFilter(filterType);
  };
  const [newHeader,setNewHeader]=useState(false)
  const filterButtons = [
    { id: 'all', label: 'All' },
    { id: 'rating', label: 'Top Rated' },
    { id: 'distance', label: 'Near Me' },
    { id: 'offers', label: 'Offers' },
    { id: 'pure-veg', label: 'Pure Veg' },
  ];
  useEffect(()=>{
    const handleShadowEffect=()=>{
      const scrollTop=window.scrollY;
      const threshold=800;
      setNewHeader(scrollTop>threshold);
    }
    window.addEventListener("scroll",handleShadowEffect)
  })
  function filterDataAccordingFilterButton(filterId){
    let filterArray=[...filtration]
    console.log(restaurantRowData)
    switch(filterId){
      case "all":
        filterArray=filtration
        break
      case "rating":
         filterArray=filtration.filter((restaurant)=>{
          let rating=Number(restaurant.info.avgRating)
          return rating>=4.5 
        })
        break
      case "pure-veg":
         filterArray=filtration.filter((restaurant)=>{
          let veg=Number(restaurant.info?.veg)
          return veg
        })
        break
      case "offers":
            filterArray=filtration.filter((restaurant)=>{
          let rating=Number(restaurant.info?.sla.lastMileTravel)
          return rating<1.5
        })
        break
        
    }
    setRestaurantRowData(filterArray)
  }
  
  useEffect(()=>{
filterDataAccordingFilterButton(activeFilter)
  },[activeFilter])
  

  return (
    <div className='pt-32 w-full'>
      {/* Background Image */}
      <div className='hidden justify-center mx-auto px-10 md:flex overflow-hidden'>
        <img
          className='rounded-2xl border-amber-300 border-4 bg-white h-[400px] w-full object-cover'
          src={BgImage}
          alt="Background"
        />
      </div>

   
      {/* Restaurant Sections */}
      <div className='flex gap-5 w-full  flex-col justify-center'>
        <FirstRestaurantRow errorMessage={errorMessage} firstRowData={firstRowData} />
           {/* Search Bar and Filters Section */}
      
<div 
  style={newHeader ? {boxShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"} : {}} 
  className="justify-between items-center shadow-2xl sticky top-0 z-50 bg-white w-full px-5 md:px-20 py-2 flex flex-col md:flex-row"
>
        {/* Search Bar */}
        <div className=' w-full'>
          <SearchBar 
            filtration={filtration}
            setRestaurantRowData={setRestaurantRowData}
            isMobile={false}
          />
        </div>   
<div className='flex justify-center w-full md:flex-nowrap flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-8 px-4 sm:px-6 py-4'>
  {filterButtons.map((item) => 
    <button
      onClick={() => handleFilterClick(item.id)}
      className={`
        py-2
        text-sm sm:text-base md:text-lg
        h-max cursor-pointer border-2 outline-2 outline-amber-400 
        ${activeFilter === item.id 
          ? "bg-amber-400 border-white text-white" 
          : "outline-amber-400 border-none text-amber-400 bg-white hover:bg-amber-50"
        }  
        rounded-lg font-semibold 
        transition-all duration-200 ease-in-out
        active:scale-95 hover:shadow-md
        min-w-[80px] sm:min-w-[100px] md:min-w-[120px]
        whitespace-nowrap
      `} 
      key={item.id}
    >
      {item.label}
    </button>
  )}
</div>
      </div>

        <RestaurantCardRow errorMessage={errorMessage} isLoading={isLoading} restaurantRowData={restaurantRowData} />
      </div>
    </div>
  )
}

export default Home