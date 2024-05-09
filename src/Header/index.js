import React from "react";
import "./Header.css";
import logo from "../images/logo-splitwallet.webp";

function Header() {
  return (
    <div className="header">
      <img src={logo} className="header__logo"></img>
    </div>
  );
}

export default Header;
