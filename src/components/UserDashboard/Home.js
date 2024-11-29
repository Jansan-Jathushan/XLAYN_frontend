

// import React, { useState, useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';


// const Component = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const controls = useAnimation();

//   const navigate = useNavigate();


//   useEffect(() => {
//     controls.start({
//       y: [0, -10, 0],
//       transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
//     });
//   }, [controls]);

//   const styles = {
//     // section: {
//     //   position: 'relative',
//     //   display: 'flex',
//     //   minHeight: '100vh',
//     //   width: '100%',
//     //   alignItems: 'center',
//     //   overflow: 'hidden',
//     //   padding: '3rem 1.5rem',
//     //   backgroundImage: 'url("https://i.ibb.co/N1ckR7j/herobg.webp")', // Replace with your image path
//     //   backgroundSize: 'cover', // Ensures the image covers the entire section
//     //   backgroundPosition: 'center', // Centers the image
//     //   backgroundRepeat: 'no-repeat', // Prevents tiling of the image
//     // },

//     section: {
//       position: 'relative',
//       display: 'flex',
//       minHeight: '100vh',
//       width: '100%',
//       alignItems: 'center',
//       overflow: 'hidden',
//       padding: '3rem 1.5rem',
//     },
//     background: {
//       content: '""',
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '100%',
//       backgroundImage: 'url("https://i.ibb.co/stD3tpk/hero1.webp")',
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       backgroundRepeat: 'no-repeat',
//       filter: 'blur(10px)', // Blur effect
//       zIndex: 1, // Ensures it stays behind other content
//     },
  
//     // backgroundGradient: {
//       // position: 'absolute',
//       // inset: 0,
//       // background: 'linear-gradient(to bottom right, #131842, #1E2A4A)',
//       // opacity: 0.5,
//       // backgroundSize: '400% 400%',
//       // animation: 'gradient 15s ease infinite',

//     // },
//     mainContent: {
//       position: 'relative',
//       zIndex: 10,
//       margin: '0 auto',
//       maxWidth: '1600px',
//       width: '100%',
//     },
//     grid: {
//       display: 'grid',
//       alignItems: 'center',
//       gap: '3rem',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//     },
//     leftColumn: {
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       gap: '2rem',
//     },
//     headingContainer: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '1.5rem',
//     },
//     heading: {
//       fontSize: '4rem',
//       fontWeight: '700',
//       letterSpacing: '-0.025em',
//       color: '#E68369',
//       marginBottom: '0.75rem',
//     },
//     headingHighlight: {
//       color: '#FBF6E2',
//       display: 'block',
//     },
//     paragraph: {
//       fontSize: '1.5rem',
//       fontWeight: '700',
//       maxWidth: '32rem',
//       color: '#ECCEAE',
//     },
//     button: {
//       position: 'relative',
//       overflow: 'hidden',
//       borderRadius: '9999px',
//       backgroundColor: '#E68369',
//       padding: '20px 15px',
//       fontSize: '1.125rem',
//       fontWeight: 600,
//       color: '#FBF6E2',
//       border: 'none',
//       cursor: 'pointer',
//       maxWidth:'300px',
//     },
//     buttonHover: {
//       position: 'absolute',
//       inset: 0,
//       backgroundColor: '#ECCEAE',
//     },
//     buttonText: {
//       position: 'relative',
//       zIndex: 10,
//     },
//     rightColumn: {
//       position: 'relative',
//     },
//     mainImage: {
//       position: 'relative',
//       margin: '0 auto',
//       height: '600px',
//       width: '600px',
     
//     },
//     image: {
//       width: '100%',
//       height: '100%',
//       borderRadius: '50%',
//       objectFit: 'cover',
//       border: '10px solid #ECCEAE',
//       borderRadius:'50%',
//     },
//     floatingImage1: {
//       position: 'absolute',
//       top: '-80px',
//       right: '-80px',
//       height: '160px',
//       width: '160px',
//     },
//     floatingImage2: {
//       position: 'absolute',
//       bottom: '-40px',
//       right: 0,
//       height: '110px',
//       width: '110px',
//     },
//     decorativeCircle: {
//       position: 'absolute',
//       bottom: '40px',
//       left: '40px',
//       height: '64px',
//       width: '64px',
//       border: '2px solid #ECCEAE',
//       borderRadius: '50%',
//       opacity: 0.5,
//     },
//     decorativeDot: {
//       position: 'absolute',
//       right: '25%',
//       top: '80px',
//       height: '32px',
//       width: '32px',
//       borderRadius: '50%',
//       backgroundColor: '#E68369',
//       opacity: 0.5,
//     },
//     decorativePlus: {
//       position: 'absolute',
//       right: '33.33%',
//       top: '25%',
//       fontSize: '1.875rem',
//       color: '#ECCEAE',
//       opacity: 0.3,
//     },
//   };

//   const products = [
//     { id: 1, name: 'Premium Dried Cod', price: '$24.99', image: 'https://i.ibb.co/q7TCZW9/contactdryfish.webp' },
//     { id: 2, name: 'Smoked Salmon', price: '$29.99', image: 'https://i.ibb.co/3pmnpLv/cover1.jpg' },
//     { id: 3, name: 'Dried Anchovies', price: '$19.99', image: 'https://i.ibb.co/pdqQhvd/cover2.jpg' },
//   ];

//   return (
//     <section style={styles.section}>
//       <div style={styles.background} />
      
//       <div style={styles.mainContent}>
//         <div style={styles.grid}>
//           <motion.div 
//             style={styles.leftColumn}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <div style={styles.headingContainer}>
//               <h1 style={styles.heading}>
//                 <motion.span
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.5 }}
//                 >
//                   Explore Our
//                 </motion.span>
//                 <motion.span
//                   style={{ display: 'block' }}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.7 }}
//                 >
//                   Premium Dry Fish
//                 </motion.span>
//                 <motion.span
//                   style={styles.headingHighlight}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.9 }}
//                 >
//                   Made Easy
//                 </motion.span>
//               </h1>
//               <motion.p
//                 style={styles.paragraph}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 1.1 }}
//               >
//                  Fresh & Quality Every Day             
//                   </motion.p>
//               <motion.button
//                 style={styles.button}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 1.3 }}
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//               >
//                 <span style={styles.buttonText} onClick={() => navigate('/products')}>Explore More</span>
//                 <motion.div
//                   style={styles.buttonHover}
//                   initial={{ scale: 0, opacity: 0 }}
//                   animate={{ scale: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </motion.button>
//             </div>
//           </motion.div>

//           <div style={styles.rightColumn}>
//             <motion.div 
//               style={styles.mainImage}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               <img
//                 src="https://i.ibb.co/q7TCZW9/contactdryfish.webp"
//                 alt="Healthy bowl"
//                 style={styles.image}
//               />
//               <motion.div 
//                 style={styles.floatingImage1}
//                 animate={controls}
//               >
//                 <img
//                   src="https://i.ibb.co/3pmnpLv/cover1.jpg"
//                   alt="Food item 1"
//                   style={styles.image}
//                 />
//               </motion.div>
//               <motion.div 
//                 style={styles.floatingImage2}
//                 animate={controls}
//               >
//                 <img
//                   src="https://i.ibb.co/pdqQhvd/cover2.jpg"
//                   alt="Food item 2"
//                   style={styles.image}
//                 />
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       <motion.div 
//         style={styles.decorativeCircle}
//         animate={{ rotate: 360 }}
//         transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//       />
//       <motion.div 
//         style={styles.decorativeDot}
//         animate={{ scale: [1, 1.2, 1] }}
//         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <div style={styles.decorativePlus}>+</div>
//     </section>
//   );
// };

// export default Component;






import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaShippingFast, FaLeaf, FaAward, FaStar, FaFish, FaEnvelope, FaPhone, FaMapMarkerAlt, FaRecycle, FaHandsHelping } from 'react-icons/fa';

const Component = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const controls = useAnimation();
  const navigate = useNavigate();

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    });
  }, [controls]);

  const styles = {
    section: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',
      overflow: 'hidden',
      backgroundColor: '#FBF6E2',
      color: '#FBF6E2',
      minHeight: '50vh',
    },
    heroSection: {
      minHeight: '90vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3rem 1.5rem',
      position: 'relative',
    },
    background: {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'url("https://i.ibb.co/stD3tpk/hero1.webp")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      filter: 'blur(10px)',
      zIndex: 1,
    },
    mainContent: {
      position: 'relative',
      zIndex: 10,
      margin: '0 auto',
      maxWidth: '1600px',
      width: '100%',
    },

    grid: {
      display: 'grid',
      alignItems: 'center',
      gap: '6rem',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    },

    leftColumn: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '1rem',
    },
    heading: {
      fontSize: '4.5rem',
      fontWeight: '800',
      letterSpacing: '-0.025em',
      color: '#E68369',
      marginBottom: '1rem',
    },
    headingHighlight: {
      color: '#FBF6E2',
      display: 'block',
    },
    paragraph: {
      fontSize: '1.125rem',
      fontWeight: '700',
      maxWidth: '36rem',
      color: '#ECCEAE',
    },
    button: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '9999px',
      backgroundColor: '#E68369',
      padding: '12px 15px',
      fontSize: '1rem',
      fontWeight: 600,
      color: '#FBF6E2',
      border: 'none',
      cursor: 'pointer',
      maxWidth: '300px',
      transition: 'transform 0.3s ease, background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#ECCEAE',
      color: '#131842',
    },
    buttonText: {
      position: 'relative',
      zIndex: 10,
    },
    rightColumn: {
      position: 'relative',
    },
    mainImage: {
      position: 'relative',
      margin: '0 auto',
      height: '500px',
      width: '500px',
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '12px solid #ECCEAE',
    },
    floatingImage: {
      position: 'absolute',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '6px solid #ECCEAE',
    },
    sectionInner: {
      position: 'relative',
      zIndex: 10,
      margin: '0 auto',
      maxWidth: '1800px',
      width: '100%',
      height:'50%',
      padding: '6rem 2rem',
      backgroundColor:'#131842',
      marginTop:'4rem',
      borderRadius:'50px',
    },
    sectionTitle: {
      fontSize: '4rem',
      fontWeight: '700',
      color: '#E68369',
      textAlign: 'center',
      marginBottom: '4rem',
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, minmax(300px, 1fr))',
      gap: '3rem',
    },
    featureCard: {
      padding: '3rem',
      backgroundColor: '#FBF6E2',
      borderRadius: '65px',
      textAlign: 'center',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      border: '6px solid #131842',
    },
    featureIcon: {
      fontSize: '5rem',
      color: '#E68369',
      marginBottom: '1rem',
    },
    featureTitle: {
      fontSize: '1.75rem',
      fontWeight: '600',
      color: '#131842',
      marginBottom: '1.5rem',
    },
    featureDescription: {
      fontSize: '1.295rem',
      color: '#E68369',
    },
    productsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, minmax(300px, 1fr))',
      gap: '3rem',
    },
    productCard: {
      backgroundColor: 'rgba(236, 206, 174, 0.1)',
      borderRadius: '65px',
      overflow: 'hidden',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      border: '6px solid #ECCEAE',
    },
    productImage: {
      width: '100%',
      height: '250px',
      objectFit: 'cover',
    },
    productInfo: {
      padding: '2rem',
    },
    productTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#FBF6E2',
      marginBottom: '0.75rem',
    },
    productPrice: {
      fontSize: '1.25rem',
      fontWeight: '500',
      color: '#E68369',
    },
    testimonialCard: {
      padding: '2.5rem',
      backgroundColor: 'rgba(236, 206, 174, 0.1)',
      borderRadius: '20px',
      marginBottom: '2rem',
      border: '2px solid #ECCEAE',
    },
    testimonialText: {
      fontSize: '1.25rem',
      color: '#ECCEAE',
      fontStyle: 'italic',
      marginBottom: '1.5rem',
    },
    testimonialAuthor: {
      fontSize: '1.125rem',
      color: '#E68369',
      fontWeight: '600',
    },
    ctaSection: {
      textAlign: 'center',
      padding: '5rem 0',
      backgroundColor: 'rgba(230, 131, 105, 0.1)',
    },
    ctaTitle: {
      fontSize: '3rem',
      fontWeight: '700',
      color: '#E68369',
      marginBottom: '2rem',
    },
    ctaDescription: {
      fontSize: '1.5rem',
      color: '#ECCEAE',
      marginBottom: '2.5rem',
      maxWidth: '700px',
      margin: '0 auto 2.5rem',
    },
    newsletterForm: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      marginTop: '2rem',
    },
    input: {
      padding: '1rem',
      fontSize: '1rem',
      borderRadius: '9999px',
      border: '2px solid #E68369',
      backgroundColor: 'rgba(236, 206, 174, 0.1)',
      color: '#FBF6E2',
      width: '300px',
    },
    faqSection: {
      backgroundColor: '#FBF6E2',
      padding: '5rem 0',
    },
    faqGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
    },
    faqItem: {
      backgroundColor: 'rgba(236, 206, 174, 0.1)',
      borderRadius: '60px',
      padding: '4rem',
      border: '4px solid #ECCEAE',
    },
    faqQuestion: {
      fontSize: '2.25rem',
      fontWeight: '600',
      color: '#E68369',
      marginBottom: '1rem',
    },
    faqAnswer: {
      fontSize: '1.25rem',
      color: '#ECCEAE',
    },
  };

  const products = [
    { id: 1, name: 'Premium Dried Cod', price: '$24.99', image: 'https://i.ibb.co/q7TCZW9/contactdryfish.webp' },
    { id: 2, name: 'Smoked Salmon', price: '$29.99', image: 'https://i.ibb.co/3pmnpLv/cover1.jpg' },
    { id: 3, name: 'Dried Anchovies', price: '$19.99', image: 'https://i.ibb.co/pdqQhvd/cover2.jpg' },
    { id: 4, name: 'Salted Mackerel', price: '$22.99', image: 'https://i.ibb.co/q7TCZW9/contactdryfish.webp' },
    { id: 5, name: 'Dried Tuna', price: '$27.99', image: 'https://i.ibb.co/3pmnpLv/cover1.jpg' },
    { id: 6, name: 'Smoked Herring', price: '$21.99', image: 'https://i.ibb.co/pdqQhvd/cover2.jpg' },
    { id: 2, name: 'Smoked Salmon', price: '$29.99', image: 'https://i.ibb.co/3pmnpLv/cover1.jpg' },
    { id: 4, name: 'Salted Mackerel', price: '$22.99', image: 'https://i.ibb.co/q7TCZW9/contactdryfish.webp' },
  ];

  return (
    <div style={styles.section}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.background} />
        <div style={styles.mainContent}>
          <div style={styles.grid}>
            <motion.div 
              style={styles.leftColumn}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 style={styles.heading}>
                Explore Our
                <span style={styles.headingHighlight}>Premium Dry Fish</span>
                Made Easy
              </h1>
              <p style={styles.paragraph}>
                Experience the finest quality dry fish, delivered fresh to your doorstep. Savor the ocean's bounty with our premium selection.
              </p>
              <motion.button
                style={isHovered ? {...styles.button, ...styles.buttonHover} : styles.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => navigate('/products')}
              >
                Explore Our Products
              </motion.button>
            </motion.div>
            <div style={styles.rightColumn}>
              <motion.div
                style={styles.mainImage}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <img
                  src="https://i.ibb.co/q7TCZW9/contactdryfish.webp"
                  alt="Premium Dry Fish"
                  style={styles.image}
                />
                <motion.img
                  src="https://i.ibb.co/3pmnpLv/cover1.jpg"
                  alt="Food item 1"
                  style={{...styles.floatingImage, top: '-80px', right: '-80px', height: '140px', width: '140px'}}
                  animate={controls}
                />
                <motion.img
                  src="https://i.ibb.co/pdqQhvd/cover2.jpg"
                  alt="Food item 2"
                  style={{...styles.floatingImage, bottom: '-40px', right: '0', height: '100px', width: '100px'}}
                  animate={controls}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{...styles.section, backgroundColor: '#FBF6E2'}}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionTitle}>Why Choose Our Dry Fish?</h2>
          <div style={styles.featuresGrid}>
            {[
              { icon: FaShippingFast, title: 'Fast Delivery', description: 'Get your premium dry fish delivered to your doorstep in no time.' },
              { icon: FaLeaf, title: '100% Natural', description: 'Our dry fish are sourced and processed naturally without any additives.' },
              { icon: FaAward, title: 'Premium Quality', description: 'We ensure only the highest quality dry fish reaches your plate.' },
              { icon: FaStar, title: 'Customer Satisfaction', description: 'Join our community of satisfied customers who love our products.' },
              { icon: FaRecycle, title: 'Sustainable Practices', description: 'We are committed to sustainable fishing and eco-friendly packaging.' },
              { icon: FaHandsHelping, title: 'Community Support', description: 'We work closely with local fishing communities to support their livelihoods.' },
              { icon: FaRecycle, title: 'Sustainable Practices', description: 'We are committed to sustainable fishing and eco-friendly packaging.' },
              { icon: FaHandsHelping, title: 'Community Support', description: 'We work closely with local fishing communities to support their livelihoods.' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                style={styles.featureCard}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)' }}
              >
                <feature.icon style={styles.featureIcon} />
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureDescription}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section style={{...styles.section, backgroundColor: '#FBF6E2'}}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionTitle}>Our Featured Products</h2>
          <div style={styles.productsGrid}>
            {products.map((product) => (
              <motion.div
                key={product.id}
                style={styles.productCard}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)' }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <img src={product.image} alt={product.name} style={styles.productImage} />
                <div style={styles.productInfo}>
                  <h3 style={styles.productTitle}>{product.name}</h3>
                  <p style={styles.productPrice}>{product.price}</p>
                  {hoveredProduct === product.id && (
                    <motion.button
                      style={{...styles.button, marginTop: '1rem', padding: '15px 25px'}}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Add to Cart
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{...styles.section, backgroundColor: '#FBF6E2'}}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionTitle}>What Our Customers Say</h2>
          <div style={styles.grid}>
            {[
              { text: "The quality of dry fish I received was exceptional. It's clear they take great care in their sourcing and processing.", author: "Sarah J." },
              { text: "Fast delivery and excellent customer service. I'm impressed with the variety of dry fish options available.", author: "Mike T." },
              { text: "I've been a regular customer for months now. The consistency in quality is remarkable!", author: "Emily R." },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                style={styles.testimonialCard}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <p style={styles.testimonialText}>"{testimonial.text}"</p>
                <p style={styles.testimonialAuthor}>- {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={styles.faqSection}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div style={styles.faqGrid}>
            {[
              { question: "How long does shipping take?", answer: "We typically process and ship orders within 1-2 business days. Delivery times vary depending on your location, but usually take 3-5 business days." },
              { question: "How should I store my dry fish?", answer: "Store your dry fish in a cool, dry place. Once opened, keep it in an airtight container in the refrigerator and consume within a week for best quality." },
              { question: "Are your products sustainable?", answer: "Yes, we are committed to sustainable fishing practices and work only with suppliers who follow responsible fishing methods." },
            ].map((faq, index) => (
              <div key={index} style={styles.faqItem}>
                <h3 style={styles.faqQuestion}>{faq.question}</h3>
                <p style={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Component;

