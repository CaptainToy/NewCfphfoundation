import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <div className="contact-container">
      {/* Left Section */}
      <div className="contact-left">
        <div className="tag">Donations</div>
        <h2>Why Reach Out to Kindora?</h2>
        <p>
          We're dedicated to offering personalized guidance and support for any
          questions you may have about Kindora. Whether you're a donor,
          volunteer, or partner, our team is here to assist you every step of
          the way.
        </p>

        {/* Features Section */}
        <div className="features">
          <div className="feature">
            <div className="icon support-icon">
              <img src="https://framerusercontent.com/images/xy8jLoQiGqXtBnd7VTZV0Ufvpk.svg" alt="Support Icon" />
            </div>
            <div className="text-content">
              <h3>Personalized Support</h3>
              <p>We're dedicated to offering personalized guidance.</p>
            </div>
          </div>

          <div className="feature">
            <div className="icon communication-icon">
              <img src="https://framerusercontent.com/images/mmPs48g1U6DyiTi5yvQgYHjrmA.svg" alt="Communication Icon" />
            </div>
            <div className="text-content">
              <h3>Good Communication</h3>
              <p>Receive insights from professionals who understand.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="contact-right">
        <h2>Let’s Chat</h2>
        <p>Want to learn more about us? We are ready to help.</p>
        <form className="contact-form">
          <label>Your Full Name</label>
          <input type="text" placeholder="Enter your full name" required />
          
          <label>Your Email</label>
          <input type="email" placeholder="Enter your email address" required />
          
          <label>Your Message</label>
          <textarea placeholder="Write your message" required></textarea>
          
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
