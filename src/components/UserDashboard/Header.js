// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../style/UserDashboard/Header.css';

// const NavbarMenu = () => {
//   const navigate = useNavigate();
//   const role = localStorage.getItem('role'); // Get the role from local storage
//   const idToken = localStorage.getItem('id'); // Get the user ID token from local storage

//   const handleProfileClick = () => {
//     const status = localStorage.getItem('status'); // Get the status from local storage

//     if (role === 'user') {
//       navigate('/user-profile');
//     } else if (role === 'wholesaler') {
//       if (status === 'approved') {
//         navigate('/wholesaler-profile');
//       } else {
//         navigate('/wholesaler-pending');
//       }
//     } else if (role === 'admin') {
//       navigate('/admin');
//     } else if (role === 'supplier') {
//       if (status === 'approved') {
//         navigate('/supplier');
//       } else {
//         navigate('/supplier-pending');
//       }
//     } else {
//       console.error('Unknown role:', role);
//     }
//   };

//   const handleSignOut = () => {
//     // Clear all user-related data from localStorage
//     localStorage.removeItem('role');
//     localStorage.removeItem('id');
//     localStorage.removeItem('status');
//     localStorage.removeItem('token'); // Remove the token as well

//     // Redirect to the home page or login page
//     navigate('/');
//   };

//   return (
//     <header className="header">
//       <nav className="navbar navbar-expand-lg navbar-light " >
//         <div className="container-fluid navbar-container">
//           {/* Logo Container */}
//           <div className="logo-container">
//             <Link to="/" className="navbar-brand">
//               <img src="https://i.ibb.co/f12gb80/XLAYN.png" alt="XLAYN Logo" className="logo-img" />
//             </Link>
//           </div>

//           {/* Navbar Links Container */}
//           <div className="nav-links-container">
//             <ul className="navbar-nav mx-auto">
//               <li className="nav-item">
//                 <Link to="/" className="nav-link">Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/products" className="nav-link">Products</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/about-us" className="nav-link">About Us</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/contact-us" className="nav-link">Contact Us</Link>
//               </li>
//             </ul>
//           </div>

//           {/* Buttons and Profile Icon Container */}
//           <div className="buttons-container">
//             {(!role || !idToken) ? (
//               <Link to="/sign-inup" className="btn btn-signinup">
//                 Sign In / Sign Up
//               </Link>
//             ) : (
//               <button onClick={handleSignOut} className="btn btn-signout">
//                 Sign Out
//               </button>
//             )}

//             {/* Profile icon with role check */}
//             {role && idToken && (
//               <div className="profile-icon" onClick={handleProfileClick}>
//                 <FontAwesomeIcon icon={faUserCircle} size="2x" />
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default NavbarMenu;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarMenu = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem('role');
  const idToken = localStorage.getItem('id');

  const handleProfileClick = () => {
    const status = localStorage.getItem('status');
    if (role === 'user') {
      navigate('/user-profile');
    } else if (role === 'wholesaler') {
      if (status === 'approved') {
        navigate('/wholesaler-profile');
      } else {
        navigate('/wholesaler-pending');
      }
    } else if (role === 'admin') {
      navigate('/admin');
    } else if (role === 'supplier') {
      if (status === 'approved') {
        navigate('/supplier');
      } else {
        navigate('/supplier-pending');
      }
    } else {
      console.error('Unknown role:', role);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('role');
    localStorage.removeItem('id');
    localStorage.removeItem('status');
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <header style={{ position: 'sticky', top: '0', zIndex: 1000 }}>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{
          backgroundColor: '#131842',
          height: '6rem',
          padding: '0 8%',
        }}
      >
        {/* Logo Container */}
        <Link to="/" className="navbar-brand">
          <img
            src="https://i.ibb.co/8mN47F7/XLAYN-1.png"
            alt="XLAYN Logo"
            style={{ width: '7rem', height: '7rem' }}
          />
        </Link>

        {/* Toggler Button for Responsive Menu */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: 'none' }}
        >
          <FontAwesomeIcon icon={faBars} style={{ color: '#E68369', fontSize: '1.5rem' }} />
        </button>

        {/* Collapsible Navbar Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul
            className="navbar-nav mx-auto"
            style={{
              listStyle: 'none',
              paddingLeft: '0',
              margin: '0 auto',
              fontSize: '25px',
              fontWeight: '500',
              fontStyle: '',
            }}
          >
            <li className="nav-item" style={{ margin: '0 15px' }}>
              <Link to="/" className="nav-link" style={{ color: '#E68369', padding: '10px 20px' }}>
                Home
              </Link>
            </li>
            <li className="nav-item" style={{ margin: '0 15px' }}>
              <Link to="/products" className="nav-link" style={{ color: '#E68369', padding: '10px 20px' }}>
                Products
              </Link>
            </li>
            <li className="nav-item" style={{ margin: '0 15px' }}>
              <Link to="/about-us" className="nav-link" style={{ color: '#E68369', padding: '10px 20px' }}>
                About Us
              </Link>
            </li>
            <li className="nav-item" style={{ margin: '0 15px' }}>
              <Link to="/contact-us" className="nav-link" style={{ color: '#E68369', padding: '10px 20px' }}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Buttons and Profile Icon Container */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {(!role || !idToken) ? (
            <Link
              to="/sign-inup"
              className="btn"
              style={{
                backgroundColor: '#E68369',
                color: 'white',
                marginLeft: '15px',
                borderRadius: '15px',
                padding: '5px 15px',
              }}
            >
              Sign In / Sign Up
            </Link>
          ) : (
            <button
              onClick={handleSignOut}
              className="btn"
              style={{
                backgroundColor: '#E68369',
                color: 'white',
                borderRadius: '15px',
                padding: '5px 15px',
              }}
            >
              Sign Out
            </button>
          )}

          {role && idToken && (
            <div
              onClick={handleProfileClick}
              style={{
                cursor: 'pointer',
                color: '#E68369',
                marginLeft: '15px',
                fontSize: '2rem',
              }}
            >
              <FontAwesomeIcon icon={faUserCircle} />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavbarMenu;
