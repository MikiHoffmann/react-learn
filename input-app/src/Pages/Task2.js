import NavBar from "../Components/NavBar";
import ClassField from "../Components/task2/ClassField";
import FunctionField from "../Components/task2/FunctionField";
import { useState } from "react";

export default function Task2() {
  const [inputText, setInputText] = useState("Miki");

  const setInputTextHandler = (inputText) => {
    setInputText(inputText);
  };
  return (
    <div>
      <NavBar />
      <div className="main">
        <div className="sectionTask">
          <ClassField
            title={inputText}
            setInputTextHandler={setInputTextHandler}
          />
          <FunctionField
            title={inputText}
            setInputTextHandler={setInputTextHandler}
          />
        </div>
      </div>
    </div>
  );
}
