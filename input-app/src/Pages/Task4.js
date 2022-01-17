import React from "react";
import NavBar from "../Components/NavBar";
import ClickCountClass from "../Components/task4/ClickCountClass";
import ClickCountFunction from "../Components/task4/ClickCountFunction";

export default function Task4() {
  return (
    <div>
      <NavBar />
      <div className="main">
        <div className="sectionTask">
          <ClickCountClass />
          <ClickCountFunction/>
        </div>
      </div>
    </div>
  );
}
