import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="logo">
          <img src={"https://framerusercontent.com/images/SaTvdYYSpcU6FiQo1Ydw4khzJg.svg"} alt="Logo"className="logo-icon" />
          </div>
          <p className="footer-text">
            Together, we can make a real impact in communities around the world.
          </p>
          <div className="subscribe">
            <i class="bi bi-chat-square-text text-squ"></i>
            <input type="email" placeholder="Enter your email address" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="footer-right">
          <div className="links">
            <div className="column">
              <h4>Quick Links</h4>
              <a href="#">Donation</a>
              <a href="#">About us</a>
              <a href="#">Programs</a>
            </div>
            <div className="column">
              <h4>More</h4>
              <a href="#">Blogs</a>
              <a href="#">Blogs details</a>
              <a href="#">Testimonials</a>
            </div>
            <div className="column">
              <h4>Legal & Policy Links</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>Copyright © 2025 Kindora. All Rights Reserved.</p>
        <div className="social-icons">
            <a href=""><i class="bi bi-instagram instagram"></i></a>
            <a href=""><i class="bi bi-facebook facebook"></i></a>
            <a href=""><i class="bi bi-youtube youtube"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
