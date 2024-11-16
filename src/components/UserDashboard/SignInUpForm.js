// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../style/UserDashboard/SignInUp.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';

// const SignInUpForm = () => {
//   const [isRightPanelActive, setIsRightPanelActive] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showSigninPassword, setShowSigninPassword] = useState(false);

//   // State management for sign-up form
//   const [signupFirstName, setSignupFirstName] = useState('');
//   const [signupLastName, setSignupLastName] = useState('');
//   const [signupUsername, setSignupUsername] = useState('');
//   const [signupEmail, setSignupEmail] = useState('');
//   const [signupPassword, setSignupPassword] = useState('');

//   // State management for sign-in form
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState(''); 
//   const [id, _id] = useState(''); 
//   const [user, setUser] = useState(''); 
//   const [role, setRole] = useState(''); 

//   const navigate = useNavigate();

//   // Handle password visibility toggling
//   const togglePasswordVisibility = () => setShowPassword(!showPassword);
//   const toggleSigninPasswordVisibility = () => setShowSigninPassword(!showSigninPassword);

//   const handlePanelSwitch = () => setIsRightPanelActive(!isRightPanelActive);

//   // Handle sign-up form submission
//   const handleSignUp = async (event) => {
//     event.preventDefault();
    
//     if (!signupFirstName || !signupLastName || !signupUsername || !signupEmail || !signupPassword) {
//       alert("Please fill in all fields.");
//       return;
//     }
  
//     try {
//       const response = await axios.post('http://localhost:5000/api/users/register', {
//         firstName: signupFirstName,
//         lastName: signupLastName,
//         username: signupUsername,
//         email: signupEmail,
//         password: signupPassword,
//       });
  
//       if (response.status === 201) {
//         // Store the user data and token separately in local storage

//         const { token, id, role } = response.data;
 

//         localStorage.setItem('id', response.data._id);
//         localStorage.setItem('role', response.data.role);
//         localStorage.setItem('token', response.data.token);
  
//         alert('Sign-up successful!');
        
//         // Check the role and navigate to the appropriate page
//         if (response.data.role === 'user') {
//           window.location.href = '/'; // Navigate to the home page
//         } else {
//           alert("Unauthorized role.");
//         }
//       } else {
//         alert(`Sign-up error: ${response.data.error}`);
//       }
//     } catch (error) {
//       alert(`Network error: ${error.message}`);
//     }
//   };
  
  
//   // Handle sign-in form submission
//   const handleSignIn = async (event) => {
//     event.preventDefault();

//     if (!email || !password) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:5000/api/users/login', { email, password,id,user,role });

//       // Log the entire response to check its structure
//       console.log(response.data);

//       if (response.status === 200) {
//         // Destructure the token and user roles from the response
//         const { token, user, supplier, wholesaler } = response.data;
        
//         // Store token and relevant user data in localStorage
//         if (user) {
//           localStorage.setItem('token', token);
//           localStorage.setItem('role', user.role);
//           localStorage.setItem('id', user.id);
//           localStorage.setItem('status', user.status);

//           // Navigate based on role
//           if (user.role === 'Admin') {
//             navigate('/admin');
//           } else {
//             navigate('/');  // Regular user to home page
//           }

//         } else if (supplier) {
//           localStorage.setItem('token', token);
//           localStorage.setItem('role', supplier.role);
//           localStorage.setItem('id', supplier.id);
//           localStorage.setItem('status', supplier.status);

//           // Check if supplier is approved
//           if (supplier.status === 'approved') {
//             navigate('/supplier');  // Approved supplier to supplier dashboard
//           } else {
//             setMessage('Supplier not approved yet.');
//           }

//         } else if (wholesaler) {
//           localStorage.setItem('token', token);
//           localStorage.setItem('role', wholesaler.role);
//           localStorage.setItem('id', wholesaler.id);
//           localStorage.setItem('status', wholesaler.status);

//           // Check if wholesaler is approved
//           if (wholesaler.status === 'approved') {
//             navigate('/');  // Approved wholesaler to home page
//           } else {
//             setMessage('Wholesaler not approved yet.');
//           }

//         } else {
//           setMessage('Invalid role');
//         }

//         alert('Sign-in successful!');
//       } else {
//         alert(`Sign-in error: ${response.data.error}`);
//       }
//     } catch (error) {
//       alert(`Network error: ${error}`);
//     }
//   };
  
//   return (
//     <div className={`authForm-container ${isRightPanelActive ? 'authForm-right-panel-active' : ''}`} id="authForm-container">
//       {isRightPanelActive ? (
//         <div className="authForm-form-container authForm-sign-up-container">
//           <form onSubmit={handleSignUp}>
//             <h1>Create Account</h1>
           
//             <span>Use your email for registration</span><br />
//             <input
//               type="text"
//               placeholder="First Name"
//               value={signupFirstName}
//               onChange={(e) => setSignupFirstName(e.target.value)}
//             /><br />
//             <input
//               type="text"
//               placeholder="Last Name"
//               value={signupLastName}
//               onChange={(e) => setSignupLastName(e.target.value)}
//             /><br />
//             <input
//               type="text"
//               placeholder="Username"
//               value={signupUsername}
//               onChange={(e) => setSignupUsername(e.target.value)}
//             /><br />
//             <input
//               type="email"
//               placeholder="Email"
//               value={signupEmail}
//               onChange={(e) => setSignupEmail(e.target.value)}
//             /><br />
//             <div className="authForm-position-relative">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 placeholder="Password"
//                 value={signupPassword}
//                 onChange={(e) => setSignupPassword(e.target.value)}
//               />
//               <span className="authForm-password-icon" onClick={togglePasswordVisibility}>
//                 <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
//               </span>
//             </div><br />
//             <button type="submit">Sign Up</button>
//             {/* Added text with link to register as Supplier/Wholesaler */}
//             <p>
//               If you want to register as Supplier/Wholesaler?<span 
//                 style={{ cursor: 'pointer', color: 'blue', textDecoration: 'noline' }} 
//                 onClick={() => navigate('/register-from')}
//               >
//                 Click here
//               </span>
//             </p>
//           </form>
//         </div>
//       ) : (
//         <div className="authForm-form-container authForm-sign-in-container">
//           <form onSubmit={handleSignIn}>
//             <h1>Sign in</h1>
           
//             <span>Use your account</span><br />
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             /><br />
//             <div className="authForm-position-relative">
//               <input
//                 type={showSigninPassword ? 'text' : 'password'}
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <span className="authForm-password-icon" onClick={toggleSigninPasswordVisibility}>
//                 <FontAwesomeIcon icon={showSigninPassword ? faEyeSlash : faEye} />
//               </span>
//             </div><br />
//             <button type="submit">Sign In</button>
//             <p style={{ color: 'red' }}>{message}</p>
//           </form>
//         </div>
//       )}
//       <div className="authForm-overlay-container">
//         <div className="authForm-overlay">
//           <div className="authForm-overlay-panel authForm-overlay-left">
//             <h1>Welcome Back!</h1>
//             <p>To keep connected with us please login with your personal info</p>
//             <button className="authForm-overlay-button" onClick={handlePanelSwitch}>Sign In</button>
//           </div>
//           <div className="authForm-overlay-panel authForm-overlay-right">
//             <h1>New here?</h1>
//             <p>Sign up and discover great amount of new opportunities!</p>
//             <button className="authForm-overlay-button" onClick={handlePanelSwitch}>Sign Up</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignInUpForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/UserDashboard/SignInUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const SignInUpForm = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showSigninPassword, setShowSigninPassword] = useState(false);

  // State management for sign-up form
  const [signupFirstName, setSignupFirstName] = useState('');
  const [signupLastName, setSignupLastName] = useState('');
  const [signupUsername, setSignupUsername] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  // State management for sign-in form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); 

  const navigate = useNavigate();

  // Handle password visibility toggling
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleSigninPasswordVisibility = () => setShowSigninPassword(!showSigninPassword);

  const handlePanelSwitch = () => setIsRightPanelActive(!isRightPanelActive);

  // Handle sign-up form submission
  const handleSignUp = async (event) => {
    event.preventDefault();
    
    if (!signupFirstName || !signupLastName || !signupUsername || !signupEmail || !signupPassword) {
      alert("Please fill in all fields.");
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', {
        firstName: signupFirstName,
        lastName: signupLastName,
        username: signupUsername,
        email: signupEmail,
        password: signupPassword,
      });
  
      if (response.status === 201) {
        const { token, id, role } = response.data;

        // Save user data and token in local storage
        localStorage.setItem('token', token);
        localStorage.setItem('id', id);
        localStorage.setItem('role', role);
  
        alert('Sign-up successful!');
        
        // Redirect based on user role
        if (role === 'user') {
          navigate('/');
        } else if (role === 'admin') {
          navigate('/admin');
        } else {
          alert("Unauthorized role.");
        }
      } else {
        alert(`Sign-up error: ${response.data.error}`);
      }
    } catch (error) {
      alert(`Network error: ${error.message}`);
    }
  };
  
  // Handle sign-in form submission
  const handleSignIn = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { email, password });

      if (response.status === 200) {
        const { token, user, supplier, wholesaler } = response.data;

        // Store user data and token in local storage
        if (user) {
          localStorage.setItem('token', token);
          localStorage.setItem('role', user.role);
          localStorage.setItem('id', user.id);
          localStorage.setItem('status', user.status);

          if (user.role === 'admin') {
            navigate('/admin');
          } else {
            navigate('/');
          }
        } else if (supplier) {
          localStorage.setItem('token', token);
          localStorage.setItem('role', supplier.role);
          localStorage.setItem('id', supplier.id);
          localStorage.setItem('status', supplier.status);

          // Check if supplier is approved
          console.log(supplier.status); // Debug log
          if (supplier.status === 'approved') {
            navigate('/supplier');  // Ensure this route exists
          } else {
            setMessage('Supplier not approved yet.');
          }
        } else if (wholesaler) {
          localStorage.setItem('token', token);
          localStorage.setItem('role', wholesaler.role);
          localStorage.setItem('id', wholesaler.id);
          localStorage.setItem('status', wholesaler.status);

          if (wholesaler.status === 'approved') {
            navigate('/'); // Redirect to homepage
          } else {
            setMessage('Wholesaler not approved yet.');
          }
        } else {
          setMessage('Invalid role');
        }

        alert('Sign-in successful!');
      } else {
        alert(`Sign-in error: ${response.data.error}`);
      }
    } catch (error) {
      alert(`Network error: ${error.message}`);
    }
  };
  
  return (
    <div className={`authForm-container ${isRightPanelActive ? 'authForm-right-panel-active' : ''}`} id="authForm-container">
      {isRightPanelActive ? (
        <div className="authForm-form-container authForm-sign-up-container">
          <form onSubmit={handleSignUp}>
            <h1>Create Account</h1>
            <span>Use your email for registration</span><br />
            <input
              type="text"
              placeholder="First Name"
              value={signupFirstName}
              onChange={(e) => setSignupFirstName(e.target.value)}
            /><br />
            <input
              type="text"
              placeholder="Last Name"
              value={signupLastName}
              onChange={(e) => setSignupLastName(e.target.value)}
            /><br />
            <input
              type="text"
              placeholder="Username"
              value={signupUsername}
              onChange={(e) => setSignupUsername(e.target.value)}
            /><br />
            <input
              type="email"
              placeholder="Email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
            /><br />
            <div className="authForm-position-relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
              />
              <span className="authForm-password-icon" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div><br />
            <button type="submit">Sign Up</button>
            <p>
              If you want to register as Supplier/Wholesaler?
              <span 
                style={{ cursor: 'pointer', color: 'blue', textDecoration: 'none' }} 
                onClick={() => navigate('/register-from')}
              >
                Click here
              </span>
            </p>
          </form>
        </div>
      ) : (
        <div className="authForm-form-container authForm-sign-in-container">
          <form onSubmit={handleSignIn}>
            <h1>Sign in</h1>
            <span>Use your account</span><br />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /><br />
            <div className="authForm-position-relative">
              <input
                type={showSigninPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="authForm-password-icon" onClick={toggleSigninPasswordVisibility}>
                <FontAwesomeIcon icon={showSigninPassword ? faEyeSlash : faEye} />
              </span>
            </div><br />
            <button type="submit">Sign In</button>
            <p style={{ color: 'red' }}>{message}</p>
          </form>
        </div>
      )}
      <div className="authForm-overlay-container">
        <div className="authForm-overlay">
          <div className="authForm-overlay-panel authForm-overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="authForm-overlay-button" onClick={handlePanelSwitch}>Sign In</button>
          </div>
          <div className="authForm-overlay-panel authForm-overlay-right">
            <h1>New here?</h1>
            <p>Sign up and discover great opportunities!</p>
            <button className="authForm-overlay-button" onClick={handlePanelSwitch}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInUpForm;
