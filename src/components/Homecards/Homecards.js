import React from 'react'
import './Homecards.css'

const Homecards = (props) => {
  return (
    <div>
      <div className="homecard">
        <img src={props.img}/>
        <h1>{props.description}</h1>
      </div>
    </div>
  )
}

export default Homecards
