// Module9.jsx
// Moduł dokumenty
import React, { useState } from "react";
import "./Module9.css";

function Module9() {
  const handleGoBack = () => {
    window.location.href = "/dashboard";
  };

  const [documents, setDocuments] = useState([]);
  const [newDocument, setNewDocument] = useState({
    documentNumber: "",
    description: "",
    date: "",
    documentType: "Zamówienie",
  });

  const [filter, setFilter] = useState({
    fromDate: "",
    toDate: "",
    documentType: "",
  });

  const handleAddDocument = () => {
    if (
      newDocument.documentNumber &&
      newDocument.description &&
      newDocument.date
    ) {
      setDocuments([...documents, newDocument]);
      setNewDocument({
        documentNumber: "",
        description: "",
        date: "",
        documentType: "Zamówienie",
      });
    }
  };

  const filteredDocuments = documents.filter((document) => {
    const fromDate = filter.fromDate ? new Date(filter.fromDate) : null;
    const toDate = filter.toDate ? new Date(filter.toDate) : null;

    const documentDate = new Date(document.date);

    return (
      (!fromDate || documentDate >= fromDate) &&
      (!toDate || documentDate <= toDate) &&
      (!filter.documentType || document.documentType === filter.documentType)
    );
  });

  return (
    <>
      <div>
        <button className="back_button" onClick={handleGoBack}>
          Powrót
        </button>
      </div>
      <div className="module9">
        <h1 className="module9__title">Moduł dokumenty</h1>
        <div className="module9__form">
          <h2 className="module9__subtitle">Zarządzaj dokumentami</h2>
          <div className="module9__input-group">
            <input
              className="module9__input"
              type="text"
              placeholder="Numer dokumentu"
              value={newDocument.documentNumber}
              onChange={(e) =>
                setNewDocument({
                  ...newDocument,
                  documentNumber: e.target.value,
                })
              }
            />
          </div>
          <div className="module9__input-group">
            <textarea
              className="module9__input module9__input--textarea"
              placeholder="Opis dokumentu"
              value={newDocument.description}
              onChange={(e) =>
                setNewDocument({ ...newDocument, description: e.target.value })
              }
            ></textarea>
          </div>
          <div className="module9__input-group">
            <input
              className="module9__input"
              type="date"
              placeholder="Data"
              value={newDocument.date}
              onChange={(e) =>
                setNewDocument({ ...newDocument, date: e.target.value })
              }
            />
          </div>
          <div className="module9__input-group">
            <select
              className="module9__select"
              value={newDocument.documentType}
              onChange={(e) =>
                setNewDocument({ ...newDocument, documentType: e.target.value })
              }
            >
              <option value="Zamówienie">Zamówienie</option>
              <option value="Umowa">Umowa</option>
              <option value="Protokół">Protokół</option>
              <option value="Faktura">Faktura</option>
            </select>
          </div>
          <button className="module9__button" onClick={handleAddDocument}>
            Dodaj dokument
          </button>
        </div>
        <div className="module9__filter">
          <h2 className="module9__subtitle">Filtruj dokumenty</h2>
          <div className="module9__input-group">
            <label className="module9__label">Od:</label>
            <input
              className="module9__input"
              type="date"
              value={filter.fromDate}
              onChange={(e) =>
                setFilter({ ...filter, fromDate: e.target.value })
              }
            />
          </div>
          <div className="module9__input-group">
            <label className="module9__label">Do:</label>
            <input
              className="module9__input"
              type="date"
              value={filter.toDate}
              onChange={(e) => setFilter({ ...filter, toDate: e.target.value })}
            />
          </div>
          <div className="module9__input-group">
            <label className="module9__label">Typ dokumentu:</label>
            <select
              className="module9__select"
              value={filter.documentType}
              onChange={(e) =>
                setFilter({ ...filter, documentType: e.target.value })
              }
            >
              <option value="">Wybierz typ</option>
              <option value="Zamówienie">Zamówienie</option>
              <option value="Umowa">Umowa</option>
              <option value="Protokół">Protokół</option>
              <option value="Faktura">Faktura</option>
            </select>
          </div>
        </div>
        <div className="module9__list">
          <h2 className="module9__subtitle">Lista dokumentów</h2>
          <ul className="module9__document-list">
            {filteredDocuments.map((document, index) => (
              <li key={index} className="module9__document-item">
                Numer dokumentu: {document.documentNumber}, Opis:{" "}
                {document.description}, Data: {document.date}, Typ dokumentu:{" "}
                {document.documentType}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Module9;
