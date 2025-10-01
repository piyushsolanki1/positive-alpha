import React from "react";
import "../styles/CoursesSection.css";
import laptop1 from "../assets/laptop1.jpg"; 

function CourseSection() {
  return (
    <div className="course-section">
      <h2 className="section-title">Our Courses/Offerings</h2>

      
      <div className="course-card">
        <img src={laptop1} alt="CFA Course" className="course-img" />
        <div className="course-content">
          <h3 className="course-title">Complete CFA Course</h3>
          <p className="course-duration">Duration: 10-12 hour</p>
          <p className="course-desc">
            We are committed to make you adapt to a CFA lifestyle not only to
            the exam. We provide hand holding guidance and best in class
            experience to.
          </p>
          <button className="enroll-btn">Enroll Now!</button>
        </div>
      </div>

      <div className="why-section">
        <div className="why-left">
          <h4 className="why-sub">Why Positive Alpha</h4>
          <h2 className="why-title">At Positive Alpha;</h2>
          <p className="why-desc">
            We are committed to make you adapt to a CFA lifestyle not only to
            the exam. We provide hand holding guidance and best in class
            experience to make students ready for the CFA exam.
          </p>
          <p className="why-desc">
            Our industry experienced trainer, with their interesting teaching
            methodology makes us the Top choice in the Industry for CFA
            examination.
          </p>
          <button className="demo-btn">Book Demo</button>
        </div>

        
        <div className="why-right">
          <div className="stat-box green">300-320 Hours+ <br /> <span>Teaching Hours</span></div>
          <div className="stat-box yellow">30-40% <br /> <span>Economic Courses</span></div>
          <div className="stat-box pink">100% <br /> <span>Full Time Teachers</span></div>
        </div>
      </div>
    </div>
  );
}

export default CourseSection;
