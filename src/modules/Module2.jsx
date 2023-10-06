// Module2.jsx
// Moduł finanse
import React, { useState } from "react";
import "./Module2.css";
import Invoices from "./Module2_Invoices";
import FinancialFunctionality2 from "./Module2_FinancialFunctionality2";
import FinancialFunctionality3 from "./Module2_FinancialFunctionality3";

function Module2() {
  const [activeTab, setActiveTab] = useState(null);

  const tileData = [
    { id: "faktury", label: "Faktury" },
    { id: "funkcjonalność2", label: "Funkcjonalność finansowa 2" },
    { id: "funkcjonalność3", label: "Funkcjonalność finansowa 3" },
  ];

  const handleTileClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="module2">
        <h1 className="module2__title">Moduł finanse</h1>
        <div className="module2__tiles">
          {tileData.map((tile) => (
            <div
              key={tile.id}
              className={`module2__tile ${
                activeTab === tile.id ? "active" : ""
              }`}
              onClick={() => handleTileClick(tile.id)}
            >
              <h2>{tile.label}</h2>
            </div>
          ))}
        </div>
        <div className="module2__content-container">
          {activeTab === "faktury" && <Invoices />}
          {activeTab === "funkcjonalność2" && <FinancialFunctionality2 />}
          {activeTab === "funkcjonalność3" && <FinancialFunctionality3 />}
        </div>
      </div>
    </>
  );
}

export default Module2;
