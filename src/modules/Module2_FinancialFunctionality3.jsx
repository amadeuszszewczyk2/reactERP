import React from "react";

function FinancialFunctionality3() {
  const handleGoBack = () => {
    window.location.href = "/dashboard";
  };

  return (
    <div className="module2__content">
      <button className="back_button" onClick={handleGoBack}>
        Powrót
      </button>
      <h2>Funkcjonalność finansowa 3</h2>
      {/* Add code for the "Funkcjonalność finansowa 3" functionality */}
    </div>
  );
}

export default FinancialFunctionality3;
