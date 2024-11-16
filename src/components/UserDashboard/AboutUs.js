import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFish, faShip, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Testimonials from './Testimonials';
export default function AboutUs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://i.ibb.co/71YL6HQ/dry-fis.jpg",
    "https://i.ibb.co/68C9dpD/dryfis2.jpg",
    "https://i.ibb.co/Yt87rsg/dryfish3.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-light">
      {/* Hero Section */}
      <section className="hero-image">
        {slides.map((slide, index) => (
          <div key={index} className={`hero-overlay ${index === currentSlide ? 'd-block' : 'd-none'}`}>
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-100 h-100 object-cover hero-image-filter"
            />
          </div>
        ))}
        <Container className="h-100 d-flex align-items-center justify-content-center text-center text-dark">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-text"
          >
            <h1 className="display-4 font-weight-bold mb-4">About XLAYN</h1>
            <p className="lead">Bringing the Ocean's Finest to Your Table</p>
          </motion.div>
        </Container>
      </section>

      <Container className="py-5">
        {/* Our Story */}
        <Row className="mb-5 align-items-center">
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-weight-bold mb-4">Our Story</h2>
              <p className="lead">
                Founded in 2020, XLAYN was born from a passion for high-quality seafood and a desire to connect local suppliers with international markets.
              </p>
              <p className="lead">
                We embarked on this journey to offer customers the best dry fish products while supporting sustainable fishing practices.
              </p>
            </motion.div>
          </Col>
          <Col md={6}>
            <div className="position-relative">
              <img src="https://i.ibb.co/5WbJQbF/Copy-of-Obito-the-broken-hero.jpg" alt="Journey" className="img-fluid rounded shadow-lg" />
            </div>
          </Col>
        </Row>

        {/* Mission and Vision */}
        <Row className="mb-5 align-items-center">
          <Col md={6}>
            <div className="position-relative">
              <img src="https://i.ibb.co/5WbJQbF/Copy-of-Obito-the-broken-hero.jpg" alt="Mission & Vision" className="img-fluid rounded shadow-lg" />
            </div>
          </Col>
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-weight-bold mb-4">Mission & Vision</h2>
              <h3 className="h5 font-weight-bold">Mission</h3>
              <p className="lead">Providing top-quality dry fish, ensuring sustainability and excellence in every transaction.</p>
              <h3 className="h5 font-weight-bold mt-4">Vision</h3>
              <p className="lead">Envisioning a future where every household enjoys premium dry fish while supporting local communities.</p>
            </motion.div>
          </Col>
        </Row>

        {/* Values */}
        <h2 className="text-center font-weight-bold mb-5">Our Values</h2>
        <Row className="justify-content-center text-center">
          {[
  { icon: faFish, title: "Quality", description: "We source only the best products." },
  { icon: faShip, title: "Sustainability", description: "Committed to responsible fishing." },
  { icon: faHandshake, title: "Customer Satisfaction", description: "Excellence in service." }
].map((value, index) => (
  <Col key={index} sm={6} md={4} className="mb-4">
    <motion.div
      whileHover={{ y: -10 }}
      style={{ backgroundColor: "#131842", color: "#FBF6E2" }} // Background and text color
      className="card p-4 shadow"
    >
      <FontAwesomeIcon icon={value.icon} size="3x" className="mb-3" style={{ color: "#ECCEAE" }} />
      <h4 className="font-weight-bold mb-2">{value.title}</h4>
      <p>{value.description}</p>
    </motion.div>
  </Col>
))}


        </Row>

        {/* Team */}
        <h2 className="text-center font-weight-bold mb-5">Meet Our Team</h2>
        <Row>
          {[
            { name: "John Doe", role: "Founder & CEO", image: "/placeholder.svg?height=300&width=300&text=John+Doe" },
            { name: "Jane Smith", role: "Operations Manager", image: "/placeholder.svg?height=300&width=300&text=Jane+Smith" },
            { name: "Mike Johnson", role: "Marketing Director", image: "/placeholder.svg?height=300&width=300&text=Mike+Johnson" }
          ].map((member, index) => (
            <Col key={index} md={4} className="mb-4">
              <motion.div className="team-member shadow-lg" whileHover={{ scale: 1.05 }}>
                <img src={member.image} alt={member.name} className="w-100 rounded" />
                <div className="p-4 text-center">
                  <h4 className="font-weight-bold">{member.name}</h4>
                  <p className="text-muted">{member.role}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
        <Testimonials />

        {/* Contact */}
        <motion.section className="text-center mt-5">
          <h2 className="font-weight-bold mb-4">Get in Touch</h2>
          <p className="lead">We'd love to hear from you! Reach out for any inquiries.</p>
          <p>Email: contact@xlayn.com | Phone: +1 (555) 123-4567</p>
          <div className="social-icons mt-4">
            {[faFacebook, faTwitter, faInstagram, faLinkedin].map((icon, index) => (
              <motion.a key={index} href="#" className="mx-2" whileHover={{ scale: 1.1 }}>
                <FontAwesomeIcon icon={icon} size="2x" />
              </motion.a>
            ))}
          </div>
        </motion.section>
      </Container>
    </div>
  );
}
