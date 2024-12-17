import React, { useState } from "react";
import "./About.css";

const About = () => {
  
  
  
    const [reservations, setReservations] = useState([]);
    const [formData, setFormData] = useState({
      reservationId: "",
      flightNumber: "",
      passengers: "",
      departureAirport: "",
      destinationAirport: "",
      reservationDate: "",
      status: "pending", // Default status is "pending"
      totalPrice: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleAddReservation = (e) => {
      e.preventDefault();
  
      // Add reservation with a unique identifier
      setReservations([
        ...reservations,
        { 
          ...formData, 
          reservationId: Date.now(), 
          passengers: formData.passengers.split(","),
        }
      ]);
  
      // Reset the form
      setFormData({
        reservationId: "",
        flightNumber: "",
        passengers: "",
        departureAirport: "",
        destinationAirport: "",
        reservationDate: "",
        status: "pending", // Reset to "pending"
        totalPrice: "",
      });
    };
  
    const handleDeleteReservation = (id) => {
      setReservations(reservations.filter((reservation) => reservation.reservationId !== id));
    };
  
    const handleUpdateReservation = (id, updatedData) => {
      setReservations(
        reservations.map((reservation) =>
          reservation.reservationId === id ? { ...reservation, ...updatedData } : reservation
        )
      );
    };
  
    return (
      <div className="reservation-container">
        <h2>Reservation Management</h2>
  
        {/* Reservation form */}
        <form onSubmit={handleAddReservation} className="reservation-form">
          <h3>Add a Reservation</h3>
          <input
            type="text"
            name="flightNumber"
            placeholder="Flight Number"
            value={formData.flightNumber}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="passengers"
            placeholder="Passengers (comma-separated)"
            value={formData.passengers}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="departureAirport"
            placeholder="Departure Airport"
            value={formData.departureAirport}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="destinationAirport"
            placeholder="Destination Airport"
            value={formData.destinationAirport}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="reservationDate"
            placeholder="Reservation Date"
            value={formData.reservationDate}
            onChange={handleChange}
            required
          />
  
          {/* Dropdown for status */}
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="cancelled">Cancelled</option>
          </select>
  
          <input
            type="number"
            name="totalPrice"
            placeholder="Total Price"
            value={formData.totalPrice}
            onChange={handleChange}
            required
          />
          <button type="submit">Add Reservation</button>
        </form>
  
        {/* Reservation Table */}
        <div className="reservation-table">
          <h3>Reservation List</h3>
          <table>
            <thead>
              <tr>
                <th>Reservation ID</th>
                <th>Flight Number</th>
                <th>Passengers</th>
                <th>Departure Airport</th>
                <th>Destination Airport</th>
                <th>Reservation Date</th>
                <th>Status</th>
                <th>Total Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation) => (
                <tr key={reservation.reservationId}>
                  <td>{reservation.reservationId}</td>
                  <td>{reservation.flightNumber}</td>
                  <td>{reservation.passengers.join(", ")}</td>
                  <td>{reservation.departureAirport}</td>
                  <td>{reservation.destinationAirport}</td>
                  <td>{reservation.reservationDate}</td>
                  <td>{reservation.status}</td>
                  <td>{reservation.totalPrice}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteReservation(reservation.reservationId)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() =>
                        handleUpdateReservation(reservation.reservationId, { status: "confirmed" })
                      }
                      className="update-btn"
                    >
                      Confirm
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
 
  
export default About;