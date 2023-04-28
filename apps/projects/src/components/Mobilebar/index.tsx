import React from "react";

export const Mobilebar = () => {
  return (
    <nav
      role="navigation"
      className="navbar--mobile"
      id="navbar-container--mobile"
    >
      <ul className="navbar--mobile__menu" id="navbar--mobile__menu">
        <li>
          <a href="/" className="nav-link">
            About me
          </a>
        </li>
        <li>
          <a href="/projects" className="nav-link--external">
            Projects
          </a>
        </li>
        <li>
          <a href="/contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
      <button
        type="button"
        className="navbar--mobile__button"
        id="navbar--mobile__button"
      >
        <span className="line line-1" />
        <span className="line line-2" />
        <span className="line line-3" />
      </button>
    </nav>
  );
};
