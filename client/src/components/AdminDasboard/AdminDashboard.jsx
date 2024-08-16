import React from 'react';
import { Container, Typography, Grid, Button, Paper } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Admin Dashboard
      </Typography>
      <Paper style={{ padding: '2rem', marginBottom: '2rem' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Link to="/add-product">
              <Button variant="contained" color="primary" fullWidth>
                Add Product
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Link to="view-orders">
              <Button variant="contained" color="secondary" fullWidth>
                View Orders
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Link to="product-list">
              <Button variant="contained" color="info" fullWidth>
                Product List
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Paper>
      <Outlet />
    </Container>
  );
};

export default AdminDashboard;
