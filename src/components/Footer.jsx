import React from 'react';
import "../styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        
        <div className="footer-column left-column">
          <div className="footer-links">
            <a href="#" className="footer-link">Help & Support</a>
            <a href="#" className="footer-link">Privacy Policy Terms</a>
          </div>
        </div>

        
        <div className="footer-column middle-column">
          <h3 className="footer-title">Quick Links:</h3>
          <div className="footer-links">
            <a href="#" className="footer-link">About</a>
            <a href="#" className="footer-link">E-books</a>
            <a href="#" className="footer-link">Guides</a>
            <a href="#" className="footer-link">Demo</a>
            <a href="#" className="footer-link">Why</a>
          </div>
        </div>

      
        <div className="right-columns">
          
          <div className="right-column-top">
            <h3 className="footer-title">Address</h3>
            <p className="footer-address">
              Addresse of Positive alpha along with mail & number
            </p>
          </div>

         
          <div className="right-column-bottom">
            <h3 className="contact-title">Contact</h3>
            <div className="contact-info">
              <a href="mailto:mdcnd@positivealpha.com" className="contact-link">
                mdcnd@positivealpha.com
              </a>
              <a href="tel:+91XXXXXXXXXX" className="contact-link">
                +91 XXXXXXXXXX
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;