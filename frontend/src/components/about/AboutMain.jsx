import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

AboutMain.propTypes = {
    data: PropTypes.object,
};

function AboutMain(props) {
    const { data } = props;

    return (
        <section className="tf-section tf-about-main">
            <div className="tf-container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="experience-badge wow fadeInUp">
                                <span className="experience-number">{data.experience}</span>
                                <span className="experience-text">{data.experienceText}</span>
                            </div>
                            
                            <div className="tf-heading wow fadeInUp" data-wow-delay="0.1s">
                                <h2 className="heading">{data.heading}</h2>
                                <h3 className="sub-heading">{data.subHeading}</h3>
                                <p className="description">{data.description}</p>
                            </div>

                            <div className="content-paragraphs">
                                {data.content.map((paragraph, index) => (
                                    <p key={index} className="content-text wow fadeInUp" data-wow-delay={`${0.2 + index * 0.1}s`}>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            <div className="stats-wrap wow fadeInUp" data-wow-delay="0.5s">
                                {data.stats.map((stat, index) => (
                                    <div key={index} className="stat-item">
                                        <span className="stat-number">{stat.number}</span>
                                        <span className="stat-label">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 col-md-12">
                        <div className="about-images wow fadeInRight" data-wow-delay="0.3s">
                            <div className="image-group">
                                <div className="main-image">
                                    <img src="/assets/images/about/about-main.jpg" alt="Century Finance Team" />
                                </div>
                                <div className="secondary-image">
                                    <img src="/assets/images/about/about-secondary.jpg" alt="Trading Analytics" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMain;