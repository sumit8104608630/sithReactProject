import React, { useEffect, useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import SubMenuItems from './SubMenuItems';

function NestedSubMenuItem({title,itemCards,categoryId,showMenu,handleSubMenuItems,setNestedShow,showNested}) {

  useEffect(()=>{
    console.log("solving",showMenu,showNested)
  },[showMenu,showNested])

  return (
    <div key={categoryId}>
      <div className='w-full'>
    <button className='w-full   px-1 cursor-pointer'  onClick={() => {
    handleSubMenuItems();
    setNestedShow();
  }}>
     
        <div className='w-full pl-5 flex justify-between'>
         <h1 className='text-lg text-start font-medium text-amber-400 '>{title+" ("+itemCards?.length+")"}</h1>
         <span  className='cursor-pointer px-1 '>
           {showMenu && showNested?<FaChevronUp className='text-amber-400' />: <FaChevronDown className='text-amber-400' />}
         </span>
        </div>
        {/* sub items */ }

       {showMenu && showNested && <div className=' flex flex-col '>{ itemCards?.map(item=>
        <div key={item?.card?.info?.id}><SubMenuItems 
       id={item?.card?.info?.id} 
       name={item?.card?.info?.name} 
       description={item?.card?.info?.description} 
       imageId={item?.card?.info?.imageId} 
       price={item?.card?.info?.finalPrice/100?item?.card?.info?.finalPrice/100:item?.card?.info?.defaultPrice/100} 
       isVeg={item?.card?.info?.isVeg}
       offerPrice={item?.card?.info?.price/100}
        /></div>
       ) }</div> }
        
    </button>
    </div>
    </div>
  )
}

export default NestedSubMenuItem