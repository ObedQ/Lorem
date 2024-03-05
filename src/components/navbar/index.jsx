import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <h2>
        <NavLink to={'/'}>Lorem</NavLink>
      </h2>
      <ul>
        <li>
        <NavLink
            to={"/"}
          >
            Home
          </NavLink>   
        </li>
        <li>
          <NavLink
            to={"/services"}
          >
            Services
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
