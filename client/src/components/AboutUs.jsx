import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import "../css/aboutUs.css";
import icon1 from "../assets/about_icon1.png";
import icon2 from "../assets/about_icon2.png";
import icon3 from "../assets/about_icon3.png";
import chef from "../assets/chef_banner.png";
import chef2 from "../assets/chef1.png";
import item1 from "../assets/food_item1.png";
import item2 from "../assets/food_item2.png";
import item3 from "../assets/food_item3.png";

function AboutUs() {
  const navigate = useNavigate();

  function goToMenu() {
    navigate("/menu");
  }

  return (
    <section id="about">
    <div className="container-fluid p-0">
      <div className="container">
        <div className="row text-start py-5">
          <div className="col-12 col-md-6">
            <Typography
              variant="h4"
              component="div"
              style={{ fontFamily: '"Average", serif', color: "#59A252" }}
            >
              About Us
            </Typography>
            <Typography
              variant="p"
              component="div"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Welcome to Premier Plates, where culinary excellence meets
              exceptional service. We create unforgettable dining experiences
              for any occasion with diverse menus tailored to your tastes. Our
              chefs use the finest ingredients to blend traditional and
              contemporary flavors, offering everything from elegant hors
              d'oeuvres to sumptuous main courses and decadent desserts. With
              outstanding service from our professional staff, you can relax and
              enjoy your event. Whether you crave Turkish cuisine, Italian
              elegance, or innovative fusion dishes, we have you covered.
            </Typography>
          </div>
          <div className="col-12 col-md-6 pt-3">
            <div className="row">
              <div className="col-12 col-sm-6">
                <div className="icon-card py-3">
                  <div className="row">
                    <div className="col-6 text-end">
                      <img src={icon1} alt="experience" />
                    </div>
                    <div className="col-6">
                      <div className="d-flex flex-column">
                        <Typography
                          variant="h4"
                          component="div"
                          style={{ fontWeight: 600 }}
                        >
                          10+
                        </Typography>
                        <Typography variant="h6">Experience</Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 ">
                <div className="icon-card py-3">
                  <div className="row">
                    <div className="col-6 text-end">
                      <img src={icon2} alt="experience" />
                    </div>
                    <div className="col-6">
                      <div className="d-flex flex-column">
                        <Typography
                          variant="h4"
                          component="div"
                          style={{ fontWeight: 600 }}
                        >
                          50+
                        </Typography>
                        <Typography variant="h6">Employees</Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 ">
                <div className="icon-card py-3">
                  <div className="row">
                    <div className="col-6 text-end">
                      <img src={icon3} alt="experience" />
                    </div>
                    <div className="col-6">
                      <div className="d-flex flex-column">
                        <Typography
                          variant="h4"
                          component="div"
                          style={{ fontWeight: 600 }}
                        >
                          44
                        </Typography>
                        <Typography variant="h6">Completed work</Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="chef-banner" src={chef} alt="cooking chef image" />

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6 text-start">
            <div
              className="d-flex w-100 h-100"
              style={{ alignItems: "center" }}
            >
              <div className="container py-5">
                <Typography
                  variant="h4"
                  component="div"
                  style={{
                    fontFamily: '"Average", serif',
                    color: "#59A252",
                    marginBottom: "20px",
                  }}
                >
                  What we Offer ?
                </Typography>
                <Typography variant="p" component="div">
                  At Premier Plates, we create personalized menus for weddings,
                  corporate events, and private parties, featuring Turkish,
                  Italian, and fusion cuisines. Our services include
                  full-service catering, drop-off catering, and professional
                  staffing to ensure seamless events. We offer elegant hors
                  d'oeuvres, sumptuous main courses, decadent desserts, and a
                  wide selection of beverages. Contact us to make your event
                  extraordinary with our exceptional food and outstanding
                  service.
                </Typography>
                <button
                  onClick={goToMenu}
                  type="button"
                  className="btn rounded-pill mt-4"
                  style={{
                    backgroundColor: "#59A252",
                    color: "#FFFFFF",
                  }}
                >
                  Go to Menu
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 p-0">
            <img
              src={chef2}
              alt="chef making food"
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-wrap px-4 py-5 column-gap-5 row-gap-3" style={{alignItems:"center",justifyContent:"center",backgroundColor:'#FFFFFF'}}>
            <div className="card" style={{width:"19rem",minHeight:'500px'}}>
              <img src={item1} className="card-img-top" alt="Turkish Cuisine" />
              <div className="card-body text-start">
              <h4 className="card-title" style={{fontFamily:'"Inter", sans-serif'}}>Turkish Cuisine</h4>
                <p className="card-text" style={{fontFamily:'"Inter", sans-serif',fontSize:"1rem"}}>
                Turkish cuisine is a vibrant fusion of Central Asian, Middle Eastern, Mediterranean, and Balkan influences, featuring dishes like kebabs, mezes, and baklava. It emphasizes the use of fresh herbs, spices, and a variety of meats and vegetables.
                </p>
              </div>
            </div>
            <div className="card" style={{width:"19rem",minHeight:'500px'}}>
              <img src={item2} className="card-img-top" alt="Italian Cuisine" />
              <div className="card-body text-start">
              <h4 className="card-title" style={{fontFamily:'"Inter", sans-serif'}}>Italian Cuisine</h4>
                <p className="card-text" style={{fontFamily:'"Inter", sans-serif',fontSize:"1rem"}}>
                Italian cuisine is renowned for its emphasis on simplicity and high-quality ingredients, with iconic dishes such as pasta, pizza, and risotto. It highlights the use of fresh tomatoes, olive oil, cheese, and aromatic herbs.
                </p>
              </div>
            </div>
            <div className="card" style={{width:"19rem",minHeight:'500px'}}>
              <img src={item3} className="card-img-top" alt="Mixed Cuisine" />
              <div className="card-body text-start">
              <h4 className="card-title" style={{fontFamily:'"Inter", sans-serif'}}>Mixed Cuisine</h4>
                <p className="card-text" style={{fontFamily:'"Inter", sans-serif',fontSize:"1rem"}}>
                Mixed cuisine, or fusion cuisine, creatively blends elements from different culinary traditions to craft unique and innovative dishes. It reflects the global nature of modern cooking, combining flavors and techniques from various cultures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default AboutUs;
