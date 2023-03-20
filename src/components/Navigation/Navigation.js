import React from 'react'
import './Navigation.css';
import { Link } from "react-router-dom";
import img from "../Navigation/img.jpg"





const Navigation = () => {
  return (
    <div>
      {/* Navigation bar to be imported in all pages */}
      <header className="header">
        <div className="heads">
      <img src={img} alt="notfound" style={{height: "4vh", marginLeft: "12px"}}/>
      <Link to={"/"} className="log">New Generation Academy<span style={{color: "white",}}><br></br>Transformed For Community</span></Link>
      </div>
        <ul >
          <Link to={"/"} ><li>Home Page</li></Link>
          <Link to={"/AboutPage"} ><li>About Us</li></Link>
          <Link to={"/Staff"}><li>Staff </li></Link>
          <Link to={"/NewsPage"}><li>In The News</li></Link>
          <Link to={"/News"}><li>News</li></Link>
          <Link to={"/Contact Us"}><li>Contact Us</li></Link>
          <Link to={"/TeacherPage"}><li>One teacher</li></Link>
          <Link to={"/dashboard/starter"}><li>dash</li></Link>
          </ul>
      </header>
      
    </div>
  )
}

export default Navigation
