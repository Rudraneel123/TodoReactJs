import React, { useState } from "react";

const TodoInput = (props) => {
  const [inputText, setInputText] = useState("");
  const handleEnter =(event)=>{
    if(event.keyCode===13){
        props.addList()
        setInputText("")
    }
  }
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter Todos"
        value={inputText}
        onChange={(event) => {
          setInputText(event.target.value);
        }}
        onKeyDown={handleEnter}
      />
      <button className="add-btn" onClick={()=> {
        props.addList(inputText)
        setInputText("")
      }}>+</button>
    </div>
  );
};

export default TodoInput;
