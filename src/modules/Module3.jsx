// Module3.jsx
// Moduł HR
import React, { useState } from "react";
import "./Module3.css";

function Module3() {
  const handleGoBack = () => {
    window.location.href = "/dashboard";
  };

  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    firstName: "",
    lastName: "",
    position: "",
    salary: "",
  });

  const handleAddEmployee = () => {
    if (
      newEmployee.firstName &&
      newEmployee.lastName &&
      newEmployee.position &&
      newEmployee.salary
    ) {
      setEmployees([...employees, newEmployee]);
      setNewEmployee({
        firstName: "",
        lastName: "",
        position: "",
        salary: "",
      });
    }
  };

  return (
    <>
      <div>
        <button className="back_button" onClick={handleGoBack}>
          Powrót
        </button>
      </div>
      <div className="module3">
        <h1 className="module3__title">Moduł HR</h1>
        <div className="module3__form">
          <h2 className="module3__subtitle">Dodaj pracownika</h2>
          <div className="module3__input-group">
            <input
              className="module3__input"
              type="text"
              placeholder="Imię"
              value={newEmployee.firstName}
              onChange={(e) =>
                setNewEmployee({ ...newEmployee, firstName: e.target.value })
              }
            />
          </div>
          <div className="module3__input-group">
            <input
              className="module3__input"
              type="text"
              placeholder="Nazwisko"
              value={newEmployee.lastName}
              onChange={(e) =>
                setNewEmployee({ ...newEmployee, lastName: e.target.value })
              }
            />
          </div>
          <div className="module3__input-group">
            <input
              className="module3__input"
              type="text"
              placeholder="Stanowisko"
              value={newEmployee.position}
              onChange={(e) =>
                setNewEmployee({ ...newEmployee, position: e.target.value })
              }
            />
          </div>
          <div className="module3__input-group">
            <input
              className="module3__input"
              type="text"
              placeholder="Wynagrodzenie brutto"
              value={newEmployee.salary}
              onChange={(e) =>
                setNewEmployee({ ...newEmployee, salary: e.target.value })
              }
            />
          </div>
          <button className="module3__button" onClick={handleAddEmployee}>
            Dodaj pracownika
          </button>
        </div>
        <div className="module3__list">
          <h2 className="module3__subtitle">Lista pracowników</h2>
          <ul className="module3__employee-list">
            {employees.map((employee, index) => (
              <li key={index} className="module3__employee-item">
                Imię: {employee.firstName}, Nazwisko: {employee.lastName},
                Stanowisko: {employee.position}, Wynagrodzenie brutto:{" "}
                {employee.salary}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Module3;
