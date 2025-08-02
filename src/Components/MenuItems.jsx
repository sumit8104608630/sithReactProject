import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import SubMenuItems from './SubMenuItems';

function MenuItems({id,title,len ,subItems}) {
    const [drop,setDrop]=useState(false);
    const [dropMenu,setDropMenuId]=useState()
    const handleSubMenuItems=(id)=>{
        setDropMenuId(id)
        setDrop(prev=>!prev)
    }
    console.log(subItems)
  return (
    <div className='w-full border-amber-500 py-2 px-1 border-t-1' key={id}>
        <div className='w-full flex justify-between'>
         <h1 className='text-xl font-semibold text-amber-500 '>{title+" ("+len+")"}</h1>
         <button onClick={()=>handleSubMenuItems(id)} className='cursor-pointer px-1 py-1'>
           {drop?<FaChevronUp className='text-amber-500' />: <FaChevronDown className='text-amber-500' />}
         </button>
        </div>
        {/* sub items */ }
       {dropMenu===id && drop &&<div className=' flex flex-col gap-4 mt-4'> {subItems.map((detail)=><div key={detail?.card?.info?.id}><SubMenuItems 
       id={detail?.card?.info?.id} 
       name={detail?.card?.info?.name} 
       description={detail?.card?.info?.description} 
       imageId={detail?.card?.info?.imageId} 
       price={detail?.card?.info?.finalPrice/100} 
       isVeg={detail?.card?.info?.isVeg}
       offerPrice={detail?.card?.info?.price/100}
        /></div>)} </div> }
    </div>
  )
}

export default MenuItems