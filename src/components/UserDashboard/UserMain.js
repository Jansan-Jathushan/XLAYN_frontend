import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavbarMenu from '../UserDashboard/Header.js';   
import Footer from '../UserDashboard/Footer.js';      
import HomePage from '../UserDashboard/Home.js';  
import Product from '../UserDashboard/Products.js';  
import AboutUs from '../UserDashboard/AboutUs.js';  
import SignInUpForm from '../UserDashboard/SignInUpForm.js';
import RegisterForm from '../UserDashboard/RegisterRequest.js';
import ContactUs from '../UserDashboard/ContactUs.js';
import CartPage from '../UserDashboard/AddToCart.js';
import OrderConfirmation from './orderPlace.js';
import UserProfile from '../UserDashboard/UserProfile.js';


const UserMain = () => {
  return (
    <div>
     
      <NavbarMenu /> 

      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/products" element={<Product />} /> 
        <Route path="/about-us" element={<AboutUs />} /> 
        <Route path="/sign-inup" element={<SignInUpForm />} /> 
        <Route path="/register-from" element={<RegisterForm />} /> 
        <Route path="/contact-us" element={<ContactUs />} /> 
        <Route path="/cartpage" element={<CartPage />} /> 
        <Route path="/order-confirmation" element={<OrderConfirmation/>} /> 
        <Route path="/user-profile" element={<UserProfile />} /> 




      </Routes>

      <Footer /> 
    </div>
  );
};

export default UserMain;
