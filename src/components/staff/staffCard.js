import React from 'react'
import './staffCard.css'
import profe3 from '../../assets/images/recourses/profe3.avif'
const StaffCard = (props) => {
  return (
    <div className='teacher-card'>
    <img src={profe3} alt='TeacherPhoto' className='photo_teacher'></img>
      <p className='teacher-name1'> {props.p} </p>
      <p1 className='teacher-position'> {props.p1}</p1>
      

    </div>
  )
}

export default StaffCard
