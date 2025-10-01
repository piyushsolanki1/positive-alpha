import React from 'react';
import "../styles/StudentSection.css";
import blog from '../assets/blog.jpg';


const StudentsAndBlogsSection = () => {
  return (
    <div className="students-blogs-container">
     
      <section className="students-section">
        <h2>Our students are working at:</h2>
        
       
        <div className="company-logos">
        
        </div>
      </section>

     
      <section className="blogs-section">
        <h2>Blogs</h2>
        
        <div className="blog-cards">
        
          <div className="blog-card">
            <div 
              className="blog-card-image"
              style={{
                backgroundImage: `url(${blog})`
              }}
            >
              <div className="blog-card-overlay">
                Check more about CFA!!!
              </div>
            </div>
          </div>

          
          <div className="blog-card">
            <div 
              className="blog-card-image"
              style={{
                backgroundImage: `url(${blog})`
              }}
            >
              <div className="blog-card-overlay">
                Why CA is preferred among Students?
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentsAndBlogsSection;
