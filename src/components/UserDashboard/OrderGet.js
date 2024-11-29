import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Pagination,
  PaginationItem,
  Alert,
} from '@mui/material';

const OrdersByUser = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5; // Define how many orders you want per page

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);

        // Get the user ID from localStorage
        const userId = localStorage.getItem('id');

        if (!userId) {
          throw new Error('User ID not found in localStorage');
        }

        const response = await axios.get(
          `http://localhost:5000/api/order-pay/orders/user/${userId}`
        );
        setOrders(response.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message || 'Failed to fetch orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // Logic for pagination
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#131842' }}>
        Orders
      </Typography>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      ) : orders.length === 0 ? (
        <Typography variant="h6" sx={{ mt: 2, color: '#E68369' }}>
          No orders found for this user.
        </Typography>
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ backgroundColor: '#ECCEAE', fontWeight: 'bold' }}>
                    Product Name
                  </TableCell>
                  <TableCell sx={{ backgroundColor: '#ECCEAE', fontWeight: 'bold' }}>
                    Supplier Name
                  </TableCell>
                  <TableCell sx={{ backgroundColor: '#ECCEAE', fontWeight: 'bold' }}>
                    Quantity
                  </TableCell>
                  <TableCell sx={{ backgroundColor: '#ECCEAE', fontWeight: 'bold' }}>
                    Price
                  </TableCell>
                  <TableCell sx={{ backgroundColor: '#ECCEAE', fontWeight: 'bold' }}>
                    Total Amount
                  </TableCell>
                  <TableCell sx={{ backgroundColor: '#ECCEAE', fontWeight: 'bold' }}>
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentOrders.map((order) =>
                  order.items.map((item, index) => (
                    <TableRow key={`${order._id}-${index}`}>
                      <TableCell>{item.productName || 'N/A'}</TableCell>
                      <TableCell>{item.supplierBusinessName || 'N/A'}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>{item.price}</TableCell>
                      <TableCell>{order.totalAmount}</TableCell>
                      <TableCell
                        sx={{
                          color:
                            order.paymentStatus === 'completed'
                              ? '#131842'
                              : order.paymentStatus === 'pending'
                              ? '#E68369'
                              : '#ECCEAE',
                          fontWeight: 'bold',
                        }}
                      >
                        {order.paymentStatus}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>

          <Pagination
            count={Math.ceil(orders.length / ordersPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            siblingCount={1}
            boundaryCount={1}
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '20px',
            }}
            renderItem={(item) => (
              <PaginationItem
                {...item}
                style={{ backgroundColor: '#E68369', color: '#131842' }}
              />
            )}
          />
        </>
      )}
    </Container>
  );
};

export default OrdersByUser;
