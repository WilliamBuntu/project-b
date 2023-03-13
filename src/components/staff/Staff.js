import React from 'react'
import Navigation from '../Navigation/Navigation'
import image from "../Navigation/image.jpg"
import './Staff.css'
import {IoSearchOutline} from 'react-icons/io5'
import StaffCard from './staffCard';

const Staff = () => {
  return (
    <div>
      <Navigation/>
      <div>
      <img src={image} alt="not found" style={{height: "70vh",top:"112px", width: "100%", backGroundPosition: "center", backGroundSize: "cover"}}/>
      <h1 className="ttle">Staff Ditails </h1>
      </div>
      <div className='t-part_1'>
      <p className='t-head'>  Annoucements </p>
      <p className='t-head_content'> <marque> We make a new Registration!!, 
      for those who want to register for SMK Mangcoding can come directly to the Location</marque> </p>
      <input className='staff-input' placeholder='Search Staff..'></input>
      <IoSearchOutline className='search-icon'/>
      <div  >
       <StaffCard p='Dr. Emmanuel Mulganda' p1='Head Teacher'/>
      </div>

      </div>
    </div>
  )
}

export default Staff
