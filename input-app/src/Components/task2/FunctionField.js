import React, { useState } from "react";

export default function FunctionField() {
  
  return (
    <form className="taskForm">
      <input type="text" value={inputText} onChange={textHandler} />
      <span className="output">My name: {inputText}, function.</span>
    </form>
  );
}
