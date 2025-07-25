import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { Outlet } from 'react-router'

function LayOut() {
  return (
<>
    <Header/>
    <Outlet/>
    <Footer/>

</>
  )
}

export default LayOut