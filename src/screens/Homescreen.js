import React from 'react'
import "./Homescreen.css"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomeBody from '../components/HomeBody'

const Homescreen = ({setamount,setcategory,setdifficulty}) => {
  return (
    <div>
      <Navbar/>
      <HomeBody setamount={setamount} setcategory={setcategory} setdifficulty={setdifficulty}/>
      <Footer/>
    </div>
  )
}

export default Homescreen
