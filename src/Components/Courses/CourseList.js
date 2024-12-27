import React, { useState } from "react";

function CourseList({ courses, onAdd, onDelete, onUpdate, courseTypes }) {
  const [newCourseName, setNewCourseName] = useState("");
  const [selectedCourseType, setSelectedCourseType] = useState(""); // State for selecting course type
  const [error, setError] = useState(""); // Error state to handle duplicate courses

  const handleAdd = () => {
    if (newCourseName.trim()) {
      // Check if the course name already exists to prevent duplicates
      if (!courses.some((course) => course.name === newCourseName.trim())) {
        if (selectedCourseType) {
          onAdd(newCourseName.trim(), selectedCourseType); // Add course with selected type
          setNewCourseName("");
          setSelectedCourseType("");
          setError(""); // Clear error on successful addition
        } else {
          setError("Please select a course type!"); // Ensure course type is selected
        }
      } else {
        setError("Course already exists!"); // Error for duplicate courses
      }
    } else {
      setError("Course name cannot be empty!"); // Error for empty input
    }
  };

  return (
    <div>
      <h2>Courses</h2>

      {/* Input field to add a new course */}
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <input
          type="text"
          value={newCourseName}
          onChange={(e) => setNewCourseName(e.target.value)}
          placeholder="Enter course name"
          style={{
            padding: "8px",
            flex: 1,
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <select
          value={selectedCourseType}
          onChange={(e) => setSelectedCourseType(e.target.value)}
          style={{
            padding: "8px",
            marginLeft: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          <option value="">Select Course Type</option>
          {courseTypes.map((type) => (
            <option key={type.id} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
        <button
          onClick={handleAdd}
          disabled={!newCourseName.trim() || !selectedCourseType}
          style={{
            padding: "8px",
            backgroundColor: "#4CAF50",
            color: "white",
            cursor: "pointer",
            marginLeft: "10px",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Add Course
        </button>
      </div>

      {/* Display error message */}
      {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

      {/* List of courses */}
      <ul>
        {courses.map((course) => (
          <li
            key={course.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              borderBottom: "1px solid #ccc",
              paddingBottom: "10px",
            }}
          >
            {/* Input field for updating course name */}
            <input
              type="text"
              value={course.name}
              onChange={(e) => onUpdate(course.id, e.target.value)} // Update course name
              style={{
                flex: 1,
                padding: "5px",
                marginRight: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
            {/* Delete button */}
            <button
              onClick={() => onDelete(course.id)}
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "6px 12px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
