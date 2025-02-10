import React from "react";
import "./ResultsSection.css";

const StatItem = ({ icon, label, value }) => (
  <div className="stat-item">
    <i className={`bi ${icon} stat-icon`}></i>
    <p className="stat-label">{label}</p>
    <h4 className="stat-value">{value}</h4>
  </div>
);

const ResultsSection = () => {
  return (
    <section className="results-section" aria-label="Impactful Programs Results">
      <div className="results-header">
        <div className="impact-badge">
          <div className="badge-icon">
            <i className="bi bi-award"></i> 
          </div>
          <p className="badge-text">Impactful Metrics</p>
        </div>
        <h2 className="impact-title">Programs that Change Lives</h2>
        <p className="impact-subtitle">
          Together, we can make a real impact in communities around the world. Help us bring hope and support.
        </p>
      </div>

      <div className="results-content">
        <div className="image-container">
          <img 
            src="https://framerusercontent.com/images/9fxUahj8JrVi8wpUzhOaSsYAZCI.png?scale-down-to=1024" 
            alt="Group of volunteers working together" 
          />
        </div>

        <div className="text-content">
          <span className="section-tag">Empowering Education</span>
          <h3 className="content-title">Building Brighter Futures Through Learning Opportunities</h3>
          <p className="content-description">
            Our commitment to education has enabled thousands of children and adults to gain the skills and knowledge they need to thrive.
          </p>

          <div className="stats-container">
            <StatItem icon="bi-building" label="Schools Partnered" value="100+" />
            <StatItem icon="bi-mortarboard" label="Scholarships Awarded" value="800+" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
