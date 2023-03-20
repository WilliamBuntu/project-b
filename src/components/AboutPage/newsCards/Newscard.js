import React from 'react'
import './Newscards.css'
import { Button } from 'reactstrap';
const Newscard = (props) => {
  return (
    <div>
    <div className='news-card_image' > 
    <img src={props.imeg} alt='TeacherPhoto' className='news-card_image'></img>
    </div>
    <p className='news-card_title'>  {props.t}</p>
    <p className='news-card_content'>{props.c}</p>
    <Button className="btn" color="primary" size="sm">
                  Read More
                </Button>
    </div>
  )
}

export default Newscard
