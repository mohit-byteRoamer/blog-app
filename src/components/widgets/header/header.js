import React from "react";
import Logo from "../../../assets/icon/logo.png";
import "./index.css";
const Header = () => {
  return (
    <div className="header">
      <div className="logoBox">
        <img className="logo" src={Logo} />
      </div>
    </div>
  );
};

export default Header;
