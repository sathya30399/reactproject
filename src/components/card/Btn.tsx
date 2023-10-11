import React, { useState } from 'react'
import { Alert } from './Alert';
interface props{
  btnlab:string;
  
}

const Btn = ({btnlab}:props) => {
  let [alrt,setalrt]=useState(false)

  let btnbehave =()=>{
     setalrt(true)
    
  }
  let btnbehave2 =()=>{
    setalrt(false)
    
  }
  return (<>
   
  <button type="button" className='btn btn-danger' onClick={btnbehave}>
    {btnlab}
  </button>
  <div className={alrt?"alert alert-warning alert-dismissible fade show ":"alert alert-warning alert-dismissible fade hide"} role="alert">
  
 
  <h1> Alert popup</h1>
     <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={btnbehave2}></button>
   </div>
    
    </>)
}

export default Btn

