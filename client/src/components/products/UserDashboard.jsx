import React, { useEffect, useState } from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all products on component mount
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleViewDetails = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleAddToCart = async (product) => {
    try {
      // Add the product to the cart (send request to backend if needed)
      setCart([...cart, product]);
      await axios.post('/api/orders', {
        products: [{ product: product._id, quantity: 1 }]
      });
      alert('Product added to cart and order created');
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        User Dashboard
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product._id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={`/uploads/${product.imagePath}`}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {product.description}
                </Typography>
                <Typography variant="h6">${product.price}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleViewDetails(product._id)}
                >
                  View Details
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleAddToCart(product)}
                  style={{ marginLeft: '1rem' }}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default UserDashboard;
