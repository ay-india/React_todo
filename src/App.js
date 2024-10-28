import "./App.css";
import Header from "./MyComponents/Header";
import { TodoItem } from "./MyComponents/TodoItem";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { useEffect, useState } from "react";
import AddTodo from "./MyComponents/AddTodo";

function App() {
  let initTodo=[];
  if(localStorage.getItem("todos")!==null){
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const addTodo=(title,desc)=>{
    let sNo=1;
    if(todos.length!==0)
      sNo=todos[todos.length-1].sno+1;
    console.log(sNo);
    let myTodo={
      sno: sNo,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);
  }
  const onDelete = (todo) => {
    console.log(todo.sno);
    console.log(todos);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);
  return (
    <>
      <Header title="Todo List" />
      <AddTodo addTodo={addTodo}/>
      <Todos todo={todos} deletefunc={onDelete}/>
      <Footer />
    </>
  );
}

export default App;
