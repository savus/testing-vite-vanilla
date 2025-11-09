import { Navbar } from "./Navbar";
import { NavbarReact } from "./NavbarReact";
import "../css/header.css";

export const Header = ({ activeNavLink, setActiveNavLink, setActiveModal }) => {
  return (
    <header>
      <h1>folio</h1>
      <Navbar />
      <NavbarReact
        activeNavLink={activeNavLink}
        setActiveNavLink={setActiveNavLink}
        setActiveModal={setActiveModal}
      />
    </header>
  );
};
