import React, { useState } from 'react';
import "./Todo.css"

function Todo({fetchdata}) {
    const [item,setItem] = useState("");
  return (
    <div>
        <input onChange={(e)=> {setItem(e.target.value)}} type="text" placeholder='Write your todo'/>
        <button onClick={()=> {fetchdata(item)}}>ADD</button>
    </div>
  )
}

export default Todo