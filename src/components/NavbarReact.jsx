import { useState } from "react";
import "../css/navbar.css";

export const NavbarReact = ({
  activeNavLink,
  setActiveNavLink,
  setActiveModal,
}) => {
  const getLinkState = (activeState) =>
    activeNavLink === activeState ? "active" : "";

  return (
    <nav className="navbar-react">
      <ul className="ul-defaults-none nav-links-react">
        <li
          className={`${getLinkState("form")}`}
          data-navlink-react="js-form-react"
          onClick={() => {
            setActiveNavLink("form");
            setActiveModal("form");
          }}
        >
          form
        </li>
        <li
          className={`${getLinkState("about")}`}
          data-navlink-react="na"
          onClick={() => {
            setActiveNavLink("about");
          }}
        >
          About Us
        </li>
        <li
          className={`${getLinkState("contact")}`}
          data-navlink-react="na"
          onClick={() => {
            setActiveNavLink("contact");
          }}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};
