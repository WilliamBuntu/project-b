import React from 'react'
import './TeacherPage.css'
import '../../views/ui/Cards'
import Navigation from '../Navigation/Navigation'
import image from "../Navigation/image.jpg"
 import {BsArrowRight} from 'react-icons/bs'
 import About from './../../views/About';


const TeacherPage = () => {
  return (

    <div>
    
      <Navigation/>
      <div><img src={image} alt="not found" style={{height: "75vh",top:"112px", width: "100%", backGroundPosition: "center", backGroundSize: "cover"}}/>
      <p className='teacher-hello'>Hello, l'm</p>
      <p className='teacher-name'>Teachers Name,</p>
      <p className='teacher-descr'>NGA Teacher</p>
      <button className='teacher-button'>Contact me  <BsArrowRight/></button>
    
     {/*<div className='teacher-photo'></div>*/} 

      </div>
      <p className='about-me'>About Me</p>
      <div className='lne'></div>
      <div className='teacher-photo1'></div>
       
      <p className='who-am'>Who I Am?</p>
      <p className='who-dtals'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Sed at tellus semper lacus varius suscipit. Suspendisse pulvinar, 
       justo id scelerisque efficitur, quam augue pharetra metus, ultricies finibus elit ipsum vitae.

      Cupiditate recusandae laudantium esse, harum animi 
       quisquam et delectus ipsum quam alias quaerat? Quasi hic quidem illum </p>

      
      </div>
  )
}

export default TeacherPage
