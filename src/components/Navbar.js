import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container">
        <Link className="navbar-brand mr-4 nav-title" to="/">
          <img
            // src="./images/tflogo.png"
            src="https://www.transparentpng.com/thumb/transformers-logo/K9EvWR-black-transformers-logo-transparent.png"
            width={40}
            height={40}
            className="d-inline-block align-middle mr-3"
            alt="Autobot Logo"
            loading="lazy"
          />
          Transformers Index
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse row" id="collapsibleNavbar">
          <ul className="navbar-nav ml-3">
            <li className="nav-item active">
              <Link className="nav-link active" to="/">
                All Entries
              </Link>
            </li>           
            <li className="nav-item">
              <Link className="nav-link" to="/new-entry">
                New Entry
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                My Entries
              </Link>
            </li>
          </ul>
        </div>
      </div>     
    </nav>
  );
};

export default Navbar;
