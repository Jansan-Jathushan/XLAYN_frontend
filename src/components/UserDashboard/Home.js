// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
// import '../../style/UserDashboard/Home.css';

// export default function HomePage() {
//   const [products, setProducts] = useState([]);
//   const [testimonials, setTestimonials] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('/api/products'); 
//         const data = await response.json();
//         setProducts(data.slice(0, 5));
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };
//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       try {
//         const response = await fetch('/api/testimonials');
//         const data = await response.json();
//         setTestimonials(data.slice(0, 5));
//       } catch (error) {
//         console.error('Error fetching testimonials:', error);
//       }
//     };
//     fetchTestimonials();
//   }, []);

//   const addToCart = (product) => {
//     let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
//     const existingProduct = cart.find((item) => item._id === product._id);

//     if (existingProduct) {
//       existingProduct.quantity += 1;
//     } else {
//       cart.push({ ...product, quantity: 1 });
//     }

//     sessionStorage.setItem('cart', JSON.stringify(cart));
//     alert(`${product.name} has been added to your cart!`);
//   };

//   return (
//     <div className="homepage">
//       <main>
//         {/* Hero Section */}
//         <section className="hero-section">
//           <div className="container">
//             <h1>Premium Dry Fish Delivered Worldwide.</h1>
//             <p className="lead">XLAYN connects you with the best dry fish sourced from trusted suppliers.</p>
//             <div className="cta-buttons">
//               <button className="btn-primary">Shop Now</button>
//               <button className="btn-secondary">Become a Supplier/Wholesaler</button>
//             </div>
//             <img src="https://i.ibb.co/5WbJQbF/Copy-of-Obito-the-broken-hero.jpg" alt="Hero" className="hero-img" />
//           </div>
//         </section>

//         {/* Product Section */}
//         <section className="product-section">
//           <h2>Explore Our Premium Dry Fish Collection</h2>
//           <div className="product-grid">
//             {products.map((product) => (
//               <div key={product._id} className="product-card">
//                 <img src={product.imageUrl} alt={product.name} />
//                 <h5>{product.name}</h5>
//                 <p>{product.description}</p>
//                 <p>Type: {product.fishType}</p>
//                 <p>Weight: {product.weight}</p>
//                 <p className="price">${product.price}</p>
//                 <button className="btn-add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
//               </div>
//             ))}
//           </div>
//           <button className="btn-view-all">View All Products</button>
//         </section>

//         {/* Wholesaler Subscription Section */}
//         <section className="subscription-section">
//           <img src="https://i.ibb.co/613wc4f/obito.jpg" alt="Wholesaler" className="subscription-img" />
//           <div className="subscription-content">
//             <h2>Exclusive Wholesaler Subscription</h2>
//             <p>Join our Wholesaler Program for exclusive access to bulk pricing, personalized support, and priority delivery.</p>
//             <ul>
//               <li><FontAwesomeIcon icon={faCheckCircle} /> Discounted rates on large orders</li>
//               <li><FontAwesomeIcon icon={faCheckCircle} /> Tailored customer service</li>
//               <li><FontAwesomeIcon icon={faCheckCircle} /> Priority shipping and handling</li>
//             </ul>
//             <button className="btn-subscribe">Subscribe Now</button>
//           </div>
//         </section>

//         {/* Testimonials Section */}
//         <section className="testimonial-section">
//           <h2>What Our Customers Say</h2>
//           <div className="testimonial-grid">
//             {testimonials.map((testimonial) => (
//               <div key={testimonial._id} className="testimonial-card">
//                 <h5>{testimonial.name}</h5>
//                 <p>{testimonial.feedback}</p>
//                 <p className="location">{testimonial.location}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Social Media Section */}
//         <section className="social-section">
//           <h2>Follow Us</h2>
//           <div className="social-icons">
//             <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
//             <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
//             <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
//             <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }



// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:5000/api/users/login', { email, password });

//       const { token, user, supplier, wholesaler } = response.data;

//       // Store token and relevant user data in localStorage
//       if (user) {
//         localStorage.setItem('token', token);
//         localStorage.setItem('role', user.role);
//         localStorage.setItem('id', user.id);
//         localStorage.setItem('status', user.status);

//         // Navigate based on role
//         if (user.role === 'admin') {
//           navigate('/admin/');
//         } else {
//           navigate('/home');  // Regular user to home page
//         }

//       } else if (supplier) {
//         localStorage.setItem('token', token);
//         localStorage.setItem('role', supplier.role);
//         localStorage.setItem('id', supplier.id);
//         localStorage.setItem('status', supplier.status);

//         // Check if supplier is approved
//         if (supplier.status === 'approved') {
//           navigate('/supplier/');  // Approved supplier to supplier dashboard
//         } else {
//           setMessage('Supplier not approved yet.');
//         }

//       } else if (wholesaler) {
//         localStorage.setItem('token', token);
//         localStorage.setItem('role', wholesaler.role);
//         localStorage.setItem('id', wholesaler.id);
//         localStorage.setItem('status', wholesaler.status);

//         // Check if wholesaler is approved
//         if (wholesaler.status === 'approved') {
//           navigate('/');  // Approved wholesaler to home page
//         } else {
//           setMessage('Wholesaler not approved yet.');
//         }

//       } else {
//         setMessage('Invalid role');
//       }

//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         setMessage(error.response.data.message);
//       } else {
//         setMessage('An error occurred. Please try again.');
//       }
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       {message && <p className="error">{message}</p>}
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;


import React from "react";
import '../../style/UserDashboard/Home.css';   
import AboutUs from './AboutUs';  // Import your AboutUs component

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="background-image"></div>
        <div className="content">
          <h3>Fresh & Quality Every Day</h3>
          <h1>Explore Our <span className="highlight">Premium Dry Fish</span> Selection</h1>
          <p>We bring you the best dry fish, sourced from top suppliers, ensuring quality and freshness with every order. Delivered right to your door, whether you're a regular buyer or wholesale customer.</p>
          <a href="#" className="order-button">Shop Now</a>
        </div>
        <div className="image-container">
          <img src="https://i.ibb.co/ZHFb25R/final-dry-fish.png" alt="Premium Dry Fish" className="right-image" />
        </div>
      </section>
      
      {/* Adding AboutUs section after the main hero section */}
      <AboutUs />
    </>
  );
}

export default HomePage;
