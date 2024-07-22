import React, { useState,useEffect } from 'react'
import axios from 'axios';
function DataFetch() {
    const[post,setPost]=useState({})
    const[id,setId]=useState(1)
    const[idfrmbuttonclick, setIdfrombuttonclick]=useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idfrmbuttonclick}`)
        .then(res=>{
            console.log('data')
            setPost(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    })
    const HandelClick=()=>{
      setIdfrombuttonclick(id)
    }
  return (
    <div>
        <input value={id} onChange={(e)=>setId(e.target.value)}/>
        <button type='button' onClick={HandelClick} >Fetch</button>
      <ol>
       {/* { posts.map(post=> (<li key={post.id}>{post.title}</li>))} */}
       {post.title}
      </ol>
    </div>
  )
}

export default DataFetch
