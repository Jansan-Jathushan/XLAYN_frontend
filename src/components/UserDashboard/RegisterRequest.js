import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/UserDashboard/RegisterRequest.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const RegisterForm = () => {
  // Separate state for supplier and wholesaler
  const [supplierDetails, setSupplierDetails] = useState({
    username: '',
    businessName: '',
    address: '',
    businessProof: null,
    storeImage: null,
    bankAccountInfo: '',
    email: '',
    password: '',
  });

  const [wholesalerDetails, setWholesalerDetails] = useState({
    username: '',
    businessName: '',
    address: '',
    businessProof: null,
    storeImage: null,
    bankAccountInfo: '',
    email: '',
    password: '',
  });

  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePanelSwitch = () => {
    setIsRightPanelActive(!isRightPanelActive);
  };

  const handleSupplierInputChange = (e) => {
    const { name, value, files } = e.target;
    setSupplierDetails({
      ...supplierDetails,
      [name]: files ? files[0] : value, // Handle file inputs separately
    });
  };

  const handleWholesalerInputChange = (e) => {
    const { name, value, files } = e.target;
    setWholesalerDetails({
      ...wholesalerDetails,
      [name]: files ? files[0] : value, // Handle file inputs separately
    });
  };

  // Function to handle supplier registration submission
  const handleSupplierSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.keys(supplierDetails).forEach(key => {
        formData.append(key, supplierDetails[key]);
      });

      const response = await axios.post('http://localhost:5000/api/register-request/register-supplier', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert(response.data.message);
    } catch (error) {
      setError(error.response ? error.response.data.message : 'An error occurred');
    }
  };

  // Function to handle wholesaler registration submission
  const handleWholesalerSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.keys(wholesalerDetails).forEach(key => {
        formData.append(key, wholesalerDetails[key]);
      });

      const response = await axios.post('http://localhost:5000/api/register-request/register-wholesaler', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert(response.data.message);
    } catch (error) {
      setError(error.response ? error.response.data.message : 'An error occurred');
    }
  };

  return (
    <div className={`register-request-container ${isRightPanelActive ? 'register-request-right-panel-active' : ''}`} id="register-request-container">
      {/* Supplier Registration */}
      {isRightPanelActive ? (
        <div className="register-request-supplier-form-container sign-up-container">
          <form onSubmit={handleSupplierSubmit}>
            <h1>Register as Supplier</h1>
            <span>Use your business details to register</span><br />
            <input type="text" placeholder="Username" name="username" value={supplierDetails.username} onChange={handleSupplierInputChange} /><br />
            <input type="text" placeholder="Registered Business Name" name="businessName" value={supplierDetails.businessName} onChange={handleSupplierInputChange} /><br />
            <input type="text" placeholder="Address of Business" name="address" value={supplierDetails.address} onChange={handleSupplierInputChange} /><br />
            <label>Upload Business Proof (Business Registration Certificate, Tax ID, or Trade License)</label>
            <input type="file" name="businessProof" onChange={handleSupplierInputChange} /><br />
            <label>Upload Store Image/Video</label>
            <input type="file" name="storeImage" accept="image/*,video/*" onChange={handleSupplierInputChange} /><br />
            <input type="text" placeholder="Bank Account Information (Business Name)" name="bankAccountInfo" value={supplierDetails.bankAccountInfo} onChange={handleSupplierInputChange} /><br />
            <input type="email" placeholder="Email" name="email" value={supplierDetails.email} onChange={handleSupplierInputChange} /><br />
            <div className="position-relative">
              <input type={showPassword ? 'text' : 'password'} placeholder="Password" name="password" value={supplierDetails.password} onChange={handleSupplierInputChange} id="supplier-password" />
              <span className="password-icon" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div><br />
            <button type="submit">Register as Supplier</button>
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      ) : (
        // Wholesaler Registration
        <div className="register-request-wholesaler-form-container sign-in-container">
          <form onSubmit={handleWholesalerSubmit}>
            <h1>Register as Wholesaler</h1>
            <span>Use your business details to register</span><br />
            <input type="text" placeholder="Username" name="username" value={wholesalerDetails.username} onChange={handleWholesalerInputChange} /><br />
            <input type="text" placeholder="Registered Business Name" name="businessName" value={wholesalerDetails.businessName} onChange={handleWholesalerInputChange} /><br />
            <input type="text" placeholder="Address of Business" name="address" value={wholesalerDetails.address} onChange={handleWholesalerInputChange} /><br />
            <label>Upload Business Proof (Business Registration Certificate, Tax ID, or Trade License)</label>
            <input type="file" name="businessProof" onChange={handleWholesalerInputChange} /><br />
            <label>Upload Store Image/Video</label>
            <input type="file" name="storeImage" accept="image/*,video/*" onChange={handleWholesalerInputChange} /><br />
            <input type="text" placeholder="Bank Account Information (Business Name)" name="bankAccountInfo" value={wholesalerDetails.bankAccountInfo} onChange={handleWholesalerInputChange} /><br />
            <input type="email" placeholder="Email" name="email" value={wholesalerDetails.email} onChange={handleWholesalerInputChange} /><br />
            <div className="position-relative">
              <input type={showPassword ? 'text' : 'password'} name="password" value={wholesalerDetails.password} onChange={handleWholesalerInputChange} id="wholesaler-password" placeholder="Password" />
              <span className="password-icon" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div><br />
            <button type="submit">Register as Wholesaler</button>
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      )}
  
      {/* Overlay */}
      <div className="register-request-overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Already Registered?</h1>
            <p>If you have already registered as a Supplier, sign in here.</p>
            <button className="ghost" id="signIn" onClick={handlePanelSwitch}>Register as Supplier</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>First Time Here?</h1>
            <p>If you haven't registered as a Wholesaler, sign up here.</p>
            <button className="ghost" id="signUp" onClick={handlePanelSwitch}>Register as Wholesaler</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
