import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Importing social media icons
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import '../../style/UserDashboard/Footer.css'; // External CSS for additional custom styling

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start mt-5">
      <div className="container p-4">
        {/* Company Information */}
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4">
            <h5 className="text-uppercase">XLAYN</h5>
            <p>Your tagline or brief description about the company goes here.</p>
          </div>

          {/* Navigation Links */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-uppercase">Navigation</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-dark">Home</a></li>
              <li><a href="/products" className="text-dark">Products</a></li>
              <li><a href="/about-us" className="text-dark">About Us</a></li>
              <li><a href="/contact" className="text-dark">Contact Us</a></li>
              <li><a href="/privacy" className="text-dark">Privacy Policy</a></li>
              <li><a href="/terms" className="text-dark">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-uppercase">Contact Us</h5>
            <p>Email: info@xlayn.com</p>
            <p>Phone: +1 (234) 567-8901</p>
            <p>Address: 123 Dry Fish St, Seafood City</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="social-icons mb-4">
          <h5 className="text-uppercase">Follow Us</h5>
          <a href="https://facebook.com" className="me-2" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://twitter.com" className="me-2" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://instagram.com" className="me-2" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://linkedin.com" className="me-2" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="text-center p-3" style={{ backgroundColor: '#f8f9fa' }}>
        © {new Date().getFullYear()} XLAYN. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
