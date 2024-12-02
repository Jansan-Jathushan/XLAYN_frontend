// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Container, Row, Col, Card, Button, Form, InputGroup, Badge, Carousel } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faShoppingCart, faFilter, faBagShopping } from '@fortawesome/free-solid-svg-icons';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../src/style/UserDashboard/Products.css';

// const posterImages = [
//   { id: 1, src: '/placeholder.svg?height=400&width=800', alt: 'High Quality Dry Fish' },
//   { id: 2, src: '/placeholder.svg?height=400&width=800', alt: 'Trusted by Chefs' },
//   { id: 3, src: '/placeholder.svg?height=400&width=800', alt: 'Sustainably Sourced' },
//   { id: 4, src: '/placeholder.svg?height=400&width=800', alt: 'Rich in Nutrients' },
//   { id: 5, src: '/placeholder.svg?height=400&width=800', alt: 'Perfect for Any Dish' },
// ];

// const ProductPage = () => {
//   const [products, setProducts] = useState([]);
//   const [cartItems, setCartItems] = useState(0);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterCategory, setFilterCategory] = useState('');
//   const [cartMessage, setCartMessage] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [productsPerPage] = useState(8); // Number of products per page
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('${process.env.REACT_APP_SERVER_HOSTNAME}/api/product/user/get-products');
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };
//     fetchProducts();
//   }, []);

//   const addToCart = async (productId) => {
//     const userId = localStorage.getItem('id');
//     if (!userId) {
//       navigate('/sign-inup');
//       return;
//     }

//     try {
//       await axios.post('${process.env.REACT_APP_SERVER_HOSTNAME}/api/add-tocart/cart', {
//         userId,
//         productId,
//         quantity: 1,
//       });
//       setCartMessage('Product added to cart!');
//       setCartItems(prevItems => prevItems + 1);
//     } catch (error) {
//       console.error('Error adding product to cart:', error);
//       setCartMessage('Failed to add product to cart.');
//     }
//   };

//   const filteredProducts = products.filter(product =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//     (filterCategory === '' || product.category === filterCategory)
//   );

//   // Calculate the products to display for the current page
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

//   // Handle pagination
//   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

//   return (
//     <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
//       {/* Navbar Bar with Rounded Corners */}
//       <Container className="py-3">
//         <div className="rounded-pill shadow-sm p-3 d-flex align-items-center justify-content-between">
//           {/* Left Icon Button */}
//           <Button variant="outline-black" className="me-3 icon-button">
//             <FontAwesomeIcon icon={faFilter} />
//           </Button>

//           {/* Search Bar */}
//           <InputGroup className="w-50 rounded-pill overflow-hidden shadow-sm">
//             <InputGroup.Text className="bg-dark text-white rounded-start-pill">
//               <FontAwesomeIcon icon={faSearch} />
//             </InputGroup.Text>
//             <Form.Control
//               type="text"
//               placeholder="Search products..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="border-0 rounded-pill"
//             />
//           </InputGroup>

//           {/* Right Icon Buttons */}
//           <div className="d-flex align-items-center">
//             <Button variant="outline-black" className="me-3 icon-button" onClick={() => navigate('/order')}>
//               <FontAwesomeIcon icon={faBagShopping} />
//             </Button>
//             <Button variant="outline-black" className="position-relative icon-button" onClick={() => navigate('/cartpage')}>
//               <FontAwesomeIcon icon={faShoppingCart} />
//               {cartItems > 0 && (
//                 <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle">
//                   {cartItems}
//                 </Badge>
//               )}
//             </Button>
//           </div>
//         </div>
//       </Container>

//       {/* Poster Carousel */}
//       <Container className="my-4">
//         <Carousel>
//           {posterImages.map((image) => (
//             <Carousel.Item key={image.id}>
//               <img
//                 className="d-block w-100 rounded"
//                 src={image.src}
//                 alt={image.alt}
//                 style={{ height: '400px', objectFit: 'cover' }}
//               />
//               <Carousel.Caption>
//                 <h3>{image.alt}</h3>
//               </Carousel.Caption>
//             </Carousel.Item>
//           ))}
//         </Carousel>
//       </Container>

//       {/* Product Grid */}
//       <Container className="my-4">
//         <Row>
//           {cartMessage && <div style={{ backgroundColor: '#c6f6d5', color: '#2f855a', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>{cartMessage}</div>}
//         </Row>
//         <Row className="g-4">
//           {currentProducts.map((product) => (
//             <Col md={3} key={product._id}>
//               <Card className="h-100 shadow-sm border-50 rounded">
//                 <Card.Img variant="top" src={'${process.env.REACT_APP_SERVER_HOSTNAME}/api/uploads/uploads/${product.imageUrls}'} alt={product.name} style={{ height: '200px', objectFit: 'cover' }} onError={(e) => e.target.src = ''} />
//                 <Card.Body className="d-flex flex-column">
//                   <Card.Title className="text-primary">{product.name}</Card.Title>
//                   <Card.Text>{product.description}</Card.Text>
//                   <div className="mt-auto">
//                     <p className="fw-bold text-secondary">Price: ${product.price}</p>
//                     <p className="text-muted">Stock: {product.stock}</p>
//                     <div className="d-flex gap-2">
//                       <Button
//                         variant="primary"
//                         className="w-200 rounded-pill"
//                         style={{ backgroundColor: '#E68369', border: 'none' }}
//                         onClick={() => addToCart(product._id)}
//                       >
//                         Add to Cart
//                       </Button>
//                       <Button
//                         variant="outline-primary"
//                         className="w-200 rounded-pill"
//                         style={{ borderColor: '#E68369', color: '#E68369' }}
//                       >
//                         View
//                       </Button>
//                     </div>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>

//         {/* Pagination Controls */}
//         <Row className="my-4">
//           <Col className="d-flex justify-content-center">
//             <Button
//               variant="outline-primary"
//               disabled={currentPage === 1}
//               onClick={() => setCurrentPage(prevPage => prevPage - 1)}
//             >
//               Previous
//             </Button>
//             <span className="mx-3">Page {currentPage} of {totalPages}</span>
//             <Button
//               variant="outline-primary"
//               disabled={currentPage === totalPages}
//               onClick={() => setCurrentPage(prevPage => prevPage + 1)}
//             >
//               Next
//             </Button>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default ProductPage;



import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, ShoppingBag, ShoppingCart, ChevronLeft, ChevronRight, X, Facebook, Mail, Plus, Minus } from 'lucide-react'



// Mock data for poster images
const posterImages = [
  { id: 1, src: 'https://i.ibb.co/dGJYh2h/hero2.webp', alt: 'High Quality Dry Fish' },
  { id: 2, src: 'https://i.ibb.co/CmR6FL5/coverrrrrrrrrrrrrrrrrr111.webp', alt: 'Trusted by Chefs' },
  { id: 3, src: 'https://i.ibb.co/1Q0jDSr/herobg.webp', alt: 'Sustainably Sourced' },
  { id: 4, src: 'https://i.ibb.co/xDhXBS1/hero1.webp', alt: 'Rich in Nutrients' },
  { id: 5, src: 'https://i.ibb.co/zhZhF9w/cover2222222222222222222222.webp', alt: 'Perfect for Any Dish' },
]

const bannerText = "Discover Premium Dry Fish • Sustainably Sourced • Rich in Nutrients • Perfect for Any Dish • Trusted by Chefs Worldwide • "




export default function Component() {
  const [products, setProducts] = useState([]);
  const [cartMessage, setCartMessage] = useState('');
  const [cartItems, setCartItems] = useState(0)
  const [currentPoster, setCurrentPoster] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filterType, setFilterType] = useState('')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const productsPerPage = 12

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/product/user/get-products`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);


  const addToCart = async (productId) => {
    const userId = localStorage.getItem('id');
    if (!userId) {
      navigate('/sign-inup');
      return;
    }

    try {
      await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/add-tocart/cart`, {
        userId,
        productId,
        quantity: 1,
      });
      setCartMessage('Product added to cart!');
      setCartItems((prev) => prev + 1)
    } catch (error) {
      console.error('Error adding product to cart:', error);
      setCartMessage('Failed to add product to cart.');
    }
  };

  const nextPoster = () => {
    setCurrentPoster((prev) => (prev + 1) % posterImages.length)
  }

  // const addToCart = () => {
  //   setCartItems((prev) => prev + 1)
  // }

  const viewProduct = (product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }



  // Auto-advance poster every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextPoster, 5000)
    return () => clearInterval(timer)
  }, [])

  const filteredProducts = filterType
    ? products.filter(product => product.type.toLowerCase() === filterType.toLowerCase())
    : products

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  const uniqueTypes = [...new Set(products.map(product => product.type))]
  const pageCount = Math.ceil(filteredProducts.length / productsPerPage)

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FBF6E2', padding: '2rem 0' }}>
      {/* Custom Navigation Bar */}
      <nav style={{ position: 'sticky', top: '7rem', zIndex: 10, width: '80%', margin: '0 auto', backgroundColor: '#131842', borderRadius: '9999px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1.5rem' }}>
          <div style={{ cursor: 'pointer', color: '#E68369', position: 'relative', paddingLeft: '100px', }} onClick={() => setIsFilterOpen(!isFilterOpen)}>
            <Filter style={{ height: '1.5rem', width: '1.5rem' }} />
            <span style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: 0 }}>Filter</span>
            {isFilterOpen && (
              <div style={{ position: 'absolute', top: '100%', left: 0, marginTop: '0.5rem', backgroundColor: '#E68369', marginLeft: '100px', borderRadius: '0.375rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', padding: '0.5rem' }}>
                <button
                  style={{ display: 'block', width: '100%', color: '#131842', backgroundColor: '#E68369', border: 'none', textAlign: 'left', padding: '0.5rem', hover: { backgroundColor: '#E68369' } }}
                  onClick={() => setFilterType('')}
                >
                  All Types
                </button>
                {uniqueTypes.map(type => (
                  <button
                    key={type}
                    style={{
                      display: 'block',
                      width: '100%',
                      color: '#131842',
                      background: '#E68369',
                      border: 'none',
                      textAlign: 'left',
                      padding: '0.5rem',
                      backgroundColor: isHovered ? '#E68369' : 'transparent', // Change on hover
                      transition: 'background-color 0.3s ease', // Smooth transition
                    }}
                    onClick={() => setFilterType(type)}
                    onMouseEnter={() => setIsHovered(true)} // On hover
                    onMouseLeave={() => setIsHovered(false)} // On hover out
                  >
                    {type}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '50%', display: 'flex', alignItems: 'center', backgroundColor: '#131842', border: '3px solid #E68369', borderRadius: '9999px', padding: '0.5rem 1rem' }}>
              <Search style={{ height: '1.25rem', width: '1.25rem', color: '#E68369' }} />
              <input
                type="text"
                placeholder="Search products"
                style={{
                  width: '100%',
                  backgroundColor: '#131842',
                  color: '#E68369',
                  border: 'none',
                  outline: 'none',
                  marginLeft: '0.5rem',
                }}
              />
              <style>
                {`
    input::placeholder {
      color: #E68369;
    }
  `}
              </style>            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ cursor: 'pointer', color: '#E68369', paddingRight: '50px', }}>
              <ShoppingBag style={{ height: '1.5rem', width: '1.5rem' }} onClick={() => navigate('/order')}/>
              <span style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: 0 }}>My Orders</span>
            </div>
            <div style={{ cursor: 'pointer', position: 'relative', color: '#E68369', paddingRight: '100px', }}>
              <ShoppingCart style={{ height: '1.5rem', width: '1.5rem' }} onClick={() => navigate('/cartpage')} />
              {cartItems > 0 && (
                <span style={{ position: 'absolute', top: '-0.25rem', right: '-0.25rem', backgroundColor: '#E68369', color: '#131842', borderRadius: '9999px', fontSize: '0.75rem', width: '1.25rem', height: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight:'80px' }}>
                  {cartItems}
                </span>
              )}
              <span style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: 0 }}>Cart</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Poster Section with Parallax Effect */}
      <motion.div
        style={{ position: 'relative', width: '91.666667%', margin: '0 auto', marginBottom: '2rem', overflow: 'hidden', borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', height: '500px' }}
      >
        <motion.img
          key={currentPoster}
          src={posterImages[currentPoster].src}
          alt={posterImages[currentPoster].alt}
          style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 , filter:'blur(px)' }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </motion.div>

      {/* Animated Banner Section */}
      <div style={{ position: 'relative', width: '91.666667%', margin: '0 auto', marginBottom: '2rem', height: '5rem', background: 'linear-gradient(to right, #131842, #E68369)', borderRadius: '0.5rem', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center' }}>
          <motion.div
            style={{ whiteSpace: 'nowrap' }}
            initial={{ x: '0%' }}
            animate={{ x: '-50%' }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            <span style={{ fontSize: '1.875rem', fontFamily: 'serif', fontStyle: 'italic', letterSpacing: '0.05em', color: '#FBF6E2', paddingRight: '2rem' }}>{bannerText}</span>
            <span style={{ fontSize: '1.875rem', fontFamily: 'serif', fontStyle: 'italic', letterSpacing: '0.05em', color: '#FBF6E2' }}>{bannerText}</span>
          </motion.div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", 
          gap: "40px", // Gap between grid items
          width: "90%", // Ensures it covers 90% of the page width
          margin: "0 auto", // Centers the section
        }}
      >
        {currentProducts.map((product) => (
          <motion.div
            key={product.id}
            style={{
              backgroundColor: "#FBF6E2",
              borderRadius: "15px",
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.5)",
              overflow: "hidden",
              transform: "scale(1)",
              transition: "all 0.3s",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={product.imageUrls[0]}
              alt={product.name}
              style={{
                padding:'16px',
                width: "100%",
                height: "20rem",
                objectFit: "cover",
                borderRadius:'25px',
              }}
            />
            <div
              style={{
                paddingLeft: "16px",
                paddingRight:'16px',
                paddingBottom:'16px',
                //  borderTop: '3px solid transparent',
                //  borderImage: "linear-gradient(to right, #131842, #E68369) 1", 


              }}
            >
              <h3
                style={{
                  borderTop: '3px solid transparent',
                 borderImage: "linear-gradient(to right, #131842, #E68369) 1",
                 paddingTop:'16px',
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  marginBottom: "8px",
                  color: "#131842",
                }}
              >
                {product.name}
              </h3>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  color: "rgba(19, 24, 66, 0.8)",
                  marginBottom: "4px",
                }}
              >
                Type: {product.type}
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  color: "rgba(19, 24, 66, 0.8)",
                  marginBottom: "4px",
                }}
              >
                Store: {product.businessName}
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "rgba(19, 24, 66, 0.8)",
                  marginBottom: "8px",
                }}
              >
                Stock: {product.stock}
              </p>
              <p
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  fontWeight: "600",
                  color: "#E68369",
                }}
              >
                ${product.price.toFixed(2)}
              </p>
              <div
                style={{
                  marginTop: "16px",
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <motion.button
                  onClick={() => addToCart(product._id)}
                  style={{
                    padding: "16px 60px",
                    background: "linear-gradient(to right, #131842, #E68369)",
                    color: "#FBF6E2",
                    borderRadius: "8px",
                    transition: "background-color 0.3s",
                    border: 'none',
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Add to Cart
                </motion.button>
                <motion.button
                  onClick={() => viewProduct(product)}
                  style={{
                    padding: "16px 48px",
                    background: "none", // Transparent background
                    border: "3px solid transparent", // Initially transparent border
                    borderImage: "linear-gradient(to right, #131842, #E68369) 1", // Gradient for border
                    color: "#131842", // Fallback solid color for text
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text", // For text gradient
                    WebkitTextFillColor: "transparent", // Makes text gradient visible
                    background: "linear-gradient(to right, #131842, #E68369)", // Text gradient
                    borderRadius: "200px", // Rounded corners
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>



      {/* Pagination */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', gap: '1rem' }}>
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#131842',
            color: '#FBF6E2',
            borderRadius: '0.375rem',
            border:'none',
            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
            opacity: currentPage === 1 ? 0.5 : 1,
            transition: 'background-color 0.3s ease',
          }}
        >
          <ChevronLeft style={{ height: '1.5rem', width: '1.5rem' }} />
          <span style={{ visibility: 'hidden' }}>Previous</span>
        </button>

        <span style={{ display: 'flex', alignItems: 'center', color: '#131842' , fontWeight:'bold', }}>
          Page {currentPage} of {pageCount}
        </span>

        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageCount))}
          disabled={currentPage === pageCount}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#131842',
            color: '#FBF6E2',
            borderRadius: '0.375rem',
            border:'none',
            cursor: currentPage === pageCount ? 'not-allowed' : 'pointer',
            opacity: currentPage === pageCount ? 0.5 : 1,
            transition: 'background-color 0.3s ease',
          }}
        >
          <ChevronRight style={{ height: '1.5rem', width: '1.5rem' }} />
          <span style={{ visibility: 'hidden' }}>Next</span>
        </button>
      </div>



      {/* Product Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 50,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              marginTop:'100px',
            }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '80rem', // Equivalent to max-w-5xl
                backgroundColor: '#FBF6E2',
                padding: '1.5rem',
                borderRadius: '1rem',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                overflowY: 'auto',
                maxHeight: '90vh',
              }}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '1rem',
                  color: '#131842',
                  backgroundColor:'#FBF6E2',
                  fontWeight:'bold',
                  border:'none',
                  cursor: 'pointer',
                  transition: 'color 0.3s',
                }}
                onMouseOver={(e) => (e.target.style.color = '#E68369')}
                onMouseOut={(e) => (e.target.style.color = '#131842')}
              >
                <X style={{ height: '1.5rem', width: '1.5rem' }} />
              </button>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', flexDirection: 'row', gap: '2rem' }}>
                {/* Product Image */}
                <div style={{ width: '100%', maxWidth: '50%' }}>
                  <div style={{ aspectRatio: '1', backgroundColor: '#ECCEAE', borderRadius: '0.5rem', overflow: 'hidden' }}>
                    <img
                      src={selectedProduct.imageUrls[0]}
                      alt={selectedProduct.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </div>

                {/* Product Details */}
                <div style={{ width: '100%', maxWidth: '50%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <h2 style={{ fontSize: '1rem', color: '#131842', opacity: 0.7 , fontWeight: 'bold' }}>
                      {selectedProduct.businessName}
                    </h2>
                    <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#131842' }}>
                      {selectedProduct.name}
                    </h1>
                  </div>

                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#E68369' }}>
                    ${selectedProduct.price.toFixed(2)}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#131842',fontSize: '1rem', fontWeight: 'bold' }}>
                      <span>Type:</span>
                      <span>{selectedProduct.type}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#131842',fontSize: '1rem', fontWeight: 'bold' }}>
                      <span>Weight:</span>
                      <span>{selectedProduct.weight}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#131842',fontSize: '1rem', fontWeight: 'bold' }}>
                      <span>Stock:</span>
                      <span>{selectedProduct.stock}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#131842',fontSize: '1rem', fontWeight: 'bold' }}>
                      <span>Status:</span>
                      <span>{selectedProduct.status}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '3rem' }}>
                  <motion.button
                  onClick={() => addToCart(selectedProduct)}
                  style={{
                    padding: "16px 120px",
                    background: "linear-gradient(to right, #131842, #E68369)",
                    color: "#FBF6E2",
                    borderRadius: "8px",
                    transition: "background-color 0.3s",
                    border: 'none',
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Add to Cart
                </motion.button>
                <motion.button
  style={{
    padding: "16px 40px",
    background: "none", // Transparent background
    border: "3px solid transparent", // Initially transparent border
    borderImage: "linear-gradient(to right, #131842, #E68369) 1", // Gradient for border
    color: "#131842", // Fallback solid color for text
    backgroundClip: "text",
    WebkitBackgroundClip: "text", // For text gradient
    WebkitTextFillColor: "transparent", // Makes text gradient visible
    background: "linear-gradient(to right, #131842, #E68369)", // Text gradient
    transition: "all 0.3s ease",
    cursor: "pointer",
    borderRadius: "12px", // Added border radius
  }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Add To Wish List
</motion.button>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button
                      style={{
                        padding: '0.5rem',
                        borderRadius: '0.375rem',
                        backgroundColor: '#ECCEAE',
                        border:'none',
                        color: '#131842',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s',
                      }}
                      onMouseOver={(e) => (e.target.style.backgroundColor = '#E68369')}
                      onMouseOut={(e) => (e.target.style.backgroundColor = '#ECCEAE')}
                    >
                      <Facebook style={{ height: '1.25rem', width: '1.25rem' }} />
                    </button>
                    <button
                      style={{
                        padding: '0.5rem',
                        borderRadius: '0.375rem',
                        border:'none',
                        backgroundColor: '#ECCEAE',
                        color: '#131842',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s',
                      }}
                      onMouseOver={(e) => (e.target.style.backgroundColor = '#E68369')}
                      onMouseOut={(e) => (e.target.style.backgroundColor = '#ECCEAE')}
                    >
                      <Mail style={{ height: '1.25rem', width: '1.25rem' }} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div style={{ marginTop: '2rem', borderTop: '3px solid transparent', borderImage: "linear-gradient(to right, #131842, #E68369) 1", paddingTop: '1rem' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: '600', color: '#131842', marginBottom: '0.5rem' }}>
                  Description
                </h3>
                <p style={{ color: '#131842',fontSize: '1rem', fontWeight: 'bold', }}>{selectedProduct.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}