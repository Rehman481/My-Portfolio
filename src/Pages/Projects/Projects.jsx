import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import projectsData from '../../data/projectsData';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const headerRef = useRef(null);

  // Categories - Only ML/AI, Web Development, All
  const categories = [
    { id: 'all', label: 'All', icon: '📂' },
    { id: 'ml-ai', label: 'ML/AI', icon: '🤖' },
    { id: 'web-dev', label: 'Web Development', icon: '🌐' }
  ];

  // Map project categories to new category system
  const getProjectCategory = (project) => {
    if (project.category === 'ml-ai' || 
        project.title.includes('Recommendation') || 
        project.title.includes('Data') ||
        project.title.includes('Movie')) {
      return 'ml-ai';
    }
    if (project.category === 'frontend' || 
        project.category === 'fullstack' || 
        project.category === 'web-dev' ||
        project.title.includes('Library') ||
        project.title.includes('Netflix') ||
        project.title.includes('Gemini') ||
        project.title.includes('REST')) {
      return 'web-dev';
    }
    return project.category;
  };

  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => getProjectCategory(p) === filter);

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const sections = document.querySelectorAll('.animate-section');
    sections.forEach((section) => observer.observe(section));

    const cards = document.querySelectorAll('.project-card-wrapper');
    cards.forEach((card, index) => {
      card.style.setProperty('--delay', `${index * 0.08}s`);
      observer.observe(card);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      cards.forEach((card) => observer.unobserve(card));
    };
  }, [filter]);

  return (
    <div className="projects">
      {isLoading && (
        <div className="loader-overlay">
          <div className="loader">
            <div className="loader-ring"></div>
            <div className="loader-ring"></div>
            <div className="loader-ring"></div>
            <div className="loader-text">Loading Projects...</div>
          </div>
        </div>
      )}

      <div className="projects-container">
        {/* Header with Animation */}
        <div className="projects-header animate-section" ref={headerRef}>
          <div className="header-glow"></div>
          <div className="header-badge">
            <span className="badge-icon">💻</span>
            <span>Portfolio</span>
          </div>
          <h1 className="projects-title">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="projects-subtitle">A showcase of my work and skills</p>
          <div className="header-line"></div>
          
          {/* Animated floating particles */}
          <div className="header-particles">
            <span className="particle" style={{ animationDelay: '0s' }}>✦</span>
            <span className="particle" style={{ animationDelay: '0.5s' }}>✦</span>
            <span className="particle" style={{ animationDelay: '1s' }}>✦</span>
            <span className="particle" style={{ animationDelay: '1.5s' }}>✦</span>
            <span className="particle" style={{ animationDelay: '2s' }}>✦</span>
          </div>
        </div>

        {/* Category Filter with Animation */}
        <div className="filter-wrapper animate-section">
          <div className="filter-container">
            {categories.map((category, index) => (
              <button
                key={category.id}
                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                onClick={() => {
                  setFilter(category.id);
                  // Reset card animations
                  document.querySelectorAll('.project-card-wrapper').forEach(card => {
                    card.classList.remove('visible');
                    setTimeout(() => card.classList.add('visible'), 50);
                  });
                }}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="filter-icon">{category.icon}</span>
                {category.label}
                {filter === category.id && <span className="filter-dot"></span>}
              </button>
            ))}
          </div>
          <div className="filter-stats">
            <span className="filter-count">{filteredProjects.length}</span>
            <span className="filter-label">projects found</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid-wrapper animate-section">
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="project-card-wrapper animate-section"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                <div className="card-hover-effect">
                  <div className="card-glow"></div>
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    tech={project.tech}
                    github={project.github}
                    featured={project.featured}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="no-projects animate-section">
            <div className="no-projects-icon">🔍</div>
            <h3>No projects found</h3>
            <p>Try selecting a different category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;