import React from "react";

function FinancialFunctionality2() {
  const handleGoBack = () => {
    window.location.href = "/dashboard";
  };

  return (
    <div className="module2__content">
      <button className="back_button" onClick={handleGoBack}>
        Powrót
      </button>
      <h2>Funkcjonalność finansowa 2</h2>
      {/* Add code for the "Funkcjonalność finansowa 2" functionality */}
    </div>
  );
}

export default FinancialFunctionality2;
