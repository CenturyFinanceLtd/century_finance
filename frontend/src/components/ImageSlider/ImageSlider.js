import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample image imports — replace with your own
import img1 from '../../images/slider/banner-image1.png';
import img2 from '../../images/slider/banner-image1.png';
import img3 from '../../images/slider/banner-image1.png';

const images = [img1, img2, img3];

const ImageSlider = () => {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="image-slider-container" style={{ maxWidth: '100%', overflow: 'hidden' }}>
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div key={index}>
                        <img src={img} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto' }} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;
