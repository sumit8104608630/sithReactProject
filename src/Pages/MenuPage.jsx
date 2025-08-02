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

function MenuPage() {
  const scroll = useRef(null)
  const [nestedMenuItem,setNestedMenuItem]=useState([])
  const [menuInfo, setMenuInfo] = useState({})
  const [activeButton, setActiveButton] = useState("orderOnline")
  const [offers, setOffers] = useState([])
  const param = useParams();
  const [menuItem,setMenuItems]=useState([]);
  const extractMenuData = async () => {
    let id = extractId(param.title)
    let url = Url(id)
    const response = await fetch(url);
    const jsonData = await response.json();
    const Cards = jsonData.data.cards
    
    setMenuInfo(Cards[2]?.card?.card?.info)
    let meuCollection=Cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(item=>item.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
let nestedMenuCollection = Cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
  item => item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
);
console.log(nestedMenuCollection)

    setNestedMenuItem()
    setMenuItems(meuCollection)
    setOffers(Cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers)
  }
  useEffect(() => {
    extractMenuData();
  }, [])

  const handleScrollLeft = (direction) => {
    if (direction === "left") {
      scroll.current.scrollBy({
        left: -1000,
        behavior: 'smooth'
      })
    }
    if (direction === "right") {
      scroll.current.scrollBy({
        left: +1000,
        behavior: 'smooth'
      })
    }
  }

  const renderCuisines = () => {
    return menuInfo?.cuisines?.map((cuisine, i) => (
      <span key={i} className="bg-amber-500 text-white px-3 py-0.5 rounded-full text-sm font-medium">
        {cuisine}
      </span>
    ))
  }

  const renderRatingSection = () => {
    return (
      <div className='flex justify-between'>
        <div className='flex mb-4 gap-5'>
          <span className='rounded-lg text-sm text-white font-semibold px-2 py-1 bg-green-600 flex justify-center items-center gap-2'>
            <FaStar />
            {menuInfo?.avgRating}
          </span>
          <span className='text-gray-500'>
            {"(" + menuInfo?.totalRatingsString + ")"}
          </span>
        </div>
        <div className='px-2'>
          <span className='flex items-center font-bold text-xl text-amber-600'>
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
      <div className='flex mb-2 gap-2'>
        <span className='flex gap-0.5 items-center'>
          <IoLocationOutline />
          {menuInfo?.locality}
        </span>
        <span className='flex gap-0.5 items-center'>
          <IoTimeOutline />
          {deliveryTime}
        </span>
      </div>
    )
  }

  const renderActionButtons = () => {
    const getButtonClass = (buttonType) => {
      const baseClass = "flex-1 flex items-center justify-center border-2 border-amber-500 cursor-pointer gap-2 py-3 px-4 rounded-xl font-medium transition-all duration-200"
      const activeClass = "bg-amber-500 border-amber-500 text-white shadow-lg transform scale-105"
      const inactiveClass = "bg-white text-amber-500"
      
      return `${baseClass} ${activeButton === buttonType ? activeClass : inactiveClass}`
    }

    return (
      <div className='flex gap-2'>
        <button 
          onClick={() => setActiveButton("orderOnline")}
          className={getButtonClass("orderOnline")}
        >
          <ShoppingBag className="w-4 h-4" />
          Order Online
        </button>
        
        <button 
          onClick={() => setActiveButton("dineOut")}
          className={getButtonClass("dineOut")}
        >
          <Utensils className="w-4 h-4" />
          Dine Out
        </button>
      </div>
    )
  }

  const renderScrollButtons = () => {
    return (
      <div className='absolute hidden md:block right-0 pr-5 top-0'>
        <div className='flex gap-2'>
        <button 
          onClick={() => handleScrollLeft("left")} 
          className='text-2xl text-gray-600 hover:text-gray-500 cursor-pointer'
        >
          <FaCircleArrowLeft />
        </button>
        <button 
          onClick={() => handleScrollLeft("right")} 
          className='text-2xl text-gray-600 hover:text-gray-500 cursor-pointer'
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
    <div className='pt-30 w-full flex-col items-center flex justify-center'>
      {/* Restaurant Info Card */}
      <div className='w-1/2 bg-amber-50 border-1 border-amber-500 my-5 p-5 mx-6 rounded-2xl shadow-lg overflow-hidden'>
        <h1 className="text-2xl font-bold text-gray-800">
          {menuInfo?.name}
        </h1>
        
        <div className='flex my-5 gap-2'>
          {renderCuisines()}
        </div>
        
        {renderRatingSection()}
        {renderLocationAndTime()}
        {renderActionButtons()}
      </div>

      {/* Offers Section */}
      <div className='w-1/2'>
        <div className='relative flex justify-center'>
          {renderScrollButtons()}
          
          <div
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
            ref={scroll}
            className='flex gap-8 overflow-x-auto px-2 mb-10 mt-10'
          >
            {renderOffers()}
          </div>
        </div>
      </div>
      {/* now the menu section */}
      <div className='w-1/2 mb-10'>
        {menuItem.map((item)=><div key={item?.card?.card?.categoryId}><MenuItems  id={item?.card?.card?.categoryId} subItems={item?.card?.card?.itemCards} title={item?.card?.card?.title} len={item?.card?.card?.itemCards.length} /></div>)}
      </div>
    </div>
  )
}

export default MenuPage