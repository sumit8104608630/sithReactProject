import React, { useEffect } from 'react'
import { extractId } from '../Util/hepler'
import { useParams } from 'react-router'
import { Url } from '../Util/hepler';
function MenuPage() {
const param=useParams();
    const  extractMenuDat=async()=>{
        let id= extractId(param.title)
        let url=Url(id)
        const response=await fetch(url);
        const jsonData=await response.json();
        console.log(jsonData)
    }
    useEffect(()=>{
        extractMenuDat();
    })
  return (
    <div>MenuPage</div>
  )
}

export default MenuPage