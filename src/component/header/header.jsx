import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
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
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className={`header-nav-links ${showMobileMenu ? "mobile-menu-open" : ""}`}>
          <div className="mobile-menu-close" onClick={handleMobileMenuClick}>
            <i className="bi bi-x-lg"></i> {/* Close Icon */}
          </div>
          <button className="header-dropdown" onClick={handleDropdownClick}>
            All Pages <i className="bi bi-arrow-down-short"></i>
          </button>
          <Link to="/programs" className="list">Programs</Link>
          <Link to="/blog" className="list blog">Blog</Link>
          <Link to="/donate" className="header-donate-btn">Donate Now</Link>
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
            <Link to="/">Home</Link>
            <Link to="/donation">Donation</Link>
            <Link to="/team">Team</Link>
            <Link to="/about">About Us</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/programs">Programs</Link>
            <Link to="/blog-details">Blog Details</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/program-details">Program Details</Link>
            <Link to="/review">Review</Link>
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
            <Link to="/donate" className="header-donate-btn">
              Donate Now
              <div className="icon-container">
                <i className="bi bi-arrow-right-circle"></i>
              </div>
            </Link>
            <Link to="/learn-more" className="header-learn-btn">Learn More</Link>
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
