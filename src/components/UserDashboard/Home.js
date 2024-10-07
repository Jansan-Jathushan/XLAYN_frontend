import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { CheckCircle } from 'react-bootstrap-icons';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomePage() {
  // State for products and testimonials
  const [products, setProducts] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products'); // Replace with your backend endpoint
        const data = await response.json();
        setProducts(data.slice(0, 5)); // Display only 5 products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  // Fetch testimonials from backend
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/api/testimonials'); // Replace with your backend endpoint
        const data = await response.json();
        setTestimonials(data.slice(0, 5)); // Display only 5 testimonials
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };
    fetchTestimonials();
  }, []);

  // Logic for adding a product to the cart
  const addToCart = (product) => {
    // Get the existing cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product is already in the cart
    const existingProduct = cart.find((item) => item._id === product._id);

    if (existingProduct) {
      // If the product is already in the cart, update the quantity
      existingProduct.quantity += 1;
    } else {
      // If the product is not in the cart, add it with quantity 1
      cart.push({ ...product, quantity: 1 });
    }

    // Update the cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Display a success message (optional)
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
        {/* Hero Section */}
        <section className="py-5 bg-dark text-light text-center">
          <div className="container">
            <h1 className="display-4 font-weight-bold">Premium Dry Fish Delivered Worldwide.</h1>
            <p className="lead my-4">
              Elevative Export - Bringing the Finest Dry Fish to Your Table.
            </p>
            <p className="my-4">
              XLAYN connects you with the best dry fish sourced from trusted suppliers, ensuring quality and freshness with every shipment.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Button variant="light" href="#">
                Shop Now
              </Button>
              <Button variant="outline-light" href="#">
                Become a Supplier/Wholesaler
              </Button>
            </div>
          </div>
        </section>

        {/* Product Section */}
        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="display-5 text-center mb-4">
              Explore Our Premium Dry Fish Collection
            </h2>
            <div className="row">
              {/* Map over the first 5 products to dynamically generate cards */}
              {products.slice(0, 5).map((product) => (
                <div key={product._id} className="col-md-4 mb-4">
                  <div className="card h-100">
                    <img
                      src={product.imageUrl}
                      className="card-img-top"
                      alt={product.name}
                      style={{ height: '300px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">{product.description}</p>
                      <p>Type: {product.fishType}</p>
                      <p>Weight/Size: {product.weight}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="font-weight-bold">${product.price}</span>
                        <Button
                          variant="outline-primary"
                          onClick={() => addToCart(product)} // Corrected here
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-center mt-4">
              <Button variant="dark" href="#">
                View All Products
              </Button>
            </div>
          </div>
        </section>

        {/* Wholesaler Subscription Section */}
        <section className="py-5 bg-white">
          <div className="container d-flex align-items-center justify-content-between flex-wrap">
            <img
              src="/placeholder.svg"
              className="img-fluid mb-3 mb-lg-0"
              alt="Wholesaler Subscription"
              style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
            />
            <div className="ml-lg-5">
              <h2 className="display-5 font-weight-bold">Exclusive Wholesaler Subscription</h2>
              <p className="lead">
                Join our Wholesaler Program for exclusive access to bulk pricing, personalized support, and priority delivery.
              </p>
              <ul className="list-unstyled">
                <li>
                  <CheckCircle className="text-success mr-2" />
                  Discounted rates on large orders
                </li>
                <li>
                  <CheckCircle className="text-success mr-2" />
                  Tailored customer service for wholesalers
                </li>
                <li>
                  <CheckCircle className="text-success mr-2" />
                  Priority shipping and handling
                </li>
              </ul>
              <Button variant="dark" href="#">
                Subscribe Now
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-5 bg-light">
          <div className="container text-center">
            <h2 className="display-5 mb-4">Why Choose Us</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="mb-4">
                  <i className="bi bi-box-seam h2 text-primary"></i>
                </div>
                <h5>Sourced from Trusted Suppliers</h5>
                <p className="text-muted">
                  We partner with the best to bring you premium quality dry fish.
                </p>
              </div>
              <div className="col-md-4">
                <div className="mb-4">
                  <i className="bi bi-truck h2 text-primary"></i>
                </div>
                <h5>Global Delivery - Fast & Secure</h5>
                <p className="text-muted">
                  We ensure your orders reach you quickly and safely, anywhere in the world.
                </p>
              </div>
              <div className="col-md-4">
                <div className="mb-4">
                  <i className="bi bi-people-fill h2 text-primary"></i>
                </div>
                <h5>Wholesale Pricing Options Available</h5>
                <p className="text-muted">
                  Benefit from our competitive pricing for bulk orders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials Section */}
        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="display-5 text-center mb-4">What Our Customers Say</h2>
            <div className="row">
              {/* Map over first 5 testimonials */}
              {testimonials.map((testimonial) => (
                <div key={testimonial._id} className="col-md-4 mb-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">{testimonial.name}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {testimonial.location}
                      </h6>
                      <p className="card-text">{testimonial.feedback}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-5 bg-dark text-light text-center">
          <div className="container">
            <h2 className="mb-4">Follow Us</h2>
            <div className="d-flex justify-content-center gap-4">
              <a href="#" className="text-light">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="#" className="text-light">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="#" className="text-light">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="#" className="text-light">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
