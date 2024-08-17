import React,{ useEffect } from 'react';
import Services from './Services';
import AboutUs from './AboutUs';
import Recent from './Recent';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate=useNavigate();
  useEffect(() => {
    const isAuth = localStorage.getItem("isAuth");
    if (isAuth) {
      if (localStorage.getItem("userRole") === "admin") {
        navigate("/admin");
      } else {
        navigate("/user-dashboard"); // Redirect to dashboard if logged in
      }
    }
  }, [navigate]);

  return (
    <div>
        <Services/>
        <AboutUs/>
        <Recent/>
        <Footer/>
    </div>
  )
}

export default Home
