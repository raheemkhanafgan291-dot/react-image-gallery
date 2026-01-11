import React from 'react'
import { useState } from 'react'


const Events = () => {
  const [number, setNumber] =useState(0)
  const[Box,setBox]=useState('')
  const Increses=()=>{
    setNumber(number+1);
  }
    const Decreses=()=>{
        if(number>0){
    setNumber(number-1);
        }
  }
  const Reset=()=>{
    setNumber(0);

  }
    

//++++++++++++++++++++++++++++ OnChange Event +++++++++++++++++++++++++++++++++++




         const BackGround=(event)=>{

      setBox(event.target.value);
   };


    


  return (
    <div>
         {number}
         <br/>
         <button onClick={Increses}>Increses</button>
         <button onClick={Decreses}>Decreses</button>
         <button onClick={Reset}>Reset</button>
         <br/>
         <input type="Text" onChange={BackGround} value={Box} placeholder="Type here Spmething"/>
         <p>You Typed:{Box}</p>
    </div>
  );
};

export default Events



