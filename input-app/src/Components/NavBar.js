import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navBar">
      <Link to="/">
        <li>home</li>
      </Link>

      <Link to="/Task1">
        <li>task1</li>
      </Link>

      <Link to="/Task2">
        <li>task2</li>
      </Link>

      <Link to="/Task3">
        <li>task3</li>
      </Link>
      
      <Link to="/Task4">
        <li>task4</li>
      </Link>
    </div>
  );
}
