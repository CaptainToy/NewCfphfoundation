import React from "react";
import "./Donationcard.css"; // Import CSS file

const DonationCards = () => {
  const donationOptions = [
    {
      title: "Housing Assistance",
      description: "Help a family with rental support & housing stability for one month.",
      price: "$150.00",
      backgroundColor: "rgb(255, 142, 108)",
      textColor: "black",
    },
    {
      title: "Medical Assistance",
      description: "Provide a family with one month of rent and housing security.",
      price: "$120.00",
      backgroundColor: "rgb(0, 0, 0)",
      textColor: "white",
    },
    {
      title: "Education Assistance",
      description: "Support a family’s housing stability for an entire month.",
      price: "$100.00",
      backgroundColor: "rgb(255, 235, 122)",
      textColor: "black",
    },
  ];

  return (
    <div className="donation-card-stat-container">
      {donationOptions.map((option, index) => (
        <div
          key={index}
          className="donation-card-stat"
          style={{ 
            backgroundColor: option.backgroundColor, 
            color: option.textColor 
          }}
        >
          <div className="donation-card-stat-content">
            <h3 className="donation-card-stat-title">{option.title}</h3>
            <p className="donation-card-stat-description">{option.description}</p>
            <div className="donation-card-stat-price-container">
              <h1 className="donation-card-stat-price">{option.price}</h1>
              <p className="donation-card-stat-billing">Billed per month</p>
            </div>
            <a href="./donation" className="donation-card-stat-btn">Donate Now</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DonationCards;
