// Module8.jsx
import React from "react";

function Module8() {
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
      <div className="module8">
        <h1>Moduł BI</h1>
        <div className="module-description">
          <p>Funkcjonalności, które pojawiają się w tym module:</p>
          <ul>
            <li>Analiza danych biznesowych i generowanie raportów</li>
            <li>Wizualizacje danych i wskaźniki kluczowe</li>
            <li>Monitorowanie wyników działalności firmy</li>
            <li>Prognozowanie i analiza trendów</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Module8;
