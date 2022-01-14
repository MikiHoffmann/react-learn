import NavBar from "../Components/NavBar";
import ClassField from "../Components/task2/ClassField";
import FunctionField from "../Components/task2/FunctionField";
import { useState } from 'react'

export default function Task2(props) {
    const [inputText, setInputText] = useState("Miki");

  const textHandler = (e) => {
    setInputText(e.target.value);
  };
  return (
    <div>
      <NavBar />
      <div className="main">
        <div className="sectionTask">
          <ClassField o={this.props.textHandler}/>
          <FunctionField onChange={props.textHandler}/>
        </div>
      </div>
    </div>
  );
}
