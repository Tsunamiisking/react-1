import React, { useState } from 'react';
import InputField from './components/inputField';
import TodoList from './components/todoList';
import './App.css';
import { Todo } from './model';

const App : React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  // console.log(todo)

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();


    if (todo) {
      setTodos([...todos, {id: Date.now(), todo, isDone: false}]);
      setTodo("");
    }

  };

  return (
    <div className="App">
     <span className="heading"> Task App</span>
     <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
     <TodoList />

    </div>
  );
}

export default App;
