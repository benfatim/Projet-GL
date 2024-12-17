import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./crewmanagement.css"; // New CSS file for crew management

const CrewManagement = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  
  const [crewMembers, setCrewMembers] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    employeeId: "",
    role: "",
    qualifications: "",
    availability: "",
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

  const handleAddCrewMember = (e) => {
    e.preventDefault();
    setCrewMembers([...crewMembers, { ...formData, id: Date.now() }]);
    setFormData({
      fullName: "",
      employeeId: "",
      role: "",
      qualifications: "",
      availability: "",
      contactInfo: { address: "", email: "", phone: "" },
    });
  };

  const handleDeleteCrewMember = (id) => {
    setCrewMembers(crewMembers.filter((member) => member.id !== id));
  };

  const handleUpdateCrewMember = (id, updatedData) => {
    setCrewMembers(
      crewMembers.map((member) =>
        member.id === id ? { ...member, ...updatedData } : member
      )
    );
  };

  return (
    <div className="crew-management-container">
      
        <button
          onClick={() => navigate("/Dashboard")}
          className="back-to-dashboard-btn"
        >
          Return to Dashboard
        </button>
      

      <h2>Crew Management</h2>

      {/* Form to add new crew members */}
      <form onSubmit={handleAddCrewMember} className="add-crew-form">
        <h3>Add Crew Member</h3>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="employeeId"
          placeholder="Employee ID"
          value={formData.employeeId}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="role"
          placeholder="Role (Pilot, Steward, etc.)"
          value={formData.role}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="qualifications"
          placeholder="Qualifications"
          value={formData.qualifications}
          onChange={handleChange}
        />
        <input
          type="text"
          name="availability"
          placeholder="Availability"
          value={formData.availability}
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
        <button type="submit">Add Crew Member</button>
      </form>

      {/* Table to display crew members */}
      <div className="crew-table">
        <h3>Crew List</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Employee ID</th>
              <th>Role</th>
              <th>Qualifications</th>
              <th>Availability</th>
              <th>Contact Info</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {crewMembers.map((member) => (
              <tr key={member.id}>
                <td>{member.fullName}</td>
                <td>{member.employeeId}</td>
                <td>{member.role}</td>
                <td>{member.qualifications}</td>
                <td>{member.availability}</td>
                <td>
                  {member.contactInfo.address} | {member.contactInfo.email} |{" "}
                  {member.contactInfo.phone}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteCrewMember(member.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() =>
                      handleUpdateCrewMember(member.id, { fullName: "Updated Name" })
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

export default CrewManagement;
