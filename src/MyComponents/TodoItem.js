import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <div>
    <h4 >{todo.title}</h4>
    <h6>{todo.desc}</h6>
    <button className='bg-danger text-white' onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}

