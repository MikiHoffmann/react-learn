import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navBar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/Cards">Cards</Link>
        </li>

        <li>
          <Link to="/AllBridges">All bridges</Link>
        </li>

        <li>
          <Link to="/NewBridges">New bridges</Link>
        </li>

        <li>
          <Link to="/MyBridges">My bridges</Link>
        </li>
      </ul>
    </nav>
  );
}
