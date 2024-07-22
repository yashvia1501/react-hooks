import React, { useState } from 'react'

function HookCounter3() {
    const[name,setName]=useState({firstname:'',lastname:''})
  return (
    <div>
      <form>
        <input type="text" value={name.firstname} onChange={e=>setName({...name, firstname:e.target.value})}fname/>
        <input type="text" value={name.lastname} onChange={e=>setName({...name,lastname:e.target.value})}lname/>
      </form>
      <h3>fname: {name.firstname}</h3>
      <h3>lname: {name.lastname}</h3>
    </div>
  )
}

export default HookCounter3
