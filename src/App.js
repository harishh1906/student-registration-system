import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CourseTypeList from "./Components/CourseType/CourseTypeList";
import CourseList from "./Components/Courses/CourseList";
import CourseOfferingsList from "./Components/CourseOfferings/CourseOfferingsList";
import RegistrationList from "./Components/StudentRegistration/RegistrationList";
import CourseTypeForm from "./Components/CourseType/CourseTypeForm"; 

function App() {
  const [courseTypes, setCourseTypes] = useState([
    { id: 1, name: "Individual" },
    { id: 2, name: "Group" },
    { id: 3, name: "Special" },
  ]);
  const [courses, setCourses] = useState([]);
  const [courseOfferings, setCourseOfferings] = useState([]);
  const [registrations, setRegistrations] = useState([]);

  // Function to add a new course type
  const addCourseType = (courseType) => {
    setCourseTypes((prevCourseTypes) => [
      ...prevCourseTypes, 
      { id: Date.now(), name: courseType }
    ]);
  };

  // Function to update a course type
  const updateCourseType = (id, updatedName) => {
    setCourseTypes((prevCourseTypes) =>
      prevCourseTypes.map((type) =>
        type.id === id ? { ...type, name: updatedName } : type
      )
    );
  };

  // Function to delete a course type
  const deleteCourseType = (id) => {
    setCourseTypes((prevCourseTypes) =>
      prevCourseTypes.filter((type) => type.id !== id)
    );
  };

  // Function to add a new course
  const addCourse = (courseName, courseType) => {
    setCourses((prevCourses) => [
      ...prevCourses,
      { id: Date.now(), name: courseName, type: courseType }
    ]);
  };

  // Function to update a course name
  const updateCourse = (id, updatedName) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === id ? { ...course, name: updatedName } : course
      )
    );
  };

  // Function to delete a course
  const deleteCourse = (id) => {
    setCourses((prevCourses) => prevCourses.filter((course) => course.id !== id));
  };

  // Function to add a new course offering
  const addCourseOffering = (courseType, course) => {
    setCourseOfferings([
      ...courseOfferings,
      { id: Date.now(), courseType, course },
    ]);
  };

  // Function to update a course offering
  const updateCourseOffering = (id, updatedType) => {
    setCourseOfferings(
      courseOfferings.map((offering) =>
        offering.id === id ? { ...offering, type: updatedType } : offering
      )
    );
  };

  // Function to delete a course offering
  const deleteCourseOffering = (id) => {
    setCourseOfferings((prevCourseOfferings) =>
      prevCourseOfferings.filter((offering) => offering.id !== id)
    );
  };

  // Function to register a student
  const registerStudent = (studentName, courseOfferingId) => {
    setRegistrations((prevRegistrations) => [
      ...prevRegistrations,
      { id: Date.now(), studentName, courseOfferingId }
    ]);
  };

  return (
    <Router>
      <div>
        <nav className="nav-bar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/course-types" className="nav-link">Course Types</Link>
          <Link to="/courses" className="nav-link">Courses</Link>
          <Link to="/course-offerings" className="nav-link">Course Offerings</Link>
          <Link to="/registrations" className="nav-link">Registrations</Link>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Student Registration System</h1>} />
          <Route
            path="/course-types"
            element={
              <div>
                <CourseTypeForm onAdd={addCourseType} />
                <CourseTypeList courseTypes={courseTypes} onAdd={addCourseType} onDelete={deleteCourseType} onUpdate={updateCourseType} />
              </div>
            }
          />
          <Route
            path="/courses"
            element={<CourseList courseTypes={courseTypes} courses={courses} onAdd={addCourse} onDelete={deleteCourse} onUpdate={updateCourse} />}
          />
          <Route
            path="/course-offerings"
            element={
              <CourseOfferingsList
                courseTypes={courseTypes}
                courses={courses}
                addCourseOffering={addCourseOffering}
              />
            }
          />
          <Route
            path="/registrations"
            element={<RegistrationList registrations={registrations} onRegister={registerStudent} courseOfferings={courseOfferings} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
