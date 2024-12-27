import React, { useState } from "react";

function RegistrationForm({ courseOfferings, onRegister }) {
  const [studentName, setStudentName] = useState("");
  const [selectedOffering, setSelectedOffering] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!studentName.trim()) {
      setError("Student name is required!");
      return;
    }
    if (!selectedOffering) {
      setError("Please select a course offering!");
      return;
    }

    // If validation passes, call the onRegister function
    onRegister({ studentName, selectedOffering });
    setStudentName(""); // Clear student name input
    setSelectedOffering(""); // Clear selected offering input
    setError(""); // Clear any previous errors
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "20px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h3>Student Registration</h3>
      
      {/* Student Name Input */}
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* Course Offering Selection */}
      <div style={{ marginBottom: "10px" }}>
        <select
          value={selectedOffering}
          onChange={(e) => setSelectedOffering(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">Select Course Offering</option>
          {courseOfferings.map((offering, index) => (
            <option key={offering.id} value={offering.id}>
              {offering.name}
            </option>
          ))}
        </select>
      </div>

      {/* Error Message */}
      {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

      {/* Register Button */}
      <button
        type="submit"
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
    </form>
  );
}

export default RegistrationForm;
