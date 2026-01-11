import React from 'react'
import './App.css';
import { useState } from 'react';


const Todolist = () => {
  const[color,setColor]=useState("");

  const handleChange=(e)=>{
    setColor(e.target.value)
  }


  return (
    <div id='container'>
      <div id='mainBox'
      style={{background:color}}>
         <h1>Box1</h1>
      </div>
      <input
      type='text'
      placeholder='Change color'
      value={color}
      onChange={handleChange}
      />
    </div>
  )
}

export default Todolist
