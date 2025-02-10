import React from "react";
import "./FundingCards.css";

const FundingCards = () => {
  return (
    <div className="cards-container">
      {/* First Card */}
      <div className="card card-orange">
        <div className="card-overlay"></div>
        <div className="card-content">
          
          <span className="card-badge">BY 2023</span>
          <h2 className="card-title">$12<span className="card-highlight">Million</span></h2>
          <p className="card-text">
            This funding has been crucial in expanding our programs, improving resources, and reaching more communities in impactful need.
          </p>
        </div>
      </div>

      {/* Second Card */}
      <div className="card card-yellow">
        <div className="card-overlay"></div>
        <div className="card-content">
          <span className="card-badge">BY 2023</span>
          <h2 className="card-title">139,875<span className="card-highlight">+</span></h2>
          <p className="card-text">
            From providing access to education and healthcare to ensuring food security and clean water, these efforts are changing lives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FundingCards;
