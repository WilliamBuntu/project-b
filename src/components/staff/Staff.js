import React from 'react'
import Navigation from '../Navigation/Navigation'
import image from "../Navigation/image.jpg"
import './Staff.css'
import {IoSearchOutline} from 'react-icons/io5'
import StaffCard from './staffCard';
import prof1 from '../../assets/images/recourses/prof1.jpg'
import prof2 from '../../assets/images/recourses/prof2.jpg'
import b1 from '../../assets/images/recourses/b1.jpg'
import be from '../../assets/images/recourses/be.jpg'
import bb from '../../assets/images/recourses/bb.jpg'
import blac from '../../assets/images/recourses/blac.jpg'
import  Cardk  from '../card-kvn/Cardk';


const Staff = () => {
  return (
    <div>
      <Navigation/>
      <div>
      <img src={image} alt="not found" style={{height: "50vh",top:"112px", width: "100%", backGroundPosition: "center", backGroundSize: "cover"}}/>
      <h1 className="ttle">Staff Ditails </h1>
      </div>
      <div className='t-part_1'>
      <p className='t-head'>  Annoucements </p>
      <p className='t-head_content'> <marque> We make a new Registration!!, 
      for those who want to register for SMK Mangcoding can come directly to the Location</marque> </p>
      <input className='staff-input' placeholder='Search Staff..'></input>
      <IoSearchOutline className='search-icon'/>


      <div className='teacher-card' >
       
       <Cardk image={prof1} name='Mugisha Keven' field='Head Teacher'/>
      </div>
      <div className='teacher-card_1'  >
      <Cardk image={b1} name='Ms. Sandra Consolatrice' field='Head Of ICT'/>
       
      </div>
     
      <div className='teacher-card_2' >
      <Cardk image={prof2} name='Mrs. Uwituze Martha' field='Human Reasource'/>
       
      
      </div>
      <div className='teacher-card_3' >

      <Cardk image={be} name='Mrs. Uwituze Martha' field='Human Reasource'/>
       
      </div>

      <div className='teacher-card_4' >
      <Cardk image={blac} name='Mrs. Uwituze Martha' field='Human Reasource'/>
      
      </div>
      <div className='teacher-card_5' >
      <Cardk image={bb} name='Mrs. Uwituze Martha' field='Human Reasource'/>
       
      </div>
  
    

      </div>
    </div>
  )
}

export default Staff
