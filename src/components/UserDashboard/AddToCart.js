// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Container, Row, Col, Button, Card, Form, Alert } from 'react-bootstrap';

// const CartPage = () => {
//   const [cart, setCart] = useState(null);
//   const [errorMessage, setErrorMessage] = useState('');
//   const userId = localStorage.getItem('id'); // Assuming user ID is stored in local storage
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!userId) {
//       navigate('/sign-inup'); // Redirect if user not signed in
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
//       setCart(response.data); // Update cart state with the new data
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
//       setCart(response.data.cart); // Update cart with item removed
//     } catch (error) {
//       setErrorMessage('Failed to remove item from cart.');
//       console.error('Error removing cart item:', error);
//     }
//   };

//   const clearCart = async () => {
//     try {
//       const response = await axios.delete(`http://localhost:5000/api/add-tocart/cart/${userId}`);
//       setCart(response.data.cart); // Clear cart state
//     } catch (error) {
//       setErrorMessage('Failed to clear cart.');
//       console.error('Error clearing cart:', error);
//     }
//   };

//   // Calculate total cart price
//   const calculateCartTotal = () => {
//     if (cart?.totalCartPrice) {
//       return cart.totalCartPrice;
//     }
//     return cart?.items.reduce((total, item) => total + item.totalItemPrice, 0);
//   };

//   return (
//     <Container>
//       <h1>Your Cart</h1>
//       {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
//       {cart && cart.items.length > 0 ? (
//         <>
//           <Row>
//             {cart.items.map((item) => (
//               <Col md={4} key={item.productId} className="mb-4">
//                 <Card>
//                   {item.imageUrl && (
//                     <Card.Img variant="top" src={item.imageUrl} alt={item.productName} />
//                   )}
//                   <Card.Body>
//                     <Card.Title>{item.productName}</Card.Title>
//                     <Card.Text>Price: ${item.price}</Card.Text>
//                     <Card.Text>Total: ${item.totalItemPrice}</Card.Text>
//                     <Form.Group controlId="quantity">
//                       <Form.Label>Quantity</Form.Label>
//                       <Form.Control
//                         type="number"
//                         min="1"
//                         value={item.quantity}
//                         onChange={(e) =>
//                           updateCartItemQuantity(item.productId, parseInt(e.target.value, 10))
//                         }
//                       />
//                     </Form.Group>
//                     <Button
//                       variant="danger"
//                       onClick={() => removeCartItem(item.productId)}
//                       className="mt-2"
//                     >
//                       Remove
//                     </Button>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//           <h3>Total Cart Price: ${calculateCartTotal()}</h3>
//           <Button variant="warning" onClick={clearCart}>
//             Clear Cart
//           </Button>
//         </>
//       ) : (
//         <p>Your cart is empty.</p>
//       )}
//     </Container>
//   );
// };

// export default CartPage;


import '../../style/UserDashboard/AddToCart.css'; // Custom CSS for styling
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa'; // Import trash icon from react-icons

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

  const calculateCartTotal = () => {
    return cart?.items.reduce((total, item) => total + item.totalItemPrice, 0) || 0;
  };
  const handleOrderCreate = () => {
    const totalAmount = calculateCartTotal();
    navigate('/order-confirmation', {
      state: {
        cart: cart,  // Pass the cart object
        totalAmount: totalAmount,  // Pass the total amount
      }
    });
  };

  return (
    <Container className="cart-page">
      <h1 className="cart-header">Shopping Bag</h1>
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

      <Row>
        {/* Left Side: Cart Items */}
        <Col md={8}>
          <div className="cart-items">
            {cart && cart.items.length > 0 ? (
              cart.items.map((item) => (
                <Card className="cart-item" key={item.productId}>
                  <Button
                    variant="link"
                    className="remove-item-icon"
                    onClick={() => removeCartItem(item.productId)}
                  >
                    <FaTrash />
                  </Button>
                  <Row>
                    <Col md={3}>
                      <Card.Img
                        src={item.imageUrl || '/placeholder.jpg'}
                        alt={item.productName}
                        className="cart-item-image"
                      />
                    </Col>
                    <Col md={6}>
                      <Card.Body>
                        <Card.Title>{item.productName}</Card.Title>
                        <Card.Text>Price: ${item.price}</Card.Text>
                      </Card.Body>
                    </Col>
                    <Col md={3} className="cart-item-quantity">
                      <Form.Group controlId="quantity">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            updateCartItemQuantity(item.productId, parseInt(e.target.value, 10))
                          }
                        />
                      </Form.Group>
                      <Card.Text className="item-total">Total: ${item.totalItemPrice}</Card.Text>
                    </Col>
                  </Row>
                </Card>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
        </Col>

        {/* Right Side: Cart Summary */}
        <Col md={4}>
          <div className="cart-summary">
            <Button variant="danger" className="clear-cart-btn" onClick={clearCart}>
              <FaTrash /> Clear All
            </Button>
            <h3>Cart Total</h3>
            <p className="cart-total-amount">Subtotal: ${calculateCartTotal()}</p>
            <Button variant="primary" 
            className="checkout-btn"
            onClick={handleOrderCreate} >
              Proceed to Checkout
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
