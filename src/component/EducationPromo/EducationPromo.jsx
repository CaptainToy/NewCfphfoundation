import React from 'react';
import './EducationPromo.css'; // Import your CSS file

const EducationPromo = () => {
  return (
    <div className="education-promo-container">
      <div className="text-content">
        <h1>Empowering Children with Access to Quality Education</h1>
        <p>
          Education transforms lives, but millions of children worldwide still
          lack access to the resources they need to learn and grow.
        </p>
      </div>
      <div className="cta-button">
        <button>Donate Now</button>
      </div>
    </div>
  );
};

export default EducationPromo;