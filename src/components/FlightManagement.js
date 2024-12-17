import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./flightmanagement.css"; // New CSS file for flight management

const FlightManagement = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  
  const [flights, setFlights] = useState([]);
  const [formData, setFormData] = useState({
    flightNumber: "",
    departureAirport: "",
    arrivalAirport: "",
    departureTime: "",
    arrivalTime: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddFlight = (e) => {
    e.preventDefault();
    setFlights([...flights, { ...formData, id: Date.now() }]);
    setFormData({
      flightNumber: "",
      departureAirport: "",
      arrivalAirport: "",
      departureTime: "",
      arrivalTime: "",
      status: "",
    });
  };

  const handleDeleteFlight = (id) => {
    setFlights(flights.filter((flight) => flight.id !== id));
  };

  const handleUpdateFlight = (id, updatedData) => {
    setFlights(
      flights.map((flight) =>
        flight.id === id ? { ...flight, ...updatedData } : flight
      )
    );
  };

  return (
    <div className="flight-management-container">
      {/* Button to navigate back to the main dashboard */}
      
        <button
          onClick={() => navigate("/Dashboard")}
          className="back-to-dashboard-btn"
        >
          Return to Dashboard
        </button>
    

      <h2>Flight Management</h2>

      {/* Form to add new flights */}
      <form onSubmit={handleAddFlight} className="add-flight-form">
        <h3>Add Flight</h3>
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
          name="departureAirport"
          placeholder="Departure Airport"
          value={formData.departureAirport}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="arrivalAirport"
          placeholder="Arrival Airport"
          value={formData.arrivalAirport}
          onChange={handleChange}
          required
        />
        <input
          type="datetime-local"
          name="departureTime"
          placeholder="Departure Time"
          value={formData.departureTime}
          onChange={handleChange}
          required
        />
        <input
          type="datetime-local"
          name="arrivalTime"
          placeholder="Arrival Time"
          value={formData.arrivalTime}
          onChange={handleChange}
          required
        />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="">Select Status</option>
          <option value="On Time">On Time</option>
          <option value="Delayed">Delayed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <button type="submit">Add Flight</button>
      </form>

      {/* Table to display flights */}
      <div className="flight-table">
        <h3>Flight List</h3>
        <table>
          <thead>
            <tr>
              <th>Flight Number</th>
              <th>Departure Airport</th>
              <th>Arrival Airport</th>
              <th>Departure Time</th>
              <th>Arrival Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight) => (
              <tr key={flight.id}>
                <td>{flight.flightNumber}</td>
                <td>{flight.departureAirport}</td>
                <td>{flight.arrivalAirport}</td>
                <td>{flight.departureTime}</td>
                <td>{flight.arrivalTime}</td>
                <td>{flight.status}</td>
                <td>
                  <button
                    onClick={() => handleDeleteFlight(flight.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() =>
                      handleUpdateFlight(flight.id, { status: "Delayed" })
                    }
                    className="update-btn"
                  >
                    Update
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

export default FlightManagement;
