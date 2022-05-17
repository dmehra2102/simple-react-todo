import React from 'react';
import "./Style.css"

function TodoItem({todo,id}) {
  return (
    <div className='style'>
        <p style={{
            "fontSize": "24px"
        }}>{id+1}. {todo}<input style={{
            "borderRadius": "50%"
        }} type="checkbox"/></p>
    </div>
  )
}

export default TodoItem