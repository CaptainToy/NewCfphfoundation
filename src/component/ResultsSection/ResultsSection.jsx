import React from "react";
import "./ResultsSection.css";
import IMG1 from "../../assets/new/IMG-20250207-WA0143.jpg"

const StatItem = ({ icon, label, value }) => (
  <div className="statItem">
    <i className={`bi ${icon} statIcon`}></i>
    <p className="statLabel">{label}</p>
    <h4 className="statValue">{value}</h4>
  </div>
);

const ResultsSection = () => {
  return (
    <section className="resultsSection" aria-label="Impactful Programs Results">

      <div className="resultsContent">
        <div className="imageContainer">
          <img 
            src={IMG1} 
            alt="Group of volunteers working together" 
          />
        </div>

        <div className="textContent">
          <span className="sectionTag">Empowering Education</span>
          <h3 className="contentTitle">Building Brighter Futures Through Learning Opportunities</h3>
          <p className="contentDescription">
            Our commitment to education has enabled thousands of children and adults to gain the skills and knowledge they need to thrive.
          </p>

          <div className="statsContainer">
            <StatItem icon="bi-building" label="Schools Partnered" value="100+" />
            <StatItem icon="bi-mortarboard" label="Scholarships Awarded" value="800+" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;