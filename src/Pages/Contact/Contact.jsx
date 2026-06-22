import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      // Send email using EmailJS or FormSubmit
      const response = await fetch('https://formsubmit.co/ajax/rehmanasif1133@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        setTimeout(() => {
          setStatus('');
        }, 5000);
      } else {
        setStatus('error');
        setTimeout(() => {
          setStatus('');
        }, 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => {
        setStatus('');
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'rehmanasif1133@gmail.com',
      link: 'mailto:rehmanasif1133@gmail.com',
      color: '#ff6b6b'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+92 4866 02919',
      link: 'tel:+92486602919',
      color: '#ffd93d'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Lahore, Pakistan',
      link: '#',
      color: '#4ade80'
    }
  ];

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
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.animate-section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="contact">
      {/* Animated Background */}
      <div className="contact-background">
        <div className="bg-gradient"></div>
        <div className="bg-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
        <div className="bg-particles">
          <span className="particle" style={{ animationDelay: '0s' }}>✦</span>
          <span className="particle" style={{ animationDelay: '0.3s' }}>✦</span>
          <span className="particle" style={{ animationDelay: '0.6s' }}>✦</span>
          <span className="particle" style={{ animationDelay: '0.9s' }}>✦</span>
          <span className="particle" style={{ animationDelay: '1.2s' }}>✦</span>
        </div>
      </div>

      <div className="contact-container">
        {/* Header with Animation */}
        <div className="contact-header animate-section">
          <div className="header-badge">
            <span className="badge-icon">💬</span>
            <span>Contact</span>
          </div>
          <h1 className="contact-title">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="contact-subtitle">Have a project in mind? Let's talk!</p>
          <div className="header-line"></div>
        </div>

        <div className="contact-wrapper">
          {/* Contact Info */}
          <div className="contact-info animate-section">
            <div className="info-header">
              <span className="info-header-icon">📌</span>
              <h2>Contact Information</h2>
            </div>
            <p className="info-description">
              Feel free to reach out through any of the channels below.
              I'll get back to you as soon as possible!
            </p>

            <div className="info-items">
              {contactInfo.map((item, index) => (
                <div 
                  key={index} 
                  className="info-item animate-section"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="info-icon-wrapper" style={{ background: `${item.color}15`, borderColor: `${item.color}30` }}>
                    <span className="info-icon">{item.icon}</span>
                  </div>
                  <div className="info-content">
                    <h4>{item.title}</h4>
                    <a href={item.link} style={{ color: item.color }}>{item.value}</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-connect animate-section">
              <h3>Connect with me</h3>
              <div className="social-icons">
                <a href="https://github.com/Rehman481" target="_blank" rel="noopener noreferrer" className="social-icon github">
                  <span>🐙</span>
                  <span className="social-label">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/rehman-asif-6a0425418" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                  <span>🔗</span>
                  <span className="social-label">LinkedIn</span>
                </a>
                  </div>
            </div>
          </div>

         
          <div className="contact-form-wrapper animate-section" ref={formRef}>
            <div className="form-header">
              <span className="form-header-icon">✉️</span>
              <h2>Send a Message</h2>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className={`form-group ${focusedField === 'name' ? 'focused' : ''}`}>
                <label htmlFor="name">
                  <span className="label-icon">👤</span>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  placeholder="John Doe"
                  required
                />
                <div className="input-line"></div>
              </div>

              <div className={`form-group ${focusedField === 'email' ? 'focused' : ''}`}>
                <label htmlFor="email">
                  <span className="label-icon">📧</span>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  placeholder="john@example.com"
                  required
                />
                <div className="input-line"></div>
              </div>

              <div className={`form-group ${focusedField === 'subject' ? 'focused' : ''}`}>
                <label htmlFor="subject">
                  <span className="label-icon">📝</span>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => handleFocus('subject')}
                  onBlur={handleBlur}
                  placeholder="Project Inquiry"
                  required
                />
                <div className="input-line"></div>
              </div>

              <div className={`form-group ${focusedField === 'message' ? 'focused' : ''}`}>
                <label htmlFor="message">
                  <span className="label-icon">💭</span>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  placeholder="Tell me about your project..."
                  rows="5"
                  required
                />
                <div className="input-line"></div>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${status === 'sending' ? 'sending' : ''}`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <span className="btn-icon">🚀</span>
                    Send Message
                    <span className="btn-arrow">→</span>
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="success-message">
                  <span className="success-icon">✅</span>
                  <div>
                    <strong>Message sent successfully!</strong>
                    <p>I'll get back to you soon.</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="error-message">
                  <span className="error-icon">❌</span>
                  <div>
                    <strong>Failed to send message!</strong>
                    <p>Please try again or email me directly at rehmanasif1133@gmail.com</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;