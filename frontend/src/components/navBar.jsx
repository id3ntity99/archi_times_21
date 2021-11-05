import React from "react";
import "../styles/Nav.css";

function NavBar() {
  return (
    <React.Fragment>
      <nav className="Nav">
        <h1 className="Nav-logo">LOGO</h1>
        <ul className="Nav-items">
          <li>Home</li>
          <li>News</li>
          <li>About</li>
          <li>Policy</li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;
