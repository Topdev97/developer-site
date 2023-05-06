import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar--desktop" role="navigation">
      <ul className="navbar--desktop__menu">
        <li>
          <a className="nav-link" href="https://davc93.dev">
            About me
          </a>
        </li>
        <li>
          <Link className="nav-link--external" href="/">
            Projects
          </Link>
        </li>
        <li>
          <a className="nav-link" href="https://davc93.dev/contact">
            Contact
          </a>
        </li>
        <li>
          <a className="nav-link" href="https://my-apps-2gq4.vercel.app/">Admin</a>
        </li>
      </ul>
    </nav>
  );
};
