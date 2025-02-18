import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./Footer.css"; // Import the CSS file
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="logo">
            <img src={Logo} alt="Logo" className="logo-icon" />
          </div>
          <p className="footer-text">
            Together, we can make a real impact in communities around the world.
          </p>
          <div className="subscribe">
            <i className="bi bi-chat-square-text text-squ"></i>
            <input type="email" placeholder="Enter your email address" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="footer-right">
          <div className="links">
            <div className="column">
              <h4>Quick Links</h4>
              <Link to="/donation">Donation</Link>
              <Link to="/about">About us</Link>
              <Link to="/programs">Programs</Link>
            </div>
            <div className="column">
              <h4>More</h4>
              <Link to="/blogs">Blogs</Link>
              <Link to="/blogs-details">Team</Link>
              <Link to="/testimonials">Testimonials</Link>
            </div>
            <div className="column">
              <h4>Legal & Policy Links</h4>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>Copyright © 2025 CFPHFoundation. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="#"><i className="bi bi-instagram instagram"></i></a>
          <a href="#"><i className="bi bi-facebook facebook"></i></a>
          <a href="#"><i className="bi bi-youtube youtube"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
