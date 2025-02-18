import React from 'react';
import './EducationPromo.css';

const EducationPromo = () => {
  return (
    <div className="education-promo">
      <div className="promo-content">
        <h1>Empowering Children with Access to Quality Education</h1>
        <p>
          Education transforms lives, but millions of children worldwide still
          lack access to the resources they need to learn and grow.
        </p>
        <button className="donate-button">Donate Now</button>
      </div>
      <div className="promo-image">
        <img src="https://framerusercontent.com/images/oEdp0eCeNQ9LkvOgjP6ONKKjLs0.png?scale-down-to=1024" alt="Children raising hands" />
      </div>
    </div> 
  );
};

export default EducationPromo;
