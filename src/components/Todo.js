import React from 'react';

const Todo=({todo,completeTodo,removeTodo})=>{
    
    const HandleComplete=()=>{
        completeTodo(todo.id)
    }
    const HandleDelete=()=>{
        removeTodo(todo.id)
    }

    return(
        <div>
            <div className="todo">
            <li className={todo.completed?"checked":""}>
                {todo.text}
            </li>
            <button onClick={HandleComplete} className="check-btn">{todo.completed?"Uncheck":"Check"}</button>
            <button className="delete-btn" onClick={HandleDelete}>Delete</button>
            </div>
        </div>
    );
}

export default Todo;