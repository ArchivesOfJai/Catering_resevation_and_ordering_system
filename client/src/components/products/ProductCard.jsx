import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ImageFetcher from './ImageFetcher';

const ProductCard = ({ product, onAddToCart, onViewProduct }) => {

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <ImageFetcher filename={product.imagePath}/>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>Price: &#8377; {product.price}</Card.Text>
        <Button variant="primary" onClick={() => onViewProduct(product._id)}>View Product</Button>
        <Button variant="success" onClick={() => onAddToCart(product._id)} style={{ marginLeft: '10px' }}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
