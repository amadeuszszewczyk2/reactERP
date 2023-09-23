// Module5.jsx
import React from "react";

function Module5() {
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
      <div className="module5">
        <h1>Moduł CRM</h1>
        <div className="module-description">
          <p>Funkcjonalności, które pojawiają się w tym module:</p>
          <ul>
            <li>Zarządzanie danymi klientów</li>
            <li>Śledzenie historii interakcji z klientami</li>
            <li>Planowanie spotkań i działań sprzedażowych</li>
            <li>Monitorowanie wskaźników obsługi klienta</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Module5;
