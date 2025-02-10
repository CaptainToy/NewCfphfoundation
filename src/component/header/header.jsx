import React, { useState } from "react";
import "./header.css";
import Logo from "../../assets/logo.png";
import IMG1 from "../../assets/imglolz.jpg";

const Header = () => {
  const [showAllPages, setShowAllPages] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleDropdownClick = () => {
    setShowAllPages(!showAllPages);
  };

  const handleMobileMenuClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="header-container">
      <nav className="header-navbar">
        {/* Logo on the left */}
        <div className="header-logo">
          <img src={Logo} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <div
          className={`header-nav-links ${showMobileMenu ? "mobile-menu-open" : ""}`}
        >
          <div className="mobile-menu-close" onClick={handleMobileMenuClick}>
            <i className="bi bi-x-lg"></i> {/* Close Icon */}
          </div>
          <button className="header-dropdown" onClick={handleDropdownClick}>
            All Pages <i className="bi bi-arrow-down-short"></i>
          </button>
          <button className="list">Programs</button>
          <button className="list blog">Blog</button>
          <button className="header-donate-btn">Donate Now</button>
        </div>

        {/* Hamburger Menu on the right */}
        <div className="header-hamburger" onClick={handleMobileMenuClick}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>
      </nav>

      {/* Display All Pages Grid inside Navbar */}
      {showAllPages && (
        <div className="all-pages-container">
          <div className="all-pages-grid">
            <span>Home</span>
            <span>Donation</span>
            <span>Team</span>
            <span>About us</span>
            <span>Blogs</span>
            <span>Contact Us</span>
            <span>Programs</span>
            <span>Blog Details</span>
            <span>Privacy Policy</span>
            <span>Program Details</span>
            <span>Review</span>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="header-content">
        <div className="header-left-section">
          <div className="header-info">
            <img
              src="https://i.pinimg.com/736x/99/5d/2e/995d2e144f77c537fd5b1fb6168d96d1.jpg"
              alt="1000+ Donor active members"
              className="header-donor-img"
            />
            <span>100+ Donor active members</span>
          </div>
          <div className="header-text">
            <h2>Together for making a brighter future</h2>
            <p>
              Together, we can make a real impact in communities around the world. Help us bring hope and support.
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
          </div>
        </div>
        <div className="header-right-section">
          <img src={IMG1} alt="Volunteers working together" className="header-right-img" />
        </div>
      </div>
    </div>
  );
};

export default Header;
