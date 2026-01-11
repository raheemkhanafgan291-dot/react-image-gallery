import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const FirstComp = () => {

  const[userData,setUSerData]=useState([]);
  const[index, setIndex]=useState(1)

  const   getData= async () => {
    const resopnse= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
   setUSerData(resopnse.data)
  }


    useEffect(function(){
      getData()
    },[index])



   let printUserData= <h3 className='Loading'>Loading...</h3>
   

   if(userData.length>0){
    printUserData=userData.map(function(elem,idx){


      return <div key={elem.idx}>
        
        <a href={elem.url} >
        <div className='img-div'>
        <img className='img-box' src={elem.download_url} alt=''/>
      </div>
      <h2>{elem.author}</h2>
      </a>
      </div>
    })
   }


  return (
    <div className='mainsection'>
      <div className='user-data'>
         {printUserData}
      </div>

      <div className='btnsec'>
      <button className='btn' onClick={()=>{
           if(index>1){
            setIndex(index-1)
           }
      }}>
        Perious
        </button>
        <h1>{index}</h1>
      <button className='btn1' onClick={()=>{
        setIndex(index+1)
      }}>Next </button>
      </div>
    </div>
  )
}

export default FirstComp
