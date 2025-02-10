import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import './ImpactCards.css';

const ImpactCard = ({ number, text, description, bgColor, imgSrc, showIcon }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className={`impact-card ${bgColor}`}>
      <div>
        <h2 className="impact-number">
          {isVisible ? <CountUp end={number} duration={2} /> : '0'}
          {typeof number === 'number' ? 'k' : ''}
        </h2>
        <p className="impact-text">{text}</p>
      </div>

      {imgSrc && (
        <div className="impact-image-con">
          <img src={imgSrc} alt={text} className={`impact-image impact-image-${bgColor}`} />
          {showIcon && (
            <p className="impact-icon">
              <i className="bi bi-arrow-right"></i>
            </p>
          )}
        </div>
      )}
      
      <p className="impact-description">{description}</p>
    </div>
  );
};

const ImpactCards = () => {
  const impactData = [
    {
      number: 200,
      text: "Meals Distributed",
      description: "Ensuring food security for vulnerable families and individuals.",
      bgColor: "red-bg",
      imgSrc: "https://framerusercontent.com/images/GufycZUAYfZyHkpnv1M0kXT5c.png",
    },
    {
      number: 10000,
      text: "Individuals Supported",
      description: "Providing resources and aid to those in need. Addressing education and health.",
      bgColor: "black-bg",
      imgSrc: "https://framerusercontent.com/images/rrF0ZMgf5WdsgiDgfNDyKcM.png",
    },
    {
      number: 300,
      text: "Homes rebuilt successfully",
      description: "Giving communities access to safe homes and future. Helping families restore lives.",
      bgColor: "yellow-bg",
      imgSrc: "https://framerusercontent.com/images/3CMcl0tiDC4MBT0srxF6tYiGyI.png?scale-down-to=512",
    },
  ];

  return (
    <div className="impact-container">
      <div className="impact-grid">
        {impactData.map((card, index) => (
          <ImpactCard key={index} {...card} showIcon={index === 0} />
        ))}
      </div>
    </div>
  );
};

export default ImpactCards;
