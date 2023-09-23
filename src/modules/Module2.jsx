// Module2.jsx
import React from "react";

function Module2() {
  const handleGoBack = () => {
    window.location.href = "/dashboard";
  };

  return (
    <>
      <div>
        <button onClick={handleGoBack}>Powrót</button>
      </div>
      <div className="module2">
        <h1>Moduł finanse</h1>
        <div className="module-description">
          <p>Funkcjonalności, które pojawiają się w tym module:</p>
          <ul>
            <li>Tworzenie, edycja i przegląd faktur</li>
            <li>Generowanie raportów finansowych</li>
            <li>Analiza danych finansowych</li>
            <li>Obsługa transakcji finansowych</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Module2;
