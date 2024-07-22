import React,{useState} from 'react'


function HookCounter4() {
    const[items,setItems]=useState([])
    const addItem=()=>{
      setItems([...items,{
        id:items.length,
        value:Math.floor(Math.random()*10)+1
      }

      ])
    }
  return (
    <div>
      <ul>
        <button onClick={addItem}>add to the list</button>
        {items.map(item=>(
            <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  )
}

export default HookCounter4
