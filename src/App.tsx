import React , { useState} from 'react';
import Todos from './components/Todos'
import Todo from "./components/Todo/Todo";
import Form from "./components/Form/Form";
import DemoApp from "./components/DemoApp/DemoApp"
import FormInput from "./FormInput/FormInput"
import { AppReducerContext} from "./ContextApi/AppReducerContext"


import './App.css';

function App() {
  const [ inputValue , setInputValue] = useState<Todo[]>([]);

  const todo = [
    new Todo ("Sample"),
    new Todo ("Others")
  ];
  const AddTodo = (todoText : string)=>{
    // const newTodo = new Todo (todoText );
    // setInputValue((pre)=>{
    //   return pre.concat(newTodo);

    // })
    console.log(todoText , "NEWTODOTEST");
  }
  // console.log(inputValue , "AppValue");
  // console.log(Todo , "TODO")
  return (
    <div className="App">
      {/* <Todos items={todo}/>
      <Form onAddTodo = {AddTodo}/> */}
      {/* <DemoApp textarea = "props" number={25}/> */}
      <FormInput/>
      <AppReducerContext/>
     
      
    </div>
  );
}

export default App;
