




// import React, { useState, useEffect } from 'react';
// import { Button, Form, Container, Row, Col } from 'react-bootstrap';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';

// function OrderConfirmationPage() {
//     const [cartItems, setCartItems] = useState([]);
//     const [user, setUser] = useState({});
//     const [shippingAddress, setShippingAddress] = useState({ address: '', city: '' });
//     const [userName, setuserName] = useState('');
//     const [userEmail, setuserEmail] = useState('');
//     const [userPhoneNumber, setuserPhoneNumber] = useState('');

//     const [shippingCost] = useState(500); // Fixed shipping cost
//     const navigate = useNavigate();
//     const location = useLocation();
//     const { cart, totalAmount } = location.state || {};

//     // Retrieve token and user ID from localStorage
//     const getJwtToken = () => localStorage.getItem("token");
//     const getUserId = () => localStorage.getItem("id");

//     // Fetch user details from localStorage
//     useEffect(() => {
//         const userId = getUserId();
//         if (userId) {
//             // Replace with a call to your backend to get user details if necessary
//             setUser({
//                 name: localStorage.getItem("username"), // Ensure these values are stored in localStorage when the user logs in
//                 email: localStorage.getItem("email"),
//                 phoneNumber: localStorage.getItem("phoneNumber") || '',
//             });
//         }
//     }, []);

//     const handleInputNameChange = (e) => {
//         setuserName(e.target.value);
//     };

//     const handleInputEmailChange = (e) => {
//         setuserEmail(e.target.value);
//     };

//     const handleInputNumberChange = (e) => {
//         setuserPhoneNumber(e.target.value);
//     };
    
//     const handleInputChange = (e) => {
//         setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
//     };

//     const handlePayment = async (id) => {
//         try {
//             console.log('idtest', id)
//             const jwtToken = getJwtToken();
//             const response = await axios.post(
//                 'http://localhost:5000/api/payments/create-payment-intent',
//                 {  total: totalAmount, orderId:id },
//                 {
//                     headers: {
//                         "Content-Type": "application/json",
//                         Authorization: `Bearer ${jwtToken}`,
//                     },
//                 // , withCredentials: true 
//                 }
//             );

//             if (response.data.url) {
//                 window.location.href = response.data.url;
//             } else {
//                 alert('Payment failed. Please try again.');
//             }
//         } catch (error) {
//             console.error("Error during payment:", error);
//             alert("An error occurred during payment processing. Please try again later.");
//         }
//     };

//     const handleOrderSubmit = async () => {
//         if (cart.length === 0) {
//             alert("Your cart is empty. Please add items before confirming the order.");
//             return;
//         }
    
//         const orderData = {
//             userName: userName, 
//             userEmail: userEmail, 
//             userPhoneNumber: userPhoneNumber || "", 
//             shippingAddress: `${shippingAddress.address}, ${shippingAddress.city}`, // Concatenate address and city
//             totalAmount: totalAmount
//         };
    
//         try {
//             const jwtToken = getJwtToken();
//             const response = await axios.post(
//                 'http://localhost:5000/api/order-pay/orders',
//                 orderData,
//                 {
//                     headers: {
//                         "Content-Type": "application/json",
//                         Authorization: `Bearer ${jwtToken}`,
//                     },
//                     // withCredentials: true,
//                 }
//             );
    
//             console.log('Order created:', response.data);
//             const orderId = response.data.order._id
//             console.log('idget', orderId)
//             await handlePayment(orderId);
//         } catch (err) {
//             console.error('Error creating order:', err);
//             alert('An error occurred while creating the order. Please try again later.');
//         }
//     };
    

//     return (
//         <Container className="py-5">
//             <h3 className="mb-4">Order Confirmation</h3>
//             <Row>
//                 <Col md={6}>
//                     <h5>Shipping Address</h5>
//                     <Form>
//                         <Form.Group className="mb-3" controlId="formAddress">
//                             <Form.Label>usarName</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="userName"
//                                 value={userName}
//                                 onChange={handleInputNameChange}
//                                 placeholder="userName"
//                             />
//                        </Form.Group>

//                        <Form.Group className="mb-3" controlId="formAddress">
//                             <Form.Label>usarEmail</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="userEmail"
//                                 value={userEmail}
//                                 onChange={handleInputEmailChange}
//                                 placeholder="userEmail"
//                             />
//                        </Form.Group>

//                        <Form.Group className="mb-3" controlId="formAddress">
//                             <Form.Label>userPhoneNumber</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="userPhoneNumber"
//                                 value={userPhoneNumber}
//                                 onChange={handleInputNumberChange}
//                                 placeholder="userPhoneNumber"
//                             />
//                        </Form.Group>

//                         <Form.Group className="mb-3" controlId="formAddress">
//                             <Form.Label>shippingAddress</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="address"
//                                 value={shippingAddress.address}
//                                 onChange={handleInputChange}
//                                 placeholder="Enter your address"
//                             />
//                         </Form.Group>
                        
//                     </Form>
//                 </Col>
//                 <Col md={6}>
//                     <h5>Order Summary</h5>
//                     <h6>Name: {user.name}</h6>
//                     <ul>
//                         {cart.items.map((item) => (
//                             <li key={item.productId}>
//                                 {item.productName} - {item.quantity} x ${item.price} = ${item.quantity * item.price}
//                             </li>
//                         ))}
//                     </ul>
//                     <h6>Shipping Cost: ${shippingCost}</h6>
//                     <h4>Total: ${totalAmount}</h4>
//                     <Button variant="success" onClick={handleOrderSubmit}>
//                         Confirm Order
//                     </Button>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

// export default OrderConfirmationPage;


// import React, { useState, useEffect } from 'react';
// import {
//     Container,
//     Grid,
//     TextField,
//     Typography,
//     Button,
//     Card,
//     CardContent,
//     Box,
//     List,
//     ListItem,
//     ListItemText,
// } from '@mui/material';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';

// function OrderConfirmationPage() {
//     const [cartItems, setCartItems] = useState([]);
//     const [user, setUser] = useState({});
//     const [shippingAddress, setShippingAddress] = useState({ address: '', city: '' });
//     const [userName, setuserName] = useState('');
//     const [userEmail, setuserEmail] = useState('');
//     const [userPhoneNumber, setuserPhoneNumber] = useState('');

//     // const [shippingCost] = useState(50);
//     const navigate = useNavigate();
//     const location = useLocation();
//     const { cart, totalAmount } = location.state || {};

//     const getJwtToken = () => localStorage.getItem("token");
//     const getUserId = () => localStorage.getItem("id");

//     useEffect(() => {
//         const userId = getUserId();
//         if (userId) {
//             setUser({
//                 name: localStorage.getItem("username"),
//                 email: localStorage.getItem("email"),
//                 phoneNumber: localStorage.getItem("phoneNumber") || '',
//             });
//         }
//     }, []);

//     const handleInputNameChange = (e) => {
//         setuserName(e.target.value);
//     };

//     const handleInputEmailChange = (e) => {
//         setuserEmail(e.target.value);
//     };

//     const handleInputNumberChange = (e) => {
//         setuserPhoneNumber(e.target.value);
//     };

//     const handleInputChange = (e) => {
//         setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
//     };

//     const handlePayment = async (id) => {
//         try {
//             const jwtToken = getJwtToken();
//             const response = await axios.post(
//                 'http://localhost:5000/api/payments/create-payment-intent',
//                 { total: totalAmount, orderId: id },
//                 {
//                     headers: {
//                         "Content-Type": "application/json",
//                         Authorization: `Bearer ${jwtToken}`,
//                     },
//                 }
//             );

//             if (response.data.url) {
//                 window.location.href = response.data.url;
//             } else {
//                 alert('Payment failed. Please try again.');
//             }
//         } catch (error) {
//             console.error("Error during payment:", error);
//             alert("An error occurred during payment processing. Please try again later.");
//         }
//     };

//     const handleOrderSubmit = async () => {
//         if (cart.length === 0) {
//             alert("Your cart is empty. Please add items before confirming the order.");
//             return;
//         }

//         const orderData = {
//             userName: userName,
//             userEmail: userEmail,
//             userPhoneNumber: userPhoneNumber || "",
//             shippingAddress: `${shippingAddress.address}, ${shippingAddress.city}`,
//             totalAmount: totalAmount
//         };

//         try {
//             const jwtToken = getJwtToken();
//             const response = await axios.post(
//                 'http://localhost:5000/api/order-pay/orders',
//                 orderData,
//                 {
//                     headers: {
//                         "Content-Type": "application/json",
//                         Authorization: `Bearer ${jwtToken}`,
//                     },
//                 }
//             );

//             const orderId = response.data.order._id;
//             await handlePayment(orderId);
//         } catch (err) {
//             console.error('Error creating order:', err);
//             alert('An error occurred while creating the order. Please try again later.');
//         }
//     };

//     return (
//         <Container maxWidth="md" sx={{ py: 5 }}>
//             <Typography variant="h4" gutterBottom sx={{ color: '#131842', fontWeight: 'bold' }}>
//                 Order Confirmation
//             </Typography>
//             <Grid container spacing={4}>
//                 {/* Shipping Address Section */}
//                 <Grid item xs={12} md={6}>
//                     <Card sx={{ backgroundColor: '#FBF6E2' }}>
//                         <CardContent>
//                             {/* <Typography variant="h6" gutterBottom sx={{ color: '#E68369' }}>
//                                 Shipping Address
//                             </Typography> */}
//                             <Box component="form" noValidate autoComplete="off">
//                                 <TextField
//                                     fullWidth
//                                     label="Name"
//                                     name="userName"
//                                     value={userName}
//                                     onChange={handleInputNameChange}
//                                     margin="normal"
//                                     sx={{ backgroundColor: '#ECCEAE' }}
//                                 />
//                                 <TextField
//                                     fullWidth
//                                     label="Email"
//                                     name="userEmail"
//                                     value={userEmail}
//                                     onChange={handleInputEmailChange}
//                                     margin="normal"
//                                     sx={{ backgroundColor: '#ECCEAE' }}
//                                 />
//                                 <TextField
//                                     fullWidth
//                                     label="Phone Number"
//                                     name="userPhoneNumber"
//                                     value={userPhoneNumber}
//                                     onChange={handleInputNumberChange}
//                                     margin="normal"
//                                     sx={{ backgroundColor: '#ECCEAE' }}
//                                 />
//                                 <TextField
//                                     fullWidth
//                                     label="Address"
//                                     name="address"
//                                     value={shippingAddress.address}
//                                     onChange={handleInputChange}
//                                     margin="normal"
//                                     sx={{ backgroundColor: '#ECCEAE' }}
//                                 />
//                             </Box>
//                         </CardContent>
//                     </Card>
//                 </Grid>

//                 {/* Order Summary Section */}
//                 <Grid item xs={12} md={6}>
//                     <Card sx={{ backgroundColor: '#ECCEAE' }}>
//                         <CardContent>
//                             <Typography variant="h6" gutterBottom sx={{ color: '#131842' }}>
//                                 Order Summary
//                             </Typography>
//                             <List>
//                                 {cart?.items?.map((item) => (
//                                     <ListItem key={item.productId}>
//                                         <ListItemText
//                                             primary={`${item.productName} - ${item.quantity} x $${item.price}`}
//                                             secondary={`Subtotal: $${item.quantity * item.price}`}
//                                         />
//                                     </ListItem>
//                                 ))}
//                             </List>
//                             {/* <Typography variant="body1" sx={{ mt: 2 }}>
//                                 <strong>Shipping Cost:</strong> ${shippingCost}
//                             </Typography> */}
//                             <Typography variant="h5" sx={{ mt: 2, color: '#E68369' }}>
//                                 <strong>Total:</strong> ${totalAmount}
//                             </Typography>
//                             <Button
//                                 variant="contained"
//                                 fullWidth
//                                 onClick={handleOrderSubmit}
//                                 sx={{
//                                     mt: 3,
//                                     backgroundColor: '#131842',
//                                     color: '#FBF6E2',
//                                     '&:hover': {
//                                         backgroundColor: '#E68369',
//                                     },
//                                 }}
//                             >
//                                 Confirm Order
//                             </Button>
//                         </CardContent>
//                     </Card>
//                 </Grid>
//             </Grid>
//         </Container>
//     );
// }

// export default OrderConfirmationPage;


import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  Card,
  CardContent,
  Box,
  List,
  ListItem,
  ListItemText,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const theme = createTheme({
  palette: {
    primary: { main: "#131842" },
    secondary: { main: "#E68369" },
    background: { default: "#FBF6E2" },
  },
  typography: { fontFamily: "Poppins, sans-serif" },
});

function OrderConfirmationPage() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [shippingAddress, setShippingAddress] = useState({ address: "", city: "" });

  const navigate = useNavigate();
  const location = useLocation();
  const { cart, totalAmount } = location.state || { cart: { items: [] }, totalAmount: 0 };

  const getJwtToken = () => localStorage.getItem("token");

  const handleInputChange = (setter) => (e) => setter(e.target.value);

  const handleShippingAddressChange = (e) => {
    setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
  };

  const validateInputs = () => {
    if (!userName || !userEmail || !userPhoneNumber || !shippingAddress.address ) {
      alert("Please fill in all the fields.");
      return false;
    }
    if (!cart?.items?.length) {
      alert("Your cart is empty. Please add items before confirming the order.");
      return false;
    }
    return true;
  };

  const handleOrderSubmit = async () => {
    if (!validateInputs()) return;

    const orderData = {
      userName,
      userEmail,
      userPhoneNumber,
      shippingAddress: `${shippingAddress.address}`,
      totalAmount,
      cartItems: cart.items,
    };

    try {
      const jwtToken = getJwtToken();
      const response = await axios.post(
        "http://localhost:5000/api/order-pay/orders",
        orderData,
        { headers: { "Content-Type": "application/json", Authorization: `Bearer ${jwtToken}` } }
      );
      const orderId = response.data.order._id;
      console.log("Order created successfully:", orderId);
      await handlePayment(orderId);
    } catch (err) {
      console.error("Error creating order:", err.response?.data || err.message);
      alert("An error occurred while creating the order. Please try again later.");
    }
  };

  const handlePayment = async (orderId) => {
    try {
      const jwtToken = getJwtToken();
      const response = await axios.post(
        "http://localhost:5000/api/payments/create-payment-intent",
        { total: totalAmount, orderId },
        { headers: { "Content-Type": "application/json", Authorization: `Bearer ${jwtToken}` } }
      );
      if (response.data.url) {
        window.location.href = response.data.url;
      } else {
        alert("Payment failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during payment:", error.response?.data || error.message);
      alert("An error occurred during payment processing. Please try again later.");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 4,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(https://i.ibb.co/CmR6FL5/coverrrrrrrrrrrrrrrrrr111.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(8px)",
            zIndex: -1,
          },
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                color: "#131842",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: 4,
                textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
              }}
            >
              Order Confirmation
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card
                    sx={{
                      backgroundColor: "rgba(251, 246, 226, 0.9)",
                      borderRadius: 3,
                      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                    }}
                  >
                    <CardContent>
                      <Box component="form" noValidate autoComplete="off">
                        <TextField
                          fullWidth
                          label="Name"
                          name="userName"
                          value={userName}
                          onChange={handleInputChange(setUserName)}
                          margin="normal"
                          variant="outlined"
                          sx={{ backgroundColor: "#ECCEAE", borderRadius: 2 }}
                        />
                        <TextField
                          fullWidth
                          label="Email"
                          name="userEmail"
                          value={userEmail}
                          onChange={handleInputChange(setUserEmail)}
                          margin="normal"
                          variant="outlined"
                          sx={{ backgroundColor: "#ECCEAE", borderRadius: 2 }}
                        />
                        <TextField
                          fullWidth
                          label="Phone Number"
                          name="userPhoneNumber"
                          value={userPhoneNumber}
                          onChange={handleInputChange(setUserPhoneNumber)}
                          margin="normal"
                          variant="outlined"
                          sx={{ backgroundColor: "#ECCEAE", borderRadius: 2 }}
                        />
                        <TextField
                          fullWidth
                          label="Address"
                          name="address"
                          value={shippingAddress.address}
                          onChange={handleShippingAddressChange}
                          margin="normal"
                          variant="outlined"
                          sx={{ backgroundColor: "#ECCEAE", borderRadius: 2 }}
                        />
                        
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card
                    sx={{
                      backgroundColor: "rgba(236, 206, 174, 0.9)",
                      borderRadius: 3,
                      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" gutterBottom sx={{ color: "#131842" }}>
                        Order Summary
                      </Typography>
                      <List>
                        {cart.items.map((item) => (
                          <ListItem key={item.productId}>
                            <ListItemText
                              primary={`${item.productName} - ${item.quantity} x $${item.price}`}
                              secondary={`Subtotal: $${item.quantity * item.price}`}
                            />
                          </ListItem>
                        ))}
                      </List>
                      <Typography variant="h5" sx={{ mt: 2, color: "#E68369" }}>
                        <strong>Total:</strong> ${totalAmount}
                      </Typography>
                      <Button
                        variant="contained"
                        fullWidth
                        onClick={handleOrderSubmit}
                        sx={{
                          mt: 3,
                          backgroundColor: "#131842",
                          color: "#FBF6E2",
                          "&:hover": { backgroundColor: "#E68369" },
                        }}
                      >
                        Confirm Order
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default OrderConfirmationPage;
