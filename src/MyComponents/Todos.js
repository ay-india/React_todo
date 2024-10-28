import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    const onDelete = props.deletefunc;
    const todoStyle={
      minHeight:"70vh",
      margin: "20px 0px 40px 250px"
    }
  return (
    <div className='container' >
    <h3 className=' text-center my-3' > TodoLists
     </h3 >
     <div style={todoStyle}>
     {props.todo.length===0? <h3 >No todo to show</h3>:props.todo.map((todo)=>{
        return <TodoItem todo={todo} key={todo.sno} onDelete={onDelete}/>
     })}
     </div>
     </div>
   
  )
}
