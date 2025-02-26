import React from "react";
import "./Causes.css"; 

const Causes = () => {
  return (
    <section className="causes-section">
      <div className="causes-content">
        <div className="causes-header">
          <div className="causes-badge-container">
            <i className="bi bi-bookmark-check"></i> 
            <span className="causes-badge">Our Causes</span>
          </div>
          <h1 className="causes-title">Explore our life changing Causes</h1>
        </div>
        
        <div className="cause-card">
          <div className="cause-image">
            <img
              src="https://framerusercontent.com/images/CMovDleeBLY6UjxOh2MHLrAulk.png"
              alt="Community Rebuilding"
            />
          </div>
          <div className="cause-content">
            <h2 className="cause-title">Empowering Change Through Philanthropy</h2>
            <p className="cause-description">
            At Celebrity Food Pantry Home Foundation, we're driven by a passion for giving back. Founded in September 2023 by Mr. Dele Oduyemi and Mrs. Tayo Oduyemi, our organization has been dedicated to supporting the needy, elderly, special people, widows and children in Nigeria.
            </p>
            
            <button className="cause-donate-btn"><a href="#"></a>Donate Now</button>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Causes;
