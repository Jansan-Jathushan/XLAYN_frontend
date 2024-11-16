// import React, { useState, useEffect } from 'react';
// import { Button, Form, Container, Row, Col } from 'react-bootstrap';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';


// function OrderConfirmationPage() {
//     const [cartItems, setCartItems] = useState([]);
//     const [user, setUser] = useState({});
//     const [shippingAddress, setShippingAddress] = useState({ address: '', city: '' });
//     const [shippingCost] = useState(500); // Fixed shipping cost
//     const navigate = useNavigate();
//     const location = useLocation();
//     const { cart, totalAmount } = location.state || {};

//     // Retrieve token and user ID from localStorage
//     const getJwtToken = () => localStorage.getItem("token");
//     const getUserId = () => localStorage.getItem("id");

    

//     const handleInputChange = (e) => {
//         setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
//     };

//     const handlePayment = async (orderId) => {
//         try {
//             const jwtToken = getJwtToken();
//             const response = await axios.post(
//                 'http://localhost:5000/api/payments/create-payment-intent',
//                 { user: user.name, total: {totalAmount}, orderId },
//                 { headers: { Authorization: `Bearer ${jwtToken}` }, withCredentials: true }
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
//         if (cartItems.length === 0) {
//             alert("Your cart is empty. Please add items before confirming the order.");
//             return;
//         }

//         const orderData = {
//             userName: user.name, 
//             userEmail: user.email, 
//             userPhoneNumber: user.phoneNumber || "", 
//             shippingAddress,
//             paymentMethodId: "default-payment-method", 
//         };

//         try {
//             const jwtToken = getJwtToken();
//             const response = await fetch('http://localhost:5000/api/order-pay/orders', {
//                 method: 'POST',
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: `Bearer ${jwtToken}`,
//                 },
//                 credentials: "include",
//                 body: JSON.stringify(orderData),
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 console.log('Order created:', data);
//                 await handlePayment(data._id);
//             } else {
//                 console.error('Failed to create order');
//                 alert('Failed to create order. Please try again.');
//             }
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
//                             <Form.Label>Address</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="address"
//                                 value={shippingAddress.address}
//                                 onChange={handleInputChange}
//                                 placeholder="Enter your address"
//                             />
//                         </Form.Group>
//                         <Form.Group className="mb-3" controlId="formCity">
//                             <Form.Label>City</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="city"
//                                 value={shippingAddress.city}
//                                 onChange={handleInputChange}
//                                 placeholder="Enter your city"
//                             />
//                         </Form.Group>
//                     </Form>
//                 </Col>
//                 <Col md={6}>
//                     <h5>Order Summary</h5>
//                     <h6>Name: {user.name}</h6>
//                     <ul>
//                         {cartItems.map((item) => (
//                             <li key={item._id}>
//                                 {item.name} - {item.quantity} x ${item.price} = ${item.quantity * item.price}
//                             </li>
//                         ))}
//                     </ul>
//                     <h6>Shipping Cost: ${shippingCost}</h6>
//                     <h4>Total:{totalAmount}</h4>
//                     <Button variant="success" onClick={handleOrderSubmit}>
//                         Confirm Order
//                     </Button>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

// export default OrderConfirmationPage;




import React, { useState, useEffect } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function OrderConfirmationPage() {
    const [cartItems, setCartItems] = useState([]);
    const [user, setUser] = useState({});
    const [shippingAddress, setShippingAddress] = useState({ address: '', city: '' });
    const [userName, setuserName] = useState('');
    const [userEmail, setuserEmail] = useState('');
    const [userPhoneNumber, setuserPhoneNumber] = useState('');

    const [shippingCost] = useState(500); // Fixed shipping cost
    const navigate = useNavigate();
    const location = useLocation();
    const { cart, totalAmount } = location.state || {};

    // Retrieve token and user ID from localStorage
    const getJwtToken = () => localStorage.getItem("token");
    const getUserId = () => localStorage.getItem("id");

    // Fetch user details from localStorage
    useEffect(() => {
        const userId = getUserId();
        if (userId) {
            // Replace with a call to your backend to get user details if necessary
            setUser({
                name: localStorage.getItem("username"), // Ensure these values are stored in localStorage when the user logs in
                email: localStorage.getItem("email"),
                phoneNumber: localStorage.getItem("phoneNumber") || '',
            });
        }
    }, []);

    const handleInputNameChange = (e) => {
        setuserName(e.target.value);
    };

    const handleInputEmailChange = (e) => {
        setuserEmail(e.target.value);
    };

    const handleInputNumberChange = (e) => {
        setuserPhoneNumber(e.target.value);
    };
    
    const handleInputChange = (e) => {
        setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
    };

    const handlePayment = async (id) => {
        try {
            console.log('idtest', id)
            const jwtToken = getJwtToken();
            const response = await axios.post(
                'http://localhost:5000/api/payments/create-payment-intent',
                {  total: totalAmount, orderId:id },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwtToken}`,
                    },
                // , withCredentials: true 
                }
            );

            if (response.data.url) {
                window.location.href = response.data.url;
            } else {
                alert('Payment failed. Please try again.');
            }
        } catch (error) {
            console.error("Error during payment:", error);
            alert("An error occurred during payment processing. Please try again later.");
        }
    };

    const handleOrderSubmit = async () => {
        if (cart.length === 0) {
            alert("Your cart is empty. Please add items before confirming the order.");
            return;
        }
    
        const orderData = {
            userName: userName, 
            userEmail: userEmail, 
            userPhoneNumber: userPhoneNumber || "", 
            shippingAddress: `${shippingAddress.address}, ${shippingAddress.city}`, // Concatenate address and city
            totalAmount: totalAmount
        };
    
        try {
            const jwtToken = getJwtToken();
            const response = await axios.post(
                'http://localhost:5000/api/order-pay/orders',
                orderData,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwtToken}`,
                    },
                    // withCredentials: true,
                }
            );
    
            console.log('Order created:', response.data);
            const orderId = response.data.order._id
            console.log('idget', orderId)
            await handlePayment(orderId);
        } catch (err) {
            console.error('Error creating order:', err);
            alert('An error occurred while creating the order. Please try again later.');
        }
    };
    

    return (
        <Container className="py-5">
            <h3 className="mb-4">Order Confirmation</h3>
            <Row>
                <Col md={6}>
                    <h5>Shipping Address</h5>
                    <Form>
                        <Form.Group className="mb-3" controlId="formAddress">
                            <Form.Label>usarName</Form.Label>
                            <Form.Control
                                type="text"
                                name="userName"
                                value={userName}
                                onChange={handleInputNameChange}
                                placeholder="userName"
                            />
                       </Form.Group>

                       <Form.Group className="mb-3" controlId="formAddress">
                            <Form.Label>usarEmail</Form.Label>
                            <Form.Control
                                type="text"
                                name="userEmail"
                                value={userEmail}
                                onChange={handleInputEmailChange}
                                placeholder="userEmail"
                            />
                       </Form.Group>

                       <Form.Group className="mb-3" controlId="formAddress">
                            <Form.Label>userPhoneNumber</Form.Label>
                            <Form.Control
                                type="text"
                                name="userPhoneNumber"
                                value={userPhoneNumber}
                                onChange={handleInputNumberChange}
                                placeholder="userPhoneNumber"
                            />
                       </Form.Group>

                        <Form.Group className="mb-3" controlId="formAddress">
                            <Form.Label>shippingAddress</Form.Label>
                            <Form.Control
                                type="text"
                                name="address"
                                value={shippingAddress.address}
                                onChange={handleInputChange}
                                placeholder="Enter your address"
                            />
                        </Form.Group>
                        
                    </Form>
                </Col>
                <Col md={6}>
                    <h5>Order Summary</h5>
                    <h6>Name: {user.name}</h6>
                    <ul>
                        {cart.items.map((item) => (
                            <li key={item.productId}>
                                {item.productName} - {item.quantity} x ${item.price} = ${item.quantity * item.price}
                            </li>
                        ))}
                    </ul>
                    <h6>Shipping Cost: ${shippingCost}</h6>
                    <h4>Total: ${totalAmount}</h4>
                    <Button variant="success" onClick={handleOrderSubmit}>
                        Confirm Order
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default OrderConfirmationPage;






























// import { useLocation } from 'react-router-dom';

// const OrderConfirmationPage = () => {
//   const location = useLocation();
//   const { cart, totalAmount } = location.state || {};

//   return (
//     <div>
//       <h1>Order Confirmation</h1>
//       <p>Cart Details:</p>
//       <pre>{JSON.stringify(cart, null, 2)}</pre>
//       <p>Total Amount: ${totalAmount}</p>
//     </div>
//   );
// };

// export default OrderConfirmationPage;


//20 

// useEffect(() => {
    //     const fetchUserData = async () => {
    //         try {
    //             const jwtToken = getJwtToken();
    //             const userId = getUserId();

    //             if (!jwtToken || !userId) {
    //                 throw new Error("Missing token or user ID");
    //             }

    //             // Fetch user data
    //             const userResponse = await axios.get(`/api/user/${userId}`, {
    //                 headers: {
    //                     Authorization: `Bearer ${jwtToken}`
    //                 }
    //             });
    //             setUser(userResponse.data);

    //             // Fetch cart data
    //             const cartResponse = await axios.get('/api/cart', {
    //                 headers: {
    //                     Authorization: `Bearer ${jwtToken}`
    //                 }
    //             });
    //             setCartItems(cartResponse.data.items);
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //             if (error.response) {
    //                 // If the error has a response, log the status code and message
    //                 console.error("Response error status:", error.response.status);
    //                 console.error("Response error message:", error.response.data);
    //             }
    //             alert("Error fetching user or cart data. Redirecting to login.");
    //             navigate('/sign-inup');
    //         }
    //     };

    //     fetchUserData();
    // }, [navigate]);

    // const getTotalPrice = () => {
    //     const itemTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    //     return itemTotal + shippingCost;
    // };