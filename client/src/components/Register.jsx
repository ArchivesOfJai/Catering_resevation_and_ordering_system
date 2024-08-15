import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField, Button, MenuItem, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";



const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const navigate = useNavigate();

  const { name, email, password, role } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register', formData); // No need to include the base URL
      alert(res.data.message);
      navigate('/login');
    } catch (error) {
      alert(error.response.data.message);
    }  
  };

  return (
   <div className="container-fluid pt-5">
     <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "400px",
        margin: "auto",
        gap: 2,
       
      }}
    >
      <Typography variant="h4" component="h1" align="center">
        Register
      </Typography>
      <TextField
        label="Name"
        variant="outlined"
        name="name"
        value={name}
        onChange={onChange}
        required
        fullWidth
      />
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        name="email"
        value={email}
        onChange={onChange}
        required
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        name="password"
        value={password}
        onChange={onChange}
        required
        fullWidth
      />
      <TextField
        label="Role"
        select
        name="role"
        value={role}
        onChange={onChange}
        variant="outlined"
        fullWidth
      >
        <MenuItem value="user">User</MenuItem>
        <MenuItem value="admin">Admin</MenuItem>
      </TextField>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Register
      </Button>
      <Typography>
        Already have an account? <Link to="/login">Login</Link>
      </Typography>
    </Box>
   </div>
  );
};

export default Register;
