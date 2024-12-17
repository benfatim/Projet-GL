import React, { useState, useEffect } from 'react';
import './passengerdashboard.css';  // Assuming you have styles for the dashboard

const PassengerDashboard = () => {
  const [flights, setFlights] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);
  const [newFlight, setNewFlight] = useState({ flightNumber: '', departure: '', from: '', to: '', status: 'Upcoming' });
  const [selectedFlight, setSelectedFlight] = useState(null); // Track selected flight for editing

  useEffect(() => {
    // Simulating an API call to get user and flight information
    setTimeout(() => {
      setUser({
        name: 'John Doe',
        email: 'johndoe@example.com',
        profilePicture: 'https://via.placeholder.com/150',
      });

      setFlights([
        {
          id: 1,
          flightNumber: 'AA123',
          departure: '2024-12-20 14:00',
          from: 'New York',
          to: 'Los Angeles',
          status: 'Upcoming',
        },
        {
          id: 2,
          flightNumber: 'AA456',
          departure: '2024-12-15 09:00',
          from: 'Los Angeles',
          to: 'Chicago',
          status: 'Completed',
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const handleCancelFlight = (id) => {
    setFlights(flights.filter(flight => flight.id !== id));
  };

  const handleAddFlight = () => {
    const newFlightData = { ...newFlight, id: flights.length + 1 };
    setFlights([...flights, newFlightData]);
    setNewFlight({ flightNumber: '', departure: '', from: '', to: '', status: 'Upcoming' });
  };

  const handleEditClick = (flight) => {
    setSelectedFlight(flight);
    setIsEditing(true);
  };

  const handleSaveFlight = () => {
    setFlights(flights.map(flight => flight.id === selectedFlight.id ? selectedFlight : flight));
    setIsEditing(false);
    setSelectedFlight(null);
  };

  const handleDeleteFlight = (id) => {
    setFlights(flights.filter(flight => flight.id !== id));
  };

  const handleFlightChange = (e) => {
    const { name, value } = e.target;
    if (selectedFlight) {
      setSelectedFlight({ ...selectedFlight, [name]: value });
    } else {
      setNewFlight({ ...newFlight, [name]: value });
    }
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>Welcome, {user.name}</h1>
        <p>{user.email}</p>
      </div>

      {/* User Profile */}
      <div className="dashboard-card user-profile">
        <img src={user.profilePicture} alt="Profile" className="profile-img" />
        <h2>Profile Information</h2>
        <p>Email: {user.email}</p>
        {!isEditing ? (
          <button className="button" onClick={() => setIsEditing(true)}>Edit Profile</button>
        ) : (
          <div className="edit-form">
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={editedUser.name}
                onChange={handleFlightChange}
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={editedUser.email}
                onChange={handleFlightChange}
                placeholder="Enter your email"
              />
            </div>
            <button className="button" onClick={() => setIsEditing(false)}>Save Changes</button>
          </div>
        )}
      </div>

      {/* Flight Overview */}
      <div className="dashboard-card flight-overview">
        <h2>Your Flights</h2>
        {loading ? (
          <p>Loading flights...</p>
        ) : (
          <div>
            <h3>Add a New Flight Reservation</h3>
            <div className="edit-form">
              <div className="form-group">
                <label>Flight Number:</label>
                <input
                  type="text"
                  name="flightNumber"
                  value={newFlight.flightNumber}
                  onChange={handleFlightChange}
                />
              </div>
              <div className="form-group">
                <label>Departure:</label>
                <input
                  type="datetime-local"
                  name="departure"
                  value={newFlight.departure}
                  onChange={handleFlightChange}
                />
              </div>
              <div className="form-group">
                <label>From:</label>
                <input
                  type="text"
                  name="from"
                  value={newFlight.from}
                  onChange={handleFlightChange}
                />
              </div>
              <div className="form-group">
                <label>To:</label>
                <input
                  type="text"
                  name="to"
                  value={newFlight.to}
                  onChange={handleFlightChange}
                />
              </div>
              <div className="form-group">
                <label>Status:</label>
                <select
                  name="status"
                  value={newFlight.status}
                  onChange={handleFlightChange}
                >
                  <option value="Upcoming">Upcoming</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
              <button className="button" onClick={handleAddFlight}>Add Flight</button>
            </div>

            <ul className="flights-list">
              {flights.map((flight) => (
                <li key={flight.id} className="flight-item">
                  <div className="flight-details">
                    <p><strong>Flight Number:</strong> {flight.flightNumber}</p>
                    <p><strong>From:</strong> {flight.from} <strong>To:</strong> {flight.to}</p>
                    <p><strong>Departure:</strong> {formatDate(flight.departure)}</p>
                    <p><strong>Status:</strong> {flight.status}</p>
                  </div>
                  <div className="flight-actions">
                    <button onClick={() => handleEditClick(flight)} className="button">Edit</button>
                    <button onClick={() => handleDeleteFlight(flight.id)} className="button cancel">Delete</button>
                  </div>
                </li>
              ))}
            </ul>

            {isEditing && selectedFlight && (
              <div className="edit-form">
                <h3>Edit Flight</h3>
                <div className="form-group">
                  <label>Flight Number:</label>
                  <input
                    type="text"
                    name="flightNumber"
                    value={selectedFlight.flightNumber}
                    onChange={handleFlightChange}
                  />
                </div>
                <div className="form-group">
                  <label>Departure:</label>
                  <input
                    type="datetime-local"
                    name="departure"
                    value={selectedFlight.departure}
                    onChange={handleFlightChange}
                  />
                </div>
                <div className="form-group">
                  <label>From:</label>
                  <input
                    type="text"
                    name="from"
                    value={selectedFlight.from}
                    onChange={handleFlightChange}
                  />
                </div>
                <div className="form-group">
                  <label>To:</label>
                  <input
                    type="text"
                    name="to"
                    value={selectedFlight.to}
                    onChange={handleFlightChange}
                  />
                </div>
                <div className="form-group">
                  <label>Status:</label>
                  <select
                    name="status"
                    value={selectedFlight.status}
                    onChange={handleFlightChange}
                  >
                    <option value="Upcoming">Upcoming</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
                <button className="button" onClick={handleSaveFlight}>Save Changes</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PassengerDashboard;
