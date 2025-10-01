import React from "react";
import "../styles/studentSuccess.css";
import mainVideoThumb from "../assets/man.png";
import subVideo1 from "../assets/images2.jpg";
import subVideo2 from "../assets/female.webp";
import subVideo3 from "../assets/male.jpg";

function StudentSuccess() {
  return (
    <section className="student-success">
     =
      <div className="success-left">
        <div className="video-wrapper main-video">
          <img src={mainVideoThumb} alt="Main Student Story" className="video-thumb" />
          <button className="play-btn">▶</button>
        </div>

        <div className="sub-videos">
          <div className="sub-video-card">
            <img src={subVideo1} alt="Student 1" />
            <button className="play-btn-small">▶</button>
          </div>
          <div className="sub-video-card">
            <img src={subVideo2} alt="Student 2" />
            <button className="play-btn-small">▶</button>
          </div>
          <div className="sub-video-card">
            <img src={subVideo3} alt="Student 3" />
            <button className="play-btn-small">▶</button>
          </div>
        </div>
      </div>

    
      <div className="success-right">
        <h2>Our Student’s Success are our Report Cards!</h2>
        <p>
          Listen to how we made it successfully through the journey and became a CFA.
        </p>
<div className="email-wrapper">
  <input type="text" placeholder="I want to be next CFA" />
  <button className="arrow-btn">→</button>
</div>

      </div>
    </section>
  );
}

export default StudentSuccess;





