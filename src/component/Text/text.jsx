import "./text.css";

const Textcon = ({ 
  imgSrc = "/crown.png", 
  badgeText = "Impactful metrics", 
  title = "Programs that change lives", 
  subtitle = "Together, we can make a real impact in communities around the world. Help us bring hope and support.",
  background = "white" // Default background color
}) => {
  return (
    <div className="impact-container" >
      <div className="text-impact-badge">
        <div className="text-badge-icon" style={{ background }}>
          <img src={imgSrc} alt="Badge Icon" />
        </div>
        <p className="text-badge-text">{badgeText}</p>
      </div>
      <h2 className="text-impact-title">{title}</h2>
      <p className="text-impact-subtitle">{subtitle}</p>
    </div>
  );
};

export default Textcon;
