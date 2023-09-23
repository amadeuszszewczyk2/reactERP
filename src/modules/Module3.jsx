// Module3.jsx
import React from "react";

function Module3() {
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
      <div className="module3">
        <h1>Moduł HR</h1>
        <div className="module-description">
          <p>Funkcjonalności, które pojawiają się w tym module:</p>
          <ul>
            <li>Zarządzanie danymi pracowników</li>
            <li>Tworzenie i zarządzanie harmonogramem pracy</li>
            <li>Proces rekrutacji i selekcji pracowników</li>
            <li>Obsługa wynagrodzeń i świadczeń pracowniczych</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Module3;
