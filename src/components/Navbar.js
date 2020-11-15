import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container">
        <a className="navbar-brand mr-4 nav-title" href="#!/">
          <img
            src="https://www.transparentpng.com/thumb/transformers-logo/K9EvWR-black-transformers-logo-transparent.png"
            width={40}
            height={40}
            className="d-inline-block align-middle mr-3"
            alt="Autobot Logo"
            loading="lazy"
          />
          Transformers Index
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#!/collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse row" id="collapsibleNavbar">
          <ul class="navbar-nav ml-3">
            <li class="nav-item active">
              <a class="nav-link active" href="#!/">
                All Entries
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href=".././profile.html">
                My Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href=".././new-entry.html">
                New Entry
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!/">
                My Entries
              </a>
            </li>
          </ul>
        </div>
        <span class="navbar-text active">
          <a className="nav-link active" href="#!/">
            Sign out
          </a>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
