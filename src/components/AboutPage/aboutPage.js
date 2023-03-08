import React from 'react'
import './aboutUs.css'
import Navigation from '../Navigation/Navigation'
import image from "../Navigation/image.jpg"
function AboutPage() {
  return (
    <div>
    <Navigation/>
    <div><img src={image} alt="not found" style={{height: "95vh",top:"112px", width: "100%", backGroundPosition: "center", backGroundSize: "cover"}}/>
    <h1 className="hem">Vision and Mission of  New Generation</h1>
    <div className='box-text'>
    <div className='box-mn'>
    <p className='vson'>Vision</p>   
    </div>
    <p className='text-m'>   Forming learners with Christ Centred 
         knowledgeable, ethical, environmentally minded that Developing
          a learning  culture based on love of Knowledge
         Improving school facilities towards clean
    can compete outside as Outstanding Leaders for change needed  on the world stage.</p>
    </div>
       
    <div className='box-text_1'>
    <div className='box-mn_1'>
    <p className='mson'>Mision</p> 
    </div>
    <p className='text-m_1'>   Forming learners with Christ Centred 
         knowledgeable, ethical, environmentally minded that 
         Realizing Education  By Example
         Developing a learning  culture based on love of Knowledge
         Improving school facilities towards clean, healthy and environmentally friendly schools</p>
    </div>
     
    </div>

    <div className='goal-text'>
    <div className='goal-bar'>
    <p className='goal-t'> School Goals In 2023 as It is Expected:</p>
    </div>

    <p className='text-gl'>   Forming learners with Christ Centred 
    knowledgeable, ethical, environmentally minded that 
    Realizing Education  By Example
    Developing a learning  culture based on love of Knowledge
    Improving school facilities towards clean, healthy and environmentally friendly schools
    1.100% All Teachers/Staff provide services, exemplary to service users with a religious, ethical,
      and cultural approach
100% of students carry out religious, ethical and cultural laws both at school and outside
90% of school facilities close to National Education Standards (NES)
80% of students excel at regional, national and global levels
    </p>
    </div>
    <div className='strategy'>
    <div className='strategy-t'>
    <p className='stategy-text'> Strategy</p>
      </div>

      <p className='strategy-content'>   Forming learners with Christ Centred 
    knowledgeable, ethical, environmentally minded that 
    Realizing Education  By Example
    Developing a learning  culture based on love of Knowledge
    Improving school facilities towards clean, healthy and environmentally friendly schools
    1.100% All Teachers/Staff provide services, exemplary to service users with a religious, ethical,
      and cultural approach
100% of students carry out religious, ethical and cultural laws both at school and outside
90% of school facilities close to National Education Standards (NES)
80% of students excel at regional, national and global levels
    </p>
    </div>

      
    </div>
  )
}

export default AboutPage
