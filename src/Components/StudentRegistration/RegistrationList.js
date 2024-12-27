import React, { useState } from "react";

function RegistrationList({ registrations, onRegister, courseOfferings }) {
  const [studentName, setStudentName] = useState("");
  const [selectedOffering, setSelectedOffering] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    if (!studentName.trim() || !selectedOffering) {
      setError("Both student name and course offering are required!");
      return;
    }

    // Clear error if validation passes
    setError("");
    onRegister(studentName, selectedOffering);
    setStudentName("");
    setSelectedOffering("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Student Registrations</h2>
      {/* Error message display */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Registration Form */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          placeholder="Enter student name"
          style={{
            padding: "8px",
            width: "100%",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <select
          value={selectedOffering}
          onChange={(e) => setSelectedOffering(e.target.value)}
          style={{
            padding: "8px",
            width: "100%",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">Select Course Offering</option>
          {courseOfferings.map((offering) => (
            <option key={offering.id} value={offering.id}>
              {offering.courseName} - {offering.type}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleRegister}
        style={{
          padding: "10px",
          backgroundColor: "#4CAF50",
          color: "white",
          width: "100%",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
      >
        Register
      </button>

      <h3>Registered Students:</h3>
      <ul>
        {registrations.map((reg) => (
          <li key={reg.id}>
            {reg.studentName} -{" "}
            {courseOfferings.find(
              (offering) => offering.id === reg.courseOfferingId
            )?.courseName || "Unknown Course"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RegistrationList;
