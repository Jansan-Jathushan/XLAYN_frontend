// import React, { useState } from 'react';
// import { Link,Routes, Route, useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
// // import './AdminLayout.css'; // Assuming you have custom CSS for additional styles
// // import Users from './Users';

// const AdminLayout = () => {
//     const navigate = useNavigate();
//     const [userManagementOpen, setUserManagementOpen] = useState(false);
//     const [productManagementOpen, setProductManagementOpen] = useState(false);
//     const [orderManagementOpen, setOrderManagementOpen] = useState(false);
//     const [deliveryStatusOpen, setDeliveryStatusOpen] = useState(false);

//     const handleLogout = () => {
//         localStorage.removeItem('token');
//         navigate('/sign-inup');
//     };

//     return (
//         <div className="admin-layout d-flex">
//             <aside className="sidebar bg-light" style={{ width: '250px', height: '100vh' }}>
//                 <h2 className="text-center">XLAYN Admin Dashboard</h2>
//                 <ul className="nav flex-column">
//                     {/* User Management Dropdown */}
//                     <li className="nav-item">
//                         <a
//                             className="nav-link"
//                             onClick={() => setUserManagementOpen(!userManagementOpen)}
//                             style={{ cursor: 'pointer' }}
//                         >
//                             <i className="fas fa-users"></i> User Management
//                         </a>
//                         <ul className={`nav flex-column ${userManagementOpen ? 'show' : 'collapse'}`}>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="users">Users</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="suppliers">Suppliers</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="wholesalers">Wholesalers</Link>
//                             </li>
//                         </ul>
//                     </li>

//                     {/* Product Management Dropdown */}
//                     <li className="nav-item">
//                         <a
//                             className="nav-link"
//                             onClick={() => setProductManagementOpen(!productManagementOpen)}
//                             style={{ cursor: 'pointer' }}
//                         >
//                             <i className="fas fa-box"></i> Product Management
//                         </a>
//                         <ul className={`nav flex-column ${productManagementOpen ? 'show' : 'collapse'}`}>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="add-product">Add Product</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="product-requests">Product Requests</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="product-list">Product List</Link>
//                             </li>
//                         </ul>
//                     </li>

//                     {/* Order Management Dropdown */}
//                     <li className="nav-item">
//                         <a
//                             className="nav-link"
//                             onClick={() => setOrderManagementOpen(!orderManagementOpen)}
//                             style={{ cursor: 'pointer' }}
//                         >
//                             <i className="fas fa-receipt"></i> Order Management
//                         </a>
//                         <ul className={`nav flex-column ${orderManagementOpen ? 'show' : 'collapse'}`}>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="order-requests">Order Requests</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="approved-orders">Approved Orders</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="rejected-orders">Rejected Orders</Link>
//                             </li>
//                         </ul>
//                     </li>

//                     {/* Other Navigation Items */}
//                     <li className="nav-item">
//                         <Link className="nav-link" to="payment-management">
//                             <i className="fas fa-money-bill-wave"></i> Payment Management
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         <a
//                             className="nav-link"
//                             onClick={() => setDeliveryStatusOpen(!deliveryStatusOpen)}
//                             style={{ cursor: 'pointer' }}
//                         >
//                             <i className="fas fa-truck"></i> Delivery Status
//                         </a>
//                         <ul className={`nav flex-column ${deliveryStatusOpen ? 'show' : 'collapse'}`}>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="pending-delivery">Pending Delivery</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="successful-delivery">Successful Delivery</Link>
//                             </li>
//                         </ul>
//                     </li>
//                     <li className="nav-item">
//                         <Link className="nav-link" to="feedback-rating">
//                             <i className="fas fa-star"></i> Feedback/Rating
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link className="nav-link" to="customer-requests">
//                             <i className="fas fa-comments"></i> Customer Requests
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         <button onClick={handleLogout} className="btn btn-danger w-100">
//                             <i className="fas fa-sign-out-alt"></i> Logout
//                         </button>
//                     </li>
//                 </ul>
//             </aside>
//         </div>
//     );
// };
// {/* <Routes>
// <Route path="users" element={<Users />} />
// </Routes> */}

// export default AdminLayout;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const AdminLayout = ({ children }) => {
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         localStorage.removeItem('token');
//         navigate('/sign-inup');
//     };

//     return (
//         <div className="admin-layout d-flex">
//             <aside className="sidebar bg-light" style={{ width: '250px', height: '100vh' }}>
//                 <h2 className="text-center">XLAYN Admin Dashboard</h2>
//                 <ul className="nav flex-column">
//                     <li className="nav-item">
//                         <Link className="nav-link" to="/admin">Dashboard</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link className="nav-link" to="/admin/users">Users</Link>
//                     </li>
//                     <li className="nav-item">
//                         <button onClick={handleLogout} className="btn btn-danger w-100">
//                             Logout
//                         </button>
//                     </li>
//                 </ul>
//             </aside>
//             <main style={{ flex: 1, padding: '20px' }}>
//                 {children}
//             </main>
//         </div>
//     );
// };

// export default AdminLayout; // Default export




// import React, { useState } from "react";
// import { Link, Outlet, useNavigate } from "react-router-dom";
// import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
// import { Layout, Menu } from "antd";
// import { AiOutlineUser, AiOutlineDashboard, AiOutlineShoppingCart, AiOutlineMessage } from "react-icons/ai";
// import { FaClipboardList } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../../style/AdminDashboard/AdminLayout.css"; // Import custom CSS

// const { Header, Sider, Content } = Layout;

// const AdminLayout = () => {
//     const [collapsed, setCollapsed] = useState(false);
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         localStorage.removeItem('token');
//         navigate('/sign-inup');
//     };

//     return (
//         <Layout>
//             <div className="header-spacer"></div>
            
//             <Sider
//                 collapsible
//                 collapsed={collapsed}
//                 onCollapse={(value) => setCollapsed(value)}
//                 style={{ height: "100vh" }}
//             >
//                 <div className="logo text-center py-3">
//                     <h2 className="text-white fs-5 mb-0">XLAYN Admin Dashboard</h2>
//                 </div>
//                 <Menu theme="dark" mode="inline" onClick={({ key }) => navigate(key)}>
//                     <Menu.Item key="/" icon={<AiOutlineDashboard />}>Dashboard</Menu.Item>
                    
//                     <Menu.SubMenu key="user-management" icon={<AiOutlineUser />} title="User Management">
//                         <Menu.Item key="users">Users</Menu.Item>
//                         <Menu.Item key="suppliers">Suppliers</Menu.Item>
//                         <Menu.Item key="wholesalers">Wholesalers</Menu.Item>
//                     </Menu.SubMenu>

//                     <Menu.SubMenu key="product-management" icon={<AiOutlineShoppingCart />} title="Product Management">
//                         <Menu.Item key="add-product">Add Product</Menu.Item>
//                         <Menu.Item key="product-requests">Product Requests</Menu.Item>
//                         <Menu.Item key="product-list">Product List</Menu.Item>
//                     </Menu.SubMenu>

//                     <Menu.Item key="orders" icon={<FaClipboardList />}>Orders</Menu.Item>
//                     <Menu.Item key="customer-requests" icon={<AiOutlineMessage />}>Customer Requests</Menu.Item>
//                 </Menu>
//                 <button onClick={handleLogout} className="btn btn-danger w-100 mt-3">
//                     Logout
//                 </button>
//             </Sider>

//             <Layout>
//                 <Header className="admin-header">
//                     {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
//                         className: "trigger",
//                         onClick: () => setCollapsed(!collapsed),
//                     })}
//                     <h5 className="fw-bold welcome-text">Welcome, Admin</h5>
//                 </Header>
                
//                 <Content className="admin-content">
//                     <Outlet />
//                 </Content>
//             </Layout>
//         </Layout>
//     );
// };

// export default AdminLayout;

import React, { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import {
  ChevronFirst,
  ChevronLast,
  LayoutDashboard,
  Users,
  ShoppingBag,
  ClipboardList,
  MessageSquare,
  ChevronDown,
  LogOut,
  Home,
} from 'lucide-react';
import zIndex from '@mui/material/styles/zIndex';

export default function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  const sidebarItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/' },
    {
      icon: Users,
      label: 'User Management',
      subItems: [
        { label: 'Users', path: '/admin/user-management' },
        { label: 'Suppliers', path: '/admin/supplier-management' },
        { label: 'Wholesalers', path: '/admin/wholesaler-management' },
      ],
    },
    {
      icon: ShoppingBag,
      label: 'Product Management',
      subItems: [
        { label: 'Add Product', path: '/admin/add-product' },
        { label: 'Product Request', path: '/admin/product-request' },
        { label: 'Product List', path: '/admin/product-list' },
      ],
    },
    { icon: ClipboardList, label: 'Order List', path: '/admin/order-list' },
    { icon: MessageSquare, label: 'Customer Request', path: '/admin/customer-request' },
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleLogout = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('role');
    localStorage.removeItem('status');
    localStorage.removeItem('token');
    navigate('/');
  };

  const navigateTo = (path) => {
    navigate(path);
  };

  const styles = {
    container: { display: 'flex', height: '100vh',  },
    sidebar: (collapsed) => ({
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      height: 'auto',
      width: collapsed ? '80px' : '240px',
      backgroundColor: '#131842',
      color: '#ECCEAE',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '1rem',
      transition: 'width 0.3s ease',
      zIndex:'1000',
    }),

    // mainContent: (collapsed) => ({
    //   marginLeft: collapsed ? '80px' : '240px',
    //   flexGrow: 1,
    //   overflowY: 'auto',
    //   height: '100vh',
    // }),

    sidebarHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1rem',
      borderBottom: '1px solid #E68369',  // Add bottom border with specific color
      paddingTop:'20px',
      paddingBottom:'20px',
    },
    logo: { display: 'flex', alignItems: 'center' },
    logoImage: { height: '40px', marginRight: '0.5rem' },
    logoText: { fontSize: '1.5rem', fontWeight: 'bold', color: '#ECCEAE' },
    sidebarNav: { flexGrow: 1 },
    navItem: (collapsed) => ({
      display: 'flex',
      justifyContent: collapsed ? 'center' : 'space-between',
      alignItems: 'center',
      padding: '0.5rem 1rem',
      cursor: 'pointer',
      color: '#FBF6E2',
      background: 'none',
      border: 'none',
      textAlign: 'left',
    }),
    subItem: {
      paddingLeft: '2rem',
      cursor: 'pointer',
      color: '#E68369',
      background: 'none',
      border: 'none',
      textAlign: 'left',
      fontSize: '0.9rem',
    },
    footer: { 
      textAlign: 'left', 
      color: '#FBF6E2',
      borderTop: '1px solid #E68369', // Add top border with specific color
    },
    
    logOutButton: {
      display: 'flex',
      alignItems: 'left',
      justifyItems:'left',
      justifyContent: collapsed ? 'center' : 'flex-start',
      color: '#FBF6E2',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
    },
    logOutText: (collapsed) => ({
      marginLeft: collapsed ? 0 : '0.5rem',
      display: collapsed ? 'none' : 'inline',
    }),
    main: { flex: 1,
      display: 'flex',
      flexDirection: 'column',
      marginLeft: '240px', 
      transition: 'margin-left 0.3s ease', },

      mainCollapsed: {
        marginLeft: '80px', // Adjust margin when sidebar is collapsed
        transition: 'margin-left 0.3s ease',
        width:'100%'
      },

    header: {
      height: '10vh',
      width:'100%',
      position: 'fixed',
      backgroundColor: '#E68369',
      display: 'flex',
      alignItems: 'center',
      padding: '0 1rem',
      zIndex:'500'
    },
    headerContent: { display: 'flex', justifyContent: 'space-between', width: '100%',  },
    mainContent: { padding: '1rem', backgroundColor: '#FBF6E2', flexGrow: 1 , paddingTop: '15vh' },
    
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <aside style={styles.sidebar(collapsed)}>
        <div>
          <div style={styles.sidebarHeader}>
            {!collapsed && (
              <div style={styles.logo}>
                <img src="/placeholder.svg" alt="Logo" style={styles.logoImage} />
                <span style={styles.logoText}>Admin</span>
              </div>
            )}
            <button
              onClick={() => setCollapsed(!collapsed)}
              style={{ background: 'none', border: 'none', color: '#ECCEAE', cursor: 'pointer' }}
            >
              {collapsed ? <ChevronLast /> : <ChevronFirst />}
            </button>
          </div>
          <nav style={styles.sidebarNav}>
          {sidebarItems.map((item, index) => (
    <div key={index}>
      <button
        style={styles.navItem(collapsed)}
        onClick={() => {
          if (item.subItems) {
            toggleDropdown(index);
          } else {
            navigateTo(item.path);
          }
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <item.icon style={{ marginRight: collapsed ? 0 : '0.5rem' }} />
          {!collapsed && <span>{item.label}</span>}
        </div>
        {!collapsed && item.subItems && <ChevronDown />}
      </button>
      {!collapsed && item.subItems && activeDropdown === index && (
        <div>
          {item.subItems.map((subItem, subIndex) => (
            <button
              key={subIndex}
              style={styles.subItem}
              onClick={() => navigateTo(subItem.path)}
            >
              {subItem.label}
            </button>
          ))}
        </div>
      )}
    </div>
  ))}
          </nav>
        </div>
        <div style={styles.footer}>
          <button onClick={handleLogout} style={styles.logOutButton}>
            <LogOut />
            {!collapsed && <span style={styles.logOutText(collapsed)}>Log Out</span>}
          </button>
          {!collapsed && <div>&copy; 2024 Your Company Name</div>}
        </div>
      </aside>

      {/* Main Content */}
      <div style={collapsed ? styles.mainCollapsed : styles.main}>
      <header style={styles.header}>
          <div style={styles.headerContent}>
            <button
              onClick={() => navigate('/')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#131842',
              }}
            >
              <Home />
            </button>
          </div>
        </header>
        <main style={styles.mainContent}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
