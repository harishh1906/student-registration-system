import React, { useState } from "react";

function CourseTypeList() {
  const [courseTypes, setCourseTypes] = useState([]);
  const [newCourseType, setNewCourseType] = useState("");
  const [error, setError] = useState("");

  const handleAdd = () => {
    if (newCourseType.trim()) {
      setCourseTypes([
        ...courseTypes,
        { id: Date.now(), name: newCourseType.trim() },
      ]);
      setNewCourseType(""); // Clear input after adding
      setError(""); // Clear any previous errors
    } else {
      setError("Course type cannot be empty!"); // Display error for empty input
    }
  };

  const handleUpdate = (id, updatedName) => {
    if (updatedName.trim()) {
      setCourseTypes(
        courseTypes.map((type) =>
          type.id === id ? { ...type, name: updatedName.trim() } : type
        )
      );
    } else {
      setError("Course type name cannot be empty!"); // Prevent empty updates
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this course type?")) {
      setCourseTypes(courseTypes.filter((type) => type.id !== id));
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2>Course Types</h2>
      
      {/* Input to add new course type */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <input
          type="text"
          value={newCourseType}
          onChange={(e) => setNewCourseType(e.target.value)}
          placeholder="Enter course type"
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            flex: "1",
          }}
        />
        <button
          onClick={handleAdd}
          disabled={!newCourseType.trim()}
          style={{
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          Add Course Type
        </button>
      </div>
      
      {/* Display error message */}
      {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
      
      {/* List of course types */}
      <ul style={{ listStyleType: "none", padding: "0" }}>
        {courseTypes.map((type) => (
          <li key={type.id} style={{ display: "flex", gap: "10px", marginBottom: "10px", alignItems: "center" }}>
            <input
              type="text"
              value={type.name}
              onBlur={(e) => handleUpdate(type.id, e.target.value)}
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                flex: "1",
              }}
            />
            <button
              onClick={() => handleDelete(type.id)}
              style={{
                padding: "8px 12px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#d32f2f")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "red")}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseTypeList;
