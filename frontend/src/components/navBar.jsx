import React from "react";
import "./styles/Nav.css";

function NavBar() {
  return (
    <React.Fragment>
      <nav className="Nav">
        <h1 className="Nav-logo">LOGO</h1>
        <ul className="Nav-items">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/news">News</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/policy">Policy</a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;
