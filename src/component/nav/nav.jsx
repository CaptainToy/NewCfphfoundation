import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import Logo from "../../assets/logo.png";

const Nav = () => {
  const [showAllPages, setShowAllPages] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleDropdownClick = () => {
    setShowAllPages(!showAllPages);
  };

  const handleMobileMenuClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className="header-navbar">
      <div className="header-logo">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>

      <div className={`header-nav-links ${showMobileMenu ? "mobile-menu-open" : ""}`}>
        <div className="mobile-menu-close" onClick={handleMobileMenuClick}>
          <i className="bi bi-x-lg"></i>
        </div>
        <button className="header-dropdown" onClick={handleDropdownClick}>
          All Pages <i className="bi bi-arrow-down-short"></i>
        </button>
        <Link to="/programs" className="list">Programs</Link>
        <Link to="/blog" className="list blog">Blog</Link>
        <Link to="/donation" className="header-donate-btn">Donate Now</Link>
      </div>

      <div className="header-hamburger" onClick={handleMobileMenuClick}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>

      {showAllPages && (
        <div className="all-pages-container">
          <div className="all-pages-grid">
            <Link to="/" className="textrun">Home</Link>
            <Link to="/donation" className="textrun">Donation</Link>
            <Link to="/about" className="textrun">About Us</Link>
            <Link to="/blogs" className="textrun">Blogs</Link>
            <Link to="/contact" className="textrun">Contact Us</Link>
            <Link to="/programs" className="textrun">Programs</Link>
            <Link to="/review" className="textrun">Review</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
