import React from 'react';
import './testimonials.css'; 


const testimonials = [
  {
    name: 'Brooklyn Simmons',
    company: 'Beneficiary',
    image: 'https://framerusercontent.com/images/ErbmgkTkdj4QiwxhvrYrPXGIZM.svg', 
    quote: 'CFPH Foundation has helped me and my family during tough times. Thank you!',
    star: 5,
  },
  {
    name: 'Madison Carter',
    company: 'Volunteer',
    image: 'https://framerusercontent.com/images/ErbmgkTkdj4QiwxhvrYrPXGIZM.svg',
    quote: 'Volunteering here has been an amazing experience',
    star: 3,
  },
  {
    name: 'Riley Bennett',
    company: 'Beneficiary ',
    image: 'https://framerusercontent.com/images/ErbmgkTkdj4QiwxhvrYrPXGIZM.svg',
    quote: 'The CFPH Foundation has been a tremendous support for me and my family.',
    star: 4,
  },
];

const TestimonialGrid = () => {
  return (
    <div className="testimonial-grid">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial-card">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < testimonial.star ? "star active" : "star inactive"}>
                &#9733;
              </span>
            ))}
          </div>
          <p className="quote">"{testimonial.quote}"</p>
          <div className="testimonial-info">
            {/* <img src={testimonial.image} alt={testimonial.name} className="profile-image" /> */}
            <div className="details">
              <h3 className="name">{testimonial.company}</h3>
              {/* <p className="company">{testimonial.company}</p> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialGrid;
