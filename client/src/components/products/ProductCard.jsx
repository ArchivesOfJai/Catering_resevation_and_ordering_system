import React from "react";
import { Card, Button } from "react-bootstrap";
import ImageFetcher from "./ImageFetcher";

const ProductCard = ({ product, onAddToCart, onViewProduct }) => {
  return (
    // <Card style={{ width: '18rem',height:"450px"}}>
    //   <ImageFetcher filename={product.imagePath}/>
    //   <Card.Body>
    //     <Card.Title>{product.name}</Card.Title>
    //     <Card.Text>{product.description}</Card.Text>
    //     <Card.Text>Price: &#8377; {product.price}</Card.Text>
    //     <Button variant="primary" onClick={() => onViewProduct(product._id)}>View Product</Button>
    //     <Button variant="success" onClick={() => onAddToCart(product._id)} style={{ marginLeft: '10px' }}>Add to Cart</Button>
    //   </Card.Body>
    // </Card>

    <div className="card mx-auto my-2" style={{ width: "18rem",height:'450px' }}>
      <ImageFetcher filename={product.imagePath} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <Card.Text>Price: &#8377; {product.price}</Card.Text>
        <Button variant="primary" onClick={() => onViewProduct(product._id)}>
          View Product
        </Button>
        <Button
          variant="success"
          onClick={() => onAddToCart(product._id)}
          style={{ marginLeft: "10px" }}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
