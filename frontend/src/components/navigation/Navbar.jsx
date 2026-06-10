import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar_container">
      <ul className="navbar_list">
        <li className="navbar_item">
          <Link className="navbar_btn" to="/classes">Classes</Link>
          <Link className="navbar_btn" to="/groups">Grupos</Link>
          <Link className="navbar_btn" to="/">Salary</Link>
        </li>
      </ul>
    </nav>
  );
}
