import React from "react";
import { useMediaQuery } from "react-responsive";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import groupIcon from "../assets/footer_group_icon.png";

function Footer() {
  const isSmallWindow = useMediaQuery({ query: `(max-width: 767px)` });

  return (
    <div className="container-fluid">
      <div className="row text-start" style={{backgroundColor:"#000000"}}>
        <div className={`col-12 col-md-7 ${isSmallWindow?"order-2 text-center":""}`}>
            <div className="d-flex flex-column py-5 px-3" style={isSmallWindow?{alignItems:"center"}:null}>
                <h3 className="text-white" style={{fontFamily:'"Average", serif'}}>Premier Plates</h3>
                <div className="d-flex mt-5">
                    <a href="#"><InstagramIcon sx={{color:'#ffffff',width:"40px",fontSize:"2rem"}} /></a>
                    <a href="#"><LinkedInIcon sx={{color:'#ffffff',width:"40px",fontSize:"2rem"}}/></a>
                    <a href="#"><XIcon sx={{color:'#ffffff',width:"40px",fontSize:"2rem"}}/></a>
                </div>
                <div className="d-flex gap-2 mt-4">
                    <span><a href="#services" style={{textDecoration:"none"}}>Services</a></span>
                    <span><a href="#about" style={{textDecoration:"none"}}>About Us</a></span>
                    <span><a href="#events" style={{textDecoration:"none"}}>Recent Events</a></span>
                    <span><a href="/menu" style={{textDecoration:"none"}}>Menu</a></span>
                    <span><a href="/privacy" style={{textDecoration:"none"}}>Privacy</a></span>
                </div>

                <h6 className="mt-5" style={{color:'#ffffff'}}>&copy;{new Date().getFullYear()} Premier Plates</h6>
            </div>
        </div>
        <div className={`col-12 col-md-5 ${isSmallWindow?"order-1 text-center":"text-end"}`}>
            <img className="my-4" src={groupIcon} alt="group icon" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
