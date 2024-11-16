// import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import AdminMain from './components/AdminDashboard/AdminMain.js';
// import UserMain from './components/UserDashboard/UserMain.js';
// import SupplierMain from './components/SupplierDashboard/SupplierMain.js';

// // Inside your App.js
// const App = () => {
//   const [userRole, setUserRole] = useState(localStorage.getItem('role'));
//   const [supplierStatus, setSupplierStatus] = useState(localStorage.getItem('status'));

//   useEffect(() => {
//       const role = localStorage.getItem('role');
//       const status = localStorage.getItem('status');

//       // Only set state if the values are different
//       if (role !== userRole) {
//           setUserRole(role);
//       }

//       if (status !== supplierStatus) {
//           setSupplierStatus(status);
//       }
//   }, [userRole, supplierStatus]); // Avoiding infinite loop

//   return (
//       <Router>
//           <Routes>
//               <Route path="/*" element={<UserMain />} />
//               <Route path="/admin/*" element={userRole === 'admin' ? <AdminMain /> : <Navigate to="/" />} />
//               <Route path="/supplier/*" element={userRole === 'supplier' && supplierStatus === 'approved' ? <SupplierMain /> : <Navigate to="/" />} />
//               <Route path="*" element={<Navigate to="/" />} />
//           </Routes>
//       </Router>

//   );
// };
// export default App;


// import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import AdminMain from './components/AdminDashboard/AdminMain.js';
// import UserMain from './components/UserDashboard/UserMain.js';
// import SupplierMain from './components/SupplierDashboard/SupplierMain.js';

// const App = () => {
//   const [userRole, setUserRole] = useState(localStorage.getItem('role') || '');
//   const [supplierStatus, setSupplierStatus] = useState(localStorage.getItem('status') || '');

//   useEffect(() => {
//     const handleStorageChange = () => {
//       setUserRole(localStorage.getItem('role') || '');
//       setSupplierStatus(localStorage.getItem('status') || '');
//     };
//     window.addEventListener('storage', handleStorageChange);

//     return () => window.removeEventListener('storage', handleStorageChange);
//   }, []);

//   return (
//     <CartProvider>
//       <Router>
//         <Routes>
//           <Route path="/*" element={<UserMain />} />
//           <Route
//             path="/admin/*"
//             element={userRole === 'admin' ? <AdminMain /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/supplier/*"
//             element={userRole === 'supplier' && supplierStatus === 'approved' ? <SupplierMain /> : <Navigate to="/" />}
//           />
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       </Router>
//     </CartProvider>
//   );
// };

// export default App;


import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminMain from './components/AdminDashboard/AdminMain.js';
import UserMain from './components/UserDashboard/UserMain.js';
import SupplierMain from './components/SupplierDashboard/SupplierMain.js';
import Users from './components/AdminDashboard/Users.js';
import Suppliers from './components/AdminDashboard/Supplier.js';
import Wholesalers from './components/AdminDashboard/Wholesaler.js';
import AddProduct from './components/AdminDashboard/AddProduct.js';
import Products from './components/AdminDashboard/Products.js';
import PendingProducts from './components/AdminDashboard/ProductRequests.js';
import ProductList from './components/AdminDashboard/ProductList.js';
import OrderList from'./components/AdminDashboard/OrdeList.js';
import ContactList from './components/AdminDashboard/ContactList.js';
const App = () => {
  const [role, setUserRole] = useState(localStorage.getItem('role') || '');
  const [status, setSupplierStatus] = useState(localStorage.getItem('status') || '');

  useEffect(() => {
    const handleStorageChange = () => {
      setUserRole(localStorage.getItem('role') || '');
      setSupplierStatus(localStorage.getItem('status') || '');
    };
    window.addEventListener('storage', handleStorageChange);

    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    
      <Router>
        <Routes>
          <Route path="/*" element={<UserMain />} />
          <Route
            path="/admin/*"
            element={role === 'admin' ? <AdminMain /> : <Navigate to="/" />}
          />
          <Route
            path="/supplier/*"
            element={role === 'supplier' && status === 'approved' ? <SupplierMain /> : <Navigate to="/" />}
          />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/users" element={<Users />} />
          <Route path="/wholesaler" element={<Wholesalers />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product-request" element={<PendingProducts />} />
          {/* <Route path="/product-list" element={<ProductList />} /> */}
          <Route path="/order-list" element={<OrderList />} />
          <Route path="/contact-list" element={<ContactList />} />







        </Routes>
      </Router>
    
  );
};

export default App;
