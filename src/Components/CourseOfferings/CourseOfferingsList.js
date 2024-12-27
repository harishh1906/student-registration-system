import React, { useState } from "react";

function CourseOfferingsList({ courseTypes = [], courses = [], addCourseOffering }) {
  const [offerings, setOfferings] = useState([]);
  const [selectedCourseType, setSelectedCourseType] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [error, setError] = useState(""); // Error message state

  const handleAdd = () => {
    if (!selectedCourseType || !selectedCourse) {
      setError("Please select both course type and course.");
      return;
    }

    // Pass the new offering to the parent component
    addCourseOffering(selectedCourseType, selectedCourse);

    setSelectedCourseType("");
    setSelectedCourse("");
    setError(""); // Clear the error message on successful addition
  };

  const handleDelete = (id) => {
    setOfferings(offerings.filter((offering) => offering.id !== id));
  };

  console.log("Course Types:", courseTypes); // Debug: Check if courseTypes are passed correctly
  console.log("Courses:", courses); // Debug: Check if courses are passed correctly

  return (
    <div>
      <h2>Course Offerings</h2>

      {/* Select Course Type */}
      <div style={{ marginBottom: "10px" }}>
        <select
          value={selectedCourseType}
          onChange={(e) => setSelectedCourseType(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        >
          <option value="">Select Course Type</option>
          {Array.isArray(courseTypes) && courseTypes.length > 0 ? (
            courseTypes.map((type) => (
              <option key={type.id} value={type.name}>
                {type.name}
              </option>
            ))
          ) : (
            <option disabled>No course types available</option>
          )}
        </select>

        {/* Select Course */}
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        >
          <option value="">Select Course</option>
          {Array.isArray(courses) && courses.length > 0 ? (
            courses
              .filter((course) => course.type === selectedCourseType) // Filter courses based on selected course type
              .map((course) => (
                <option key={course.id} value={course.name}>
                  {course.name}
                </option>
              ))
          ) : (
            <option disabled>No courses available</option>
          )}
        </select>

        <button
          onClick={handleAdd}
          disabled={!selectedCourseType || !selectedCourse}
          style={{
            padding: "8px 16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: !selectedCourseType || !selectedCourse ? "not-allowed" : "pointer",
          }}
        >
          Add Offering
        </button>
      </div>

      {/* Display error message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display Course Offerings */}
      {offerings.length > 0 ? (
        <ul>
          {offerings.map((offering) => (
            <li key={offering.id} style={{ marginBottom: "10px" }}>
              {offering.courseType} - {offering.course}
              <button
                onClick={() => handleDelete(offering.id)}
                style={{ backgroundColor: "red", color: "white", marginLeft: "10px" }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No course offerings available.</p>
      )}
    </div>
  );
}

export default CourseOfferingsList;
