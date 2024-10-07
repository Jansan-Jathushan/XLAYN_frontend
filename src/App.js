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
import SignInUpForm from './components/UserDashboard/SignInUpForm.js'; 
import RegisterForm from './components/UserDashboard/RegisterRequest.js';
import AdminDashboard from './components/AdminDashboard/AdminDashboard.js';
import SupplierDashboard from './components/SupplierDashboard/SupplierDashboard.js';
import Users from './components/AdminDashboard/Users.js';
import Products from './components/AdminDashboard/Products.js';
import AdminLayout from './components/AdminDashboard/AdminLayout.js';
import AdminMain from './components/AdminDashboard/AdminMain.js';
import UserMain from './components/UserDashboard/UserMain.js'



const App = () => {
  const userRole = localStorage.getItem('userRole'); // Retrieve the user role
  const isAdmin = userRole === 'admin'; // Check if the role is admin

  return (
      <BrowserRouter>
          <Routes>
              {/* Other routes */}
              {AdminMain(isAdmin)} {/* Using the admin routes */}
              {UserMain} {/* Using the user routes */}
          </Routes>
      </BrowserRouter>
  );
};

export default App;
