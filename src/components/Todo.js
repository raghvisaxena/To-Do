import React from "react";

function Todo({todo, toggleComplete, removeTodo}){
    function handleCheckbox(){
        toggleComplete(todo.id);
    }

    function handleRemove(){
        removeTodo(todo.id);
    }
    return(
        <div style={{
            display:"flex"
        }}>
       <input type="checkbox" onClick={handleCheckbox}/>
       <li style={{
           textDecoration: todo.completed ? "line-through" : null
       }}>{todo.task}</li>
       <button onClick={handleRemove}>X</button>
       </div>
    );
}
export default Todo