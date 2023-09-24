// Module4.jsx
// Moduł produkcja
import React, { useState } from "react";
import "./Module4.css";

function Module4() {
  const handleGoBack = () => {
    window.location.href = "/dashboard";
  };

  const [productionTasks, setProductionTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [taskStatus, setTaskStatus] = useState("all"); // Dodatkowa funkcjonalność 1: Status zadania

  const handleAddTask = () => {
    if (newTask) {
      setProductionTasks([
        ...productionTasks,
        { description: newTask, completed: false },
      ]);
      setNewTask("");
    }
  };

  // Dodatkowa funkcjonalność 1: Oznacz zadanie jako ukończone/nieukończone
  const handleToggleTaskStatus = (index) => {
    const updatedTasks = [...productionTasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setProductionTasks(updatedTasks);
  };

  // Dodatkowa funkcjonalność 2: Filtruj zadania ze względu na status
  const filteredTasks =
    taskStatus === "all"
      ? productionTasks
      : productionTasks.filter(
          (task) => task.completed === (taskStatus === "completed")
        );

  return (
    <>
      <div>
        <button className="back_button" onClick={handleGoBack}>
          Powrót
        </button>
      </div>
      <div className="module4">
        <h1 className="module4__title">Moduł produkcja</h1>
        <div className="module4__form">
          <h2 className="module4__subtitle">Dodaj zadanie produkcyjne</h2>
          <div className="module4__input-group">
            <input
              className="module4__input"
              type="text"
              placeholder="Opis zadania"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button className="module4__button" onClick={handleAddTask}>
              Dodaj zadanie
            </button>
          </div>
        </div>
        <div className="module4__filter">
          <h2 className="module4__subtitle">Filtruj zadania</h2>
          <div className="module4__filter-group">
            <label>
              <input
                type="radio"
                name="taskStatus"
                value="all"
                checked={taskStatus === "all"}
                onChange={() => setTaskStatus("all")}
              />
              Wszystkie
            </label>
            <label>
              <input
                type="radio"
                name="taskStatus"
                value="completed"
                checked={taskStatus === "completed"}
                onChange={() => setTaskStatus("completed")}
              />
              Ukończone
            </label>
            <label>
              <input
                type="radio"
                name="taskStatus"
                value="uncompleted"
                checked={taskStatus === "uncompleted"}
                onChange={() => setTaskStatus("uncompleted")}
              />
              Nieukończone
            </label>
          </div>
        </div>
        <div className="module4__list">
          <h2 className="module4__subtitle">Lista zadań produkcyjnych</h2>
          <ul className="module4__task-list">
            {filteredTasks.map((task, index) => (
              <li key={index} className="module4__task-item">
                <span
                  className={`module4__task-status ${
                    task.completed ? "completed" : ""
                  }`}
                  onClick={() => handleToggleTaskStatus(index)}
                >
                  {task.completed ? "✔" : "○"}
                </span>
                {task.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Module4;
