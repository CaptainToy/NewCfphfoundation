import React, { useState } from "react"; // Import useState
import { Link } from "react-router-dom"; // Import Link from React Router
import Swal from "sweetalert2"; // Ensure Swal is imported
import { addDoc, collection, serverTimestamp } from "firebase/firestore"; // Import Firebase functions
import { db } from "../../firebase"; // Ensure Firebase is properly imported
import "./Footer.css"; // Import the CSS file
import Logo from "../../assets/logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid email!",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
      });
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "emails"), {
        email: email,
        time: serverTimestamp(),
      });

      setEmail("");

      Swal.fire({
        icon: "success",
        title: "Subscribed Successfully!",
        text: "You'll receive updates in your inbox.",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
      });
    } catch (error) {
      console.error("Error adding email: ", error);
      Swal.fire({
        icon: "error",
        title: "Subscription Failed",
        text: "Something went wrong. Please try again.",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

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
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSubscribe} disabled={loading}>
              {loading ? "Loading..." : "Subscribe"}
            </button>
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
              <Link to="/SignUp">SignUp</Link>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>Copyright © 2025 CFPHFoundation. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="#">
            <i className="bi bi-instagram instagram"></i>
          </a>
          <a href="#">
            <i className="bi bi-facebook facebook"></i>
          </a>
          <a href="#">
            <i className="bi bi-youtube youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
