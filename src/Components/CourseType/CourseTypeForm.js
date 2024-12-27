import React, { useState } from "react";

function CourseTypeForm({ onAdd }) {
  const [courseTypeName, setCourseTypeName] = useState(""); // State to handle the input value
  const [error, setError] = useState(""); // Error state to handle invalid inputs

  const handleSubmit = (e) => {
    e.preventDefault();
    if (courseTypeName.trim()) {
      // Pass the course type to the parent component only if it's valid
      onAdd(courseTypeName.trim());
      setCourseTypeName(""); // Clear the input field after submitting
      setError(""); // Reset error state if successfully added
    } else {
      setError("Course type cannot be empty!"); // Display error if input is empty
    }
  };

  return (
    <div style={{ marginBottom: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h3>Add a New Course Type</h3>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          value={courseTypeName}
          onChange={(e) => setCourseTypeName(e.target.value)} // Update input value
          placeholder="Enter course type"
          style={{
            padding: "10px",
            width: "100%",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box",
          }}
        />
        <button
          type="submit"
          disabled={!courseTypeName.trim()} // Disable the button if input is empty
          style={{
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "4px",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          Add Course Type
        </button>
      </form>
      {/* Display error message */}
      {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
    </div>
  );
}

export default CourseTypeForm;
