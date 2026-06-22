import React, { useState, useEffect } from 'react';
import './ProjectCards.css';

// GitHub SVG Icon
const GitHubIcon = () => (
  <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
  </svg>
);


const getProjectIcon = (title) => {
  const iconMap = {
    'Movie Recommendation System': '🎬',
    'Online Library Management System': '📚',
    'Netflix Clone': '📺',
    'Gemini AI Chat Clone': '🤖',
    
  };
  return iconMap[title] || '🚀';
};


const getProjectGradient = (title) => {
  const gradientMap = {
    'Movie Recommendation System': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'Online Library Management System': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'Netflix Clone': 'linear-gradient(135deg, #e52d27 0%, #b31217 100%)',
    'Gemini AI Chat Clone': 'linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%)',
    'REST API Development': 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
    'Data Analysis Dashboard': 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
  };
  return gradientMap[title] || 'linear-gradient(135deg, #ff6b6b, #ffd93d)';
};

const ProjectCard = ({ title, description, image, tech, github, featured }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  
  const projectIcon = getProjectIcon(title);
  const projectGradient = getProjectGradient(title);

  
  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
  }, [image]);

  
  const handleImageError = () => {
    setImageError(true);
  };

  // Check if github link exists and is valid
  const hasGithub = github && github !== '#' && github !== '';

  return (
    <div 
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-image">
        
        <div 
          className="image-gradient-bg"
          style={{ background: projectGradient }}
        ></div>
        
        
        <div className={`image-placeholder ${!imageLoaded || imageError ? 'visible' : ''}`}>
          <span className="placeholder-icon">{projectIcon}</span>

          <span className="placeholder-text">{title}</span>
        </div>

        {/* Actual Image */}
        <img 
          src={image} 
          alt={title} 
          onError={handleImageError}
          className={`project-img ${imageLoaded && !imageError ? 'loaded' : ''}`}
          style={{ 
            opacity: imageLoaded && !imageError ? 1 : 0,
            transform: isHovered ? 'scale(1.08)' : 'scale(1)'
          }}
        />

        
        <div className="project-overlay">
          <div className="overlay-content">
            <div className="overlay-icon">{projectIcon}</div>
            <h4 className="overlay-title">{title}</h4>
            {hasGithub && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                <span className="link-icon"><GitHubIcon /></span>
                View Code
              </a>
            )}
          </div>
        </div>


        <div className={`image-border ${isHovered ? 'active' : ''}`}></div>
      </div>
      
      <div className="project-info">
        <div className="info-header">
          <span className="info-icon">{projectIcon}</span>
          <h3 className="project-title">{title}</h3>
        </div>
        <p className="project-description">{description}</p>
        <div className="project-tech">
          {tech.map((t, index) => (
            <span key={index} className="tech-tag">{t}</span>
          ))}
        </div>
       
       
        {hasGithub && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="github-bottom-link">
            <span className="github-icon-wrapper"><GitHubIcon /></span>
            <span className="github-text">View on GitHub</span>
            <span className="github-arrow">→</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;