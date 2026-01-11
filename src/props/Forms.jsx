import React from 'react'
import { useState } from 'react';
const Forms = () => {


  const [userName, getuserName]=useState('');
  const[NewuserDetails,setNewuserDetails]=useState();

  const displayUserName=(event)=>{
        
       getuserName(event.target.value)


  }
   const UserDetails=()=>{
        setNewuserDetails(userName);
   }





  return (
    <section className="MainSection">
     <div className="Form">
      <h1>{NewuserDetails}</h1>
        <input type="Text" placeholder="Type here Something" onChange={displayUserName}></input>
        <br/>
         <button onClick={UserDetails}> Click Me</button>


     </div>
     </section>
  )
}

export default Forms
