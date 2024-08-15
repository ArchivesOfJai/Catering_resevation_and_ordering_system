import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/login", formData);
      alert(res.data.message);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="container-fluid pt-5 mt-5">
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
          Login
        </Typography>
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
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
        <Typography>
          Don't have an account? <Link to="/register">Register</Link>
        </Typography>
      </Box>
    </div>
  );
};

export default Login;
