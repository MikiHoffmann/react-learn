import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav class="navBar">
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>

        <li>
          <Link to="/PageCard">Page Card</Link>
        </li>

        <li>
          <Link to="/AllMeetUps">All meetups</Link>
        </li>

        <li>
          <Link to="/NewMeetUps">New meetups</Link>
        </li>

        <li>
          <Link to="/Favorites">My favorite meetups</Link>
        </li>
      </ul>
    </nav>
  );
}
