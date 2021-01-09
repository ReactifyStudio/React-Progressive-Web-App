import React,{useState} from 'react';
import {v4 as uuidv4} from 'uuid'

const Form =({addTodo})=>{
    
    const [inputText,setInputText]=useState("");

    const inputTextHandler=(e)=>{
        setInputText(e.target.value)
    }
    const submitTodoHandler=(e)=>{
        e.preventDefault();
        if(!inputText){
            return
        }
        addTodo({text:inputText,completed:false,id:uuidv4()});
        setInputText("");
    }

    return(
        <form onSubmit={submitTodoHandler}>
            <input type="text" value={inputText} placeholder="Add Todo" onChange={inputTextHandler}/>
            <button type="submit" className="add-btn">
                Add
            </button>
        </form>
    );
};

export default Form;