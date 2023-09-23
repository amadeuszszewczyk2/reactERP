// Module9.jsx
import React from "react";

function Module9() {
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
      <div className="module9">
        <h1>Moduł dokumenty</h1>
        <div className="module-description">
          <p>Funkcjonalności, które pojawiają się w tym module:</p>
          <ul>
            <li>Zarządzanie dokumentami firmowymi</li>
            <li>Tworzenie, edycja i udostępnianie dokumentów</li>
            <li>Przechowywanie i archiwizacja dokumentów</li>
            <li>Kontrola dostępu do dokumentów</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Module9;
