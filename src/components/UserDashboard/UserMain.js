import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import Footer from './Footer.js';
import HomePage from './Home.js';
import AboutUs from './AboutUs.js';
import SignInUpForm from './SignInUpForm.js';
import RegisterForm from './RegisterRequest.js';
import NavbarMenu from './Header.js';

const UserDashboardRoutes = () => {
  return (
    <>
      {/* Ensure NavbarMenu is rendering at the top */}
      <NavbarMenu /> 
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/signinup" element={<SignInUpForm />} />
          <Route path="/register-request" element={<RegisterForm />} />
        </Routes>
      </main>
      
      <Footer /> 
    </>
  );
};

export default UserDashboardRoutes;
