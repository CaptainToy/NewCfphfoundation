import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        {/* Left Section */}
        <div className="hero-text">
          <div className="hero-tag">
            <div className="hero-icon">
              <img
                src="https://framerusercontent.com/images/1rttCIBa7YMrEV7ZIpzNsaJiMw.svg"
                alt="Donations Icon"
              />
            </div>
            <p>Donations</p>
          </div>
          <h1>Support us and make a difference for the future!</h1>

          <div className="hero-rating">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="hero-star">★</span>
            ))}
          </div>

          <p className="hero-testimonial">
            “Their community-centered approach ensures every dollar truly makes a difference.”
          </p>

          <div className="hero-profile">
            <img
              src="https://framerusercontent.com/images/G1Vk28halN9THzowbBasRB27Ec.png"
              alt="Brooklyn Simmons"
            />
            <div>
              <p className="hero-name">Brooklyn Simmons</p>
              <p className="hero-title">Product Manager</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="hero-image">
          <img
            src="https://framerusercontent.com/images/8OovXAR7tTHa56LJ47hVavGzqQM.jpg"
            alt="Volunteer Holding Donation Box"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
