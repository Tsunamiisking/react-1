import React, { useRef } from 'react';
import "./styles.css"

type Props = {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void; // handleAdd is a function and it doesent return anything, the function was defined in the app.tsx file to handle to-do add
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
    const inputref = useRef<HTMLInputElement>(null);


    return (
        <form className="input-form" onSubmit={(e) => {
            handleAdd(e);
            inputref.current?.blur(); // This line removes the focus blur of the input field

        }} // On submit of the form the "handleadd" fuction is called and here i have added the event parameter "e"
        >
            <input
                value={todo}
                ref={inputref}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Enter a task"
                type="text"
                className='input-box' />
            <button className='submit-button' type="submit">Go</button>
        </form>
    );
}

export default InputField
