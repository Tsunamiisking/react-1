import React from 'react';
import "./styles.css"

const InputField = () => {
  return (
  <form className="input-form">
    <input placeholder="Enter a task" type="text" className='input-box'/>
    <button className='submit-button' type="submit">Go</button>
  </form>
  );
}

export default InputField
