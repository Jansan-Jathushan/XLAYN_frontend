import React, { useEffect, useState } from 'react';
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
import axios from 'axios';


export default function SupplierLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
  const [supplier, setSupplier] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");



  useEffect(() => {
    const fetchSupplier = async () => {
      // Retrieve supplierId from localStorage
      const supplierId = localStorage.getItem("id");

      if (!supplierId) {
        setError("No supplier ID found in localStorage.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:5000/api/register-request/get-supplier/${supplierId}`
        );
        setSupplier(response.data);
      } catch (err) {
        setError("Failed to load supplier details.");
      } finally {
        setLoading(false);
      }
    };

    fetchSupplier();
  }, []);


  const sidebarItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/supplier' },
    { icon: ShoppingBag, label: 'Add Product', path: '/supplier/add-product' },
  { icon: ShoppingBag, label: 'Pending Products', path: '/supplier/pending-product' },
  { icon: ShoppingBag, label: 'Product List', path: '/supplier/products-list' },
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
      justifyContent: collapsed ? 'left' : 'flex-start',
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
                <img src="https://i.ibb.co/8mN47F7/XLAYN-1.png" alt="Logo" style={styles.logoImage} />
                <span style={styles.logoText}>Supplier</span>
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
          {!collapsed && (
  <div  style={{fontSize:'12px', fontWeight:'bold'}}>
    &copy; 2024 <span style={{ color: '#E68369' }}>XLAYN</span>. All rights reserved.
  </div>
)}
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
            <div style={{ color: '#131842', marginRight:'1550px', marginTop:'auto',marginBottom:'auto',}}>
             <h3>WelCome Back,</h3><h5>{supplier ? `${supplier.username}` : 'Loading...'}</h5>
            </div>
          </div>
        </header>
        <main style={styles.mainContent}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
