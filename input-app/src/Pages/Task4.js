import React from "react";
import NavBar from "../Components/NavBar";
import ClickCountClass from "../Components/task4/ClickCountClass";

export default function Task4() {
  return (
    <div>
      <NavBar />
      <div className="main">
        <div className="sectionTask">
          <ClickCountClass />
        </div>
      </div>
    </div>
  );
}
