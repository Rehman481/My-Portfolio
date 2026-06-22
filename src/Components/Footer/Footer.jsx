import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-content">

          <div className="footer-section">

            <h3 className="footer-title">Rehman Asif</h3>
            <p className="footer-description">
              
              Aspiring Software Engineer | B.Tech Student
              Building scalable web applications with modern technologies.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>

            <ul className="footer-links">

              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">

            <h4 className="footer-heading">Connect</h4>

            <div className="social-links">

              <a href="https://github.com/Rehman481" target="_blank" rel="noopener noreferrer">GitHub</a>

              <a href="https://www.linkedin.com/in/rehman-asif-6a0425418" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              {/* Twitter removed */}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Rehman Asif. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;