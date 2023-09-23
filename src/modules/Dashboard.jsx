// Dashboard.jsx
import React from "react";
import "../App.css";

function Dashboard({ setSelectedModule }) {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Tutaj możesz dodać treść swojego dashboardu.</p>
      <div className="dashboard-tiles">
        {/* Kafelek Modułu 2 */}
        <div
          className="dashboard-tile"
          onClick={() => setSelectedModule("modul2")}
        >
          <h2>Moduł 2</h2>
          <p>Kliknij, aby przejść do Modułu 2</p>
        </div>

        {/* Kafelek Modułu 3 */}
        <div
          className="dashboard-tile"
          onClick={() => setSelectedModule("modul3")}
        >
          <h2>Moduł 3</h2>
          <p>Kliknij, aby przejść do Modułu 3</p>
        </div>

        {/* Kafelek Modułu 4 */}
        <div
          className="dashboard-tile"
          onClick={() => setSelectedModule("modul4")}
        >
          <h2>Moduł 4</h2>
          <p>Kliknij, aby przejść do Modułu 4</p>
        </div>

        {/* Kafelek Modułu 5 */}
        <div
          className="dashboard-tile"
          onClick={() => setSelectedModule("modul5")}
        >
          <h2>Moduł 5</h2>
          <p>Kliknij, aby przejść do Modułu 5</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
