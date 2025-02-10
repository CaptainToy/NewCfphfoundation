import React from "react";
import "./ResultsSection2.css";

const StatItem = ({ icon, label, value }) => (
  <div className="result2-stat-item">
    <i className={`bi ${icon} result2-stat-icon`}></i>
    <p className="result2-stat-label">{label}</p>
    <h4 className="result2-stat-value">{value}</h4>
  </div>
);

const ResultsSection2 = () => {
  return (
    <section className="result2-results-section" aria-label="Impactful Programs Results">
      <div className="result2-results-content">
        <div className="result2-image-container">
          <img
            src="https://framerusercontent.com/images/9s5NS6wtc5rkatYS6TGfpFtD0.png?scale-down-to=1024"
            alt="Group of volunteers working together"
          />
        </div>

        <div className="result2-text-content">
          <span className="result2-section-tag">Medical Resources</span>
          <h3 className="result2-content-title">Building Brighter Futures Through Learning Opportunities</h3>
          <p className="result2-content-description">
            Our commitment to education has enabled thousands of children and adults to gain the skills and knowledge they need to thrive.
          </p>

          <div className="result2-stats-container">
            <StatItem icon="bi-building" label="Schools Partnered" value="100+" />
            <StatItem icon="bi-mortarboard" label="Scholarships Awarded" value="800+" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection2;