// import React from 'react';
// import SignInUpForm from './components/SignInUpForm';
// import AccountPage from './components/AccountPage';
// import RegisterSupplier from './components/RegisterSupplier';


// function App() {
//   return (
//     <div className="App">
//       <SignInUpForm />
//       {/* <AccountPage />
//       <RegisterSupplier /> */}
//     </div>
//   );
// }

// export default App;



import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInUpForm from './components/SignInUpForm'; 
import RegisterForm from './components/Request/RegisterRequest.js';
import AccountPage from './components/AccountPage';
import AdminDashboard from './components/AdminDashboard/AdminDashboard.js';
import UserDashboard from './components/UserDashboard/UserDashboard.js'
import SupplierDashboard from './components/SupplierDashboard/SupplierDashboard.js';
import Users from './components/AdminDashboard/Users.js';
import Products from './components/AdminDashboard/Products.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInUpForm />} /> 
        <Route path="/register-request" element={<RegisterForm />} /> 
        <Route path="/account" element={<AccountPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/supplier-dashboard" element={<SupplierDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard/users" element={<Users />} />
        <Route path="/admin-dashboard/products" element={<Products />} />
        {/* Other routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
