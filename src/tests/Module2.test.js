import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Module2 from "../modules/Module2";

describe("Module2 Component", () => {
  // Testowanie czy komponent się renderuje bez błędów
  it("renders without crashing", () => {
    render(<Module2 />);
  });

  // Testowanie dodawania faktury
  it("adds a new invoice", () => {
    const { getByPlaceholderText, getByText } = render(<Module2 />);

    // Pobierz pola formularza
    const numberInput = getByPlaceholderText("Numer faktury");
    const netAmountInput = getByPlaceholderText("Kwota netto");
    const issueDateInput = getByPlaceholderText("Data wystawienia");

    // Wprowadź dane faktury
    fireEvent.change(numberInput, { target: { value: "123" } });
    fireEvent.change(netAmountInput, { target: { value: "100" } });
    fireEvent.change(issueDateInput, { target: { value: "2023-09-24" } });

    // Dodaj fakturę
    const addButton = getByText("Dodaj fakturę", { selector: "button" });
    fireEvent.click(addButton);

    // Sprawdź czy faktura została dodana do listy
    const invoiceItem = getByText(
      "Numer faktury: 123, Kwota netto: 100, Data wystawienia: 2023-09-24, Opłacona: Nie"
    );
    expect(invoiceItem).toBeInTheDocument();
  });
});
