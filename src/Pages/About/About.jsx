import React, { useEffect, useRef, useState } from 'react';
import SkillCard from '../../Components/SkillCard/SkillCard';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const bioRef = useRef(null);
  const skillsRef = useRef(null);
  const timelineRef = useRef(null);

  const skills = [
    {
      icon: '🐍',
      title: 'Python',
      description: 'Expert in Python development with NumPy, Pandas, Scikit-learn, and OpenCV for data science and ML.',
      level: 90
    },
    {
      icon: '🔵',
      title: 'C# / ASP.NET',
      description: 'Building robust web applications with ASP.NET Core, C#, and SQL Server.',
      level: 85
    },
    {
      icon: '⚛️',
      title: 'React.js',
      description: 'Creating dynamic and responsive user interfaces with React, Vite, and modern hooks.',
      level: 80
    },
    {
      icon: '🗄️',
      title: 'SQL & MongoDB',
      description: 'Database design, complex SQL queries, and NoSQL database management with MongoDB.',
      level: 82
    },
    {
      icon: '🚀',
      title: 'Flask & FastAPI',
      description: 'Building scalable REST APIs and web services with Flask and FastAPI.',
      level: 85
    },
    {
      icon: '📊',
      title: 'Data Science',
      description: 'Data analysis, visualization, and machine learning using Python libraries.',
      level: 75
    }
  ];

  // Typing animation effect
  useEffect(() => {
    const text = "I'm Rehman Asif, a passionate Software Engineering student at Punjab University College of Information Technology (PUCIT).";
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setTypedText(prev => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.animate-section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="about">
      <div className="about-container">
        {/* Hero Section with fade-in */}
        <div className="about-hero animate-section">
          <div className="hero-glow"></div>
          <h1 className="about-title">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="about-subtitle">Aspiring Software Engineer | B.Tech Student</p>
          <div className="hero-line"></div>
        </div>

        {/* Bio Section with typing animation */}
        <div className="about-bio animate-section" ref={bioRef}>
          <div className="bio-content">
            <div className="bio-header">
              <span className="bio-icon">👨‍💻</span>
              <h2>Who I Am</h2>
            </div>
            
            <div className="bio-text">
              <p className="typing-text">{typedText}</p>
              <span className="cursor-blink">|</span>
            </div>
            
            <p className="bio-second">
              I'm deeply interested in building scalable web applications and APIs, with a 
              particular focus on software development and system design. I believe in writing 
              clean, efficient code and continuously expanding my technical skills.
            </p>
            
            <div className="bio-details">
              <div className="bio-item">
                <span className="bio-label">📍 Location</span>
                <span className="bio-value">Lahore, Pakistan</span>
              </div>
              <div className="bio-item">
                <span className="bio-label">🎓 Education</span>
                <span className="bio-value">B.Tech Software Engineering</span>
              </div>
              <div className="bio-item">
                <span className="bio-label">🏛️ University</span>
                <span className="bio-value">PUCIT, Punjab University</span>
              </div>
            </div>
          </div>
        </div>

       
        <div className="about-skills animate-section" ref={skillsRef}>
          <div className="section-header">
            <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
            <p className="section-subtitle">Technologies I work with</p>
            <div className="section-line"></div>
          </div>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="skill-item animate-section"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <SkillCard
                  icon={skill.icon}
                  title={skill.title}
                  description={skill.description}
                  level={skill.level}
                />
              </div>
            ))}
          </div>
        </div>

       
        <div className="about-experience animate-section" ref={timelineRef}>
          <div className="section-header">
            <h2 className="section-title">Education & <span className="gradient-text">Experience</span></h2>
            <div className="section-line"></div>
          </div>
          
          <div className="timeline">
            <div className="timeline-item animate-section">
              <div className="timeline-dot">
                <span className="dot-pulse"></span>
              </div>
              <div className="timeline-content">
                <div className="timeline-icon">🎓</div>
                <h3>Software Engineering</h3>
                <span className="timeline-date">Punjab University College of Information Technology (PUCIT)</span>
                <p className="timeline-desc">Pursuing B.Tech in Software Engineering with focus on full-stack development.</p>
              </div>
            </div>

            <div className="timeline-item animate-section">
              <div className="timeline-dot">
                <span className="dot-pulse"></span>
              </div>
              <div className="timeline-content">
                <div className="timeline-icon">⚡</div>
                <h3>Backend Development</h3>
                <span className="timeline-date">ASP.NET, Flask & FastAPI</span>
                <p className="timeline-desc">Built scalable web applications and REST APIs using modern backend frameworks.</p>
              </div>
            </div>

            <div className="timeline-item animate-section">
              <div className="timeline-dot">
                <span className="dot-pulse"></span>
              </div>
              <div className="timeline-content">
                <div className="timeline-icon">🎨</div>
                <h3>Frontend Development</h3>
                <span className="timeline-date">React.js, HTML, CSS, Bootstrap</span>
                <p className="timeline-desc">Created responsive and interactive user interfaces with modern frontend technologies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;