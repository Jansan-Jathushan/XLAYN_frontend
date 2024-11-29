

// import React, { useState, useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Printer, Mail } from "lucide-react";
// import "../../style/UserDashboard/ContactUs.css";

// // Animation configurations
// const fadeIn = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.5 }
// };

// const stagger = {
//   animate: { transition: { staggerChildren: 0.1 } }
// };

// const backgroundVariants = {
//   animate: {
//     backgroundPosition: ["0% 0%", "100% 100%"],
//     transition: { duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }
//   }
// };

// export default function ContactComponent() {
//   const [formData, setFormData] = useState({
//     email: "",
//     name: "",
//     phone: "",
//     subject: "",
//     message: ""
//   });
//   const [formStatus, setFormStatus] = useState("");  // To hold form submission status
//   const controls = useAnimation();

//   useEffect(() => {
//     controls.start("animate");
//   }, [controls]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       const response = await fetch('http://localhost:5000/api/contact/contact-us', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
  
//       const data = await response.json();
      
//       if (response.ok) {
//         setFormData({
//           email: "",
//           name: "",
//           phone: "",
//           subject: "",
//           message: ""
//         });
//         window.alert("Form submitted successfully!");
//       } else {
//         console.error("Error:", data);  // Log the error response body
//         setFormStatus(`Error: ${data.message}`);
//       }
//     } catch (error) {
//       console.error("Submission error:", error);  // Log network or other errors
//       setFormStatus("An error occurred while submitting the form.");
//     }
//   };
  
  

//   return (
//     <motion.div
//       className="contact-container"
//       variants={backgroundVariants}
//       animate={controls}
//     >
//       <div className="content-wrapper">
//         <motion.div
//           initial="initial"
//           animate="animate"
//           variants={stagger}
//           className="contact-content"
//         >
//           {/* Contact Information Cards */}
//           <motion.div variants={stagger} className="contact-info-grid">
//             {[
//               { icon: <MapPin className="icon" />, title: "OUR MAIN OFFICE", content: "SoHo 94 Broadway St New York, NY 1001" },
//               { icon: <Phone className="icon" />, title: "PHONE NUMBER", content: "234-9876-5400\n888-0123-4567 (Toll Free)" },
//               { icon: <Printer className="icon" />, title: "FAX", content: "1-234-567-8900" },
//               { icon: <Mail className="icon" />, title: "EMAIL", content: "hello@theme.com" }
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeIn}
//                 className="contact-card"
//               >
//                 <div className="contact-card-icon">
//                   {item.icon}
//                 </div>
//                 <h3 className="contact-card-title">{item.title}</h3>
//                 <p className="contact-card-content">{item.content}</p>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Contact Form and Social Links */}
//           <div className="form-social-container">
//             <motion.div variants={fadeIn} className="contact-form">
//               <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <input
//                     type="text"
//                     placeholder="Enter your Name"
//                     className="input-field"
//                     value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                     required
//                   />
//                   <input
//                     type="email"
//                     placeholder="Enter a valid email address"
//                     className="input-field"
//                     value={formData.email}
//                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="tel"
//                     placeholder="Enter your phone number"
//                     className="input-field"
//                     value={formData.phone}
//                     onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                   />
//                   <input
//                     type="text"
//                     placeholder="Enter subject"
//                     className="input-field"
//                     value={formData.subject}
//                     onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
//                     required
//                   />
//                 </div>
//                 <textarea
//                   placeholder="Enter your message"
//                   rows={6}
//                   className="textarea-field"
//                   value={formData.message}
//                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                   required
//                 />
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="submit-button"
//                   type="submit"
//                 >
//                   SUBMIT
//                 </motion.button>
//               </form>
//               {formStatus && <p className="form-status">{formStatus}</p>}
//             </motion.div>

//             <motion.div variants={fadeIn} className="social-info">
//               <motion.h2 className="contact-title">Get in touch</motion.h2>
//               <p className="contact-subtitle">We believe sustainability is vitally important.</p>
//               <p className="contact-description">
//                 Etiam sit amet convallis erat – class aptent taciti sociosqu ad litora torquent per conubia! Maecenas gravida lacus.
//               </p>
//               <div className="social-icons">
//                 {[<Facebook />, <Twitter />, <Instagram />, <Linkedin />].map((icon, index) => (
//                   <motion.a
//                     key={index}
//                     href="#"
//                     className="social-icon"
//                     whileHover={{ scale: 1.1 }}
//                   >
//                     {icon}
//                   </motion.a>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// }


import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Printer, Mail } from "lucide-react";
import "../../style/UserDashboard/ContactUs.css";

// Animation configurations
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const backgroundVariants = {
  animate: {
    backgroundPosition: ["0% 0%", "100% 100%"],
    transition: { duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" },
  },
};

export default function ContactComponent() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(""); // To hold form submission status
  const controls = useAnimation();

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
          message: "",
        });
        window.alert("Form submitted successfully!");
      } else {
        console.error("Error:", data);
        setFormStatus(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setFormStatus("An error occurred while submitting the form.");
    }
  };

  return (
    <motion.div className="contact-container" variants={backgroundVariants} animate={controls}>
      <div className="content-wrapper">
        <motion.div initial="initial" animate="animate" variants={stagger} className="contact-content">
          {/* Contact Information Cards */}
          <motion.div variants={stagger} className="contact-info-grid">
            {[
              { icon: <MapPin className="icon" />, title: "OUR MAIN OFFICE", content: "SoHo 94 Broadway St New York, NY 1001" },
              { icon: <Phone className="icon" />, title: "PHONE NUMBER", content: "234-9876-5400\n888-0123-4567 (Toll Free)" },
              { icon: <Printer className="icon" />, title: "FAX", content: "1-234-567-8900" },
              { icon: <Mail className="icon" />, title: "EMAIL", content: "hello@theme.com" },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeIn} className="contact-card">
                <div className="contact-card-icon">{item.icon}</div>
                <h3 className="contact-card-title" style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {item.title}
                </h3>
                <p className="contact-card-content" style={{ fontSize: "16px", fontWeight: "normal" }}>
                  {item.content}
                </p>
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
                    style={{ fontSize: "14px", fontWeight: "normal" }}
                  />
                  <input
                    type="email"
                    placeholder="Enter a valid email address"
                    className="input-field"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    style={{ fontSize: "14px", fontWeight: "normal" }}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="input-field"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ fontSize: "14px", fontWeight: "normal" }}
                  />
                  <input
                    type="text"
                    placeholder="Enter subject"
                    className="input-field"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    style={{ fontSize: "14px", fontWeight: "normal" }}
                  />
                </div>
                <textarea
                  placeholder="Enter your message"
                  rows={6}
                  className="textarea-field"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  style={{ fontSize: "14px", fontWeight: "normal" }}
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="submit-button"
                  type="submit"
                  style={{ fontSize: "16px", fontWeight: "bold" }}
                >
                  SUBMIT
                </motion.button>
              </form>
              {formStatus && (
                <p className="form-status" style={{ fontSize: "14px", fontWeight: "normal" }}>
                  {formStatus}
                </p>
              )}
            </motion.div>

            <motion.div variants={fadeIn} className="social-info">
              <motion.h2 className="contact-title" style={{ fontSize: "24px", fontWeight: "bold" }}>
                Get in touch
              </motion.h2>
              <p className="contact-subtitle" style={{ fontSize: "16px", fontWeight: "normal" }}>
                We believe sustainability is vitally important.
              </p>
              <p className="contact-description" style={{ fontSize: "14px", fontWeight: "normal" }}>
                Etiam sit amet convallis erat – class aptent taciti sociosqu ad litora torquent per conubia! Maecenas
                gravida lacus.
              </p>
              <div className="social-icons">
                {[<Facebook />, <Twitter />, <Instagram />, <Linkedin />].map((icon, index) => (
                  <motion.a key={index} href="#" className="social-icon" whileHover={{ scale: 1.1 }}>
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
