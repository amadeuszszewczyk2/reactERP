import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ModuleIcon from "@mui/icons-material/Extension";
import "../App.css";

function LeftMenu({ setSelectedModule }) {
  const modules = [
    { id: "dashboard", name: "Dashboard", icon: <DashboardIcon /> },
    { id: "module2", name: "Moduł finanse", icon: <ModuleIcon /> },
    { id: "module3", name: "Moduł HR", icon: <ModuleIcon /> },
    { id: "module4", name: "Moduł produkcja", icon: <ModuleIcon /> },
    { id: "module5", name: "Moduł CRM", icon: <ModuleIcon /> },
    { id: "module6", name: "Moduł logistyka", icon: <ModuleIcon /> },
    { id: "module7", name: "Moduł projekty", icon: <ModuleIcon /> },
    { id: "module8", name: "Moduł BI", icon: <ModuleIcon /> },
    { id: "module9", name: "Moduł dokumenty", icon: <ModuleIcon /> },
  ];

  return (
    <div className="LeftMenu">
      <ul>
        {modules.map((module) => (
          <li key={module.id}>
            <button
              className="button"
              onClick={() => setSelectedModule(module.id)}
            >
              <div className="menu-item">
                {module.icon}
                <span>{module.name}</span>
              </div>
            </button>
          </li>
        ))}
      </ul>
      <p className="copyright">
        Created by Amadeusz
        <br></br>
        Szewczyk.
        <br></br>
        <br></br>
        All rights reserved.
      </p>
    </div>
  );
}

export default LeftMenu;
