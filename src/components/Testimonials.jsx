import React from "react";
import "../styles/Testimonials.css";
import hand from "../assets/hand.jpg";  
import t1 from "../assets/t1.jpg";

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-heading">Testimonials</h2>
      <hr className="divider" />

      <div className="tablet-container">
        
        <button className="arrow-btn arrow-left">‹</button>

        <div className="tablet-frame">
          <div className="testimonial-card">
            <div className="testimonial-user">
              <img src={t1} alt="User" className="user-img" />
              <h4 className="user-name">Full Name</h4>
            </div>
            <p className="testimonial-text">
              Read/Listen to what our students say about Positive Alpha.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Read/Listen to what our students say about Positive Alpha.
            </p>
            <div className="stars">★ ★ ★ ★ ☆</div>
          </div>
        </div>

        
        <button className="arrow-btn arrow-right">›</button>

       
        <img src={hand} alt="Left Hand" className="hand left-hand" />
        <img src={hand} alt="Right Hand" className="hand right-hand" />
      </div>
    </section>
  );
};

export default Testimonials;
