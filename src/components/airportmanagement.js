import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./airportmanagement.css"; // New CSS file for airport management

const AirportManagement = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  
  const [airports, setAirports] = useState([]);
  const [formData, setFormData] = useState({
    airportName: "",
    iataCode: "",
    location: "",
    facilities: "",
    contactInfo: {
      address: "",
      email: "",
      phone: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("contactInfo")) {
      const field = name.split(".")[1];
      setFormData({
        ...formData,
        contactInfo: { ...formData.contactInfo, [field]: value },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleAddAirport = (e) => {
    e.preventDefault();
    setAirports([...airports, { ...formData, id: Date.now() }]);
    setFormData({
      airportName: "",
      iataCode: "",
      location: "",
      facilities: "",
      contactInfo: { address: "", email: "", phone: "" },
    });
  };

  const handleDeleteAirport = (id) => {
    setAirports(airports.filter((airport) => airport.id !== id));
  };

  const handleUpdateAirport = (id, updatedData) => {
    setAirports(
      airports.map((airport) =>
        airport.id === id ? { ...airport, ...updatedData } : airport
      )
    );
  };

  return (
    <div className="airport-management-container">
      {/* Button to navigate back to the main dashboard */}
      
        <button
          onClick={() => navigate("/Dashboard")}
          className="back-to-dashboard-btn"
        >
          Return to Dashboard
        </button>
      

      <h2>Airport Management</h2>

      {/* Form to add new airports */}
      <form onSubmit={handleAddAirport} className="add-airport-form">
        <h3>Add Airport</h3>
        <input
          type="text"
          name="airportName"
          placeholder="Airport Name"
          value={formData.airportName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="iataCode"
          placeholder="IATA Code"
          value={formData.iataCode}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="facilities"
          placeholder="Facilities"
          value={formData.facilities}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contactInfo.address"
          placeholder="Address"
          value={formData.contactInfo.address}
          onChange={handleChange}
        />
        <input
          type="email"
          name="contactInfo.email"
          placeholder="Email"
          value={formData.contactInfo.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contactInfo.phone"
          placeholder="Phone"
          value={formData.contactInfo.phone}
          onChange={handleChange}
        />
        <button type="submit">Add Airport</button>
      </form>

      {/* Table to display airports */}
      <div className="airport-table">
        <h3>Airport List</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>IATA Code</th>
              <th>Location</th>
              <th>Facilities</th>
              <th>Contact Info</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {airports.map((airport) => (
              <tr key={airport.id}>
                <td>{airport.airportName}</td>
                <td>{airport.iataCode}</td>
                <td>{airport.location}</td>
                <td>{airport.facilities}</td>
                <td>
                  {airport.contactInfo.address} | {airport.contactInfo.email} |{" "}
                  {airport.contactInfo.phone}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteAirport(airport.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() =>
                      handleUpdateAirport(airport.id, { airportName: "Updated Airport Name" })
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

export default AirportManagement;
