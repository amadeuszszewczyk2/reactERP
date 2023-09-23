// Module4.jsx
import React from "react";

function Module4() {
  // Funkcja obsługująca przycisk "Powrót"
  const handleGoBack = () => {
    // Użyj window.location do przekierowania do ścieżki dashboard
    window.location.href = "/dashboard";
  };

  return (
    <>
      <div>
        <button onClick={handleGoBack}>Powrót</button>
      </div>
      <div className="module4">
        <h1>Moduł produkcja</h1>
        <div className="module-description">
          <p>Funkcjonalności, które pojawiają się w tym module:</p>
          <ul>
            <li>Zarządzanie procesem produkcji</li>
            <li>Kontrola stanu magazynu surowców i gotowych produktów</li>
            <li>Planowanie produkcji i harmonogramowanie zleceń</li>
            <li>Zarządzanie pracownikami w dziale produkcji</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Module4;
