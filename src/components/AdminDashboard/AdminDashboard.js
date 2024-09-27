
// import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';      
// import '../../style/AdminDashboard.css'; 
// import Users from './Users'
// import Products from './Products'

// const AdminDashboard = () => {
//     const handleLogout = () => {
//         localStorage.removeItem('authToken'); 

//         window.alert("Logout successful!");
      
//         window.location.href = '/'; 
//       };

//     return (
//       <div className="d-flex" id="wrapper">
//         {/* Sidebar */}
//         <div className="bg-dark border-right" id="sidebar-wrapper">
//           <div className="sidebar-heading text-white">
//             <i className="fas fa-tachometer-alt"></i> XLAYN Admin Dashboard
//           </div>
//           <div className="list-group list-group-flush">
//             <Link to="/admin/users" className="list-group-item list-group-item-action bg-dark text-white">
//               <i className="fas fa-users"></i> Users
//             </Link>
//             <Link to="/admin/products" className="list-group-item list-group-item-action bg-dark text-white">
//               <i className="fas fa-boxes"></i> Products
//             </Link>
//             <Link to="/admin/orders" className="list-group-item list-group-item-action bg-dark text-white">
//               <i className="fas fa-shopping-cart"></i> Orders
//             </Link>
//             <Link to="/admin/demand-forecast" className="list-group-item list-group-item-action bg-dark text-white">
//               <i className="fas fa-chart-line"></i> Demand Forecast
//             </Link>
//             <Link to="/admin/financial-reports" className="list-group-item list-group-item-action bg-dark text-white">
//               <i className="fas fa-file-invoice-dollar"></i> Financial Reports
//             </Link>
//             <Link to="/admin/system-maintenance" className="list-group-item list-group-item-action bg-dark text-white">
//               <i className="fas fa-tools"></i> System Maintenance
//             </Link>
//             <Link to="/admin/api-management" className="list-group-item list-group-item-action bg-dark text-white">
//               <i className="fas fa-code"></i> API Management
//             </Link>
//             <Link to="/admin/notifications-alerts" className="list-group-item list-group-item-action bg-dark text-white">
//               <i className="fas fa-bell"></i> Notifications & Alerts
//             </Link>
//             <button onClick={handleLogout} className="list-group-item list-group-item-action bg-dark text-white">
//             <i className="fas fa-sign-out-alt"></i> Log Out
//           </button>
//           </div>
//         </div>
  
//         {/* Page Content */}
//         <div id="page-content-wrapper">
//           {/* Navbar */}
//           <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
//             <div className="container-fluid">
//               <a className="navbar-brand" href="/">
//                 <img src="/logo.png" alt="Logo" width="30" height="30" className="d-inline-block align-top" />
//                 <span className="ml-2">XLAYN</span>
//               </a>
//             </div>
//           </nav>
  
//           {/* Main content */}
//           <div className="container-fluid mt-4">
//             <Routes>
//               <Route path="/admin/users" element={<Users />} />
//               <Route path="/admin/products" element={<Products />} />
//               <Route path="/admin/orders" element={<Orders />} />
//               <Route path="/admin/demand-forecast" element={<DemandForecast />} />
//               <Route path="/admin/financial-reports" element={<FinancialReports />} />
//               <Route path="/admin/system-maintenance" element={<SystemMaintenance />} />
//               <Route path="/admin/api-management" element={<ApiManagement />} />
//               <Route path="/admin/notifications-alerts" element={<NotificationsAlerts />} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   // Dummy Components for each route
// //   const Users = () => <h2>Users Management</h2>;
// //   const Products = () => <h2>Products Management</h2>;
//   const Orders = () => <h2>Orders Management</h2>;
//   const DemandForecast = () => <h2>Demand Forecast</h2>;
//   const FinancialReports = () => <h2>Financial Reports</h2>;
//   const SystemMaintenance = () => <h2>System Maintenance</h2>;
//   const ApiManagement = () => <h2>API Management</h2>;
//   const NotificationsAlerts = () => <h2>Notifications & Alerts</h2>;
  
//   export default AdminDashboard;




import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import '../../style/AdminDashboard.css'; // Custom CSS

const AdminDashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    alert('Logout successful!');
    window.location.href = '/';
  };

  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-container">
          <a href="/">
            <img src="/logo.png" alt="Logo" className="logo" />
            <span>XLAYN</span>
          </a>
        </div>
      </nav>

      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-heading">XLAYN Admin Dashboard</div>
        <ul className="sidebar-links">
          <li>
            <Link to="users">
              <i className="fas fa-users"></i> Users
            </Link>
          </li>
          <li>
            <Link to="products">
              <i className="fas fa-box"></i> Products
            </Link>
          </li>
          <li>
            <Link to="orders">
              <i className="fas fa-shopping-cart"></i> Orders
            </Link>
          </li>
          <li>
            <Link to="demand-forecast">
              <i className="fas fa-chart-line"></i> Demand Forecast
            </Link>
          </li>
          <li>
            <Link to="financial-reports">
              <i className="fas fa-file-invoice-dollar"></i> Financial Reports
            </Link>
          </li>
          <li>
            <Link to="system-maintenance">
              <i className="fas fa-tools"></i> System Maintenance
            </Link>
          </li>
          <li>
            <Link to="api-management">
              <i className="fas fa-code"></i> API Management
            </Link>
          </li>
          <li>
            <Link to="notifications-alerts">
              <i className="fas fa-bell"></i> Notifications & Alerts
            </Link>
          </li>
          <li>
            <button onClick={handleLogout}>
              <i className="fas fa-sign-out-alt"></i> Log Out
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="content">
        <Outlet /> {/* Render the route content here */}
      </div>
    </div>
  );
};

// Dummy Components for each route
const Users = () => <h2>Users Management</h2>;
const Products = () => <h2>Products Management</h2>;
const Orders = () => <h2>Orders Management</h2>;
const DemandForecast = () => <h2>Demand Forecast</h2>;
const FinancialReports = () => <h2>Financial Reports</h2>;
const SystemMaintenance = () => <h2>System Maintenance</h2>;
const ApiManagement = () => <h2>API Management</h2>;
const NotificationsAlerts = () => <h2>Notifications & Alerts</h2>;

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />}>
        <Route path="/admin-dashboard/users" element={<Users />} />
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
        <Route path="demand-forecast" element={<DemandForecast />} />
        <Route path="financial-reports" element={<FinancialReports />} />
        <Route path="system-maintenance" element={<SystemMaintenance />} />
        <Route path="api-management" element={<ApiManagement />} />
        <Route path="notifications-alerts" element={<NotificationsAlerts />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
