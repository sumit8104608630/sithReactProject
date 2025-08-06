import React from 'react'
import NestedSubMenuItem from './NestedSubMenuItem'

function NestedMenu({title,categories}) {
    console.log(title)
  return (
    <div className='w-full border-amber-500 py-2 px-1 border-t-1'>
        <div className='w-full flex flex-col '>
            <h1 className='text-xl font-semibold text-amber-500 '>{title}</h1>
            <li className='flex mt-3 gap-1 flex-col'>
            {categories?.map((item)=><div key={item?.categoryId}><NestedSubMenuItem {...item} /></div>)}
            </li>
        </div>   
 </div>
  )
}

export default NestedMenu