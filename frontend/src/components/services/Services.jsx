import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

Services.propTypes = {
    data: PropTypes.array,
};

function Services(props) {
    const { data } = props;

    const [dataBlock] = useState({
        heading: 'What We Offer',
        desc: 'Century Finance Limited provides complete financial services including expert-led training, market advice, investment strategies, and adjustable loan plans to help you gain confidence in finance.'
    });

    return (
        <section className="tf-section tf-about">
            <div className="tf-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tf-heading wow fadeInUp">
                            <h2 className="heading">{dataBlock.heading}</h2>
                            <p className="sub-heading">{dataBlock.desc}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {data.map(service => (
                        <div key={service.id} className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="tf-step wow fadeInUp" data-wow-delay="0.2s">
                                <div className="step-title">
                                    <div className="sub-number">
                                        0{service.id}
                                    </div>
                                    <h3>{service.title}</h3>
                                </div>
                                <p>{service.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;