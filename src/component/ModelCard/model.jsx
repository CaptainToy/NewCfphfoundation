import React from 'react';
import './model.css'; // Import your CSS file

const modelCard = () => {
  return (
    <div className="model-card-container">
      <div className="model-card-icon-container">
        <img src="/microphone-icon.png" alt="Microphone Icon" className="model-card-mic-icon" />
      </div>
      <div className="model-card-text-container">
        <div className="model-card-date-time">
          <img src="/calendar-icon.png" alt="Calendar Icon" className="model-card-date-icon" />
          <span>6th FEB</span>
          <img src="/clock-icon.png" alt="Clock Icon" className="model-card-time-icon" />
          <span>Starts 10AM</span>
        </div>
        <div className="model-card-organizer">
          <span>Organized By: CFPHFoundation</span>
        </div>
        <div className="model-card-venue">
          <img src="/location-icon.png" alt="Location Icon" className="model-card-location-icon" />
          <span>No 23 Olusanya Street, Jesugbami, Aboru, Lagos, Nigeria</span>
        </div>
        <button className="model-card-reminder-button">Set Reminder</button>
      </div>
      <div className="model-card-icon-container">
        <img src="/microphone-icon.png" alt="Microphone Icon" className="model-card-mic-icon" />
      </div>
    </div>
  );
};

export default modelCard;