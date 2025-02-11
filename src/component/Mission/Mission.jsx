import React from "react";
import "./Mission.css";

const StatItem = ({ icon, label, value }) => (
  <div className="mission-stat-item">
    <i className={`bi ${icon} mission-stat-icon`}></i>
    <p className="mission-stat-label">{label}</p>
    <h4 className="mission-stat-value">{value}</h4>
  </div>
);

const Mission = () => {
  return (
    <section className="mission-results-section" aria-label="Impactful Programs Results">
      <div className="mission-results-content">
        <div className="mission-image-container">
          <img
            src="https://framerusercontent.com/images/9s5NS6wtc5rkatYS6TGfpFtD0.png?scale-down-to=1024"
            alt="Group of volunteers working together"
          />
        </div>

        <div className="mission-text-content">
          <span className="mission-section-tag">Our Mission</span>
          <h3 className="mission-content-title">Delivering Vital Health Resources to Those in Need</h3>
          <p className="mission-content-description">
          To alleviate hunger and malnutrition in our community by providing food assistance to vulnerable individuals and families.
          </p>

          <div className="mission-stats-container">
             <button>Make a Quick Donation</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;