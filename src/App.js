import React,{useEffect ,useState} from "react";
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const LOCAL_STORAGE_KEY="react-todo-list"

function App(){
    const [todos, setTodos]= useState([]);

    useEffect(()=> {
      const storage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

      if(storage){
        setTodos(storage);
      }
    }, []);
    useEffect(()=> {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    },[todos]);
    function addTodo(todo){
      setTodos([todo, ...todos]);
    }

    function toggleComplete(id){
      setTodos(
        todos.map(todo => {
          if(todo.id==id){
            return {
              ...todo, completed:!todo.completed
            }
          }
          return todo;
        })
      );
    }

    function removeTodo(id){
      setTodos(todos.filter(todo => todo.id !== id));
    }
    return(
      <div className="App">
      <header>
      <h1>React To-Do List </h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
      </header>

      </div>
    )
  }


export default App