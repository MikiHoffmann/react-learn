import NavBar from "../Components/NavBar";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import OutputTask3 from "../Components/task3/OutputTask3";
export default function Task3() {
  const [names, setNames] = useState([]);

  function inputHandler() {
    let input = document.querySelector("input");
    setNames((prevState) => {
      let state = [...prevState];
      const item = {
        title: input.value.toString(),
        key: uuidv4(),
      };
      state.unshift(item);

      console.log(item);
      return state;
    });
  }
  return (
    <div>
      <NavBar />
      <div className="main">
        <div className="sectionTask">
          <input id="input" />
          <button onClick={inputHandler}>Submit name</button>
          <OutputTask3 output={names} />
        </div>
      </div>
    </div>
  );
}
