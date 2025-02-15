import React from "react";
import "./newcardedit.css";

const partnerships = [
  { id: 1, icon: "https://framerusercontent.com/images/WcoHtsGpPpetjzfs8y7MKVu9A2U.svg", title: "Corporate Partnerships", description: "A section encouraging businesses to with the charity through sponsorships.", buttonText: "Donate Now", color: "CorporatePartnerships-green" },
  { id: 2, icon: "https://framerusercontent.com/images/7xHcqEwQ28XZdjYrEXSaPUEUo.svg", title: "Corporate Partnerships", description: "A section encouraging businesses to with the charity through sponsorships.", buttonText: "Give", color: "CorporatePartnerships-yellow" },
  { id: 3, icon: "https://framerusercontent.com/images/iea21zZiEUNB7QBlnhdIEYhx0A.svg", title: "Corporate Partnerships", description: "A section encouraging businesses to with the charity through sponsorships.", buttonText: "Support", color: "CorporatePartnerships-orange" },
];

const NewCardEdit = () => {
  return (
    <div className="CorporatePartnerships-container">
      {partnerships.map((item) => (
        <div key={item.id} className="CorporatePartnerships-card">
          <div className={`CorporatePartnerships-icon ${item.color}`}><img src={item.icon} alt="" /></div>
          <h3 className="CorporatePartnerships-title">{item.title}</h3>
          <p className="CorporatePartnerships-description">{item.description}</p>
          <button className="CorporatePartnerships-button">{item.buttonText}</button>
        </div>
      ))}
    </div>
  );
};

export default NewCardEdit;
