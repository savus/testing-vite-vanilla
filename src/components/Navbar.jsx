import "../css/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="ul-defaults-none nav-links">
        <li data-navlink="nav-form">form</li>
        <li data-navlink="na">About Us</li>
        <li data-navlink="na">Contact</li>
      </ul>
    </nav>
  );
};
