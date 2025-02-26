import React from "react";
import "./FundingCards.css";

const sampleData = [
  {
    id: 1,
    badge: "BY 2023",
    title: "$12 Million",
    text: "This funding has been crucial in expanding our programs, improving resources, and reaching more communities in impactful need.",
    backgroundClass: "card-orange",
  },
  {
    id: 2,
    badge: "BY 2023",
    title: "139,875+",
    text: "From providing access to education and healthcare to ensuring food security and clean water, these efforts are changing lives.",
    backgroundClass: "card-yellow",
  },
];

const FundingCards = () => {
  return (
    <div className="cards-container">
      {sampleData.map((card) => (
        <div key={card.id} className={`card ${card.backgroundClass}`}>
          <div className="card-overlay"></div>
          <div className="card-content">
            <span className="card-badge">
              <input type="checkbox" className="checkbox" /> {card.badge}
            </span>
            <h2 className="card-title">
              {card.title} <span className="card-highlight">{card.highlight}</span>
            </h2>
            <p className="card-text">{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  ); 
};

export default FundingCards;
