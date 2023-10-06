import React, { useState } from "react";

function Invoices() {
  const handleGoBack = () => {
    window.location.href = "/dashboard";
  };

  const [invoices, setInvoices] = useState([]);
  const [newInvoice, setNewInvoice] = useState({
    number: "",
    netAmount: "",
    issueDate: "",
    paid: false,
  });

  const [filterPaid, setFilterPaid] = useState(null);

  const handleAddInvoice = () => {
    if (newInvoice.number && newInvoice.netAmount && newInvoice.issueDate) {
      setInvoices([...invoices, newInvoice]);
      setNewInvoice({
        number: "",
        netAmount: "",
        issueDate: "",
        paid: false,
      });
    }
  };

  const handleFilterPaid = (filterValue) => {
    setFilterPaid(filterValue);
  };

  const filteredInvoices =
    filterPaid === null
      ? invoices
      : invoices.filter((invoice) => invoice.paid === filterPaid);

  return (
    <div className="module2__content">
      <button className="back_button" onClick={handleGoBack}>
        Powrót
      </button>
      <h2>Faktury</h2>
      <div className="module2__form">
        <h2 className="module2__subtitle">Dodaj fakturę</h2>
        <div className="module2__input-group">
          <input
            className="module2__input"
            type="text"
            placeholder="Numer faktury"
            value={newInvoice.number}
            onChange={(e) =>
              setNewInvoice({ ...newInvoice, number: e.target.value })
            }
          />
        </div>
        <div className="module2__input-group">
          <input
            className="module2__input"
            type="text"
            placeholder="Kwota netto"
            value={newInvoice.netAmount}
            onChange={(e) =>
              setNewInvoice({ ...newInvoice, netAmount: e.target.value })
            }
          />
        </div>
        <div className="module2__input-group">
          <input
            className="module2__input"
            type="date"
            placeholder="Data wystawienia"
            value={newInvoice.issueDate}
            onChange={(e) =>
              setNewInvoice({ ...newInvoice, issueDate: e.target.value })
            }
          />
        </div>
        <div className="module2__input-group">
          <label>
            <input
              type="checkbox"
              checked={newInvoice.paid}
              onChange={(e) =>
                setNewInvoice({ ...newInvoice, paid: e.target.checked })
              }
            />
            Opłacona
          </label>
        </div>
        <button className="module2__button" onClick={handleAddInvoice}>
          Dodaj fakturę
        </button>
      </div>
      <div className="module2__filter">
        <h2 className="module2__subtitle">Filtruj faktury</h2>
        <div className="module2__filter-group">
          <label>
            <input
              type="radio"
              name="filterPaid"
              value="true"
              checked={filterPaid === true}
              onChange={() => handleFilterPaid(true)}
            />
            Opłacone
          </label>
          <label>
            <input
              type="radio"
              name="filterPaid"
              value="false"
              checked={filterPaid === false}
              onChange={() => handleFilterPaid(false)}
            />
            Nieopłacone
          </label>
          <label>
            <input
              type="radio"
              name="filterPaid"
              value=""
              checked={filterPaid === null}
              onChange={() => handleFilterPaid(null)}
            />
            Wszystkie
          </label>
        </div>
      </div>
      <div className="module2__list">
        <h2 className="module2__subtitle">Lista faktur</h2>
        <ul className="module2__invoice-list">
          {filteredInvoices.map((invoice, index) => (
            <li key={index} className="module2__invoice-item">
              Numer faktury: {invoice.number}, Kwota netto: {invoice.netAmount},
              Data wystawienia: {invoice.issueDate}, Opłacona:{" "}
              {invoice.paid ? "Tak" : "Nie"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Invoices;
