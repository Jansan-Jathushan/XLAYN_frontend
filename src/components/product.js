import React from 'react';
import './product.css';

const Product = () => {
  // Example product data (replace with actual data)
  const product = {
    title: "How to Photograph Food: Compose, Shoot, and Edit Appetizing Images",
    author: "Beata Lubas",
    price: "$11.89",
    image: "your-image-path.jpg", // Replace with the actual image path
    rating: 4.5,
    reviews: 462,
  };

  const relatedProducts = [
    {
      title: "Food Photography: Creating Appetizing Images",
      author: "Joe Glyda",
      price: "$49.95",
      image: "related-product-image1.jpg",
    },
    // Add more related products here
  ];

  return (
    <div className="product-container">
      <div className="product-details">
        <img src={product.image} alt={product.title} className="product-image" />
        <h2>{product.title}</h2>
        <p>by {product.author}</p>
        <p className="price">{product.price}</p>
        <p className="rating">Rating: {product.rating} stars</p>
        <p className="reviews">{product.reviews} reviews</p>
      </div>

      <div className="related-products">
        <h3>Customers who viewed this item also viewed</h3>
        <div className="related-products-list">
          {relatedProducts.map((product, index) => (
            <div key={index} className="related-product">
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <p>{product.author}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
