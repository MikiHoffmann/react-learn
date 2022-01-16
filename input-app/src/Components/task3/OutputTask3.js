import React from "react";
import OutputItem from "./OutputItem";

export default function OutputTask3(props) {
  return (
    <ul>
      {props.output.map((outputItem) => (
        <OutputItem key={outputItem.key} title={outputItem.title} />
      ))}
    </ul>
  );
}
