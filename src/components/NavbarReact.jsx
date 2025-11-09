import "../css/navbar.css";

export const NavbarReact = () => {
  return (
    <nav className="navbar-react">
      <ul className="ul-defaults-none nav-links-react">
        <li data-navlink-react="js-form-react">form</li>
        <li data-navlink-react="na">About Us</li>
        <li data-navlink-react="na">Contact</li>
      </ul>
    </nav>
  );
};
