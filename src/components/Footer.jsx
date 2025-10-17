import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Cihanser Caliskan</h3>
            <p>Software Engineer</p>
            <p>Passionate about solving and optimizing problems</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <ul className="contact-info">
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:cihansercaliskan@gmail.com">cihansercaliskan@gmail.com</a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Izmir, Turkey</span>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Follow Me</h4>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/cihanser-caliskan/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/CihanserC" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:cihansercaliskan@gmail.com" className="social-link" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Cihanser Caliskan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
