import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./index.css";
import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import AdminDashboard from "./components/AdminDasboard/AdminDashboard";
import ProductDetails from "./components/products/ProductDetails";
import AddProduct from "./components/AdminDasboard/AddProducts";
import Recent from "./components/Home/Recent";
import AdminRegister from "./components/authentication/AdminRegister";
import ProductList from "./components/products/ProductList";
// Import other components/pages here as needed

function App() {

  const isAuth = localStorage.getItem("isAuth");

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/recents" element={<Recent />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/user-dashboard" element={<ProductList />} />
          <Route path="/admin" element={<AddProduct />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin-register" element={<AdminRegister />} />
          <Route path="/login" element={<Login />}/>
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
