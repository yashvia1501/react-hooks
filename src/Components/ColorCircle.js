import React, { useState } from 'react'

function ColorCircle() {
    const[color,setColor]=useState("red")
  return (
    <>
    <div className='square' style={{background:color}}></div>
    <div className='buttons'>
      {/* <button onClick={()=>setColor("green")}>Green</button>
      <button onClick={()=>setColor("blue")}>Blue</button> */}
      <input type='text' value={color} onChange={(e)=> {
        setColor(e.target.value);
        console.log('click');
      }} placeholder='Enter Color'/>
      
    </div>
    </>
  )
}
export default ColorCircle


