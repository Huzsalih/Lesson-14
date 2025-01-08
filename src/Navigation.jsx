
import { Link } from "react-router-dom";

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light m-0">
    <div className="container">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/support">Support</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/enterprise">Enterprise</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/features">Features</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
