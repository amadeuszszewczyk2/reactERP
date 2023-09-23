// Module6.jsx
import React from "react";

function Module6() {
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
      <div className="module6">
        <h1>Moduł logistyka</h1>
        <div className="module-description">
          <p>Funkcjonalności, które pojawiają się w tym module:</p>
          <ul>
            <li>Zarządzanie zamówieniami i dostawami</li>
            <li>Monitorowanie stanu magazynu</li>
            <li>Planowanie tras dostaw</li>
            <li>Śledzenie przesyłek i statusu dostaw</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Module6;
