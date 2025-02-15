import React from "react";
import "./StatsComponent.css";

const stats = [
  { number: "10K+", description: "Children supported from around the globe" },
  { number: "3K+", description: "Disaster relief completed" },
  { number: "20K+", description: "Individuals directly impacted through program" },
  { number: "12 Million+", description: "Raised to support education, healthcare, and disaster relief" },
];

const CounterCard = ({ number, unit, description }) => {
  return (
    <div className="stars-card-counterWrapper">
      <div className="stars-card-counterCard">
        <div className="stars-card-counter">
          <h2 className="stars-card-counterNumber">{number}</h2>
          <h2 className="stars-card-counterUnit">{unit}</h2>
        </div>
        <p className="stars-card-counterDescription">{description}</p>
      </div>
    </div>
  );
};

const StatsComponent = () => {
  const counterData = [
    { number: "12", unit: "Million+", description: "This funding has been crucial in expanding our programs, improving resources, and reaching more communities in impactful need." },
  ];

  return (
    <div className="stars-card-counterContainer">
      {counterData.map((data, index) => (
        <CounterCard key={index} {...data} />
      ))}
    </div>
  );
};

export default StatsComponent;
