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
    <div className="StatsComponent-counterWrapper">
      <div className="StatsComponent-counterCard">
        <div className="StatsComponent-counter">
          <h2 className="StatsComponent-counterNumber">{number}</h2>
          <h2 className="StatsComponent-counterUnit">{unit}</h2>
        </div>
        <p className="StatsComponent-counterDescription">{description}</p>
      </div>
    </div>
  );
};

const StatsComponent = () => {
  const counterData = [
    { number: "10", unit: "K+", description: "Children supported from around the globe" },
    { number: "3", unit: "K+", description: "Disaster relief completed" },
    { number: "20", unit: "K+", description: "Individuals directly impacted through program" },
    { number: "12", unit: "Million+", description: "Raised to support education, healthcare, and disaster relief" },
  ];

  return (
    <div className="StatsComponent-counterContainer">
      {counterData.map((data, index) => (
        <CounterCard key={index} {...data} />
      ))}
    </div>
  );
};

export default StatsComponent;
