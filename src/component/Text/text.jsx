import "./text.css"

const Textcon = ({ icon = "bi bi-bookmark-check", badgeText = "Impactful metrics", title = "Programs that change lives", subtitle = "Together, we can make a real impact in communities around the world. Help us bring hope and support." }) => {
  return (
    <div className="impact-container">
      <div className="text-impact-badge">
        <div className="text-badge-icon">
          <i className={icon}></i>
        </div>
        <p className="text-badge-text">{badgeText}</p>
      </div>
      <h2 className="text-impact-title">{title}</h2>
      <p className="text-impact-subtitle">{subtitle}</p>
    </div>
  );
};

export default Textcon;
