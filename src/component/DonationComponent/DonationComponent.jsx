import React from "react";
import "./DonationComponent.css"; // Import the CSS file

const DonationComponent = () => {
  return (
    <div className="donation-container">
      {/* Background Image */}
      <div className="background-image">
        <img
          src="https://framerusercontent.com/images/49NVmLovDVhqoIiwaAB7BtQ8aqA.png?scale-down-to=1024"
          alt="Donation Background"
          className="background-image-itself"
        />
      </div>

      {/* Text Overlay */}
      <div className="text-overlay">
        {/* Top Section */}
        <div className="top-section">
          <h1>Together, We Can Make a Difference</h1>
          <p>Your support empowers us to provide essential resources</p>
          <div className="button-group">
            <button className="donate-button">Donate Now</button>
            <button className="volunteer-button">Become a Volunteer</button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bottom-section">
          <div className="people-count">
            <h4>Total people involved</h4>
            <p>Building Brighter Futures Through Learning Opportunities</p>
           <div className="flex flex-col items-center justify-center">
	<div className="flex -space-x-1" style={{marginTop: "20px"}}>
		<img alt="" className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-300" src="https://source.unsplash.com/40x40/?portrait?1" />
		<img alt="" className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-300" src="https://source.unsplash.com/40x40/?portrait?2" />
		<img alt="" className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-300" src="https://source.unsplash.com/40x40/?portrait?2" />
		
	</div>
</div>
          </div>
          <div className="description">
            <p>Total people involved for vulnerable families and individuals</p>
         </div>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="bottom-image">
        <img
          src="https://framerusercontent.com/images/1a8wxH0iClsPyar2taGvtPGYw.png?scale-down-to=1024"
          alt="Bottom Supporting Image"
          className="bottom-image-itself"
        />
      </div>
    </div>
  );
};

export default DonationComponent;
