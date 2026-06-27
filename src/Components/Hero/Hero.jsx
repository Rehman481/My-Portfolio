import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import projectsData from '../../data/projectsData';

const Hero = () => {
  
  const projectsCount = projectsData.length;
  const technologiesCount = [...new Set(projectsData.flatMap(p => p.tech))].length;
  
  const heroRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    // Animate stats on load
    const animateStats = () => {
      const statNumbers = document.querySelectorAll('.stat-number');
      statNumbers.forEach((stat) => {
        const target = parseInt(stat.dataset.target);
        let current = 0;
        const increment = target / 40;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          stat.textContent = Math.floor(current) + '+';
        }, 30);
      });
    };

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('hero-visible');
            if (entry.target.classList.contains('hero-content')) {
              animateStats();
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      observer.observe(heroContent);
    }

    
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      const orbs = document.querySelectorAll('.orb');
      orbs.forEach((orb, index) => {
        const speed = 0.02 + (index * 0.01);
        const moveX = (x - 0.5) * speed * 100;
        const moveY = (y - 0.5) * speed * 100;
        orb.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + (index * 0.05)})`;
      });

      const pattern = document.querySelector('.bg-pattern');
      if (pattern) {
        const moveX = (x - 0.5) * 20;
        const moveY = (y - 0.5) * 20;
        pattern.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
     
      <div className="hero-background">
        <div className="bg-gradient"></div>
        <div className="bg-pattern"></div>
        <div className="bg-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
          <div className="orb orb-4"></div>
        </div>
        <div className="bg-grid"></div>
        
       
        <div className="sparkle sparkle-1">✦</div>
        <div className="sparkle sparkle-2">✦</div>
        <div className="sparkle sparkle-3">✦</div>
        <div className="sparkle sparkle-4">✦</div>
        <div className="sparkle sparkle-5">✦</div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          {/* Animated Badge */}
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">Open to Opportunities</span>
          </div>

          <h1 className="hero-title">
            <span className="title-greeting">Hi, I'm</span>

            <span className="gradient-text">Rehman Asif</span>
          </h1>
          
          <p className="hero-subtitle">
            Aspiring Software Engineer | B.Tech Student
          </p>
          
          <p className="hero-description">
            Software Engineering student with hands-on experience in backend development 
            using ASP.NET, Flask, and FastAPI. Passionate about building scalable web 
            applications and APIs with a strong interest in software development and 
            system design.
          </p>

          <div className="hero-buttons">

            <Link to="/projects" className="btn btn-primary">
              <span className="btn-icon">🚀</span>
              View Projects
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              <span className="btn-icon">💬</span>
              Contact Me
            </Link>
          </div>

          <div className="hero-stats" ref={statsRef}>

            <div className="stat-item">

              <span className="stat-number" data-target={projectsCount}>0+</span>
              <span className="stat-label">Projects</span>
              <div className="stat-bar">
                <div className="stat-bar-fill"></div>
              </div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number" data-target={technologiesCount}>0+</span>
              <span className="stat-label">Technologies</span>
              <div className="stat-bar">
                <div className="stat-bar-fill"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <div className="hero-scroll">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <div className="scroll-arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;