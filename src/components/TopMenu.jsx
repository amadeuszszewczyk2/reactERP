// TopMenu.js
import React from "react";
import logo from "../logo.png";

function TopMenu() {
  const handleGoToDashboard = () => {
    window.location.href = "/dashboard";
  };

  // Funkcja do uzyskiwania aktualnej daty w formacie "dd.MM.yyyy"
  const getCurrentDate = () => {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, "0");
    const month = (now.getMonth() + 1).toString().padStart(2, "0"); // Miesiące są numerowane od 0
    const year = now.getFullYear();
    return `${day}.${month}.${year}`;
  };

  return (
    <div className="TopMenu">
      <div className="LogoContainer" onClick={handleGoToDashboard}>
        <img src={logo} alt="Logo" className="Logo" />
      </div>
      <div className="CurrentDate">{getCurrentDate()}</div>
    </div>
  );
}

export default TopMenu;
