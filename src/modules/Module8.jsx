// Module8.jsx
// Moduł BI
import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./Module8.css";

function Module8() {
  const handleGoBack = () => {
    window.location.href = "/dashboard";
  };

  const [label, setLabel] = useState("");
  const [value, setValue] = useState("");
  const [chartData, setChartData] = useState({
    labels: [],
    values: [],
  });

  const chartRef = useRef(null); // Referencja do elementu canvas

  const handleAddDataPoint = () => {
    if (label && value) {
      setChartData({
        labels: [...chartData.labels, label],
        values: [...chartData.values, Number(value)],
      });

      setLabel("");
      setValue("");
    }
  };

  const updateChart = (data) => {
    if (chartRef.current) {
      // Zniszcz poprzedni wykres, jeśli istnieje
      chartRef.current.destroy();
    }

    const ctx = document.getElementById("myChart").getContext("2d");

    const newChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: data.labels,
        datasets: [
          {
            label: "Analiza danych",
            data: data.values,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: "category",
            labels: data.labels,
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    chartRef.current = newChart; // Zapisz referencję do nowego wykresu
  };

  useEffect(() => {
    updateChart(chartData);
  }, [chartData]);

  return (
    <>
      <div>
        <button className="back_button" onClick={handleGoBack}>
          Powrót
        </button>
      </div>
      <div className="module8">
        <h1 className="module8__title">Moduł BI</h1>
        <div className="module8__chart-container">
          <canvas id="myChart"></canvas>
        </div>
        <div className="module8__input-container">
          <label htmlFor="labelInput" className="module8__input-label">
            Etykieta:
          </label>
          <input
            id="labelInput"
            className="module8__input"
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder="Wprowadź etykietę"
          />
          <label htmlFor="valueInput" className="module8__input-label">
            Wartość:
          </label>
          <input
            id="valueInput"
            className="module8__input"
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Wprowadź wartość"
          />
          <button className="module8__add-button" onClick={handleAddDataPoint}>
            Dodaj dane
          </button>
        </div>
      </div>
    </>
  );
}

export default Module8;
