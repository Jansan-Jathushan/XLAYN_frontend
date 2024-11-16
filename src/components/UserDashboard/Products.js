import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Form, InputGroup, Badge, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faFilter, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/home/uki-jaffna/Documents/XLAYN/XLAYN_frontend/src/style/UserDashboard/Products.css';

const posterImages = [
  { id: 1, src: '/placeholder.svg?height=400&width=800', alt: 'High Quality Dry Fish' },
  { id: 2, src: '/placeholder.svg?height=400&width=800', alt: 'Trusted by Chefs' },
  { id: 3, src: '/placeholder.svg?height=400&width=800', alt: 'Sustainably Sourced' },
  { id: 4, src: '/placeholder.svg?height=400&width=800', alt: 'Rich in Nutrients' },
  { id: 5, src: '/placeholder.svg?height=400&width=800', alt: 'Perfect for Any Dish' },
];

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [cartMessage, setCartMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8); // Number of products per page
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/product/user/get-products');
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
      await axios.post('http://localhost:5000/api/add-tocart/cart', {
        userId,
        productId,
        quantity: 1,
      });
      setCartMessage('Product added to cart!');
      setCartItems(prevItems => prevItems + 1);
    } catch (error) {
      console.error('Error adding product to cart:', error);
      setCartMessage('Failed to add product to cart.');
    }
  };

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterCategory === '' || product.category === filterCategory)
  );

  // Calculate the products to display for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      {/* Navbar Bar with Rounded Corners */}
      <Container className="py-3">
        <div className="rounded-pill shadow-sm p-3 d-flex align-items-center justify-content-between">
          {/* Left Icon Button */}
          <Button variant="outline-black" className="me-3 icon-button">
            <FontAwesomeIcon icon={faFilter} />
          </Button>
          
          {/* Search Bar */}
          <InputGroup className="w-50 rounded-pill overflow-hidden shadow-sm">
            <InputGroup.Text className="bg-dark text-white rounded-start-pill">
              <FontAwesomeIcon icon={faSearch} />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-0 rounded-pill"
            />
          </InputGroup>

          {/* Right Icon Buttons */}
          <div className="d-flex align-items-center">
            <Button variant="outline-black" className="me-3 icon-button" onClick={() => navigate('/order')}>
              <FontAwesomeIcon icon={faBagShopping} />
            </Button>
            <Button variant="outline-black" className="position-relative icon-button" onClick={() => navigate('/cartpage')}>
              <FontAwesomeIcon icon={faShoppingCart} />
              {cartItems > 0 && (
                <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle">
                  {cartItems}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </Container>

      {/* Poster Carousel */}
      <Container className="my-4">
        <Carousel>
          {posterImages.map((image) => (
            <Carousel.Item key={image.id}>
              <img
                className="d-block w-100 rounded"
                src={image.src}
                alt={image.alt}
                style={{ height: '400px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h3>{image.alt}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      {/* Product Grid */}
      <Container className="my-4">
        <Row>
          {cartMessage && <div style={{ backgroundColor: '#c6f6d5', color: '#2f855a', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>{cartMessage}</div>}
        </Row>
        <Row className="g-4">
          {currentProducts.map((product) => (
            <Col md={3} key={product._id}>
              <Card className="h-100 shadow-sm border-50 rounded">
                <Card.Img variant="top" src={`http://localhost:5000/api/uploads/uploads/${product.imageUrls}`} alt={product.name} style={{ height: '200px', objectFit: 'cover' }} onError={(e) => e.target.src = ''} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-primary">{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <div className="mt-auto">
                    <p className="fw-bold text-secondary">Price: ${product.price}</p>
                    <p className="text-muted">Stock: {product.stock}</p>
                    <div className="d-flex gap-2">
                      <Button
                        variant="primary"
                        className="w-200 rounded-pill"
                        style={{ backgroundColor: '#E68369', border: 'none' }}
                        onClick={() => addToCart(product._id)}
                      >
                        Add to Cart
                      </Button>
                      <Button
                        variant="outline-primary"
                        className="w-200 rounded-pill"
                        style={{ borderColor: '#E68369', color: '#E68369' }}
                      >
                        View
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Pagination Controls */}
        <Row className="my-4">
          <Col className="d-flex justify-content-center">
            <Button
              variant="outline-primary"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prevPage => prevPage - 1)}
            >
              Previous
            </Button>
            <span className="mx-3">Page {currentPage} of {totalPages}</span>
            <Button
              variant="outline-primary"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prevPage => prevPage + 1)}
            >
              Next
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductPage;
