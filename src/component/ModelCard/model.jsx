import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Img1 from "../../assets/img1/1.jpg";
import Img2 from "../../assets/img1/2.jpg";
import Img3 from "../../assets/img1/3.jpg";
import Img4 from "../../assets/img1/4.jpg";
import Img5 from "../../assets/img1/5.jpg";

const images = [Img1, Img2, Img3, Img4, Img5];

const ModelCard = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Automatically change images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Update current time every second
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  // Format Date & Time
  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const formattedDate = currentTime.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row max-w-3xl w-full h-[450px] bg-white rounded-lg shadow-lg overflow-hidden items-stretch">
        {/* Left Side - Image Slideshow */}
        <div className="md:w-1/2 h-full">
          <img
            src={images[currentImageIndex]}
            alt="Slideshow"
            className="w-full h-full object-cover transition-opacity duration-1000"
          />
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-center p-8 md:w-1/2 h-full">
          <h2 className="text-2xl font-semibold leading-tight tracking-wide">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-gray-700 text-lg mt-3">
            Subscribe to get the latest updates and news directly in your inbox.
          </p>

          {/* Date & Time Display */}
          <div className="mt-3 text-gray-600">
            <p>
              📅 <strong>{formattedDate}</strong>
            </p>
            <p>
              ⏰ <strong>{formattedTime}</strong>
            </p>
          </div>

          {/* Email Input & Subscribe Button */}
          <div className="flex items-center gap-3 mt-5">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 p-3 border rounded-md"
            />
            <button
              onClick={handleSubscribe}
              disabled={loading}
              className={`px-5 py-3 text-white rounded-md ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-lime-600"
              }`}
            >
              {loading ? "Loading..." : "Subscribe"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
