import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error.response ? error.response.data : error.message);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (productId) => {
    // Logic to add product to cart
    console.log('Add to cart:', productId);
  };

  const handleViewProduct = (productId) => {
    // Logic to view product details
    console.log('View product:', productId);
  };

  return (
    <Container>
      <Row>
        {products.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <ProductCard
              product={product}
              onAddToCart={handleAddToCart}
              onViewProduct={handleViewProduct}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
