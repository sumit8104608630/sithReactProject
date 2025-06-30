import React from 'react'
import {firstRowImageConstantUrl} from "../Util/constant.js"
function FirstRestCard({imageId,action,}) {
  
  return (
    <div
     className='flex flex-col  w-46  shadow-lg object-cover overflow-hidden   '>
            <img className='w-full' src={firstRowImageConstantUrl+imageId} alt={action?.text} />
    </div>
  )
}

export default FirstRestCard