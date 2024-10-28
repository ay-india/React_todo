import React, { useState } from 'react'

export default function AddTodo({addTodo}) {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const submit =(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Desc cannot be empty!!");
        }
        else{
        addTodo(title,desc);
        setDesc("");
        setTitle("");
        }
    }
  return (
    <div className='container'>
    <form onSubmit={submit}>
  <div className="form-group">
    <label htmlFor="title">Title</label>
    <input type="text" className="form-control" id="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Enter title"/>
  </div>
  <div className="form-group">
    <label htmlFor="desc">Description</label>
    <input type="text" className="form-control" id="desc" value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder="Description"/>
  </div>
  
  <button type="submit" className="btn btn-success">Submit</button>
</form></div>
  )
}
