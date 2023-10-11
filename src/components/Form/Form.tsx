import React, { FormEvent ,useRef, useState} from 'react'
import form from "./Form.module.css"

const Form = () => {
  const [person,setperson] = useState({
    name:"ss",
    age:"32",

  })

   const usernameref = useRef<HTMLInputElement>(null)
   const ageref = useRef<HTMLInputElement>(null)
     const user ={name:"",age:0}

     


    const formhandle =(event:FormEvent)=>{
        event.preventDefault();
        console.log("person"+person.name);
        if(usernameref.current !==null){
          console.log("username",usernameref.current.value);
          user.name = usernameref.current.value;
        }
        if(ageref.current !==null){
          console.log("age",ageref.current.value);
          user.age = Number(ageref.current.value);
        }

    }
  return (<>
 <form action="" onClick={formhandle} className={form.form_head}>
  <div className="mb-3">
    <label htmlFor="" className="form-label">
        UserName
    </label>
    <input onChange={(event)=>{
      setperson({...person,name:event.target.value})
    }} value={person.name}  ref = {usernameref} type="text" className="form-control" />
  </div>
  <div className="mb-3">
    <label htmlFor="" className="form-label">
        Age
    </label>
    <input onChange={(event)=>{
      setperson({...person, age:event.target.value})
    }} value={person.age} ref = {ageref} type="text" className="form-control" />
  </div>
  <button className={`btn btn-primary ${form.cfd}` }>submit</button>
  
  
  </form>
  
  
  </>
    
  )
}

export default Form