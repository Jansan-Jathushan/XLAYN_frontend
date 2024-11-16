// import React from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope, faAnchor } from '@fortawesome/free-solid-svg-icons';

// const Footer = () => {
//   const footerStyle = {
//     background: 'linear-gradient(45deg, #1a365d 0%, #2c5282 100%)',
//     color: '#e2e8f0',
//     padding: '4rem 0 2rem',
//     boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.1)',
//   };

//   const headingStyle = {
//     color: '#fbd38d',
//     fontWeight: 'bold',
//     marginBottom: '1.5rem',
//     fontSize: '1.2rem',
//     textTransform: 'uppercase',
//     letterSpacing: '1px',
//   };

//   const paragraphStyle = {
//     fontSize: '1rem',
//     lineHeight: '1.6',
//     color: '#cbd5e0',
//   };

//   const socialButtonStyle = {
//     backgroundColor: 'transparent',
//     border: '2px solid #4299e1',
//     borderRadius: '50%',
//     width: '40px',
//     height: '40px',
//     display: 'inline-flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: '0.5rem',
//     transition: 'all 0.3s ease',
//   };

//   const linkStyle = {
//     color: '#cbd5e0',
//     textDecoration: 'none',
//     transition: 'color 0.3s ease',
//   };

//   const inputStyle = {
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     border: 'none',
//     borderRadius: '20px',
//     color: '#ffffff',
//     padding: '0.5rem 1rem',
//   };

//   const subscribeButtonStyle = {
//     backgroundColor: '#48bb78',
//     border: 'none',
//     borderRadius: '20px',
//     padding: '0.5rem 1.5rem',
//     fontWeight: 'bold',
//     transition: 'background-color 0.3s ease',
//   };

//   return (
//     <footer style={footerStyle}>
//       <Container>
//         <Row>
//           <Col lg={4} md={6} className="mb-4 mb-lg-0">
//             <h5 style={headingStyle}>
//               <FontAwesomeIcon icon={faAnchor} style={{ marginRight: '0.5rem' }} />
//               XLAYN
//             </h5>
//             <p style={paragraphStyle}>Bringing the ocean's finest to your table. Quality dry fish products sourced sustainably and delivered globally.</p>
//             <div className="mt-4">
//               {[
//                 { icon: faFacebook, href: 'https://facebook.com' },
//                 { icon: faTwitter, href: 'https://twitter.com' },
//                 { icon: faInstagram, href: 'https://instagram.com' },
//                 { icon: faLinkedin, href: 'https://linkedin.com' },
//               ].map((social, index) => (
//                 <Button 
//                   key={index}
//                   variant="outline-light" 
//                   href={social.href} 
//                   target="_blank"
//                   style={socialButtonStyle}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.backgroundColor = '#4299e1';
//                     e.currentTarget.style.borderColor = '#4299e1';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.backgroundColor = 'transparent';
//                     e.currentTarget.style.borderColor = '#4299e1';
//                   }}
//                 >
//                   <FontAwesomeIcon icon={social.icon} />
//                 </Button>
//               ))}
//             </div>
//           </Col>
//           <Col lg={4} md={6} className="mb-4 mb-lg-0">
//             <h5 style={headingStyle}>Quick Links</h5>
//             <ul className="list-unstyled">
//               {[
//                 { name: 'Home', path: '/' },
//                 { name: 'Products', path: '/products' },
//                 { name: 'About Us', path: '/about-us' },
//                 { name: 'Contact Us', path: '/contact-us' },
//                 { name: 'Privacy Policy', path: '/privacy-policy' },
//                 { name: 'Terms of Service', path: '/terms-of-service' },
//               ].map((link, index) => (
//                 <li key={index} style={{ marginBottom: '0.5rem' }}>
//                   <a 
//                     href={link.path} 
//                     style={linkStyle}
//                     onMouseEnter={(e) => e.target.style.color = '#fbd38d'}
//                     onMouseLeave={(e) => e.target.style.color = '#cbd5e0'}
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </Col>
//           <Col lg={4} md={12}>
//             <h5 style={headingStyle}>Newsletter</h5>
//             <p style={paragraphStyle}>Stay updated with our latest products and offers.</p>
//             <Form>
//               <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Control type="email" placeholder="Enter email" style={inputStyle} />
//               </Form.Group>
//               <Button 
//                 variant="primary" 
//                 type="submit" 
//                 style={subscribeButtonStyle}
//                 onMouseEnter={(e) => e.target.style.backgroundColor = '#38a169'}
//                 onMouseLeave={(e) => e.target.style.backgroundColor = '#48bb78'}
//               >
//                 Subscribe
//                 <FontAwesomeIcon icon={faEnvelope} style={{ marginLeft: '0.5rem' }} />
//               </Button>
//             </Form>
//           </Col>
//         </Row>
//         <hr style={{ borderColor: 'rgba(255, 255, 255, 0.1)', margin: '2rem 0' }} />
//         <Row>
//           <Col className="text-center">
//             <p style={{ ...paragraphStyle, marginBottom: 0 }}>&copy; {new Date().getFullYear()} XLAYN. All rights reserved.</p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;



import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import '../../style/UserDashboard/Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="grid-container">
          {/* Company Info */}
          <div className="company-info">
            <a href="/" className="logo-link">
              <img src="/xlayn-logo.png" alt="XLAYN" className="logo" />
            </a>
            <p className="company-description">
              Streamlining the export and purchase of premium-quality dry fish with reliable quality, efficient logistics,
              and sustainable practices.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <Facebook className="social-icon" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="social-link">
                <Twitter className="social-icon" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="social-link">
                <Linkedin className="social-icon" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="social-link">
                <Instagram className="social-icon" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h3 className="section-title">CONTACT US</h3>
            <div className="contact-details">
              <p>Headquarters: 123 Export Drive,</p>
              <p>Harbor Town, Miami, FL 33101, USA</p>
              <p>Phone: +1-800-123-4567</p>
              <p>Email: support@xlayn.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="quick-links">
            <h3 className="section-title">QUICK LINKS</h3>
            <nav className="link-list">
              <a href="/" className="link-item">Home</a>
              <a href="/about" className="link-item">About Us</a>
              <a href="/products" className="link-item">Products</a>
              <a href="/contact" className="link-item">Contact Us</a>
              <a href="/faqs" className="link-item">FAQs</a>
            </nav>
          </div>

          {/* Resources */}
          <div className="resources">
            <h3 className="section-title">RESOURCES</h3>
            <nav className="link-list">
              <a href="/quality-assurance" className="link-item">Quality Assurance</a>
              <a href="/export-guidelines" className="link-item">Export Guidelines</a>
              <a href="/shipping-logistics" className="link-item">Shipping & Logistics</a>
              <a href="/compliance" className="link-item">Compliance & Certifications</a>
              <a href="/market-insights" className="link-item">Market Insights</a>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>© 2024 <span className="highlight-text">XLAYN</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
