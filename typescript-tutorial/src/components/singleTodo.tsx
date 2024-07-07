import React from 'react';
import "./styles.css";
import {Todo} from '../model';
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline, MdDone} from "react-icons/md";

type Props = {
    todo : Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;

}

const SingleTodo = ({todo, todos, setTodos }: Props) => {

    const   handleDone = (id: number) => {
        setTodos(todos.map((todo) =>
            todo.id === id ? {
                ...todo, isDone: !todo.isDone
            } : todo
        ))

    }
  return (


    <form className='single_todo'>
        <span className="todos-text">
            {todo.todo}
        </span>
        <div>
            <span className="icon"> <CiEdit /></span>
            <span className="icon"> <MdDeleteOutline /></span>
            <span className="icon" onClick={() => handleDone(todo.id)}> <MdDone /></span>
        </div>
    </form>
  )
}

export default SingleTodo
