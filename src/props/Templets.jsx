import React from 'react'
import { useState, useEffect } from 'react'

const UserDetails="https://jsonplaceholder.typicode.com/"
  
const UserPage=()=>{
 const [User, setuser]=useState([])

const userhandler= async()=>{
   const resopne = await fetch(UserDetails)
   const newData  =await resopne.json()
   setuser(newData)
}

useEffect=(()=>{
    console.log(userhandler)
},[])




const Templets = () => {
  return (
    <p>
      {User.map((item)=>{
        return(
          <p>{item.title}</p>
        )
      })}
    </p>
  )
};
}

export default Templets;
