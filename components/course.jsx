import React from 'react'
import cCsharp from '../images/2336040_4db7_6.jpg'
import Angular from '../images/4663024_b398_2.jpg'
import JavaScript from '../images/image-1024x538.jpeg'
import Reacxt from '../images/o9r97ts6fecb6elzm4vf.webp'


const imageMap = {
  Angular:Angular  ,
  JavaScript:JavaScript ,
  cCsharp:cCsharp ,
  Reacxt :Reacxt
} ;

function Course({imageName}) {
  // console.log(imageName);

 
  return (
    <div className='main'>
      <img src={imageMap[imageName]} alt="" />
    </div>
  )
}

export default Course
