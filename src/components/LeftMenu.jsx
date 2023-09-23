import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ModuleIcon from "@mui/icons-material/Extension";
import "../App.css";

function LeftMenu({ setSelectedModule }) {
  return (
    <div className="LeftMenu">
      <ul>
        <li>
          <a href="#" onClick={() => setSelectedModule("dashboard")}>
            <div className="menu-item">
              <DashboardIcon />
              <span>Dashboard</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setSelectedModule("modul2")}>
            <div className="menu-item">
              <ModuleIcon />
              <span>Moduł 2</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setSelectedModule("modul3")}>
            <div className="menu-item">
              <ModuleIcon />
              <span>Moduł 3</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setSelectedModule("modul4")}>
            <div className="menu-item">
              <ModuleIcon />
              <span>Moduł 4</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setSelectedModule("modul5")}>
            <div className="menu-item">
              <ModuleIcon />
              <span>Moduł 5</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default LeftMenu;
