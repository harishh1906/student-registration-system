import React, { useState } from "react";

function CourseOfferingsForm({ courses, onAdd }) {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [offeringType, setOfferingType] = useState("");
  const [error, setError] = useState(""); // State to store error message

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedCourse || !offeringType) {
      setError("Please select a course and enter an offering type.");
      return;
    }

    // Clear error message on successful submission
    setError("");
    onAdd(selectedCourse, offeringType);
    setSelectedCourse(""); // Clear selected course
    setOfferingType("");   // Clear offering type
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h3>Add Course Offering</h3>
      {/* Dropdown to select a course */}
      <div style={{ marginBottom: "10px" }}>
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          required
          style={{
            padding: "8px",
            margin: "5px 0",
            width: "220px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">Select a Course</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </select>
      </div>

      {/* Input field to enter offering type */}
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Enter offering type"
          value={offeringType}
          onChange={(e) => setOfferingType(e.target.value)}
          required
          style={{
            padding: "8px",
            margin: "5px 0",
            width: "220px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        style={{
          padding: "8px 16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Add Offering
      </button>

      {/* Display error message */}
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </form>
  );
}

export default CourseOfferingsForm;
