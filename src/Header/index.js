import React from "react";
import "./Header.css";
import logo from "C:/Users/HP/Downloads/header-icon-removebg-preview.png";

function Header() {
  return (
    <div className="header">
      <img src={logo} className="header__logo"></img>
    </div>
  );
}

export default Header;
