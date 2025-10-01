import React from "react";
import "../styles/DownloadGuide.css";
import images from "../assets/funny.jpg"; 
import t1 from "../assets/paper.webp"; 
import t2 from "../assets/paper.webp"; 

function DownloadGuide() {
  return (
    <div className="download-section">
     
      <div className="download-top">
        <h2>Download the free guide to CFA Exam</h2>
        <button className="download-btn">Download</button>
      </div>
      <hr className="divider" />

 
      <div className="qna-container">
        <div className="qna-left">
          <h3>QnA of Never Asked Question:</h3>

          <div className="qna-box">
            <span>How many hours of classes will be conducted daily?</span>
            <span className="arrow">▼</span>
          </div>
          <div className="qna-box">
            <span>Mock Tests?</span>
            <span className="arrow">▼</span>
          </div>
          <div className="qna-box">
            <span>The mode of Class ( Online / Offline)?</span>
            <span className="arrow">▼</span>
          </div>
          <div className="qna-box">
            <span>What is the Fee Payment Structure?</span>
            <span className="arrow">▼</span>
          </div>
        </div>

        <div className="qna-right">
          <img src={images} alt="Funny Guy" className="funny-img" />
        </div>
      </div>

      
      <img src={t1} alt="paper" className="paper paper1" />
      <img src={t2} alt="paper" className="paper paper2" />
    </div>
  );
}

export default DownloadGuide;
