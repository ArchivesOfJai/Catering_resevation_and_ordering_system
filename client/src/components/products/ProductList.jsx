import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error(
          "Error fetching products:",
          error.response ? error.response.data : error.message
        );
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (productId) => {
    // Logic to add product to cart
    console.log("Add to cart:", productId);
  };

  const handleViewProduct = (productId) => {
    // Logic to view product details
    console.log("View product:", productId);
  };

  return (
    <>
      <div className="container-fluid p-0 m-0" >
        <div className="container" style={{backgroundColor:'#CED200'}}>
          <h1 className="m-0" style={{fontFamily:'"Average", serif',fontWeight:'400'}}>Here are the services that you can get</h1>
        </div>
      </div>
    <Container className="my-0 pt-5" style={{backgroundColor:'#ffffff'}}>
      <Row className="p-0">
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3} className="mx-auto p-0">
            <ProductCard
              product={product}
              onAddToCart={handleAddToCart}
              onViewProduct={handleViewProduct}
            />
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
};

export default ProductList;
