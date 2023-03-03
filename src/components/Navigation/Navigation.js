import React from 'react'
import './Navigation.css';
import { Link, } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      {/* Navigation bar to be imported in all pages */}
      <header className="header">
      <Link to={"/"} >New Generation Academy<span><br></br>Transformed For Community</span></Link>
        <ul>
          <Link to={"/"} ><li>Home Page</li></Link>
          <Link to={"/About Us"} ><li>About Us</li></Link>
          <Link to={"/Programs"}><li>Programs</li></Link>
          <Link to={"/In the News"}><li>In The News</li></Link>
          <Link to={"/News"}><li>News</li></Link>
          <Link to={"/Contact Us"}><li>Contact Us</li></Link>
          <Link to={"/Staff mail"}><li>Staff mail</li></Link>
          <Link to={"/dashboard/starter"}><li>dash</li></Link>
          </ul>
      </header>
    </div>
  )
}

export default Navigation
