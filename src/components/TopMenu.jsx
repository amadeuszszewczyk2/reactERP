// TopMenu.js
import React from "react";
import logo from "../logo.png"; // Import pliku logo.svg z lokalnego folderu

function TopMenu() {
  return (
    <div className="TopMenu">
      <div className="LogoContainer">
        <img src={logo} alt="Logo" className="Logo" />
      </div>
    </div>
  );
}

export default TopMenu;
