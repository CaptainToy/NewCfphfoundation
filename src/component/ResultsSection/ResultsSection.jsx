import React from "react";
import "./ResultsSection.css";
// img
import IMG1 from "../../assets/img1/3.jpg"
import IMG2 from "../../assets/img1/2.jpg"

const sampleData = [
  {
    imgSrc: IMG1,
    value: "High-Tech",
    title: "Empowering Families",
    description:
      "We have empowered over 5,000 households by providing food and clothing to the needy, special individuals, elderly, and widows.",
  },
  {
    imgSrc: IMG2,
    value: "Fast Track",
    title: "Food Distribution",
    description:
      "We presently distribute food items to needy households including: the elderly, widows, special people, nursing mothers, and vulnerable individuals every two weeks on Thursdays at our office",
  },

];

const StatItem = ({ imgSrc, label, value }) => (
  <div className="statItem">
    <img src={imgSrc} alt={label} className="statIcon" />
    <p className="statLabel">{label}</p>
    <h4 className="statValue">{value}</h4>
  </div>
);

const ResultsSection = () => {
  return (
    <section className="p-8 lg:p-20 dark:text-gray-800">
      <div className="container mx-auto space-y-12">
        {sampleData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <img
              src={item.imgSrc}
              alt={item.label}
              className="h-90 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
              <span className="text-xs uppercase dark:text-gray-600">{item.label}</span>
              <h3 className="text-3xl font-bold">{item.title}</h3>
              <p className="my-6 dark:text-gray-600" style={{fontSize:"20px"}}>{item.description}</p>
             
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResultsSection;
