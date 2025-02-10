import React from 'react';
import './testimonials.css'; 

const testimonials = [
  {
    name: 'Brooklyn Simmons',
    company: 'waves',
    image: 'https://framerusercontent.com/images/ErbmgkTkdj4QiwxhvrYrPXGIZM.svg', 
    quote: 'This charity provided critical medical aid to our community. The healthcare support.',
    star: 5,
  },
  {
    name: 'Madison Carter',
    company: 'William Henry',
    image: 'https://framerusercontent.com/images/ErbmgkTkdj4QiwxhvrYrPXGIZM.svg',
    quote: 'I\'ve had the privilege to volunteer here, and seeing the difference we make in life.',
    star: 3,
  },
  {
    name: 'Riley Bennett',
    company: 'swift ',
    image: 'https://framerusercontent.com/images/ErbmgkTkdj4QiwxhvrYrPXGIZM.svg',
    quote: 'Their transparency inspires us to give more and make a bigger real impact together.',
    star: 4,
  },
  {
    name: 'Kendall Monroe',
    company: 'Craftgram',
    image: 'https://framerusercontent.com/images/ErbmgkTkdj4QiwxhvrYrPXGIZM.svg',
    quote: 'After losing our home to a flood, they helped us rebuild and find stability again.',
    star: 4,
  },
  {
    name: 'Sydney Parker',
    company: 'Lum Labs',
    image: 'https://framerusercontent.com/images/ErbmgkTkdj4QiwxhvrYrPXGIZM.svg',
    quote: 'My children now have access to clean water and meals thanks to this organization.',
    star: 5,
  },
  {
    name: 'Jordan Blake',
    company: 'TrendLyft',
    image: 'https://framerusercontent.com/images/ErbmgkTkdj4QiwxhvrYrPXGIZM.svg',
    quote: 'Knowing my monthly donations supporting children\'s education gives me immense.',
    star: 3,
  }
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
            <img src={testimonial.image} alt={testimonial.name} className="profile-image" />
            <div className="details">
              <h3 className="name">{testimonial.name}</h3>
              <p className="company">{testimonial.company}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialGrid;
