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
            <h2 className="cause-title">Community Rebuilding</h2>
            <p className="cause-description">
              Emphasize the broader community impact, like job creation, improved
              infrastructure, or restored communal spaces.
            </p>
            
            <button className="cause-donate-btn"><a href="#"></a>Donate Now</button>
            <div className="cause-goal">
              <span className="goal-label">Goal</span>
              <h3 className="cause-amount">$240,000</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Causes;
