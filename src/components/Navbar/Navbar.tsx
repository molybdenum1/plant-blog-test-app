import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-left-side">
          <div className="navbar-left-side-element">Discover</div>
          <div className="navbar-left-side-element">My Plants</div>
          <div className="navbar-left-side-element">Diseases</div>
          <div className="navbar-left-side-element">Blog</div>
          <div className="navbar-left-side-element">FAQ</div>
          <div className="navbar-left-side-element">Contact Us</div>
        </div>
        <div className="navbar-right-side">
          <div className="navbar-right-side-element">Search</div>
          <div className="navbar-right-side-element navbar-right-side-element-signup">
            logo
          </div>
        </div>
      </div>
    </div>
  );
};
