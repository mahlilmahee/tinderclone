import React from "react";
import logo from "../images/color-logo-tinder.png";
import whiteLogo from "../images/tinder_logo_white.png";
const Navbar = ({ minimal, authToken, setModal, setIsSignup }) => {
  const handleClick = () => {
    setModal(true);
    setIsSignup(false);
  };

  return (
    <nav>
      <div className="logo_container">
        <img
          src={minimal ? logo : whiteLogo}
          alt="tinder Logo"
          className="logo"
        />
      </div>
      {!authToken && !minimal && (
        <button className="nav-button" onClick={handleClick}>
          Log In
        </button>
      )}
    </nav>
  );
};

export default Navbar;
