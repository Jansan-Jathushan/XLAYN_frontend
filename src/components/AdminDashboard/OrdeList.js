// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const OrdersPage = () => {
//     const [orders, setOrders] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchOrders = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/api/order-pay/ordersget');
//                 setOrders(response.data);
//             } catch (error) {
//                 setError('Error fetching orders');
//                 console.error(error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchOrders();
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>{error}</div>;
//     }

//     return (
//         <div>
//             <h1>Orders List</h1>
//             {orders.length === 0 ? (
//                 <p>No orders found.</p>
//             ) : (
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Order ID</th>
//                             <th>User Name</th>
//                             <th>Email</th>
//                             <th>Phone Number</th>
//                             <th>Shipping Address</th>
//                             <th>Total Amount</th>
//                             <th>Payment Status</th>
//                             <th>Items</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {orders.map((order) => (
//                             <tr key={order._id}>
//                                 {/* Display order details */}
//                                 <td>{order._id}</td>
//                                 <td>{order.user ? order.user.userName : 'N/A'}</td>
//                                 <td>{order.user ? order.user.email : 'N/A'}</td>
//                                 <td>{order.user ? order.user.userPhoneNumber : 'N/A'}</td>
//                                 <td>{order.shippingAddress}</td>
//                                 <td>{order.totalAmount}</td>
//                                 <td>{order.paymentStatus}</td>
//                                 <td>
//                                     <ul>
//                                         {order.items.map((item, index) => (
//                                             <li key={index}>
//                                                 {item.productName} - {item.supplierBusinessName}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default OrdersPage;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField,
    IconButton, Typography, Pagination, Dialog, DialogContent, Tabs, Tab
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { styled } from '@mui/material/styles';

const StyledIconButton = styled(IconButton)(({ color }) => ({
    color: color,
}));

const StyledTab = styled(Tab)(({ bgColor }) => ({
    backgroundColor: bgColor,
    color: '#FBF6E2',
    fontWeight: 'bold',
    borderRadius: '8px',
    margin: '0 5px',
    '&.Mui-selected': {
        backgroundColor: '#FBF6E2',
        color: bgColor,
    },
}));

const OrderPage = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [tabValue, setTabValue] = useState('pending'); // for filtering by payment status
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [suppliersPerPage, setSuppliersPerPage] = useState(10);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const fetchOrders = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/order-pay/ordersget');
            setOrders(response.data);
        } catch (error) {
            console.error("Error fetching orders:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    const filteredOrders = orders.filter((order) => {
        const matchesSearchTerm =
            order.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.userEmail.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesTabValue =
            tabValue === 'pending' ? order.paymentStatus === 'pending' :
            tabValue === 'completed' ? order.paymentStatus === 'completed' :
            tabValue === 'failed' ? order.paymentStatus === 'failed' : true;
        return matchesSearchTerm && matchesTabValue;
    });

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const currentRequests = filteredOrders.slice((currentPage - 1) * suppliersPerPage, currentPage * suppliersPerPage);

    return (
        <div style={{ backgroundColor: '#FBF6E2', padding: '2rem', borderRadius: '8px', height: '100vh' }}>
            <Typography variant="h4" gutterBottom style={{ color: '#131842' }}>
                Order Management
            </Typography>

            {/* Tabs for Pending, Completed, and Failed */}
            <Tabs
                value={tabValue}
                onChange={handleTabChange}
                centered
                TabIndicatorProps={{ style: { display: 'none' } }}
            >
                <StyledTab label="Pending" value="pending" bgColor="#131842" />
                <StyledTab label="Completed" value="completed" bgColor="#E68369" />
                <StyledTab label="Failed" value="failed" bgColor="#ECCEAE" />
            </Tabs>

            {/* Search Bar */}
            <TextField
                label="Search by User Name or Email"
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ backgroundColor: '#ECCEAE', borderRadius: '15px', margin: '1rem 0', width: '20%' }}
            />

            {/* Orders Table */}
            {loading ? (
                <Typography>Loading...</Typography>
            ) : (
                <TableContainer component={Paper} sx={{ borderRadius: '10px', boxShadow: 3 }}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: '#131842' }}>
                                <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Username</TableCell>
                                <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Email</TableCell>
                                <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Phone Number</TableCell>
                                <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Shipping Address</TableCell>
                                <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Total Amount</TableCell>
                                <TableCell sx={{ color: '#FBF6E2', fontWeight: 'bold' }}>Payment Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {currentRequests.map(order => (
                                <TableRow key={order._id} sx={{
                                    '&:nth-of-type(even)': { backgroundColor: '#ECCEAE' },
                                    '&:hover': { backgroundColor: '#E68369' }
                                }}>
                                    <TableCell>{order.userName}</TableCell>
                                    <TableCell>{order.userEmail}</TableCell>
                                    <TableCell>{order.userPhoneNumber}</TableCell>
                                    <TableCell>{order.shippingAddress}</TableCell>
                                    <TableCell>{order.totalAmount}</TableCell>
                                    <TableCell>{order.paymentStatus}</TableCell>
                                  
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}

            {/* Pagination */}
            <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
                <Pagination
                    count={Math.ceil(filteredOrders.length / suppliersPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="#E68369"
                    sx={{
                        '& .MuiPaginationItem-root': {
                            backgroundColor: '#ECCEAE',
                            color: '#131842',
                        },
                        '& .MuiPaginationItem-root.Mui-selected': {
                            backgroundColor: '#E68369',
                            color: '#FBF6E2',
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default OrderPage;
