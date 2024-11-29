// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
// import { FaTrash } from 'react-icons/fa'; // Import trash icon from react-icons
// import '../../style/UserDashboard/AddToCart.css'; // Custom CSS for styling

// const CartPage = () => {
//   const [cart, setCart] = useState(null);
//   const [errorMessage, setErrorMessage] = useState('');
//   const userId = localStorage.getItem('id');
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!userId) {
//       navigate('/sign-inup');
//     } else {
//       fetchCart();
//     }
//   }, [userId]);

//   const fetchCart = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/add-tocart/cart/${userId}`);
//       setCart(response.data);
//     } catch (error) {
//       setErrorMessage('Failed to fetch cart.');
//       console.error('Error fetching cart:', error);
//     }
//   };

//   const updateCartItemQuantity = async (productId, quantity) => {
//     try {
//       const response = await axios.put('http://localhost:5000/api/add-tocart/cart', {
//         userId,
//         productId,
//         quantity,
//       });
//       setCart(response.data);
//     } catch (error) {
//       setErrorMessage('Failed to update item quantity.');
//       console.error('Error updating cart item:', error);
//     }
//   };

//   const removeCartItem = async (productId) => {
//     try {
//       const response = await axios.delete('http://localhost:5000/api/add-tocart/cart/item', {
//         data: { userId, productId },
//       });
//       setCart(response.data.cart);
//     } catch (error) {
//       setErrorMessage('Failed to remove item from cart.');
//       console.error('Error removing cart item:', error);
//     }
//   };

//   const clearCart = async () => {
//     try {
//       const response = await axios.delete(`http://localhost:5000/api/add-tocart/cart/${userId}`);
//       setCart(response.data.cart);
//     } catch (error) {
//       setErrorMessage('Failed to clear cart.');
//       console.error('Error clearing cart:', error);
//     }
//   };

//   const calculateCartTotal = () => {
//     return cart?.items.reduce((total, item) => total + item.totalItemPrice, 0) || 0;
//   };

//   const handleOrderCreate = () => {
//     const totalAmount = calculateCartTotal();
//     navigate('/order-confirmation', {
//       state: {
//         cart: cart, // Pass the cart object
//         totalAmount: totalAmount, // Pass the total amount
//       },
//     });
//   };

//   return (
//     <Container className="cart-page">
//       <h1 className="cart-header">Shopping Bag</h1>
//       {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

//       <Row>
//         {/* Left Side: Cart Items */}
//         <Col md={8}>
//           <div className="cart-items">
//             {cart && cart.items.length > 0 ? (
//               cart.items.map((item) => (
//                 <Card className="cart-item" key={item._id}>
//                   <Button
//                     variant="link"
//                     className="remove-item-icon"
//                     onClick={() => removeCartItem(item.productId)}
//                   >
//                     <FaTrash />
//                   </Button>
//                   <Row>
//                     <Col md={3}>
//                       {/* Display first image in productImage array */}
//                       <Card.Img
//                         src={item.productImage[0] || '/placeholder.jpg'}
//                         alt={item.productName}
//                         className="cart-item-image"
//                         onError={(e) => {
//                           e.target.src = '/placeholder.jpg'; // Fallback image if load fails
//                         }}
//                       />
//                     </Col>
//                     <Col md={6}>
//                       <Card.Body>
//                         <Card.Title>{item.productName}</Card.Title>
//                         <Card.Text>Price: ${item.price}</Card.Text>
//                       </Card.Body>
//                     </Col>
//                     <Col md={3} className="cart-item-quantity">
//                       <Form.Group controlId="quantity">
//                         <Form.Label>Quantity</Form.Label>
//                         <Form.Control
//                           type="number"
//                           min="1"
//                           value={item.quantity}
//                           onChange={(e) =>
//                             updateCartItemQuantity(item.productId, parseInt(e.target.value, 10))
//                           }
//                         />
//                       </Form.Group>
//                       <Card.Text className="item-total">Total: ${item.totalItemPrice}</Card.Text>
//                     </Col>
//                   </Row>
//                 </Card>
//               ))
//             ) : (
//               <p>Your cart is empty.</p>
//             )}
//           </div>
//         </Col>

//         {/* Right Side: Cart Summary */}
//         <Col md={4}>
//           <div className="cart-summary">
//             <Button variant="danger" className="clear-cart-btn" onClick={clearCart}>
//               <FaTrash /> Clear All
//             </Button>
//             <h3>Cart Total</h3>
//             <p className="cart-total-amount">Subtotal: ${calculateCartTotal()}</p>
//             <Button
//               variant="primary"
//               className="checkout-btn"
//               onClick={handleOrderCreate}
//             >
//               Proceed to Checkout
//             </Button>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default CartPage;



// import React, { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import styled from '@emotion/styled';
// import { Box, Typography, IconButton, Container, Paper, Button } from '@mui/material';
// import { Trash2, ShoppingBag, ArrowRight, Plus, Minus } from 'lucide-react';

// // Styled Components
// const PageWrapper = styled(Box)({
//   minHeight: '100vh',
//   backgroundColor: '#f9f9f9',
//   display: 'flex',
//   flexDirection: 'column',
// });

// const LuxuryCard = styled(motion(Paper))({
//   backgroundColor: '#fff',
//   border: '1px solid #131842',
//   borderRadius: '20px',
//   padding: '50px',
//   marginBottom: '20px',
//   margin:'50px',
//   transition: 'transform 0.2s ease',
//   '&:hover': {
//     transform: 'scale(1.02)',
//   },
// });

// const CartSummaryCard = styled(Box)({
//   backgroundColor: '#FBF6E2',
//   borderRadius: '20px',
//   padding: '20px',
//   width: '100%',
//   maxWidth: '400px',
//   position: 'sticky',
//   top: '150px',
//   marginTop:'50px',
//   alignSelf: 'flex-start', // Align to the top of the right column
// });

// const CartItemsContainer = styled(Box)({
//   overflowY: 'auto', // Allows vertical scrolling
//   overflowX: 'hidden', // Prevents horizontal scrolling
//   maxHeight: '70vh', // Restricts height for scrolling
//   paddingRight: '10px',
// });

// const QuantityButton = styled(IconButton)({
//   backgroundColor: '#ECCEAE',
//   border: '2px solid #131842',
//   width: '36px',
//   height: '36px',
//   '&:hover': {
//     backgroundColor: '#E68369',
//   },
// });

// const CheckoutButton = styled(motion.button)({
//   background: 'linear-gradient(45deg, #131842, #E68369)',
//   color: '#fff',
//   padding: '16px 32px',
//   borderRadius: '30px',
//   width: '100%',
//   marginTop: '20px',
//   cursor: 'pointer',
//   border: 'none',
// });

// const ProductImage = styled('div')({
//   width: '100px',
//   height: '100px',
//   borderRadius: '15px',
//   overflow: 'hidden',
//   marginRight: '20px',
//   img: {
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//   },
// });

// const CartPage = () => {
//   const [cart, setCart] = useState(null);

//   // Function to remove a specific item
//   const removeCartItem = (productId) => {
//     const updatedCart = { ...cart };
//     updatedCart.items = updatedCart.items.filter((item) => item.productId !== productId);
//     setCart(updatedCart);
//   };

//   // Calculate the total cart value
//   const calculateCartTotal = () =>
//     cart?.items?.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

//   useEffect(() => {
//     // Simulating fetching cart data
//     setCart({
//       items: [
//         {
//           productId: 1,
//           productName: 'Product 1',
//           imageUrl: '/product1.jpg',
//           price: 100,
//           quantity: 2,
//         },
//         {
//           productId: 2,
//           productName: 'Product 2',
//           imageUrl: '/product2.jpg',
//           price: 150,
//           quantity: 1,
//         },
//       ],
//     });
//   }, []);

//   return (
//     <PageWrapper>
//       <Container maxWidth="xl">
//         <Box display="flex" alignItems="center" gap={3} mb={6}>
//           <ShoppingBag size={40} color="#131842" style={{marginTop:"50px"}}  />
//           <Typography variant="h3" sx={{ color: '#131842', fontWeight: 700, paddingTop:'50px' }}>
//             Your Cart
//           </Typography>
//         </Box>

//         <Box display="grid" gridTemplateColumns={{ xs: '1fr', lg: '3fr 1fr' }} gap={4}>
//           {/* Cart Items */}
//           <CartItemsContainer>
//             <AnimatePresence>
//               {cart?.items?.map((item) => (
//                 <motion.div
//                   key={item.productId}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: 20 }}
//                   layout
//                 >
//                   <LuxuryCard elevation={0}>
//                     <Box display="flex" alignItems="center" gap={3}>
//                       <ProductImage>
//                         <img src={item.imageUrl || '/placeholder.jpg'} alt={item.productName} />
//                       </ProductImage>

//                       {/* Align Name, Price, and Quantity Horizontally */}
//                       <Box display="flex" justifyContent="space-between" flex={1}>
//                         <Box>
//                           <Typography variant="h6" sx={{ fontWeight: 600 }}>
//                             {item.productName}
//                           </Typography>
//                           <Typography variant="body2" sx={{ color: '#666' }}>
//                             ${item.price} x {item.quantity}
//                           </Typography>
//                         </Box>

//                         <Box display="flex" alignItems="center" gap={1}>
//                           <QuantityButton
//                             onClick={() =>
//                               setCart((prev) => ({
//                                 ...prev,
//                                 items: prev.items.map((i) =>
//                                   i.productId === item.productId
//                                     ? {
//                                         ...i,
//                                         quantity: Math.max(i.quantity - 1, 1),
//                                       }
//                                     : i
//                                 ),
//                               }))
//                             }
//                           >
//                             <Minus size={16} />
//                           </QuantityButton>
//                           <Typography>{item.quantity}</Typography>
//                           <QuantityButton
//                             onClick={() =>
//                               setCart((prev) => ({
//                                 ...prev,
//                                 items: prev.items.map((i) =>
//                                   i.productId === item.productId
//                                     ? {
//                                         ...i,
//                                         quantity: i.quantity + 1,
//                                       }
//                                     : i
//                                 ),
//                               }))
//                             }
//                           >
//                             <Plus size={16} />
//                           </QuantityButton>
//                         </Box>

//                         <IconButton onClick={() => removeCartItem(item.productId)}>
//                           <Trash2 color="#E68369" />
//                         </IconButton>
//                       </Box>
//                     </Box>
//                   </LuxuryCard>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </CartItemsContainer>

//           {/* Cart Summary */}
//           <CartSummaryCard>
//             <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
//               Cart Summary
//             </Typography>

//             <Box display="flex" justifyContent="space-between" mb={2}>
//               <Typography>Total</Typography>
//               <Typography>${calculateCartTotal()}</Typography>
//             </Box>

//             <CheckoutButton>Proceed to Checkout</CheckoutButton>

//             {/* Clear Cart Button */}
//             <Button
//               onClick={() => setCart({ items: [] })}
//               variant="outlined"
//               color="error"
//               fullWidth
//               sx={{ mt: 2 }}
//             >
//               Clear Cart
//             </Button>
//           </CartSummaryCard>
//         </Box>
//       </Container>
//     </PageWrapper>
//   );
// };

// export default CartPage;


import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';
import { Box, Typography, IconButton, Container, Paper, Button } from '@mui/material';
import { Trash2, ShoppingBag, ArrowRight, Plus, Minus } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Styled Components
const PageWrapper = styled(Box)({
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
    backgroundImage: `url(https://i.ibb.co/zhZhF9w/cover2222222222222222222222.webp)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(8px)",
    zIndex: -1,
  },
});

const LuxuryCard = styled(motion(Paper))({
  backgroundColor: '#ecceae8a',
  border: '1px solid #131842',
  borderRadius: '20px',
  padding: '30px',
  marginBottom: '20px',
  margin: '50px',
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'scale(1.02)',
  },
});

const CartSummaryCard = styled(Box)({
  backgroundColor: '#ecceae8a',
  border: '1px solid #131842',
  borderRadius: '20px',
  padding: '20px',
  width: '100%',
  maxWidth: '400px',
  position: 'sticky',
  top: '150px',
  marginTop: '50px',
  alignSelf: 'flex-start',
});

const CartItemsContainer = styled(Box)({
  overflowY: 'auto',
  overflowX: 'hidden',
  maxHeight: '90vh',
  paddingRight: '10px',
});

const QuantityButton = styled(IconButton)({
  backgroundColor: 'none',
  border: 'none',
  size:'20px',
  width: '50px',
  height: '50px',
  
});

const CheckoutButton = styled(motion.button)({
  background: 'linear-gradient(45deg, #131842, #E68369)',
  color: '#fff',
  padding: '16px 32px',
  borderRadius: '15px',
  width: '100%',
  marginTop: '20px',
  cursor: 'pointer',
  border: 'none',
});

const ProductImage = styled('div')({
  width: '100px',
  height: '100px',
  borderRadius: '15px',
  overflow: 'hidden',
  marginRight: '20px',
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

const CartPage = () => {
  const [cart, setCart] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const userId = localStorage.getItem('id');
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      navigate('/sign-inup');
    } else {
      fetchCart();
    }
  }, [userId]);

  const fetchCart = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/add-tocart/cart/${userId}`);
      setCart(response.data);
    } catch (error) {
      setErrorMessage('Failed to fetch cart.');
      console.error('Error fetching cart:', error);
    }
  };

  const updateCartItemQuantity = async (productId, quantity) => {
    try {
      const response = await axios.put('http://localhost:5000/api/add-tocart/cart', {
        userId,
        productId,
        quantity,
      });
      setCart(response.data);
    } catch (error) {
      setErrorMessage('Failed to update item quantity.');
      console.error('Error updating cart item:', error);
    }
  };

  const removeCartItem = async (productId) => {
    try {
      const response = await axios.delete('http://localhost:5000/api/add-tocart/cart/item', {
        data: { userId, productId },
      });
      setCart(response.data.cart);
    } catch (error) {
      setErrorMessage('Failed to remove item from cart.');
      console.error('Error removing cart item:', error);
    }
  };

  const clearCart = async () => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/add-tocart/cart/${userId}`);
      setCart(response.data.cart);
    } catch (error) {
      setErrorMessage('Failed to clear cart.');
      console.error('Error clearing cart:', error);
    }
  };

  const calculateCartTotal = () =>
    cart?.items?.reduce((total, item) => total + item.totalItemPrice, 0) || 0;

  const handleCheckout = () => {
    const totalAmount = calculateCartTotal();
    navigate('/order-confirmation', {
      state: {
        cart: cart,
        totalAmount: totalAmount,
      },
    });
  };

  return (
    <PageWrapper>
      <Container maxWidth="xl">
        <Box display="flex" alignItems="center" gap={3} mb={6}>
          <ShoppingBag size={40} color="#131842" style={{ marginTop: '50px' }} />
          <Typography variant="h3" sx={{ color: '#131842', fontWeight: 700, paddingTop: '50px' }}>
            Your Cart
          </Typography>
        </Box>

        <Box display="grid" gridTemplateColumns={{ xs: '1fr', lg: '3fr 1fr' }} gap={4}>
          {/* Cart Items */}
          <CartItemsContainer>
            <AnimatePresence>
              {cart?.items?.map((item) => (
                <motion.div
                  key={item.productId}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  layout
                >
                  <LuxuryCard elevation={0}>
                    <Box display="flex" alignItems="center" gap={3}>
                      <ProductImage>
                        <img
                          src={item.productImage[0] || '/placeholder.jpg'}
                          alt={item.productName}
                        />
                      </ProductImage>

                      <Box display="flex" justifyContent="space-between" flex={1}>
                        <Box>
                          <Typography variant="h6" sx={{ color: '#131842', fontWeight: 1000 , fontSize:'1.5rem' }}>
                            {item.productName}
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#131842',fontSize:'1rem' , fontWeight: 'bold' }}>
                            ${item.price} x {item.quantity}
                          </Typography>
                        </Box>

                        <Box display="flex" alignItems="center" gap={1}>
                          <QuantityButton
                            onClick={() =>
                              updateCartItemQuantity(item.productId, Math.max(item.quantity - 1, 1))
                            }
                          >
                            <Minus size={25} fontWeight={600}/>
                          </QuantityButton>
                          <Typography sx={{ color: '#131842',fontSize:'1rem' , fontWeight: 'bolder' }}>{item.quantity}</Typography>
                          <QuantityButton
                            onClick={() => updateCartItemQuantity(item.productId, item.quantity + 1)}
                          >
                            <Plus size={25}  fontWeight={600}/>
                          </QuantityButton>
                        </Box>

                        <IconButton onClick={() => removeCartItem(item.productId)}>
                          <Trash2 color="#131842" fontWeight={600}  size={25} />
                        </IconButton>
                      </Box>
                    </Box>
                  </LuxuryCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </CartItemsContainer>

          {/* Cart Summary */}
          <CartSummaryCard>
            <Typography variant="h5" sx={{ fontWeight: 1000, mb: 2 , color: '#131842' }}>
              Cart Summary
            </Typography>

            <Box display="flex" justifyContent="space-between" mb={2}>
              <Typography sx={{ color: '#131842',fontSize:'1rem' , fontWeight: 'bolder' }}>Total</Typography>
              <Typography sx={{ color: '#131842',fontSize:'1rem' , fontWeight: 'bolder' }}>${calculateCartTotal()}</Typography>
            </Box>

            <CheckoutButton onClick={handleCheckout}>Proceed to Checkout</CheckoutButton>

            <Button
              onClick={clearCart}
              variant="outlined"
              color="#131842"
              fullWidth
              sx={{ mt: 2 ,border: '2px solid #131842'}}
            >
              Clear Cart
            </Button>
          </CartSummaryCard>
        </Box>
      </Container>
    </PageWrapper>
  );
};

export default CartPage;
