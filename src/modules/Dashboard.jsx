// Dashboard.jsx
import React from "react";
import ModuleIcon from "@mui/icons-material/Extension";

function Dashboard({ setSelectedModule }) {
  const tileData = [
    {
      module: "module2",
      title: "Moduł finanse",
      description: "Zawiera informacje dotyczące finansów firmy.",
    },
    {
      module: "module3",
      title: "Moduł HR",
      description:
        "Umożliwia zarządzanie zasobami ludzkimi, w tym pracownikami i wynagrodzeniami.",
    },
    {
      module: "module4",
      title: "Moduł produkcja",
      description: "Pomaga w zarządzaniu procesami produkcyjnymi firmy.",
    },
    {
      module: "module5",
      title: "Moduł CRM",
      description: "Pozwala na zarządzanie relacjami z klientami",
    },
    {
      module: "module6",
      title: "Moduł logistyka",
      description: "Zawiera narzędzia do monitorowania procesów logistycznych.",
    },
    {
      module: "module7",
      title: "Moduł projekty",
      description:
        "Zawiera narzędzia wspierające efektywne zarządzanie projektami.",
    },
    {
      module: "module8",
      title: "Moduł BI",
      description: "Analiza danych i raportowanie",
    },
    {
      module: "module9",
      title: "Moduł dokumenty",
      description: "Wspiera zarządzanie dokumentami w firmie.",
    },
  ];

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard</h1>
      <p>Wybierz moduł</p>
      <div className="dashboard-tiles">
        {tileData.map((tile, index) => (
          <div
            key={index}
            className="dashboard-tile"
            onClick={() => setSelectedModule(tile.module)}
          >
            <ModuleIcon />
            <h2>{tile.title}</h2>
            <p>{tile.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
