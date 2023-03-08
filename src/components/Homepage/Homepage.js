import React from 'react'
import Navigation from '../Navigation/Navigation'
import './Homepage.css';
import Homecards from '../Homecards/Homecards';
import unsplash from "../Navigation/unsplash.jpg"
import unsplash2 from "../Navigation/unsplash2.jpg"
import image from "../Navigation/image.jpg"




const Homepage = () => {
  const swiperParams = {
    slidesPerView: 3,
    spaceBetween: 30
  };
  return (
    <div>
      <Navigation/>
      <div className="section1">
        <img src={image} alt="not found" style={{height: "90vh",top:"112px", width: "100%", backGroundPosition: "center", backGroundSize: "cover"}}/>
        <h1 className="he">Welcome To New Generation Academy</h1>
        <div className="cards">
        <Homecards 
        img={unsplash} style={{marginLeft: "12%", marginTop: "3%", border: "1px solid red", borderRadius: "12px"}}/>
        <Homecards 
        img={unsplash2} style={{marginLeft: "12%", position: "relative", marginTop: "3%", border: "1px solid transparent", borderRadius: "12px"}}/>
        <Homecards 
        img={unsplash2} style={{marginLeft: "12%", position: "relative", marginTop: "3%", border: "1px solid transparent", borderRadius: "12px"}}/>
        </div>
        <div className="card2">
        <Homecards 
        img={unsplash2} style={{marginLeft: "12%", position: "relative", marginTop: "3%", border: "1px solid transparent", borderRadius: "12px"}}/>
        <Homecards 
        img={unsplash2} style={{marginLeft: "12%", position: "relative", marginTop: "3%", border: "1px solid transparent", borderRadius: "12px"}}/>
        <Homecards 
        img={unsplash2} style={{marginLeft: "12%", position: "relative", marginTop: "3%", border: "1px solid transparent", borderRadius: "12px"}}/>
        </div>
      </div>
      <div>  
    </div>
    
    </div>
  )
}

export default Homepage
