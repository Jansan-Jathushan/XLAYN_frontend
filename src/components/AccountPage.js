// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const AccountPage = ({ userDetails }) => {
//   const navigate = useNavigate(); // Proper use of the hook inside the function component

//   const handleRegisterSupplier = () => {
//     navigate('/register-supplier'); // Navigate to supplier registration form
//   };

//   const handleRegisterWholesaler = () => {
//     navigate('/register-wholesaler'); // Navigate to wholesaler registration form
//   };

//   return (
//     <div>
//       <h2>Account Details</h2>
//       <p>Name: {userDetails.name}</p>
//       <p>Username: {userDetails.username}</p>
//       <button onClick={handleRegisterSupplier}>Register as Supplier</button>
//       <button onClick={handleRegisterWholesaler}>Register as Wholesaler</button>
//     </div>
//   );
// };

// export default AccountPage;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const AccountPage = ({ userDetails }) => {
//   const navigate = useNavigate(); // Proper use of the hook inside the function component

//   const handleRegisterSupplier = () => {
//     navigate('/register-supplier'); // Navigate to supplier registration form
//   };

//   const handleRegisterWholesaler = () => {
//     navigate('/register-wholesaler'); // Navigate to wholesaler registration form
//   };

//   // Check if userDetails exists before rendering the details
//   return (
//     <div>
//       <h2>Account Details</h2>
//       {userDetails ? (
//         <>
//           <p>Name: {userDetails.name}</p>
//           <p>Username: {userDetails.username}</p>
//           <button onClick={handleRegisterSupplier}>Register as Supplier</button>
//           <button onClick={handleRegisterWholesaler}>Register as Wholesaler</button>
//         </>
//       ) : (
//         <p>Loading user details...</p> // Fallback when userDetails is not available
//       )}
//     </div>
//   );
// };

// export default AccountPage;


import React from 'react';
import { useNavigate } from 'react-router-dom';

const AccountPage = () => {
  const navigate = useNavigate();

  const handleRegisterSupplier = () => {
    // Navigate to the supplier registration form
    navigate('/register-supplier');
  };

  const handleRegisterWholesaler = () => {
    // Navigate to the wholesaler registration form
    navigate('/register-wholesaler');
  };

  return (
    <div>
      <h1>Account Details</h1>
      {/* Display user details here */}
      
      <button onClick={handleRegisterSupplier}>Register as Supplier</button>
      <button onClick={handleRegisterWholesaler}>Register as Wholesaler</button>
    </div>
  );
};

export default AccountPage;
