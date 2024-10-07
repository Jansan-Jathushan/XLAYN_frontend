// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../App.css'; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// const SignInUpForm = () => {
//   const [isRightPanelActive, setIsRightPanelActive] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showSigninPassword, setShowSigninPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const toggleSigninPasswordVisibility = () => {
//     setShowSigninPassword(!showSigninPassword);
//   };

//   const handlePanelSwitch = () => {
//     setIsRightPanelActive(!isRightPanelActive);
//   };

//   return (
//     <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
//       {isRightPanelActive ? (
//         <div className="form-container sign-up-container">
//           <form>
//             <h1>Create Account</h1>
//             <div className="social-container">
//               <a href="#" className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
//               <a href="#" className="social"><FontAwesomeIcon icon={faGooglePlusG} /></a>
//               <a href="#" className="social"><FontAwesomeIcon icon={faLinkedinIn} /></a>
//             </div>
//             <span>use your email for registration</span><br />
//             <input type="text" placeholder="First Name" /><br />
//             <input type="text" placeholder="Last Name" /><br />
//             <input type="text" placeholder="Username" /><br />
//             <input type="email" placeholder="Email" /><br />
//             <div className="position-relative">
//               <input type={showPassword ? 'text' : 'password'} placeholder="Password" id="password" />
//               <span className="password-icon" onClick={togglePasswordVisibility}>
//                 <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
//               </span>
//             </div><br />
//             <button>Sign Up</button>
//           </form>
//         </div>
//       ) : (
//         <div className="form-container sign-in-container">
//           <form>
//             <h1>Sign in</h1>
//             <div className="social-container">
//               <a href="#" className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
//               <a href="#" className="social"><FontAwesomeIcon icon={faGooglePlusG} /></a>
//               <a href="#" className="social"><FontAwesomeIcon icon={faLinkedinIn} /></a>
//             </div>
//             <span>use your account</span><br />
//             <input type="email" placeholder="Email" /><br />
//             <div className="position-relative">
//               <input type={showSigninPassword ? 'text' : 'password'} id="signin-password" placeholder="Password" />
//               <span className="password-icon" onClick={toggleSigninPasswordVisibility}>
//                 <FontAwesomeIcon icon={showSigninPassword ? faEyeSlash : faEye} />
//               </span>
//             </div><br />
//             <a href="#" className="forgot" >Forgot your password?</a><br />
//             <button>Sign In</button>
//           </form>
//         </div>
//       )}

//       <div className="overlay-container">
//         <div className="overlay">
//           <div className="overlay-panel overlay-left">
//             <h1>Welcome Back!</h1>
//             <p>To keep connected with us please login with your personal info</p>
//             <button className="ghost" onClick={handlePanelSwitch}>Sign In</button>
//           </div>
//           <div className="overlay-panel overlay-right">
//             <h1>Hello, Friend!</h1>
//             <p>Enter your personal details and start journey with us</p>
//             <button className="ghost"  onClick={handlePanelSwitch}>Sign Up</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignInUpForm;


// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../App.css'; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios'; // Import Axios

// const SignInUpForm = () => {
//   const [isRightPanelActive, setIsRightPanelActive] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showSigninPassword, setShowSigninPassword] = useState(false);
//   const [signupForm, setSignupForm] = useState({
//     firstName: '',
//     lastName: '',
//     username: '',
//     email: '',
//     password: '',
//     role: 'Supplier' // Default role as Supplier
//   });
//   const [signinForm, setSigninForm] = useState({
//     email: '',
//     password: ''
//   });

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const toggleSigninPasswordVisibility = () => {
//     setShowSigninPassword(!showSigninPassword);
//   };

//   const handlePanelSwitch = () => {
//     setIsRightPanelActive(!isRightPanelActive);
//   };

//   const handleSignupChange = (e) => {
//     setSignupForm({
//       ...signupForm,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSigninChange = (e) => {
//     setSigninForm({
//       ...signinForm,
//       [e.target.name]: e.target.value,
//     });
//   };



//   const handleSignupSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/users/', signupForm); // Corrected variable name
//       console.log('Signup successful', response.data);
//     } catch (error) {
//       console.error('Signup error', error.response?.data || error.message);
//     }
//   };

//   const handleSigninSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/users/login', signinForm); // Corrected variable name
//       console.log('Signin successful', response.data);
//       localStorage.setItem('authToken', response.data.token); // Store the token
//     } catch (error) {
//       console.error('Signin error', error.response?.data || error.message);
//     }
//   };



//   return (
//     <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
//       {isRightPanelActive ? (
//         <div className="form-container sign-up-container">
//           <form onSubmit={handleSignupSubmit}>
//             <h1>Create Account</h1>
//             <div className="social-container">
//               <a href="#" className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
//               <a href="#" className="social"><FontAwesomeIcon icon={faGooglePlusG} /></a>
//               <a href="#" className="social"><FontAwesomeIcon icon={faLinkedinIn} /></a>
//             </div>
//             <span>use your email for registration</span><br />
//             <input type="text" name="firstName" placeholder="First Name" value={signupForm.firstName} onChange={handleSignupChange} /><br />
//             <input type="text" name="lastName" placeholder="Last Name" value={signupForm.lastName} onChange={handleSignupChange} /><br />
//             <input type="text" name="username" placeholder="Username" value={signupForm.username} onChange={handleSignupChange} /><br />
//             <input type="email" name="email" placeholder="Email" value={signupForm.email} onChange={handleSignupChange} /><br />
//             <div className="position-relative">
//               <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" value={signupForm.password} onChange={handleSignupChange} id="password" />
//               <span className="password-icon" onClick={togglePasswordVisibility}>
//                 <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
//               </span>
//             </div><br />
//             <select name="role" value={signupForm.role} onChange={handleSignupChange}>
//               <option value="Supplier">Supplier</option>
//               <option value="individual">Individual</option>
//               <option value="wholesale">wholesale</option>
//               <option value="Admin">Admin</option>
//             </select><br />
//             <button type="submit">Sign Up</button>
//           </form>
//         </div>
//       ) : (
//         <div className="form-container sign-in-container">
//           <form onSubmit={handleSigninSubmit}>
//             <h1>Sign in</h1>
//             <div className="social-container">
//               <a href="#" className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
//               <a href="#" className="social"><FontAwesomeIcon icon={faGooglePlusG} /></a>
//               <a href="#" className="social"><FontAwesomeIcon icon={faLinkedinIn} /></a>
//             </div>
//             <span>use your account</span><br />
//             <input type="email" name="email" placeholder="Email" value={signinForm.email} onChange={handleSigninChange} /><br />
//             <div className="position-relative">
//               <input type={showSigninPassword ? 'text' : 'password'} name="password" value={signinForm.password} onChange={handleSigninChange} id="signin-password" placeholder="Password" />
//               <span className="password-icon" onClick={toggleSigninPasswordVisibility}>
//                 <FontAwesomeIcon icon={showSigninPassword ? faEyeSlash : faEye} />
//               </span>
//             </div><br />
//             <a href="#" className="forgot">Forgot your password?</a><br />
//             <button type="submit">Sign In</button>
//           </form>
//         </div>
//       )}

//       <div className="overlay-container">
//         <div className="overlay">
//           <div className="overlay-panel overlay-left">
//             <h1>Welcome Back!</h1>
//             <p>To keep connected with us please login with your personal info</p>
//             <button className="ghost" onClick={handlePanelSwitch}>Sign In</button>
//           </div>
//           <div className="overlay-panel overlay-right">
//             <h1>Hello, Friend!</h1>
//             <p>Enter your personal details and start journey with us</p>
//             <button className="ghost" onClick={handlePanelSwitch}>Sign Up</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignInUpForm;








// import React, { useState } from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css';      
// import '../App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
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

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const toggleSigninPasswordVisibility = () => {
//     setShowSigninPassword(!showSigninPassword);
//   };

//   const handlePanelSwitch = () => {
//     setIsRightPanelActive(!isRightPanelActive);
//   };
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
//         alert('Sign-up successful!');
//       } else {
//         alert(`Sign-up error: ${response.data.error}`);
//       }
//     } catch (error) {
//       alert(`Network error: ${error}`);
//     }
//   };

//   const handleSignIn = async (event) => {
//     event.preventDefault();

//     if (!email || !password) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:5000/api/users/login', {
//         email,
//         password,
//       });

//       if (response.status === 200) {
//         alert('Sign-in successful!');
//       } else {
//         alert(`Sign-in error: ${response.data.error}`);
//       }
//     } catch (error) {
//       alert(`Network error: ${error}`);
//     }
//   };



//   return (
//     <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
//       {isRightPanelActive ? (
//         <div className="form-container sign-up-container">
//           <form onSubmit={handleSignUp}> {/* Updated to include handleSignUp */}
//             <h1>Create Account</h1>
//             <div className="social-container">
//               <a href="#" className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
//               <a href="#" className="social"><FontAwesomeIcon icon={faGooglePlusG} /></a>
//               <a href="#" className="social"><FontAwesomeIcon icon={faLinkedinIn} /></a>
//             </div>
//             <span>use your email for registration</span><br />
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
//             <div className="position-relative">
//               <input 
//                 type={showPassword ? 'text' : 'password'} 
//                 placeholder="Password" 
//                 id="password" 
//                 value={signupPassword} 
//                 onChange={(e) => setSignupPassword(e.target.value)} 
//               />
//               <span className="password-icon" onClick={togglePasswordVisibility}>
//                 <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
//               </span>
//             </div><br />
//             <button type="submit">Sign Up</button> {/* Updated to type="submit" */}
//           </form>
//         </div>
//       ) : (
//         <div className="form-container sign-in-container">
//           <form onSubmit={handleSignIn}> {/* Updated to include handleSignIn */}
//             <h1>Sign in</h1>
//             <div className="social-container">
//               <a href="#" className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
//               <a href="#" className="social"><FontAwesomeIcon icon={faGooglePlusG} /></a>
//               <a href="#" className="social"><FontAwesomeIcon icon={faLinkedinIn} /></a>
//             </div>
//             <span>use your account</span><br />
//             <input 
//               type="email" 
//               placeholder="Email" 
//               value={email} 
//               onChange={(e) => setEmail(e.target.value)} 
//             /><br />
//             <div className="position-relative">
//               <input 
//                 type={showSigninPassword ? 'text' : 'password'} 
//                 placeholder="Password" 
//                 value={password} 
//                 onChange={(e) => setPassword(e.target.value)} 
//               />
//               <span className="password-icon" onClick={toggleSigninPasswordVisibility}>
//                 <FontAwesomeIcon icon={showSigninPassword ? faEyeSlash : faEye} />
//               </span>
//             </div><br />
//             <a href="#">Forgot your password?</a><br />
//             <button type="submit">Sign In</button> {/* Updated to type="submit" */}
//           </form>
//         </div>
//       )}

//       <div className="overlay-container">
//         <div className="overlay">
//           <div className="overlay-panel overlay-left">
//             <h1>Welcome Back!</h1>
//             <p>To keep connected with us please login with your personal info</p>
//             <button onClick={handlePanelSwitch}>Sign In</button>
//           </div>
//           <div className="overlay-panel overlay-right">
//             <h1>Hello, Friend!</h1>
//             <p>Enter your personal details and start journey with us</p>
//             <button onClick={handlePanelSwitch}>Sign Up</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignInUpForm;





// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';  // Import useNavigate for React Router
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
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

//   const navigate = useNavigate();  // Initialize useNavigate for navigation

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const toggleSigninPasswordVisibility = () => {
//     setShowSigninPassword(!showSigninPassword);
//   };

//   const handlePanelSwitch = () => {
//     setIsRightPanelActive(!isRightPanelActive);
//   };

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
//         alert('Sign-up successful!');
//       } else {
//         alert(`Sign-up error: ${response.data.error}`);
//       }
//     } catch (error) {
//       alert(`Network error: ${error}`);
//     }
//   };

//   const handleSignIn = async (event) => {
//     event.preventDefault();

//     if (!email || !password) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:5000/api/users/login', {
//         email,
//         password,
//       });

//       if (response.status === 200) {
//         const userData = response.data;  // Assume the response includes user data with the role
//         const userRole = userData.role;  // Adjust based on the actual response format

//         // Save the role to sessionStorage
//         sessionStorage.setItem('userRole', userRole);

//         // Redirect based on the user's role
//         navigateBasedOnRole(userRole);
//       } else {
//         alert(`Sign-in error: ${response.data.error}`);
//       }
//     } catch (error) {
//       alert(`Network error: ${error}`);
//     }
//   };

//   // Function to navigate based on the role from sessionStorage
//   const navigateBasedOnRole = (role) => {
//     if (role === 'admin') {
//       navigate('/admin-dashboard');
//     } else if (role === 'supplier') {
//       navigate('/supplier-dashboard');
//     } else {
//       navigate('/user-dashboard');
//     }
//   };

//   // Check role from sessionStorage on component mount
//   React.useEffect(() => {
//     const storedRole = sessionStorage.getItem('userRole');
//     if (storedRole) {
//       navigateBasedOnRole(storedRole);  // If a role exists in sessionStorage, navigate accordingly
//     }
//   }, []);

//   return (
//     <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
//       {isRightPanelActive ? (
//         <div className="form-container sign-up-container">
//           <form onSubmit={handleSignUp}>
//             <h1>Create Account</h1>
//             <div className="social-container">
//               <a href="#" className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
//               <a href="#" className="social"><FontAwesomeIcon icon={faGooglePlusG} /></a>
//               <a href="#" className="social"><FontAwesomeIcon icon={faLinkedinIn} /></a>
//             </div>
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
//             <div className="position-relative">
//               <input 
//                 type={showPassword ? 'text' : 'password'} 
//                 placeholder="Password" 
//                 value={signupPassword} 
//                 onChange={(e) => setSignupPassword(e.target.value)} 
//               />
//               <span className="password-icon" onClick={togglePasswordVisibility}>
//                 <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
//               </span>
//             </div><br />
//             <button type="submit">Sign Up</button>
//           </form>
//         </div>
//       ) : (
//         <div className="form-container sign-in-container">
//           <form onSubmit={handleSignIn}>
//             <h1>Sign in</h1>
//             <div className="social-container">
//               <a href="#" className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
//               <a href="#" className="social"><FontAwesomeIcon icon={faGooglePlusG} /></a>
//               <a href="#" className="social"><FontAwesomeIcon icon={faLinkedinIn} /></a>
//             </div>
//             <span>Use your account</span><br />
//             <input 
//               type="email" 
//               placeholder="Email" 
//               value={email} 
//               onChange={(e) => setEmail(e.target.value)} 
//             /><br />
//             <div className="position-relative">
//               <input 
//                 type={showSigninPassword ? 'text' : 'password'} 
//                 placeholder="Password" 
//                 value={password} 
//                 onChange={(e) => setPassword(e.target.value)} 
//               />
//               <span className="password-icon" onClick={toggleSigninPasswordVisibility}>
//                 <FontAwesomeIcon icon={showSigninPassword ? faEyeSlash : faEye} />
//               </span>
//             </div><br />
//             <a href="#">Forgot your password?</a><br />
//             <button type="submit">Sign In</button>
//           </form>
//         </div>
//       )}

//       <div className="overlay-container">
//         <div className="overlay">
//           <div className="overlay-panel overlay-left">
//             <h1>Welcome Back!</h1>
//             <p>To keep connected with us please login with your personal info</p>
//             <button onClick={handlePanelSwitch}>Sign In</button>
//           </div>
//           <div className="overlay-panel overlay-right">
//             <h1>Hello, Friend!</h1>
//             <p>Enter your personal details and start journey with us</p>
//             <button onClick={handlePanelSwitch}>Sign Up</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignInUpForm;








import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for React Router
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
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

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // now

  useEffect(() => {
    const userId = sessionStorage.getItem('id');
    const userRole = sessionStorage.getItem('role');
    const token = sessionStorage.getItem('token');

    if (userId && userRole && token) {
      navigateBasedOnRole(userRole);
    } else {
      console.log("Session storage values are undefined");
      // Handle the case when the values are not set
    }
  }, []);

  const navigateBasedOnRole = (role) => {
    if (role === 'admin') {
      navigate('/admin-dashboard');
    } else if (role === 'supplier') {
      navigate('/supplier-dashboard');
    } else {
      navigate('/user-dashboard');
    }
  };

  // Handle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleSigninPasswordVisibility = () => {
    setShowSigninPassword(!showSigninPassword);
  };

  const handlePanelSwitch = () => {
    setIsRightPanelActive(!isRightPanelActive);
  };

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
        alert('Sign-up successful!');
      } else {
        alert(`Sign-up error: ${response.data.error}`);
      }
    } catch (error) {
      alert(`Network error: ${error}`);
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
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      });

      if (response.status === 200) {
        // Assuming response.data contains the required user info
        const { id, role, token } = response.data;
        // Save to session storage
        sessionStorage.setItem('id', id);
        sessionStorage.setItem('role', role);
        sessionStorage.setItem('token', token);

        alert('Sign-in successful!');
        // Redirect based on role
        navigateBasedOnRole(role);
      } else {
        alert(`Sign-in error: ${response.data.error}`);
      }
    } catch (error) {
      alert(`Network error: ${error}`);
    }
  };


  // Check session storage on mount and redirect if already logged in
  useEffect(() => {
    const navigateBasedOnRole = () => {
      const userRole = sessionStorage.getItem('userRole');
      if (userRole === 'admin') {
        navigate('/admin-dashboard');
      } else if (userRole === 'supplier') {
        navigate('/supplier-dashboard');
      } else if (userRole) {
        navigate('/user-dashboard');
      }
    };

    navigateBasedOnRole();
  }, [navigate]);

  return (
    <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
      {isRightPanelActive ? (
        <div className="form-container sign-up-container">
          <form onSubmit={handleSignUp}>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="social"><FontAwesomeIcon icon={faGooglePlusG} /></a>
              <a href="#" className="social"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
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
            <div className="position-relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
              />
              <span className="password-icon" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div><br />
            <button type="submit">Sign Up</button>
            <a
              href="#"
              onClick={() => navigate('/register-request')}
              style={{ marginTop: '10px', display: 'block', color: '#007bff', textDecoration: 'underline', cursor: 'pointer' }}
            >
              Want to register as a supplier/wholesaler? Click here
            </a>

          </form>
        </div>
      ) : (
        <div className="form-container sign-in-container">
          <form onSubmit={handleSignIn}>
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="social"><FontAwesomeIcon icon={faGooglePlusG} /></a>
              <a href="#" className="social"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
            <span>Use your account</span><br />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /><br />
            <div className="position-relative">
              <input
                type={showSigninPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="password-icon" onClick={toggleSigninPasswordVisibility}>
                <FontAwesomeIcon icon={showSigninPassword ? faEyeSlash : faEye} />
              </span>
            </div><br />
            <a href="#">Forgot your password?</a><br />
            <button type="submit">Sign In</button>
          </form>
        </div>
      )}

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button onClick={handlePanelSwitch}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start your journey with us</p>
            <button onClick={handlePanelSwitch}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInUpForm;
