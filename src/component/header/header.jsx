import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">

      <nav className="header-navbar">
        <div className="header-logo">
          <img src={"https://framerusercontent.com/images/SaTvdYYSpcU6FiQo1Ydw4khzJg.svg"} alt="Logo" />
        </div>
        <div className="header-nav-links">
          <select className="header-dropdown">
            <option>All Pages</option>
            <option>Programs</option>
            <option>Blogs</option>
          </select>
          <button className="list">Programs</button>
          <button className="list blog">Blog</button>
          <button className="header-donate-btn">Donate Now</button>
        </div>
      </nav>

      <div className="header-content">
        <div className="header-left-section">
          <div className="header-info">
            <img src="https://i.pinimg.com/736x/99/5d/2e/995d2e144f77c537fd5b1fb6168d96d1.jpg" alt="1000+ Donor active members" className="header-donor-img" />
            <span>1000+ Donor active members</span>
          </div>
          <div className="header-text">
            <h2>Together for making a brighter future</h2>
            <p>
              Together, we can make a real impact in communities around the world.
              Help us bring hope and support.
            </p>
          </div>
          <div className="header-buttons">
          <button className="header-donate-btn">
              Donate Now 
             <div className="icon-container">
               <i className="bi bi-arrow-right-circle"></i>
             </div>
          </button>
            <button className="header-learn-btn">Learn More</button>
          </div>
          <div className="header-partners">
            <span>Our most loved partners</span>
            {/* <div className="header-partner-logos">
              <span className="header-logo">waves</span>
              <span className="header-logo">RotaShow</span>
              <span className="header-logo">travelers.</span>
            </div> */}
          </div>
        </div>
        <div className="header-right-section">
          <img src="https://framerusercontent.com/images/iVXBNlfNlwOrYh8NPdvIwT1BY.png" alt="Volunteers working together" className="header-right-img" />
          {/* <div className="header-story-reel">
            <p>
              "Because of this organization, I was given hope and a second chance."
            </p>
            <button className="header-story-btn">Watch our story reel ▶</button>
          </div> */}
          {/* <div className="header-team-info">
            <p>Dedicated team</p>
            <span>Providing essential resources and aid to those who are in need in emergency.</span>
            <span className="header-team-count">15k</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
