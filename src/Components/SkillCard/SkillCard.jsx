import React from 'react';
import './SkillCards.css';

const SkillCard = ({ icon, title, description, level }) => {
  return (
    <div className="skill-card">
      <div className="skill-icon">{icon}</div>
      <h3 className="skill-title">{title}</h3>
      <p className="skill-description">{description}</p>
      <div className="skill-level">
        <div className="skill-level-bar">
          <div 
            className="skill-level-fill" 
            style={{ width: `${level}%` }}
          ></div>
        </div>
        <span className="skill-level-text">{level}%</span>
      </div>
    </div>
  );
};

export default SkillCard;