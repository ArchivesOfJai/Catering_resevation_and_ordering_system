import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';

const AdminDashboard = () => {
  const [product, setProduct] = useState({ name: '', description: '', price: '', image: '' });
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch the orders from the backend when the component loads
    axios.get('/api/orders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleProductUpload = () => {
    // Send the product data to the backend API
    axios.post('/api/products', product)
      .then(response => {
        console.log('Product uploaded:', response.data);
        // Optionally clear the form after submission
        setProduct({ name: '', description: '', price: '', image: '' });
      })
      .catch(error => {
        console.error('Error uploading product:', error);
      });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>
      
      {/* Product Management Section */}
      <Typography variant="h6" gutterBottom>Upload Product</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField 
            label="Product Name" 
            name="name" 
            value={product.name} 
            onChange={handleInputChange} 
            fullWidth 
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            label="Price" 
            name="price" 
            value={product.price} 
            onChange={handleInputChange} 
            fullWidth 
            type="number"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
            label="Description" 
            name="description" 
            value={product.description} 
            onChange={handleInputChange} 
            fullWidth 
            multiline 
            rows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
            label="Image URL" 
            name="image" 
            value={product.image} 
            onChange={handleInputChange} 
            fullWidth 
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleProductUpload}>
            Upload Product
          </Button>
        </Grid>
      </Grid>

      {/* Orders Management Section */}
      <Typography variant="h6" gutterBottom sx={{ marginTop: 4 }}>View Orders</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Customer Name</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total Price</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map(order => (
              <TableRow key={order._id}>
                <TableCell>{order._id}</TableCell>
                <TableCell>{order.customerName}</TableCell>
                <TableCell>{order.productName}</TableCell>
                <TableCell>{order.quantity}</TableCell>
                <TableCell>{order.totalPrice}</TableCell>
                <TableCell>{order.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AdminDashboard;
