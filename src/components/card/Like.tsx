import React, { useState } from 'react'
import Image from "./baby.webp"
import Btun from './Btun'
import "./like.css"



const like = () => {
  let [fill,setfill] =useState(true)
  
  let heartaction=()=>{
     setfill(false)
  }
  
  let heartreaction=()=>{
    setfill(true)
  }


  return (<>
<div className='flex'>
    <div className="card" style={{ width: "18rem" }}>
        <img src={Image} className="card-img-top" alt="..." />
        <span className='positionup'><Btun  heart={fill} heart1={heartaction}  heart2={heartreaction}/></span> 
     <div className="card-body">
       <h5 className="card-title">PRIYOMA ENTERPRICE Dancing cactus Toy Talking Repeat Bluetech Singing Toy 120 Songs  (Green)</h5>
        <p className="card-text">
          Special price  ₹345
       </p>
       <div className="atag">
       <a href="#" className= "text">
         BUY NOW
       </a>
       </div>
    </div>
  </div>
</div>

  </>)
}

export default like