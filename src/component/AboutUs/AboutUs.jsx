import React from "react";
import "./AboutUs.css"; // Import the CSS file

const AboutUs = () => {
  return (
    <section className="aboutus-section"> 
      <div className="aboutus-content">
        <div className="about-us-fill">
            <div className="about-fill-container">
              <i className="bi bi-bookmark-check"></i>
              <span className="aboutus-badge">About Us</span>
            </div>
            <h1 className="aboutus-title">Know about our mission, vision, and journey</h1>
        </div>
        <div className="aboutus-con">
            <p className="aboutus-text">
              Together, we can make a real impact in communities around the world. Help us bring hope and support.
            </p>
            <button className="aboutus-learn-more">Learn More</button>
        </div>
      </div>
      <div className="aboutus-image">
        <img src="https://framerusercontent.com/images/3xT2fCBZoB7hd2XIMoXWkf78Q.png" alt="Donation" />
      </div>
    </section>
  );
};

export default AboutUs;
