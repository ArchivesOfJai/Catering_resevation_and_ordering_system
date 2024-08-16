import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Button,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";
import "../../css/services.css";
import image1 from "../../assets/gallery_image1.jpg";
import image2 from "../../assets/gallery_image2.png";
import image3 from "../../assets/gallery_image3.png";

function Services() {
  return (
    <section id="services">
    <div className="container-fluid text-start p-0">
      <div className="container pt-5">
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontSize: "2.5rem",
            color: "#59A252",
            fontFamily: '"Average", serif',
          }}
        >
          Unforgettable Culinary Experiences with Premier
          <span style={{ color: "#CED200" }}> Catering Services</span>
        </Typography>
        <Typography
          variant="p"
          component="div"
          sx={{ flexGrow: 1, fontFamily: '"Average", serif', width: "50%" }}
        >
          Elevate your events with our exquisite, tailored catering solutions,
          designed to impress and delight every guest.
        </Typography>

        <Button
          color="inherit"
          component={Link}
          to="/register"
          className="btn mx-1 mt-5"
          style={{
            backgroundColor: "#59A252",
            color: "#FFFFFF",
            fontFamily: '"Inter", sans-serif',
          }}
        >
          Register
        </Button>
      </div>
      {/* gallery */}
      <div className="container-xxl mt-3" style={{backgroundColor:"#59A252"}}>
        <div className="row py-3 text-center service-gallery">
          <div className="col-12 col-md-4 col-sm-6">
            <img src={image1} alt="image 1" className="mx-auto mb-2" />
          </div>
          <div className="col-12 col-md-4 col-sm-6">
            <img src={image2} alt="image 1" className="mx-auto mb-2" />
          </div>
          <div className="col-12 col-md-4 col-sm-6">
            <img src={image3} alt="image 1" className="mx-auto mb-2" />
          </div>
        </div>
      </div>
      {/* services */}
      <div className="container-xxl" style={{backgroundColor:"#FFFFFF"}}>
        <div className="row py-3 text-center">
          <div className="col-12 col-md-4 col-sm-6 mb-3">
            <Card sx={{ maxWidth: 345,maxHeight:300,minHeight:220,margin:"0 auto"}}>
              <CardActionArea>
                <CardContent sx={{textAlign:"left"}}>
                  <Typography gutterBottom variant="h5" component="div">
                    Wedding
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Your wedding should be an amazing experience every step of the way. From our first conversation, our team of wedding pros is here to help you enjoy more and stress less.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className="col-12 col-md-4 col-sm-6 mb-3">
            <Card sx={{ maxWidth: 345,maxHeight:300,minHeight:220,margin:"0 auto" }}>
              <CardActionArea>
                <CardContent sx={{textAlign:"left"}}>
                  <Typography gutterBottom variant="h5" component="div" >
                  Delivery
                  </Typography>
                  <Typography variant="body2" color="text.secondary" >
                  Tired of sub par delivery? Try Premier Plates Catering. Our team is 100% dedicated to professional catering. From ten meals to thousands, we deliver your made-to-order meals on time, as ordered, every time.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className="col-12 col-md-4 col-sm-6 mb-3">
            <Card sx={{ maxWidth: 345,maxHeight:300,minHeight:220,margin:"0 auto" }}>
              <CardActionArea>
                <CardContent sx={{textAlign:"left"}}>
                  <Typography gutterBottom variant="h5" component="div">
                  Special Events
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  With Premier Plates easy planning and full-service approach catering, we’ll make your next event the best one yet. See why Chicago’s best choose Premier Plates for their most important events.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Services;
