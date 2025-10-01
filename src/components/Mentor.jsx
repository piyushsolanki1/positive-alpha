import React from 'react';
import mentorImg from "../assets/mentor1.webp";
import avatar1 from "../assets/t1.jpg"; 
import avatar2 from "../assets/t2.jpg"; 

const MentorPage = () => {
  return (
    <div className="container">
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .container {
          background: linear-gradient(135deg, #f5f7ff 0%, #eff1f3ff 100%);
          min-height: 100vh;
          padding: 40px 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          position: relative;
           margin: 0px;  
        }

        .yellow-dot {
          position: absolute;
          top: 80px;
          left: 50%;
          transform: translateX(-200px);
          width: 40px;
          height: 40px;
          background: #FFD54F;
          border-radius: 50%;
          opacity: 0.9;
        }

        .main-content {
          max-width: 1200px;
          margin: 0 auto;
          padding-top: 60px;
        }

        .content-section {
          display: flex;
          align-items: flex-start;
          gap: 40px;
          margin-bottom: 60px;
          position: relative;
        }

        .left-content {
          flex: 1;
        }

        .main-title {
          font-size: 50px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .subtitle {
          font-size: 28px;
          color: #4a5568;
          line-height: 1.6;
          margin-bottom: 40px;
          max-width: 450px;
        }

        .testimonial-cards-left {
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: relative;
          z-index: 2;
          margin-top: 40px;
         
        }

        .testimonial-card-single, .testimonial-card-right, .testimonial-card {
          background: white;
          border-radius: 15px;
          padding: 20px;
          width: 280px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          position: relative;
          margin-top:30px;
        }

        .testimonial-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .testimonial-avatar {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          object-fit: cover;
        }

        .testimonial-name {
          font-weight: 600;
          font-size: 14px;
          color: #333;
        }

        .testimonial-text {
          font-size: 12px;
          color: #666;
          line-height: 1.5;
          margin-bottom: 8px;
        }

        .testimonial-stars {
          color: #FFD700; /* Gold color for stars */
          font-size: 14px;
        }

        .right-content {
          flex: 1;
          position: relative;
        }

        .mentor-video-card {
          width: 600px;
          height: 400px;
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          position: relative;
          display: flex;
        }

        .mentor-image-section {
          width: 300px;
          height: 100%;
          position: relative;
        }

        .mentor-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          background: linear-gradient(135deg, #4CAF50 0%, #2196F3 100%);
        }

        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .play-icon {
          width: 0;
          height: 0;
          border-left: 25px solid #333;
          border-top: 15px solid transparent;
          border-bottom: 15px solid transparent;
          margin-left: 8px;
        }

        .quote-card {
          background: linear-gradient(135deg, #FFE082 0%, #FFB74D 100%);
          padding: 30px;
          width: 300px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
        }

        .quote-text {
          font-size: 16px;
          color: #333;
          line-height: 1.6;
          margin-bottom: 15px;
          font-weight: 500;
        }

        .quote-text:last-of-type {
          margin-bottom: 25px;
        }

        .author-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .author-details h4 {
          font-size: 14px;
          font-weight: 600;
          color: #333;
          margin-bottom: 4px;
        }

        .author-details p {
          font-size: 12px;
          color: #666;
        }

        .fox-avatar {
          width: 50px;
          height: 50px;
          background: #FF5722;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          box-shadow: 0 4px 15px rgba(255, 87, 34, 0.3);
        }

        .connecting-arrow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200px;
          height: 100px;
          pointer-events: none;
          z-index: 1;
        }

        .arrow-path {
          position: absolute;
          width: 120px;
          height: 2px;
          background: #ccc;
          top: 50px;
          left: 40px;
          transform: rotate(-20deg);
        }

        .arrow-path::after {
          content: '';
          position: absolute;
          right: -8px;
          top: -6px;
          width: 12px;
          height: 12px;
          background: #ccc;
          border-radius: 50%;
        }

        .yellow-triangle {
          position: absolute;
          bottom: -20px;
          left: -50px;
          width: 0;
          height: 0;
          border-left: 60px solid transparent;
          border-right: 60px solid transparent;
          border-top: 80px solid #FFD54F;
          opacity: 0.6;
          z-index: 0;
        }

        .stats-container {
          background: linear-gradient(90deg, #FFCDD2 0%, #E1F5FE 50%, #BBDEFB 100%);
          border-radius: 25px;
          padding: 50px 40px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
          margin-top: 40px;
        }

        .stat-item {
          text-align: center;
          flex: 1;
        }

        .stat-number {
          font-size: 48px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 8px;
          line-height: 1;
        }

        .stat-description {
          font-size: 16px;
          color: #4a5568;
          font-weight: 500;
          max-width: 180px;
          margin: 0 auto;
        }

        @media (max-width: 1024px) {
          .content-section {
            flex-direction: column;
            gap: 40px;
          }

          .right-content {
            flex-direction: column;
            align-items: center;
          }

          .connecting-arrow {
            display: none;
          }

          .yellow-triangle {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .main-title {
            font-size: 36px;
          }

          .stats-container {
            flex-direction: column;
            gap: 30px;
          }

          .mentor-video-card {
            width: 280px;
            height: 350px;
          }

          .quote-card {
            width: 280px;
          }
        }
      `}</style>

      <div className="yellow-dot"></div>

      <div className="main-content">
        <div className="content-section">
          {/* Left Side */}
          <div className="left-content">
            <h1 className="main-title">Meet your Mentor!</h1>
            <p className="subtitle">
              The Storytellers, who make your Vibe with numbers, and make you fall in love with them with stories
            </p>

            <div className="testimonial-cards-left">
              <div className="testimonial-card-single">
                <div className="testimonial-header">
                  <img src={avatar1} alt="Avatar" className="testimonial-avatar" />
                  <div className="testimonial-name">Priya Sharma</div>
                </div>
                <p className="testimonial-text">
                  One line review will go here. One line review will go here.
                </p>
                <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              </div>
            </div>

            <div className="yellow-triangle"></div>
          </div>

          {/* Right Side */}
          <div className="right-content">
            <div className="mentor-video-card">
              <div className="mentor-image-section">
                <img src={mentorImg} alt="Mentor" className="mentor-image" />
                <div className="play-button">
                  <div className="play-icon"></div>
                </div>
              </div>

              <div className="quote-card">
                <div className="quote-text">
                  Choosing the right Teacher is your biggest investment decision! Your Time, Honey, and Efforts are invested.
                </div>
                <div className="quote-text">
                  Make sure you make the right choice.
                </div>
                <div className="author-info">
                  <div className="author-details">
                    <h4>Rohit Sachdev</h4>
                    <p>Mentor & Trainer at Positive Alpha</p>
                  </div>
                  <div className="fox-avatar">🦊</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card-right">
              <div className="testimonial-header">
                <img src={avatar2} alt="Avatar" className="testimonial-avatar" />
                <div className="testimonial-name">Ravi verma</div>
              </div>
              <p className="testimonial-text">
                One line review will go here. One line review will go here.
              </p>
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
            </div>
          </div>

          <div className="connecting-arrow">
            <div className="arrow-path"></div>
          </div>
        </div>

        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">320 Hours+</div>
            <p className="stat-description">30% more than any institute</p>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <p className="stat-description">committed Full time Trainer</p>
          </div>
          <div className="stat-item">
            <div className="stat-number">90%</div>
            <p className="stat-description">students Satisfaction ratio</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorPage;

