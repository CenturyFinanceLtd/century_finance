import React from 'react';
import PropTypes from 'prop-types';

import { Navigation, Scrollbar, A11y   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './styles.scss'
import img1 from '../../assets/images/slider/slider-1.png'
import img2 from '../../assets/images/slider/slider-2.png'
import img3 from '../../assets/images/slider/slider-3.png'
import img4 from '../../assets/images/slider/slider-9.png'
import img5 from '../../assets/images/slider/slider-10.png'
import img6 from '../../assets/images/slider/slider-11.png'
import Button from '../button/Button';
import Button02 from '../button/Button02';

Banner01.propTypes = {
    data : PropTypes.array,
};

function Banner01(props) {
    const {data} = props;
    
    return (
        <section className="tf-slider">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">

                        <Swiper
                            modules={[Navigation,  Scrollbar, A11y ]}
                            spaceBetween={0}
                            slidesPerView={1}
                            className="slider-home"
                            loop= {true}
                        >
                        {
                            data.slice(0,2).map(idx => (
                                <SwiperSlide key={idx.id}>
                                    <div className="slider-item">
                                        <div className="tf-slider-item">
                                            <div className="content-inner">
                                            
                                                <div className="text-typing">
                                                    <h1 className="heading mb0">WITH</h1>
                                                    <div className="animate-contain">
                                                        <div className="animated-text">
                                                            <span>FINANCE</span>
                                                            <span>STOCKS</span>
                                                            <span>GROWTH</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h1 className="heading">{idx.title} </h1>
                                                <p className="sub-heading">{idx.desc}</p>
                                                <div className="btn-slider ">
                                                    <Button path='#' title='EXPLORE MORE' />
                                                    {/* <Button02 path='/collection' title='' /> */}
                                                    
                                                </div>
                                            </div>

                                            <div className="content-right ">
                                                <div className="content-slide">
                                                
                                                    <div className="image">
                                                        <img src={img1} alt="Century Finance Limited" className="img-slider-1" />
                                                        <img src={img4} alt="Century Finance Limited" className="fadeInClass" />
                                                    </div>
                                                    <div className="image s1">
                                                        <img src={img2} alt="Century Finance Limited" className="img-slider-1" />
                                                        <img src={img5} alt="Century Finance Limited" className="fadeInClass" />
                                                    </div>
                                                    <div className="image s1">
                                                        <img src={img3} alt="Century Finance Limited" className="img-slider-1" />
                                                        <img src={img6} alt="Century Finance Limited" className="fadeInClass" />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                
                            ))
                        }
                    </Swiper>

                        
                    </div>
                    <div className="col-md-12">
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner01;