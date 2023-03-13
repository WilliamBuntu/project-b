import React from 'react'
import './NewsPage.css'
import Navigation from './../Navigation/Navigation';
import image from "../Navigation/image.jpg"
import Newscard from './../AboutPage/newsCards/Newscard';
import Starter from '../../views/Starter'

const NewsPage = () => {
  return (
    <div>
      <Navigation/>
      <div >
      <img src={image} alt="not found" style={{height: "60vh",top:"112px", width: "100%", backGroundPosition: "center", backGroundSize: "cover"}}/>
    <h1 className="ttle">In The News </h1>
        <div className='t-part'>
        <p className='t-head'>  Annoucements </p>
        <p className='t-head_content'>  We make a new Registration!!, 
        for those who want to register for SMK Mangcoding can come directly to the Location </p>

        </div>
      </div>
     <p className='tp-news'>Top News </p>

     <div className='news-box'>
       <Newscard/>
       
     </div>
     <div className='news-box_1'>
     <Newscard/>
       
     </div>

     <div className='news-box_2'>
     <Newscard/>
     </div>  
     <div className='new-pc'>
     </div>
     <p className='new-big_title'>Teaching And Learning Activities 
     </p>
     <p className='new-big_decr'>Lorem ipsum dolor sit amet, consectetur 
     adipiscing 
      mattis felis augue. Quisque sed elit eget ante faucibus blandit facilisis ac nibh. 
      For information, Registration for the 2021-2022 period for the Affirmation, Transfer of Parent/Guardian, 
      and Achievement pathways will be open on 28 June to 2 July 2021, while for the Zoning pathway will be 
     </p>
     <button className='news-button'>Read More</button>

     <div className='news-box_3'>
     <Newscard/>
     </div>
     <div className='news-box_4'>
     <Newscard/>
     </div>
     <div className='news-box_5'>
     <Newscard/>
     </div>
     <div className='news-box_6'>
     <Newscard/>
     </div>
   
     <div className='news-box_7'>
     <Newscard/>
     </div>
     <div className='news-box_8'>
     <Newscard/>
     </div>
     
      

     <p className='recent-post'>Recent Post</p>
     <button className='buttton-news'> Study At Home</button>
     <button className='buttton-news_1'> Studying a Day Outside in a Class of NGA</button>
     <button className='buttton-news_2'> Teaching learning activities at home</button>
     <button className='buttton-news_3'> Teaching and Learning Activities at Home 2020</button>
     <div className='news-box_55'>
    
     </div>
      
    </div>
  )
}

export default NewsPage
