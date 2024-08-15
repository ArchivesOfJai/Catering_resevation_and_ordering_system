import React from "react";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "react-responsive";
import { Typography } from "@mui/material";
import image1 from "../assets/event_image1.png";
import image2 from "../assets/event_image2.png";
import image3 from "../assets/event_image3.png";

function Recent() {
  const isSmallWindow = useMediaQuery({ query: `(max-width: 767px)` });

  const navigate = useNavigate();

  function goToMenu() {
    navigate("/menu");
  }

  return (
    <section id="events">
    <div className="container-fluid">
      <div className="container">
        <Typography
          variant="h3"
          component="div"
          sx={{
            color: "#59A252",
            fontFamily: '"Average", serif',
            marginY: "40px",
          }}
        >
          Our Recent Event
        </Typography>
        <div className="row">
          <div className="col-12 col-md-6 text-start ">
            <div className="conatiner" style={{ width: "70%" }}>
              <h4 style={{ fontFamily: '"Inter", sans-serif' }}>
                Nancy's Wedding
              </h4>
              <p style={{ fontFamily: '"Inter", sans-serif' }}>
                Nancy wanted a rustic-themed wedding with Italian cuisine
                featuring locally sourced, organic ingredients. We crafted a
                multi-course menu highlighting seasonal vegetables, free-range
                meats, artisanal breads, and homemade desserts for their
                memorable celebration.
              </p>
              <div
                className="d-flex column-gap-4 mb-5"
                style={{ fontSize: "0.9rem" }}
              >
                <span
                  style={{
                    textDecoration: "underline",
                    cursor: "default",
                    fontFamily: '"Inter", sans-serif',
                  }}
                >
                  Royal Palace
                </span>
                <span
                  style={{
                    textDecoration: "underline",
                    cursor: "default",
                    fontFamily: '"Inter", sans-serif',
                  }}
                >
                  Italian Cuisine
                </span>
                <span
                  style={{
                    textDecoration: "underline",
                    cursor: "default",
                    fontFamily: '"Inter", sans-serif',
                  }}
                >
                  200 guests
                </span>
                <span
                  style={{
                    textDecoration: "underline",
                    cursor: "default",
                    fontFamily: '"Inter", sans-serif',
                  }}
                >
                  50 staff
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 text-center">
            <div className="text-start ms-auto " style={{ width: "70%" }}>
              <h4 style={{ fontFamily: '"Inter", sans-serif' }}>
                Nancy's Wedding
              </h4>
              <p style={{ fontFamily: '"Inter", sans-serif' }}>
                Nancy wanted a rustic-themed wedding with Italian cuisine
                featuring locally sourced, organic ingredients. We crafted a
                multi-course menu highlighting seasonal vegetables, free-range
                meats, artisanal breads, and homemade desserts for their
                memorable celebration.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row row-gap-3 py-5"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="col-12 col-md-6 col-lg-4">
          <div
            className="mx-auto rounded"
            style={{ width: "300px", height: "300px", overflow: "hidden" }}
          >
            <img src={image1} alt="event image " />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div
            className="mx-auto rounded"
            style={{ width: "300px", height: "300px", overflow: "hidden" }}
          >
            <img src={image2} alt="event image " />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div
            className="mx-auto rounded"
            style={{ width: "300px", height: "300px", overflow: "hidden" }}
          >
            <img src={image3} alt="event image " />
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="text-center mx-auto py-5" style={{width:"75%"}}>
          <Typography
            variant="h4"
            component="div"
            sx={{ color: "#59A252", fontFamily: '"Average", serif' }}
          >
            Delight Your Senses with Every Bite - Unforgettable Catering for
            Every Occasion
          </Typography>
          <button
            onClick={goToMenu}
            type="button"
            className="btn rounded-pill mt-5"
            style={{ backgroundColor: "#59A252", color: "#ffffff" }}
          >
            Start Planning
          </button>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Recent;
