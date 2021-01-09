import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  const completeTodo = (id) => {
      let updatedTodos=todos.map(todo=>{
          if(todo.id===id){
              todo.completed=!todo.completed
          }
          return todo
      })
      setTodos(updatedTodos);
  };
  const removeTodo=(id)=>{
    setTodos(todos.filter(todo=>todo.id!==id))
  }

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id}
            todo={todo}
            setTodos={setTodos}
            completeTodo={completeTodo} 
            removeTodo={removeTodo}/>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
