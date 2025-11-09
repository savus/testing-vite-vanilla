import { Navbar } from "./Navbar";
import { NavbarReact } from "./NavbarReact";
import "../css/header.css";

export const Header = () => {
  return (
    <header>
      <h1>folio</h1>
      <Navbar />
      <NavbarReact />
    </header>
  );
};
