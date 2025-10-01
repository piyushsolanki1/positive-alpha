import React from 'react';
import "../styles/CFADownloadSection.css";

const CFADownloadSection = () => {
  return (
    <div className="cfa-download-section">
      
    
      <div className="main-heading">
        <h1>
          Download Your Biggest Assets for FREE to become a CFA!
        </h1>
      </div>

      
      <div className="bg-shape-left"></div>
      <div className="bg-shape-right"></div>

      
      <div className="ebooks-card">
        <div className="ebooks-card-header">
          <span>Ebooks/Guides</span>
          <div className="icon">↓</div>
        </div>
        <p>CFA | CA | PA | Finance | Alpha Positive</p>
      </div>

    
      <div className="book-stack">
        <div className="book purple-book"></div>
        <div className="book red-book"></div>
        <div className="book blue-book"></div>
      </div>

      <div className="laptop">
        <div className="laptop-screen">
          <svg width="160" height="90" className="network-svg">
            <line x1="28" y1="25" x2="52" y2="40" />
            <line x1="58" y1="42" x2="82" y2="32" />
            <line x1="88" y1="34" x2="108" y2="22" />
            <line x1="88" y1="36" x2="118" y2="52" />
            <line x1="82" y1="64" x2="118" y2="52" />
            <line x1="58" y1="44" x2="82" y2="62" />
            
            <circle cx="25" cy="23" r="5" />
            <circle cx="55" cy="40" r="5" />
            <circle cx="85" cy="30" r="5" />
            <circle cx="110" cy="20" r="5" />
            <circle cx="120" cy="50" r="5" />
            <circle cx="80" cy="62" r="5" />
            <circle cx="45" cy="60" r="5" />
          </svg>
        </div>
      </div>

    
      <div className="person">
        <div className="head">
          <div className="hair"></div>
          <div className="eye left-eye"></div>
          <div className="eye right-eye"></div>
          <div className="mouth"></div>
        </div>
        <div className="body">
          <div className="arm left-arm"></div>
          <div className="arm right-arm"></div>
          <div className="phone"></div>
        </div>
        <div className="pants">
          <div className="leg left-leg"></div>
          <div className="leg right-leg"></div>
        </div>
      </div>

      <div className="speech-bubble">
        <span>💬</span>
        <div className="speech-tail"></div>
      </div>

      
      <div className="notes-card">
        <div className="notes-card-header">
          <span>Notes</span>
          <div className="icon">↓</div>
        </div>
        <p>CFA | CA | PA | Finance | Alpha Positive</p>
      </div>

    
      <div className="quiz-section">
        <h2>
          Take a Quiz to check if CFA is the right career choice for you
        </h2>
        <button>Play Quiz ▶</button>
      </div>

     
      <div className="decorative-arrow">↗</div>
    </div>
  );
};

export default CFADownloadSection;
