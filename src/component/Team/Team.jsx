import React from 'react';
import PropTypes from 'prop-types';
import './Team.css';
import AuntyTayo from '../../assets/AuntyTayo.jpg';
import Bandy from '../../assets/bandy.jpg';
import Tayo from '../../assets/tayp.jpg';
import Pesinpapa from "../../assets/IMG_0282 (1).png";

const Team = ({ team = [] }) => {
  const defaultTeam = [
    {
      name: 'Dele Oduyemi',
      role: 'Executive Director',
      imageUrl: Bandy,
      instagram: "",
      facebook: "",
    },
    {
      name: 'Tayo Oduyemi',
      role: 'Chief Executive Officer',
      imageUrl: AuntyTayo,
      instagram: "",
      facebook: "",
    },
    {
      name: 'Akintayo Adesanya',
      role: 'General Secretary',
      imageUrl: Tayo,
      instagram: "",
      facebook: "",
    },
    {
      name: 'Shadrack Akinola',
      role: 'Project/PR Manager',
      imageUrl: Pesinpapa,
      instagram: "",
      facebook: "",
    },
  ];

  return (
    <div className="testimonial-container">
      <div className="home-container">
        {(team.length > 0 ? team : defaultTeam).map((member, index) => (
          <div className="profile-card" key={index}>
            <div className="img-wrapper">
              <img src={member.imageUrl} alt={member.name} />
            </div>
            <div className="caption">
              <h3 className="name">{member.name}</h3>
              <p className="role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Team.propTypes = {
  team: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ),
};

export default Team;
