import React, { useEffect } from "react";
import { useState } from "react";

export default function ClickCountFunction() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Tou clicked ${count} times.`;
  });

  return (
    <div>
        <h2>FUNCTION</h2>
      <p>you clicked {count} times.</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me!
      </button>
    </div>
  );
}
