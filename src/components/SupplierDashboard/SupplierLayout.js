// SupplierDashboard.js
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlusCircle, faClock, faCheckCircle, faTimesCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import 'bootstrap/dist/css/bootstrap.min.css';

const SupplierLayout = ({ user }) => { // Expect user prop for role and status
    const navigate = useNavigate(); // Use useNavigate hook

    const handleLogout = () => {
        localStorage.removeItem('userToken'); // Clear token
        navigate('/login'); // Redirect to login page
    };

    // Check user role and status
    if (!user || user.role !== 'supplier' || user.status !== 'approved') {
        return (
            <div className="text-center">
                <h1>Access Denied</h1>
                <p>You do not have access to this dashboard. Please contact support.</p>
            </div>
        );
    }

    return (
        <div className="d-flex flex-column min-vh-100">
            {/* Navbar */}
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#">
                        <img src="path/to/xlayn-logo.png" alt="XLAYN Logo" style={{ width: '30px' }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link href="#"><FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Header */}
            <header className="bg-light text-center py-3">
                <h1>Welcome to XLAYN Supplier Dashboard</h1>
            </header>

            <div className="d-flex flex-grow-1">
                {/* Sidebar */}
                <div className="sidebar bg-light border-right" style={{ width: '250px' }}>
                    <Nav className="flex-column">
                        <Nav.Link href="/supplier/add-product">
                            <FontAwesomeIcon icon={faPlusCircle} /> Add Products
                        </Nav.Link>
                        <Nav.Link href="/supplier/pending-products">
                            <FontAwesomeIcon icon={faClock} /> Pending Products
                        </Nav.Link>
                        <Nav.Link href="/supplier/approved-products">
                            <FontAwesomeIcon icon={faCheckCircle} /> Approved Products
                        </Nav.Link>
                        <Nav.Link href="/supplier/rejected-products">
                            <FontAwesomeIcon icon={faTimesCircle} /> Rejected Products
                        </Nav.Link>
                        <Nav.Item>
                            <Button variant="danger" onClick={handleLogout} style={{ width: '100%' }}>
                                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                            </Button>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>
        </div>
    );
};

export default SupplierLayout;
