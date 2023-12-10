import { useState } from 'react'
import './App.css'
import Course from './components/course'

const getRandomImages = () => {
  const imageArray = ["Angular" , "JavaScript" , "cCsharp" ,"Reacxt"] ;
 
return  imageArray[Math.floor(Math.random()*imageArray.length)]
}

function App() {
   const [images,setImages]=useState([])

  const handleClick = () => {     
  setImages([...images, getRandomImages()])
  }

 
  return (
    <>
    <div> 
        <button className='btn' onClick={handleClick}>Add Image</button>
        { 
        images.map((image,index) => { 
         return   <Course key={index} imageName={image} />
        })
        }
       
        </div>
    </>
  )
}

export default App
