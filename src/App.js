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



// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import SignInUpForm from './components/UserDashboard/SignInUpForm.js'; 
// import RegisterForm from './components/UserDashboard/RegisterRequest.js';
// import AdminDashboard from './components/AdminDashboard/AdminDashboard.js';
// import SupplierDashboard from './components/SupplierDashboard/SupplierDashboard.js';
// import Users from './components/AdminDashboard/Users.js';
// import Products from './components/AdminDashboard/Products.js';
// import AdminLayout from './components/AdminDashboard/AdminLayout.js';
// import AdminMain from './components/AdminDashboard/AdminMain.js';
// import UserMain from './components/UserDashboard/UserMain.js'



// const App = () => {
//   const userRole = localStorage.getItem('userRole'); // Retrieve the user role
//   const isAdmin = userRole === 'admin'; // Check if the role is admin

//   return (
//       <BrowserRouter>
//           <Routes>
//               {/* Other routes */}
//               {AdminMain(isAdmin)} {/* Using the admin routes */}
//               {UserMain} {/* Using the user routes */}
//           </Routes>
//       </BrowserRouter>
//   );
// };

// export default App;


import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import AdminLayout from './components/AdminDashboard/AdminLayout';
import AdminMain from './components/AdminDashboard/AdminMain';
import UserMain from './components/UserDashboard/UserMain';
import SupplierMain from './components/SupplierDashboard/SupplierMain'; // Import SupplierMain

const App = () => {
    const userRole = localStorage.getItem('userRole'); // Retrieve the user role
    const isAdmin = userRole === 'admin'; // Check if the role is admin
    const isSupplier = userRole === 'supplier'; // Check if the role is supplier

    return (
        <BrowserRouter>
            <Routes>
              
                {/* Admin Routes */}
                {isAdmin && (
                    <Route path="/admin/*" element={<AdminMain isAdmin={isAdmin} />} /> // Use the AdminMain component for admin routes
                )}

                {/* User Routes */}
                <Route path="/user/*" element={<UserMain />} /> {/* Use the UserMain component for user routes */}

                {/* Supplier Routes */}
                {isSupplier && (
                    <Route path="/supplier/*" element={<SupplierMain />} /> // Use the SupplierMain component for supplier routes
                )}

            </Routes>
        </BrowserRouter>
    );
};

export default App;
