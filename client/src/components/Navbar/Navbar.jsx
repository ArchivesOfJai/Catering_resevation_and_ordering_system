import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from '@mui/material';
import LoggedAdmin from "./LoggedAdmin";
import LoggedUser from "./LoggedUser";

const Navbar = () => {
  const location = useLocation();

  const isAuthenticated = localStorage.getItem('isAuthenticated');
  const userRole = localStorage.getItem('userRole');

  const handleLogout =()=>{
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href={!isAuthenticated?"/":((userRole==='admin')?'/admin':'/user-dashboard')} style={{fontFamily:"'Average', serif",fontWeight:"400",fontStyle:"normal", fontSize:"2rem"}}>
          Premier Plates
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          {isAuthenticated?(userRole==='admin'?(<LoggedAdmin/>):(<LoggedUser/>)):(<div className="navbar-nav mx-auto">
            <a className="nav-link active" aria-current="page" href="/#services" style={{fontFamily:'"Inter", sans-serif',fontOpticalSizing:"auto",fontWeight:"400",fontStyle:"normal"}}>
              Services
            </a>
            <a className="nav-link" href="/#about" style={{fontFamily:'"Inter", sans-serif',fontOpticalSizing:"auto",fontWeight:"400",fontStyle:"normal"}}>
              About us
            </a>
            <a className="nav-link" href="/#events" style={{fontFamily:'"Inter", sans-serif',fontOpticalSizing:"auto",fontWeight:"400",fontStyle:"normal"}}>
              Recent Event
            </a>
            <a className="nav-link" href="#" style={{fontFamily:'"Inter", sans-serif',fontOpticalSizing:"auto",fontWeight:"400",fontStyle:"normal"}}>
              Menu
            </a>
          </div>)}
         {!isAuthenticated?( <div className="navbar-nav ">
          {location.pathname !== '/login' && (
            <Button color="inherit" component={Link} to="/login" className="btn mx-1 my-1" style={{backgroundColor:'#59A252',color:"#FFFFFF",fontFamily:'"Inter", sans-serif'}}>
              Login
            </Button>
          )}
          {location.pathname !== '/register' && (
            <Button color="inherit" component={Link} to="/register" className="btn mx-1 my-1" style={{backgroundColor:'#59A252',color:"#FFFFFF",fontFamily:'"Inter", sans-serif'}}>
              Register
            </Button>
          )}
          </div>):(<Button color="inherit" component={Link} onClick={handleLogout} to='/' className="btn mx-1 my-1" style={{backgroundColor:'#59A252',color:"#FFFFFF",fontFamily:'"Inter", sans-serif'}}>
              logout
            </Button>)}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
