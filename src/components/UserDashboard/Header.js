import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'; // Import the profile icon
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import '../../style/UserDashboard/Header.css'; // External CSS for additional custom styling

const NavbarMenu = () => {
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleProfileClick = () => {
    const role = sessionStorage.getItem('role'); // Get the role from session storage
    const status = sessionStorage.getItem('status'); // Get the status from session storage

    if (role === 'user') {
      navigate('/user-profile'); // Navigate to user profile
    } else if (role === 'wholesaler') {
      if (status === 'approved') {
        navigate('/wholesaler-profile'); // Navigate to wholesaler profile if approved
      } else {
        navigate('/wholesaler-pending'); // Navigate to a pending status page or similar
      }
    } else {
      console.error('Unknown role:', role); // Handle unknown roles
    }
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* Logo on the left */}
          <Link to="/" className="navbar-brand">
            <img src="logo.png" alt="XLAYN Logo" className="logo-img" /> {/* Add your logo */}
          </Link>

          {/* Toggle button for mobile view */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">Products</Link>
              </li>
              <li className="nav-item">
                <Link to="/about-us" className="nav-link">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact Us</Link>
              </li>
            </ul>

            {/* Sign In/Sign Up button */}
            <Link to="/login" className="btn btn-primary me-2">
              Sign In / Sign Up
            </Link>

            {/* Profile icon with role check */}
            <div className="profile-icon" onClick={handleProfileClick}>
              <FontAwesomeIcon icon={faUserCircle} size="lg" color="#FFC107" /> {/* Profile icon */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarMenu;
