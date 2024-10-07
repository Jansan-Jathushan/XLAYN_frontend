import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import HomePage from './Home.js';
import AboutUs from './AboutUs.js';
import SignInUpForm from './SignInUpForm.js';
import RegisterForm from './RegisterRequest.js'
// import ContactUs from './Contact.js';
// import Products from './Products.js';
// import UserProfile from './UserProfile.js';
// import WholesalerProfile from './WholesalerProfile.js';
// UserDashboardRoutes.js


const UserDashboardRoutes = () => {
  return (
    <>
      <Header /> {/* Header appears on every page */}
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/signinup" element={<SignInUpForm />} />
          <Route path="/register-request" element={<RegisterForm />} />
        </Routes>
      </main>
      
      <Footer /> {/* Footer appears on every page */}
    </>
  );
};

export default UserDashboardRoutes;
