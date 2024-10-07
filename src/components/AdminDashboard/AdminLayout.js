import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
// import './AdminLayout.css'; // Assuming you have custom CSS for additional styles

const AdminLayout = () => {
    const navigate = useNavigate();
    const [userManagementOpen, setUserManagementOpen] = useState(false);
    const [productManagementOpen, setProductManagementOpen] = useState(false);
    const [orderManagementOpen, setOrderManagementOpen] = useState(false);
    const [deliveryStatusOpen, setDeliveryStatusOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/login');
    };

    return (
        <div className="admin-layout d-flex">
            <aside className="sidebar bg-light" style={{ width: '250px', height: '100vh' }}>
                <h2 className="text-center">XLAYN Admin Dashboard</h2>
                <ul className="nav flex-column">
                    {/* User Management Dropdown */}
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            onClick={() => setUserManagementOpen(!userManagementOpen)}
                            style={{ cursor: 'pointer' }}
                        >
                            <i className="fas fa-users"></i> User Management
                        </a>
                        <ul className={`nav flex-column ${userManagementOpen ? 'show' : 'collapse'}`}>
                            <li className="nav-item">
                                <Link className="nav-link" to="users">Users</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="suppliers">Suppliers</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="wholesalers">Wholesalers</Link>
                            </li>
                        </ul>
                    </li>

                    {/* Product Management Dropdown */}
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            onClick={() => setProductManagementOpen(!productManagementOpen)}
                            style={{ cursor: 'pointer' }}
                        >
                            <i className="fas fa-box"></i> Product Management
                        </a>
                        <ul className={`nav flex-column ${productManagementOpen ? 'show' : 'collapse'}`}>
                            <li className="nav-item">
                                <Link className="nav-link" to="add-product">Add Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="product-requests">Product Requests</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="product-list">Product List</Link>
                            </li>
                        </ul>
                    </li>

                    {/* Order Management Dropdown */}
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            onClick={() => setOrderManagementOpen(!orderManagementOpen)}
                            style={{ cursor: 'pointer' }}
                        >
                            <i className="fas fa-receipt"></i> Order Management
                        </a>
                        <ul className={`nav flex-column ${orderManagementOpen ? 'show' : 'collapse'}`}>
                            <li className="nav-item">
                                <Link className="nav-link" to="order-requests">Order Requests</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="approved-orders">Approved Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="rejected-orders">Rejected Orders</Link>
                            </li>
                        </ul>
                    </li>

                    {/* Other Navigation Items */}
                    <li className="nav-item">
                        <Link className="nav-link" to="payment-management">
                            <i className="fas fa-money-bill-wave"></i> Payment Management
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            onClick={() => setDeliveryStatusOpen(!deliveryStatusOpen)}
                            style={{ cursor: 'pointer' }}
                        >
                            <i className="fas fa-truck"></i> Delivery Status
                        </a>
                        <ul className={`nav flex-column ${deliveryStatusOpen ? 'show' : 'collapse'}`}>
                            <li className="nav-item">
                                <Link className="nav-link" to="pending-delivery">Pending Delivery</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="successful-delivery">Successful Delivery</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="feedback-rating">
                            <i className="fas fa-star"></i> Feedback/Rating
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="customer-requests">
                            <i className="fas fa-comments"></i> Customer Requests
                        </Link>
                    </li>
                    <li className="nav-item">
                        <button onClick={handleLogout} className="btn btn-danger w-100">
                            <i className="fas fa-sign-out-alt"></i> Logout
                        </button>
                    </li>
                </ul>
            </aside>
        </div>
    );
};

export default AdminLayout;
