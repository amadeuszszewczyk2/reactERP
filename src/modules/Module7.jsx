// Module7.jsx
import React from "react";

function Module7() {
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
      <div className="module7">
        <h1>Moduł projekty</h1>
        <div className="module-description">
          <p>Funkcjonalności, które pojawiają się w tym module:</p>
          <ul>
            <li>Zarządzanie projektami i ich etapami</li>
            <li>Przydzielanie zadań i zasobów do projektów</li>
            <li>Monitorowanie postępu projektów</li>
            <li>Generowanie raportów i analizowanie wyników projektów</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Module7;
