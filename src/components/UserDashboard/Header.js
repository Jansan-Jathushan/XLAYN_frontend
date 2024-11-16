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
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <Link to="/" className="navbar-brand">
//             <img src="logo.png" alt="XLAYN Logo" className="logo-img" />
//           </Link>

//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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

//             {(!role || !idToken) ? (
//               <Link to="/sign-inup" className="btn btn-primary me-2">
//                 Sign In / Sign Up
//               </Link>
//             ) : (
//               <button onClick={handleSignOut} className="btn btn-danger me-2">
//                 Sign Out
//               </button>
//             )}

//             {/* Profile icon with role check */}
//             {role && idToken && (
//               <div className="profile-icon" onClick={handleProfileClick}>
//                 <FontAwesomeIcon icon={faUserCircle} size="lg" color="#FFC107" />
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
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/UserDashboard/Header.css';

const NavbarMenu = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem('role'); // Get the role from local storage
  const idToken = localStorage.getItem('id'); // Get the user ID token from local storage

  const handleProfileClick = () => {
    const status = localStorage.getItem('status'); // Get the status from local storage

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
    // Clear all user-related data from localStorage
    localStorage.removeItem('role');
    localStorage.removeItem('id');
    localStorage.removeItem('status');
    localStorage.removeItem('token'); // Remove the token as well

    // Redirect to the home page or login page
    navigate('/');
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light " >
        <div className="container-fluid navbar-container">
          {/* Logo Container */}
          <div className="logo-container">
            <Link to="/" className="navbar-brand">
              <img src="logo.png" alt="XLAYN Logo" className="logo-img" />
            </Link>
          </div>

          {/* Navbar Links Container */}
          <div className="nav-links-container">
            <ul className="navbar-nav mx-auto">
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
                <Link to="/contact-us" className="nav-link">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Buttons and Profile Icon Container */}
          <div className="buttons-container">
            {(!role || !idToken) ? (
              <Link to="/sign-inup" className="btn btn-signinup">
                Sign In / Sign Up
              </Link>
            ) : (
              <button onClick={handleSignOut} className="btn btn-signout">
                Sign Out
              </button>
            )}

            {/* Profile icon with role check */}
            {role && idToken && (
              <div className="profile-icon" onClick={handleProfileClick}>
                <FontAwesomeIcon icon={faUserCircle} size="2x" />
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarMenu;
