import React, { useState } from 'react'
import {FaHeart} from 'react-icons/fa';
import {FaRegHeart}from 'react-icons/fa';
 interface Props{
  heart:boolean,
  heart1:()=>void,
  heart2:()=>void

 }

const butn = ({heart,heart1,heart2}:Props) => {
  // let [fill,setfill] =useState(false)
  // let heartaction=()=>{
  //    setfill(true)
  // }
  // let heartreaction=()=>{
  //   setfill(false)
  // }
  return (
    <div>
       
      <FaRegHeart className={heart?"show":"hide"} color='black' size={"30px"} onClick={heart1} />
      <FaHeart  className={!heart?"show":"hide"} color='red' size={"30px"} onClick={heart2}/>
     
    </div>
  )
}

export default butn