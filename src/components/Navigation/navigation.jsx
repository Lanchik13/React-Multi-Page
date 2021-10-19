import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./navigation.css";

function Navigation(props) {
  return (
    <div className="navigation">
      <div className="container">
        <Link className="navbar-title text-large" to="/">
          <p>React Multi-Page Website</p>
        </Link>

        <div className="nav-list">
          <ul className="text-middle">
            <li
              className={`nav-item  ${
                props.location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li
              className={`nav-item  ${
                props.location.pathname === "/about" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li
              className={`nav-item  ${
                props.location.pathname === "/contact" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Navigation);
