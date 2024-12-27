import React, { useState } from "react";

function CourseForm({ addCourse, courses, courseTypes }) {
  const [newCourse, setNewCourse] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newCourse.trim() === "") {
      setError("Course name cannot be empty");
      return;
    }

    // Check if the course already exists in the courses list
    if (courses.some((course) => course.name === newCourse.trim())) {
      setError("Course already exists!");
      return;
    }

    // Ensure a course type is selected
    if (!selectedType) {
      setError("Please select a course type!");
      return;
    }

    // Add the course if no errors
    addCourse(newCourse, selectedType);
    setNewCourse("");
    setSelectedType("");
    setError(""); // Clear any errors on successful add
  };

  return (
    <div>
      <h2>Add a New Course</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Course Name:</label>
          <input
            type="text"
            value={newCourse}
            onChange={(e) => setNewCourse(e.target.value)}
            placeholder="Enter course name"
            style={{
              padding: "8px",
              margin: "5px 0",
              width: "200px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Course Type:</label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            style={{
              padding: "8px",
              width: "220px",
              margin: "5px 0",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
            required
          >
            <option value="">Select Course Type</option>
            {courseTypes.map((type) => (
              <option key={type.id} value={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
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
          Add Course
        </button>
      </form>
      {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
    </div>
  );
}

export default CourseForm;
