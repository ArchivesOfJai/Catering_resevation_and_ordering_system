import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Button, Grid } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams(); // Get the product ID from the URL

  useEffect(() => {
    // Fetch product details based on product ID
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      // Send request to add product to cart and create order
      await axios.post('/api/orders', {
        products: [{ product: product._id, quantity: 1 }]
      });
      alert('Product added to cart and order created');
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  if (!product) return <Typography variant="h6" align="center">Loading...</Typography>;

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Product Details
      </Typography>
      <Card>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              height="400"
              image={`/uploads/${product.imagePath}`}
              alt={product.name}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardContent>
              <Typography variant="h5">{product.name}</Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                {product.description}
              </Typography>
              <Typography variant="h6">${product.price}</Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddToCart}
                style={{ marginTop: '1rem' }}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default ProductDetails;
