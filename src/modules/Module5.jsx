// Module5.jsx
// Moduł CRM
import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import "./Module5.css";

function Module5() {
  const handleGoBack = () => {
    window.location.href = "/dashboard";
  };

  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    notes: "",
    groups: [],
  });
  const [searchText, setSearchText] = useState("");
  const [groups, setGroups] = useState([]);
  const [newGroupName, setNewGroupName] = useState("");
  const [selectedGroup] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    setContacts(savedContacts);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleAddContact = () => {
    if (
      newContact.name &&
      newContact.surname &&
      newContact.email &&
      newContact.phone
    ) {
      setContacts([...contacts, newContact]);
      setNewContact({
        name: "",
        surname: "",
        email: "",
        phone: "",
        notes: "",
        groups: [],
      });
    }
  };

  const handleDeleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  const handleCreateGroup = () => {
    if (newGroupName) {
      setGroups([...groups, newGroupName]);
      setNewGroupName("");
    }
  };

  const handleAddToGroup = (contact, selectedGroup) => {
    const index = contacts.findIndex((c) => c.email === contact.email);

    if (index !== -1) {
      const updatedContacts = [...contacts];
      if (!updatedContacts[index].groups.includes(selectedGroup)) {
        updatedContacts[index].groups.push(selectedGroup);
        setContacts(updatedContacts);
      }
    }
  };

  const handleSortContacts = () => {
    const sortedContacts = [...contacts].sort((a, b) => {
      const nameA = `${a.name} ${a.surname}`.toLowerCase();
      const nameB = `${b.name} ${b.surname}`.toLowerCase();

      if (sortOrder === "asc") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });

    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setContacts(sortedContacts);
  };

  const handleExportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Kontakty", 10, 10);

    let y = 20;
    contacts.forEach((contact, index) => {
      doc.text(`Imie: ${contact.name}`, 10, y);
      doc.text(`Nazwisko: ${contact.surname}`, 10, y + 10);
      doc.text(`Email: ${contact.email}`, 10, y + 20);
      doc.text(`Telefon: ${contact.phone}`, 10, y + 30);
      doc.text(`Notatki: ${contact.notes}`, 10, y + 40);
      if (contact.groups.length > 0) {
        doc.text(`Grupa: ${contact.groups.join(", ")}`, 10, y + 50);
      }
      y += 70;
    });

    doc.save("kontakty.pdf");
  };

  const filteredContacts = selectedGroup
    ? contacts.filter((contact) => contact.groups.includes(selectedGroup))
    : contacts;

  return (
    <>
      <button className="back_button" onClick={handleGoBack}>
        Powrót
      </button>

      <div className="module5">
        <div className="crm">
          <h2 className="crm__header">Moduł CRM</h2>
          <div className="crm__form">
            <input
              className="crm__input"
              type="text"
              name="name"
              placeholder="Imię"
              value={newContact.name}
              onChange={handleInputChange}
            />
            <input
              className="crm__input"
              type="text"
              name="surname"
              placeholder="Nazwisko"
              value={newContact.surname}
              onChange={handleInputChange}
            />
            <input
              className="crm__input"
              type="email"
              name="email"
              placeholder="Email"
              value={newContact.email}
              onChange={handleInputChange}
            />
            <input
              className="crm__input"
              type="tel"
              name="phone"
              placeholder="Telefon"
              value={newContact.phone}
              onChange={handleInputChange}
            />
            <textarea
              className="crm__input"
              name="notes"
              placeholder="Notatki"
              value={newContact.notes}
              onChange={handleInputChange}
            ></textarea>
            <button className="crm__button" onClick={handleAddContact}>
              Dodaj Kontakt
            </button>
          </div>
          <div>
            <h3>Kontakty</h3>
            <input
              className="crm__input"
              type="text"
              placeholder="Szukaj"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className={`crm__button ${sortOrder === "asc" ? "asc" : "desc"}`}
              onClick={handleSortContacts}
            >
              Sortuj {sortOrder === "asc" ? "rosnąco" : "malejąco"}
            </button>
            <ul className="crm__contacts">
              {filteredContacts.map((contact) => (
                <li className="crm__contact" key={contact.email}>
                  <div>
                    <div>
                      {contact.name} {contact.surname}
                    </div>
                    <div>Email: {contact.email}</div>
                    <div>Telefon: {contact.phone}</div>
                    <div>Notatki: {contact.notes}</div>
                    {contact.groups.length > 0 && (
                      <div>Grupy: {contact.groups.join(", ")}</div>
                    )}
                  </div>
                  <div>
                    <button
                      className="crm__delete-button"
                      onClick={() => handleDeleteContact(contact.email)}
                    >
                      Usuń
                    </button>
                    <select
                      value={selectedGroup}
                      onChange={(e) =>
                        handleAddToGroup(contact, e.target.value)
                      }
                    >
                      <option value="">Dodaj do grupy</option>
                      {groups.map((group) => (
                        <option key={group} value={group}>
                          {group}
                        </option>
                      ))}
                    </select>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Grupy</h3>
            <input
              className="crm__input"
              type="text"
              placeholder="Nowa Grupa"
              value={newGroupName}
              onChange={(e) => setNewGroupName(e.target.value)}
            />
            <button className="crm__button" onClick={handleCreateGroup}>
              Utwórz Grupę
            </button>
            <ul>
              {groups.map((groupName) => (
                <li key={groupName}>
                  <strong>{groupName}</strong>
                  <ul>
                    {contacts
                      .filter((contact) => contact.groups.includes(groupName))
                      .map((contact) => (
                        <li key={contact.email}>
                          {contact.name} {contact.surname}
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button className="crm__button" onClick={handleExportToPDF}>
              Eksportuj do PDF
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Module5;
