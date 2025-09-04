
import { useState } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-burger" onClick={() => setMenuOpen((open) => !open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`navbar-left-side${menuOpen ? " open" : ""}`}>
          <div className="navbar-left-side-element">Discover</div>
          <div className="navbar-left-side-element">My Plants</div>
          <div className="navbar-left-side-element">Diseases</div>
          <div className="navbar-left-side-element">Blog</div>
          <div className="navbar-left-side-element">FAQ</div>
          <div className="navbar-left-side-element">Contact Us</div>
        </div>
        <div className={`navbar-right-side${menuOpen ? " open" : ""}`}>
          <div className="navbar-right-side-element">Search</div>
          <div className="navbar-right-side-element navbar-right-side-element-signup">
            logo
          </div>
        </div>
      </div>
    </div>
  );
};
