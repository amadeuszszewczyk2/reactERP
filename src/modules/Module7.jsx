// Module7.jsx
// Moduł projekty
import React, { useState } from "react";
import "./Module7.css";

function Module7() {
  const handleGoBack = () => {
    window.location.href = "/dashboard";
  };

  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    status: "In Progress",
  });

  const handleAddProject = () => {
    if (newProject.name && newProject.description) {
      setProjects([...projects, newProject]);
      setNewProject({
        name: "",
        description: "",
        status: "In Progress",
      });
    }
  };

  const handleUpdateProjectStatus = (index, newStatus) => {
    const updatedProjects = [...projects];
    updatedProjects[index].status = newStatus;
    setProjects(updatedProjects);
  };

  return (
    <>
      <div>
        <button className="back_button" onClick={handleGoBack}>
          Powrót
        </button>
      </div>
      <div className="module7">
        <h1 className="module7__title">Moduł projekty</h1>
        <div className="module7__form">
          <h2 className="module7__subtitle">Zarządzaj projektami</h2>
          <div className="module7__input-group">
            <input
              className="module7__input"
              type="text"
              placeholder="Nazwa projektu"
              value={newProject.name}
              onChange={(e) =>
                setNewProject({ ...newProject, name: e.target.value })
              }
            />
          </div>
          <div className="module7__input-group">
            <textarea
              className="module7__input module7__input--textarea"
              placeholder="Opis projektu"
              value={newProject.description}
              onChange={(e) =>
                setNewProject({ ...newProject, description: e.target.value })
              }
            ></textarea>
          </div>
          <button className="module7__button" onClick={handleAddProject}>
            Dodaj projekt
          </button>
        </div>
        <div className="module7__list">
          <h2 className="module7__subtitle">Monitoruj postęp projektów</h2>
          <ul className="module7__project-list">
            {projects.map((project, index) => (
              <li key={index} className="module7__project-item">
                Nazwa projektu: {project.name}, Status: {project.status}
                <div className="module7__status-buttons">
                  <button
                    className="module7__status-button module7__status-button--in-progress"
                    onClick={() =>
                      handleUpdateProjectStatus(index, "In Progress")
                    }
                  >
                    In Progress
                  </button>
                  <button
                    className="module7__status-button module7__status-button--completed"
                    onClick={() =>
                      handleUpdateProjectStatus(index, "Completed")
                    }
                  >
                    Completed
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Module7;
