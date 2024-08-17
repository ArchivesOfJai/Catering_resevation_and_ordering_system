import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ product, onAddToCart, onViewProduct }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={product.imagePath} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>Price: ${product.price}</Card.Text>
        <Button variant="primary" onClick={() => onViewProduct(product._id)}>View Product</Button>
        <Button variant="success" onClick={() => onAddToCart(product._id)} style={{ marginLeft: '10px' }}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
