import React, { useState } from 'react'
import Todo from './Todo'
import TodoItem from './TodoItem';

function TodoList() {
    const [list,setList] = useState([]);
    const getdata = (data)=> {
        setList([...list,data])
    }
  return (
    <div>
        <Todo fetchdata={getdata}/>
        {list.map((el,index)=> {
            return (
                <TodoItem todo={el} id={index}/>
            )
        })}
    </div>
  )
}

export default TodoList