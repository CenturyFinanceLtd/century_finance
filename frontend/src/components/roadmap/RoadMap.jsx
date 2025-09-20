import React from 'react';
import PropTypes from 'prop-types';

import { Navigation , Autoplay   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './styles.scss'
import whiteLogo from '../../assets/white-logo.svg'
import blackLogo from '../../assets/black-logo.svg'

RoadMap.propTypes = {
    data: PropTypes.array,
};

function RoadMap(props) {

    const {data} = props;
    return (
        <section className="tf-section section-roadmap3 section-bg-1">
                <div className="container-fluid">
                    <div className="row">
                        <div className="tf-heading mb60 wow fadeInUp">
                            <h2 className="heading">ROAD MAP</h2>
                        </div>
                        <div className="col-md-12 wow fadeInUp">
                            <div className="tf-roadmap">
                            <Swiper
                               
                                breakpoints={{
                                    0: {
                                        spaceBetween:0,
                                        slidesPerView: 1,
                                        },
                                    500: {
                                        spaceBetween:30,
                                        slidesPerView: 2,
                                        },
                                    768: {
                                        spaceBetween:30,
                                        slidesPerView: 3,
                                    },
                                    991: {
                                        spaceBetween:55,
                                        slidesPerView: 4,
                                    },
                                }}
                                centeredSlides={true}
                                loop={true}
                                navigation={true}
                                modules={[Autoplay, Navigation]}
                                className="swiper sl-roadmap"
                            >

                                {
                                    data.map(idx => (
                                        <SwiperSlide key={idx.id}>
                                            <div className="roadmap-box">
                                                <div className="shape-circle">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="176" viewBox="0 0 60 176" fill="none">
                                                        <path opacity="0.7" d="M30 176L30 40" stroke="var(--primary-color13)" strokeWidth="2" strokeDasharray="6 6"/>
                                                        <circle cx="30" cy="30" r="30" fill="#21E786" className="fill-1" fillOpacity="0.2"/>
                                                        <circle cx="30" cy="30" r="15" fill="#21E786" className="fill-2"/>
                                                        </svg>
                                                </div>
                                                <div className="content ">
                                                    <h4 className="title">{idx.title}</h4>
                                                    <ul className="list-infor">
                                                        {
                                                            idx.list.map(idx => (
                                                                <li key={idx.id}>
                                                                    <div className="icon">
                                                                        <img src={blackLogo} alt="Century Finance Limited logo" className="roadmap-logo logo-light" loading="lazy" />
                                                                        <img src={whiteLogo} alt="Century Finance Limited logo" className="roadmap-logo logo-dark" loading="lazy" />
                                                                    </div>
                                                                    {idx.text}
                                                                </li>
                                                            ))
                                                        }
                                                        
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
   

                            </Swiper>

                            </div>
                        </div>
                    </div>
                 </div>
            </section>
    );
}

export default RoadMap;