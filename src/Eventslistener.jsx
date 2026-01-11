import React from 'react'
import { useState } from 'react';



const BgColor=()=>{
    const [count,setcount]=useState(0);
    const[BgColor,setBgColor]=useState('White');

    const countIncrease =()=>{
        setcount(count+1);
    }
     const countDcrease =()=>{
        count > 0 && setcount(count-1);
    }
    const countReset=()=>{
        setcount(0);
    }

    const colorChanger=()=>{
        const colors =['blue','green','orange','grey'];
        const randomcolors=colors[Math.floor(Math.random()*colors.length)];
        setBgColor(randomcolors);
    }

    


  return (
    <div
      style={{ backgroundColor: BgColor, minHeight: '100vh', textAlign: 'center', padding: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={countIncrease}>Increase</button>{''}
       <button onClick={countDcrease}>Decrrease</button>{''}
        <button onClick={countReset}>Reset</button>{''}
         <button onClick={colorChanger}>Change BackGroundColor</button>
    </div>
  );

}

export default BgColor;
