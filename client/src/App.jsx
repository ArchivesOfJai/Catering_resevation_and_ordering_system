import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import UserDashboard from "./components/products/UserDashboard";
import AdminDashboard from "./components/AdminDasboard/AdminDashboard";
import ProductDetails from "./components/products/ProductDetails";
import AddProduct from "./components/AdminDasboard/AddProducts";
// Import other components/pages here as needed

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/add-product" element={<AddProduct/>} />
          <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
          <Route path="/product/:id" element={<ProductDetails/>} />
          <Route path="/user-dashboard" element={<UserDashboard/>} />
          <Route path="/admin" element={<AdminDashboard/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
