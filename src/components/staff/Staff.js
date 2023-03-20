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
      <div className='teacher-card' >
       <StaffCard p='Dr. Emmanuel Mulganda' p1='Head Teacher' imeg={prof1}/>
      </div>
      <div className='teacher-card_1'  >
       <StaffCard p='Ms. Sandra Consolatrice' p1='Head Of ICT ' imeg={b1}/>
      </div>

      <div className='teacher-card_2' >
       <StaffCard p='Mrs. Uwituze Martha' p1='Human Reasource' imeg={prof2}/>
      </div>
      <div className='teacher-card_3' >
       <StaffCard p='Mrs. Uwituze Martha' p1='Human Reasource' imeg={be}/>
      </div>

      <div className='teacher-card_4' >
       <StaffCard p='Mrs. Uwituze Martha' p1='Human Reasource' imeg={blac}/>
      </div>
      <div className='teacher-card_5' >
       <StaffCard p='Mrs. Uwituze Martha' p1='Human Reasource' imeg={bb}/>
      </div>



      </div>
    </div>
  )
}

export default Staff
