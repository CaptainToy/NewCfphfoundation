import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Logo from "../../assets/logo.png";
import IMG1 from "../../assets/imglolz.jpg";
import IMG2 from "../../assets//donnor/IMG-20250215-WA0058.jpg";
import IMG3 from "../../assets/donnor/IMG-20250215-WA0064.jpg";
import IMG4 from "../../assets/donnor/IMG-20250215-WA0061.jpg";
import IMG5 from "../../assets/donnor/IMG-20250215-WA0062.jpg";

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
            <i className="bi bi-x-lg"></i> 
          </div>
          <button className="header-dropdown" onClick={handleDropdownClick}>
            All Pages <i className="bi bi-arrow-down-short"></i>
          </button>
          {showAllPages && (
            <div className="all-pages-container">
              <div className="all-pages-grid">
                <Link to="/" className="textrun" onClick={handleDropdownClick}>Home</Link>
                <Link to="/donation" className="textrun" onClick={handleDropdownClick}>Donation</Link>
                <Link to="/about" className="textrun" onClick={handleDropdownClick}>About Us</Link>
                <Link to="/blogs" className="textrun" onClick={handleDropdownClick}>Blogs</Link>
                <Link to="/contact" className="textrun" onClick={handleDropdownClick}>Contact Us</Link>
                <Link to="/programs" className="textrun" onClick={handleDropdownClick}>Programs</Link>
                <Link to="/review" className="textrun" onClick={handleDropdownClick}>Review</Link>
              </div>
            </div>
          )}
          <Link to="/programs" className="list" onClick={handleMobileMenuClick}>Programs</Link>
          <Link to="/blogs" className="list blog" onClick={handleMobileMenuClick}>Blog</Link>
          <Link to="/donation" className="header-donate-btn" onClick={handleMobileMenuClick}>Donate Now</Link>
        </div>

        {/* Hamburger Menu on the right */}
        <div className="header-hamburger" onClick={handleMobileMenuClick}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="header-content">
        <div className="header-left-section">
          <div className="header-info">
            <div className="flex flex-col items-center justify-center">
              <div className="flex -space-x-3">
                <img alt="" className="w-8 h-8 border rounded-full dark:bg-gray-500 dark:border-gray-300" src={IMG2} />
                <img alt="" className="w-8 h-8 border rounded-full dark:bg-gray-500 dark:border-gray-300" src={IMG3} />
                <img alt="" className="w-8 h-8 border rounded-full dark:bg-gray-500 dark:border-gray-300" src={IMG4} />
                <img alt="" className="w-8 h-8 border rounded-full dark:bg-gray-500 dark:border-gray-300" src={IMG5} />
              </div>
            </div>
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