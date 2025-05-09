import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CoursesCategory from "../../api/CoursesCategory";
import cImag from "../../images/shape/1.svg";
import cImag2 from "../../images/shape/2.svg";
import cImag3 from "../../images/shape/3.svg";
import cImag4 from "../../images/shape/4.svg";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const settings = {
  dots: false,
  arrows: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: "0",
        infinite: true,
        centerMode: false,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};

const CategorySection = (props) => {
  return (
    <section
      className={`wpo-courses-section section-padding ${props.cClass}`}
      style={{ background: "#ffffff", paddingTop: "0" }}>
      <div className="container">
        <div className="row-grid wpo-courses-wrap wpo-courses-slider owl-carousel">
          <Slider {...settings}>
            {CoursesCategory.map((category, aitem) => (
              <div className={`grid s${category.Id}`} key={aitem}>
                <div className="wpo-courses-item">
                  <div className="wpo-courses-text">
                    <div className="courses-icon">
                      <i className="fi flaticon-user-experience"></i>
                    </div>
                    <h2>
                      <Link
                        onClick={ClickHandler}
                        to={`/category-single/${category.slug}`}>
                        {category.title}
                      </Link>
                    </h2>
                    <p>{category.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="shape-1">
        <img src={cImag} alt="" />
      </div>
      <div className="shape-2">
        <img src={cImag2} alt="" />
      </div>
      <div className="shape-3">
        <img src={cImag3} alt="" />
      </div>
      <div className="shape-4">
        <img src={cImag4} alt="" />
      </div>
    </section>
  );
};

export default CategorySection;
