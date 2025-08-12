import React, { useEffect, useRef, useState } from 'react'
import { extractId } from '../Util/hepler'
import { useParams } from 'react-router'
import { Url } from '../Util/hepler';
import { FaStar } from "react-icons/fa";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import { IndianRupee, Locate, ShoppingBag, StarOff, Utensils } from 'lucide-react';
import Offers from '../Components/Offers';
import { FaCircleArrowLeft, FaCircleArrowRight } from 'react-icons/fa6';
import MenuItems from '../Components/MenuItems';
import ShimmerMenuEffect from '../Components/ShimmerMenuEffect';
import NestedMenu from '../Components/NestedMenu';
import useMenuData from '../customHooks/useMenuData';

function MenuPage() {
  const scroll = useRef(null)
  const [activeButton, setActiveButton] = useState("orderOnline")
  const {nestedMenuItem,isLoading,menuInfo,offers,menuItem}=useMenuData();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScrollLeft = (direction) => {
    const scrollAmount = window.innerWidth < 768 ? 250 : 1000;
    if (direction === "left") {
      scroll.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      })
    }
    if (direction === "right") {
      scroll.current.scrollBy({
        left: +scrollAmount,
        behavior: 'smooth'
      })
    }
  }
console.log(nestedMenuItem)

  const renderCuisines = () => {
    return menuInfo?.cuisines?.map((cuisine, i) => (
      <span key={i} className="bg-amber-500 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap">
        {cuisine}
      </span>
    ))
  }
  
  if(isLoading){
    return <ShimmerMenuEffect/>
  }

  const renderRatingSection = () => {
    return (
      <div className='flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-0'>
        <div className='flex flex-col sm:flex-row sm:mb-4 gap-2 sm:gap-5'>
          <span className='rounded-lg text-sm text-white font-semibold px-2 py-1 bg-green-600 flex justify-center items-center gap-2 w-fit'>
            <FaStar />
            {menuInfo?.avgRating}
          </span>
          <span className='text-gray-500 text-sm sm:text-base'>
            {"(" + menuInfo?.totalRatingsString + ")"}
          </span>
        </div>
        <div className='px-0 sm:px-2'>
          <span className='flex items-center font-bold text-lg sm:text-xl text-amber-600'>
            {menuInfo?.costForTwoMessage}
          </span>
        </div>
      </div>
    )
  }

  const renderLocationAndTime = () => {
    const deliveryTime = menuInfo?.sla?.minDeliveryTime === menuInfo?.sla?.maxDeliveryTime
      ? `${menuInfo?.sla?.minDeliveryTime} min`
      : `${menuInfo?.sla?.minDeliveryTime}-${menuInfo?.sla?.maxDeliveryTime} min`

    return (
      <div className='flex flex-col sm:flex-row mb-4 gap-2 sm:gap-4'>
        <span className='flex gap-1 items-center text-sm sm:text-base text-gray-600'>
          <IoLocationOutline className="text-amber-500 flex-shrink-0" />
          <span className="truncate">{menuInfo?.locality}</span>
        </span>
        <span className='flex gap-1 items-center text-sm sm:text-base text-gray-600'>
          <IoTimeOutline className="text-amber-500 flex-shrink-0" />
          {deliveryTime}
        </span>
      </div>
    )
  }

  const renderActionButtons = () => {
    const getButtonClass = (buttonType) => {
      const baseClass = "flex-1 flex items-center justify-center border-2 border-amber-500 cursor-pointer gap-1 sm:gap-2 py-2 sm:py-3 px-2 sm:px-4 rounded-xl font-medium transition-all duration-200 min-h-[44px]"
      const activeClass = "bg-amber-500 border-amber-500 text-white shadow-lg transform scale-105"
      const inactiveClass = "bg-white text-amber-500 hover:bg-amber-50"
      
      return `${baseClass} ${activeButton === buttonType ? activeClass : inactiveClass}`
    }

    return (
      <div className='flex gap-2 sm:gap-4'>
        <button 
          onClick={() => setActiveButton("orderOnline")}
          className={getButtonClass("orderOnline")}
        >
          <ShoppingBag className="w-4 h-4 flex-shrink-0" />
          <span className="text-sm sm:text-base">Order Online</span>
        </button>
        
        <button 
          onClick={() => setActiveButton("dineOut")}
          className={getButtonClass("dineOut")}
        >
          <Utensils className="w-4 h-4 flex-shrink-0" />
          <span className="text-sm sm:text-base">Dine Out</span>
        </button>
      </div>
    )
  }

  const renderScrollButtons = () => {
    return (
      <div className='absolute md:block hidden right-2 sm:right-4 md:right-0 md:pr-5 top-0 z-10'>
        <div className='flex gap-1 sm:gap-2 bg-white/90 backdrop-blur-sm rounded-full p-1'>
        <button 
          onClick={() => handleScrollLeft("left")} 
          className='text-xl sm:text-2xl text-gray-600 hover:text-amber-500 cursor-pointer transition-colors duration-200 p-1'
        >
          <FaCircleArrowLeft />
        </button>
        <button 
          onClick={() => handleScrollLeft("right")} 
          className='text-xl sm:text-2xl text-gray-600 hover:text-amber-500 cursor-pointer transition-colors duration-200 p-1'
        >
          <FaCircleArrowRight />
        </button>
        </div>
      </div>
    )
  }

  const renderOffers = () => {
    return offers.map((offer) => (
      <div className='flex-shrink-0' key={offer.info.offerIds[0]}>
        <Offers 
          id={offer.info.offerIds[0]} 
          title={offer.info.header} 
          subtitle={offer.info.primaryDescription} 
        />
      </div>
    ))
  }

  return (
    <div className='pt-20 sm:pt-24 md:pt-32 w-full flex-col items-center flex justify-start min-h-screen px-4 sm:px-6 lg:px-8'>
      {/* Restaurant Info Card */}
      <div className='w-full max-w-2xl bg-amber-50 border border-amber-500 my-3 sm:my-5 p-4 sm:p-6 rounded-2xl shadow-lg overflow-hidden'>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
          {menuInfo?.name}
        </h1>
        
        <div className='flex flex-wrap my-3 sm:my-5 gap-2'>
          {renderCuisines()}
        </div>
        
        {renderRatingSection()}
        {renderLocationAndTime()}
        {renderActionButtons()}
      </div>

      {/* Offers Section */}
      <div className='w-full max-w-2xl'>
        <div className='relative flex justify-center'>
          {renderScrollButtons()}
          
          <div
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
            ref={scroll}
            className='flex gap-3 sm:gap-6 md:gap-8 overflow-x-auto px-2 mb-6 sm:mb-8 md:mb-10 mt-6 sm:mt-8 md:mt-10 pb-2'
          >
            {renderOffers()}
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className='w-full max-w-2xl mb-6 sm:mb-8 md:mb-10'>
        <div className="space-y-4 sm:space-y-6">
          {menuItem.map((item) => (
            <div key={item?.card?.card?.categoryId}>
              <MenuItems  
                id={item?.card?.card?.categoryId} 
                subItems={item?.card?.card?.itemCards} 
                title={item?.card?.card?.title} 
                len={item?.card?.card?.itemCards.length} 
              />
            </div>
          ))}
          {nestedMenuItem.map((item) => (
            <div key={item?.card?.card?.categoryId}>
              <NestedMenu {...item?.card?.card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MenuPage