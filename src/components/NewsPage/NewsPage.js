import React from 'react'
import './NewsPage.css'
import Navigation from './../Navigation/Navigation';
import image from "../Navigation/image.jpg"
import Newscard from './../AboutPage/newsCards/Newscard';
import hhh from '../Navigation/hhh.jpg'
import meet from '../Navigation/meet.jpg'
import black from '../Navigation/black.jpeg'
import black2 from '../Navigation/black2.jpg'
import electro from '../Navigation/electro.png'
import fff from '../Navigation/fff.jpg'
import nga from '../Navigation/nga.jpg'
import shop from '../Navigation/shop.jpg'
import day from '../Navigation/day.jpg'
import laptop from '../Navigation/laptop.jpg'

const NewsPage = () => {
  return (
    <div>
      <Navigation/>
      <div >
      <img src={image} alt="not found" className='pcture' />
    <h1 className="ttle">In The News </h1>
        <div className='t-part'>
        <p className='t-head'>  Annoucements </p>
        <p className='t-head_content'>  We make a new Registration!!, 
        for those who want to register for SMK Mangcoding can come directly to the Location </p>

        </div>
      </div>
     <p className='tp-news'>Top News </p>

     <div className='news-box'>

       <Newscard imeg={day} t='Understanding Black Excellence  2023'  
       c="As a lead Black art and Black people, 
       and a day to stand in solidarity with Black Canadians.. "/>
       
     </div>
     <div className='news-box_1'>
     <Newscard imeg={hhh} t='Chatsworth House' c='Chatsworth House is a stately home  Dales,
     3.5 miles north-east of Bakewell and 9 miles west of Chesterfi,
     '  />
       
     </div>

     <div className='news-box_2'>
     <Newscard  imeg={meet}  t='Summit of New England' c='he Dun & Bradstreet  Cloud offers the world’s 
     most comprehensive That’s why 90% of the Fortune 500' />
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
     <div >
     <div className='news-box_3' >
     <Newscard  imeg={black}  t='The Black Excellence Network' c='Black people have achieved so much all around the
      world and it is only right that we  ' />
     </div>
     <div className='news-box_4'>
     <Newscard imeg={black2}  t='Art of Excellence Blog' c='The Art of Excellence Blog is where our writers
      discuss education. ' />
     </div>
     <div className='news-box_5'>
     <Newscard imeg={electro}  t='Technologies in Computer Science ' c='Tools in computer science are
      pieces of software or hardware that help a programmer . ' />
     </div>
     <div className='news-box_6'>
     <Newscard  imeg={laptop}  t='Computer Science and Technology' c='Information 
     Technology involves working both with hardware (e.g. CPUs, RAM, hard-disks) .' />
     </div>
   
     <div className='news-box_7'>
     <Newscard imeg={nga}   t='Situation of children in NGA' c='Rwandan children have almost 
     universal access to primary education. ' />
     </div>
     <div className='news-box_8'>
     <Newscard imeg={fff}  t='The Top 10 Healthiest Foods for Kids' c="Anyone who's ever tried to feed a child (something other than cereal or ice cream) knows they don't always ea
       " />
     </div>
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
