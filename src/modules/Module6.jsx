// Module6.jsx
// Moduł logistyka
import React, { useState } from "react";
import "./Module6.css";

function Module6() {
  const handleGoBack = () => {
    window.location.href = "/dashboard";
  };

  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({
    orderNumber: "",
    deliveryDate: "",
    status: "In Progress",
  });

  const handleAddOrder = () => {
    if (newOrder.orderNumber && newOrder.deliveryDate) {
      setOrders([...orders, newOrder]);
      setNewOrder({
        orderNumber: "",
        deliveryDate: "",
        status: "In Progress",
      });
    }
  };

  const handleUpdateOrderStatus = (index, newStatus) => {
    const updatedOrders = [...orders];
    updatedOrders[index].status = newStatus;
    setOrders(updatedOrders);
  };

  return (
    <>
      <div>
        <button className="back_button" onClick={handleGoBack}>
          Powrót
        </button>
      </div>
      <div className="module6">
        <h1 className="module6__title">Moduł logistyka</h1>
        <div className="module6__form">
          <h2 className="module6__subtitle">Zarządzaj zamówieniami</h2>
          <div className="module6__input-group">
            <input
              className="module6__input"
              type="text"
              placeholder="Numer zamówienia"
              value={newOrder.orderNumber}
              onChange={(e) =>
                setNewOrder({ ...newOrder, orderNumber: e.target.value })
              }
            />
          </div>
          <div className="module6__input-group">
            <input
              className="module6__input"
              type="date"
              placeholder="Data dostawy"
              value={newOrder.deliveryDate}
              onChange={(e) =>
                setNewOrder({ ...newOrder, deliveryDate: e.target.value })
              }
            />
          </div>
          <button className="module6__button" onClick={handleAddOrder}>
            Dodaj zamówienie
          </button>
        </div>
        <div className="module6__list">
          <h2 className="module6__subtitle">Monitoruj dostawy</h2>
          <ul className="module6__order-list">
            {orders.map((order, index) => (
              <li key={index} className="module6__order-item">
                Numer zamówienia: {order.orderNumber}, Data dostawy:{" "}
                {order.deliveryDate}, Status: {order.status}
                <div className="module6__status-buttons">
                  <button
                    className="module6__status-button module6__status-button--in-progress"
                    onClick={() =>
                      handleUpdateOrderStatus(index, "In Progress")
                    }
                  >
                    In Progress
                  </button>
                  <button
                    className="module6__status-button module6__status-button--shipped"
                    onClick={() => handleUpdateOrderStatus(index, "Shipped")}
                  >
                    Shipped
                  </button>
                  <button
                    className="module6__status-button module6__status-button--delivered"
                    onClick={() => handleUpdateOrderStatus(index, "Delivered")}
                  >
                    Delivered
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

export default Module6;
