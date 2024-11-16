// import React from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import "../../style/UserDashboard/ContactUs.css";

// export default function Component() {
//   return (
//     <div className="contact-page bg-light min-h-screen py-12">
//       <Container>
//         <Row className="justify-content-center">
//           <Col md={10} lg={8}>
//             <div className="text-center mb-8">
//               <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
//               <p className="text-xl text-muted">
//                 Don't be shy. Give us a call or drop us a line. Let's make some magic together.
//               </p>
//             </div>
//             <div className="rounded-lg shadow-lg overflow-hidden" style={{ backgroundColor: '#131842' }}>


//               <Row className="g-0">
//                 <Col md={7} className="p-8">
//                   <h2 className="text-2xl font-semibold text-white mb-6">Send a Message</h2>
//                   <Form>
//                     <Row className="mb-4">
//                       <Col>
//                         <Form.Control
//                           type="text"
//                           placeholder="First Name"
//                           className="bg-white border-0 shadow-[0_0_0_2px_#ECCEAE]"
//                           required
//                         />
//                       </Col>
//                       <Col>
//                         <Form.Control
//                           type="text"
//                           placeholder="Last Name"
//                           className="bg-white border-0 shadow-[0_0_0_2px_#ECCEAE]"
//                           required
//                         />
//                       </Col>
//                     </Row>
//                     <Form.Group className="mb-4" controlId="formPhone">
//                       <Form.Control
//                         type="tel"
//                         placeholder="Phone"
//                         className="bg-white border-0 shadow-[0_0_0_2px_#ECCEAE]"
//                       />
//                     </Form.Group>
//                     <Form.Group className="mb-4" controlId="formEmail">
//                       <Form.Control
//                         type="email"
//                         placeholder="Email"
//                         className="bg-white border-0 shadow-[0_0_0_2px_#ECCEAE]"
//                         required
//                       />
//                     </Form.Group>
//                     <Form.Group className="mb-4" controlId="formCompany">
//                       <Form.Control
//                         type="text"
//                         placeholder="Group or Company"
//                         className="bg-white border-0 shadow-[0_0_0_2px_#ECCEAE]"
//                       />
//                     </Form.Group>
//                     <Form.Group className="mb-4" controlId="formMessage">
//                       <Form.Control
//                         as="textarea"
//                         rows={4}
//                         placeholder="How can we help?"
//                         className="bg-white border-0 shadow-[0_0_0_2px_#ECCEAE]"
//                         required
//                       />
//                     </Form.Group>
//                     <Button
//                       variant="primary"
//                       type="submit"
//                       className="w-100 py-3 bg-[#E68369] border-0 hover:bg-[#d57057] transition-colors duration-300"
//                     >
//                       SUBMIT
//                     </Button>
//                   </Form>
//                 </Col>
//                 <Col md={5} className="bg-[#0f1435] text-white p-8">
//                   <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
//                   <div className="mb-6">
//                     <p className="flex items-center mb-3">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                       </svg>
//                       +1 859-902-8531
//                     </p>
//                     <p className="flex items-center mb-3">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                       </svg>
//                       info@thevocalcompany.com
//                     </p>
//                     <p className="flex items-center">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                       </svg>
//                       123 Music Street, Harmony City, HC 12345
//                     </p>
//                   </div>
//                   <div className="mb-6">
//                     <h4 className="text-lg font-semibold mb-3">Office Hours</h4>
//                     <p className="mb-2">Monday - Friday: 9:00 AM - 5:00 PM</p>
//                     <p>Saturday - Sunday: Closed</p>
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-semibold mb-3">Connect With Us</h4>
//                     <div className="flex space-x-4">
//                       <a href="#" className="text-white hover:text-[#E68369] transition-colors duration-300">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
//                         </svg>
//                       </a>
//                       <a href="#" className="text-white hover:text-[#E68369] transition-colors duration-300">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                         </svg>
//                       </a>
//                       <a href="#" className="text-white hover:text-[#E68369] transition-colors duration-300">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                         </svg>
//                       </a>
//                       <a href="#" className="text-white hover:text-[#E68369] transition-colors duration-300">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
//                         </svg>
//                       </a>
//                     </div>
//                   </div>
//                 </Col>
//               </Row>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//       <footer className="text-center mt-12 text-gray-600">
//         <p>&copy; 2024 The Vocal Company | support@thevocalcompany.com | +1 859-902-8531</p>
//       </footer>
//     </div>
//   );
// }

// import React from "react";
// import { motion } from "framer-motion";
// import "../../style/UserDashboard/ContactUs.css";
// const ContactForm = () => {
//     return (
//         <div className="contact-container">
//             {/* Contact Info Section */}
//             <div className="contact-info">
//                 {[
//                     { icon: "📍", title: "OUR MAIN OFFICE", text: "SoHo 94 Broadway St New York, NY 1001" },
//                     { icon: "📞", title: "PHONE NUMBER", text: "234-9876-5400\n888-0123-4567 (Toll Free)" },
//                     { icon: "📠", title: "FAX", text: "1-234-567-8900" },
//                     { icon: "📧", title: "EMAIL", text: "hello@theme.com" }
//                 ].map((item, index) => (
//                     <motion.div
//                         className="info-box"
//                         key={index}
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.2 }}
//                     >
//                         <div className="icon">{item.icon}</div>
//                         <h3>{item.title}</h3>
//                         <p>{item.text}</p>
//                     </motion.div>
//                 ))}
//             </div>

//             {/* Contact Form Section */}
//             <div className="form-section">
//                 <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
//                     Get in touch
//                 </motion.h2>
//                 <motion.p
//                     className="tagline"
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.7 }}
//                 >
//                     We believe sustainability is vitally important.
//                 </motion.p>
//                 <motion.form
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.9 }}
//                 >
//                     <input type="text" placeholder="Enter your Name" />
//                     <input type="email" placeholder="Enter a valid email address" />
//                     <input type="text" placeholder="Enter your phone number" />
//                     <input type="text" placeholder="Enter subject" />
//                     <textarea placeholder="Enter your message" />
//                     <motion.button
//                         className="submit-btn"
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                     >
//                         SUBMIT
//                     </motion.button>
//                 </motion.form>

//                 {/* Social Media Icons */}
//                 <motion.div
//                     className="social-icons"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 1.2 }}
//                 >
//                     {["facebook", "twitter", "instagram", "linkedin"].map((icon, index) => (
//                         <motion.div
//                             className="social-icon"
//                             key={icon}
//                             whileHover={{ scale: 1.1 }}
//                             whileTap={{ scale: 0.9 }}
//                         >
//                             <i className={`fab fa-${icon}`}></i>
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             </div>
//         </div>
//     );
// };

// export default ContactForm;


import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Printer, Mail } from "lucide-react";
import "../../style/UserDashboard/ContactUs.css";

// Animation configurations
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const backgroundVariants = {
  animate: {
    backgroundPosition: ["0% 0%", "100% 100%"],
    transition: { duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }
  }
};

export default function ContactComponent() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState("");  // To hold form submission status
  const controls = useAnimation();

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/contact/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      
      if (response.ok) {
        setFormData({
          email: "",
          name: "",
          phone: "",
          subject: "",
          message: ""
        });
        window.alert("Form submitted successfully!");
      } else {
        console.error("Error:", data);  // Log the error response body
        setFormStatus(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Submission error:", error);  // Log network or other errors
      setFormStatus("An error occurred while submitting the form.");
    }
  };
  
  

  return (
    <motion.div
      className="contact-container"
      variants={backgroundVariants}
      animate={controls}
    >
      <div className="content-wrapper">
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="contact-content"
        >
          {/* Contact Information Cards */}
          <motion.div variants={stagger} className="contact-info-grid">
            {[
              { icon: <MapPin className="icon" />, title: "OUR MAIN OFFICE", content: "SoHo 94 Broadway St New York, NY 1001" },
              { icon: <Phone className="icon" />, title: "PHONE NUMBER", content: "234-9876-5400\n888-0123-4567 (Toll Free)" },
              { icon: <Printer className="icon" />, title: "FAX", content: "1-234-567-8900" },
              { icon: <Mail className="icon" />, title: "EMAIL", content: "hello@theme.com" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="contact-card"
              >
                <div className="contact-card-icon">
                  {item.icon}
                </div>
                <h3 className="contact-card-title">{item.title}</h3>
                <p className="contact-card-content">{item.content}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form and Social Links */}
          <div className="form-social-container">
            <motion.div variants={fadeIn} className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    className="input-field"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Enter a valid email address"
                    className="input-field"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="input-field"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Enter subject"
                    className="input-field"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>
                <textarea
                  placeholder="Enter your message"
                  rows={6}
                  className="textarea-field"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="submit-button"
                  type="submit"
                >
                  SUBMIT
                </motion.button>
              </form>
              {formStatus && <p className="form-status">{formStatus}</p>}
            </motion.div>

            <motion.div variants={fadeIn} className="social-info">
              <motion.h2 className="contact-title">Get in touch</motion.h2>
              <p className="contact-subtitle">We believe sustainability is vitally important.</p>
              <p className="contact-description">
                Etiam sit amet convallis erat – class aptent taciti sociosqu ad litora torquent per conubia! Maecenas gravida lacus.
              </p>
              <div className="social-icons">
                {[<Facebook />, <Twitter />, <Instagram />, <Linkedin />].map((icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="social-icon"
                    whileHover={{ scale: 1.1 }}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
