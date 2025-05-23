import React from "react";
// Link component is not used in this version
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Your specific banner image imports
import desktopBanner1 from "../../images/d1.png"; // Desktop image 1
import desktopBanner2 from "../../images/d2.png"; // Desktop image 2
import mobileBanner1 from "../../images/m1.png"; // Mobile image 1
import mobileBanner2 from "../../images/m2.png"; // Mobile image 2

// Define the main banners array.
const allBanners = [
  {
    id: "desktop-slide-1",
    type: "desktop",
    imageUrl: desktopBanner1,
    altText: "Desktop Banner 1",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSe0W0Pj4uAVfQLDJqiR9QPdJMlqVYwWSyFpSWEWlh3mVGIPGA/viewform?usp=header", // Replace with actual link
  },
  {
    id: "desktop-slide-2",
    type: "desktop",
    imageUrl: desktopBanner2,
    altText: "Desktop Banner 2",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSe0W0Pj4uAVfQLDJqiR9QPdJMlqVYwWSyFpSWEWlh3mVGIPGA/viewform?usp=header",
  },
  {
    id: "mobile-slide-1",
    type: "mobile",
    imageUrl: mobileBanner1,
    altText: "Mobile Banner 1",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSe0W0Pj4uAVfQLDJqiR9QPdJMlqVYwWSyFpSWEWlh3mVGIPGA/viewform?usp=header",
  },
  {
    id: "mobile-slide-2",
    type: "mobile",
    imageUrl: mobileBanner2,
    altText: "Mobile Banner 2",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSe0W0Pj4uAVfQLDJqiR9QPdJMlqVYwWSyFpSWEWlh3mVGIPGA/viewform?usp=header",
  },
];

// Filter banners for desktop and mobile views
const desktopBanners = allBanners.filter((banner) => banner.type === "desktop");
const mobileBanners = allBanners.filter((banner) => banner.type === "mobile");

const Hero = () => {
  // Common slider settings for both desktop and mobile carousels
  const heroSliderSettings = {
    dots: true,
    arrows: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3500,
    fade: true,
    cssEase: "linear",
    pauseOnHover: false,
    infinite: true,
  };

  // Helper function to render the content of a single slide (just the image)
  // This avoids repetition in the JSX for desktop and mobile sliders
  const renderSlide = (banner) => (
    <div key={banner.id} className="slide-item">
      <div className="hero-image-container">
        <a href={banner.link} target="_blank" rel="noopener noreferrer">
          <img
            src={banner.imageUrl}
            alt={banner.altText}
            className="hero-banner-image"
          />
        </a>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Slider Section */}
      {/* This entire section will be shown/hidden by CSS based on screen size */}
      {desktopBanners.length > 0 && ( // Only render if there are desktop banners
        <section className="hero-slider-section desktop-slider-container">
          <Slider {...heroSliderSettings} key="desktop-slider">
            {" "}
            {/* Added key for potential re-renders */}
            {desktopBanners.map((banner) => renderSlide(banner))}
          </Slider>
        </section>
      )}

      {/* Mobile Slider Section */}
      {/* This entire section will be shown/hidden by CSS based on screen size */}
      {mobileBanners.length > 0 && ( // Only render if there are mobile banners
        <section className="hero-slider-section mobile-slider-container">
          <Slider {...heroSliderSettings} key="mobile-slider">
            {mobileBanners.map((banner) => renderSlide(banner))}
          </Slider>
        </section>
      )}
    </>
  );
};

export default Hero;
