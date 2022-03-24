import React from "react";
import "./NavBar.styles.scss";
import { Link } from "react-router-dom";
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg" 

function NavBar() {
  return (
    <div className="navigation">
      <Link className="logo-container" to="/">
        <CrwnLogo />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          Shop
        </Link>
        <Link className="nav-link" to="/shop">
          Contact
        </Link>
        <Link className="nav-link" to="/sign-in">
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
