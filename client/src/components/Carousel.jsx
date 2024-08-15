import React from "react";
// import Carousel_image1 from ' ';
// import Carousel_image2 from '../assets/Carousel_image2.webp';
// import Carousel_image3 from '../assets/Carousel_image3.jpg';
import "../css/carousel.css";

const Carousel_image1 =
  "https://img.freepik.com/free-photo/banquet-table-with-snacks_144627-18361.jpg?size=626&ext=jpg";
const Carousel_image2 =
  "https://img.freepik.com/premium-photo/man-is-holding-plate-food-is-surrounded-by-other-people_984420-18464.jpg?size=626&ext=jpg";
const Carousel_image3 =
  "https://img.freepik.com/premium-photo/chef-preparing-food-large-industrial-kitchen-group-chefs-large-industrial-kitchen_924727-38290.jpg?size=626&ext=jpg";

function Carousel() {
  return (
    <div>
      <div id="carouselExampleDark" class="carousel carousel-dark slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={Carousel_image1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={Carousel_image2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={Carousel_image3} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
