import React,{useState} from 'react';
import './App.css';

import Form from './components/Form';
import TodoList from './components/TodoList';

const App=()=>{

  const [todos,setTodos]=useState([]);

  const addTodo= todo=>{
          const newTodos=[todo,...todos]
           setTodos(newTodos)
       }
  
  return (
    <div>
      <h1>TODO PWA</h1>
      <Form addTodo={addTodo}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;