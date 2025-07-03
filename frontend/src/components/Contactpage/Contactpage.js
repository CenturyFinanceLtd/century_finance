import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'


const Contactpage = () => {

    return (
      <section className="wpo-contact-pg-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col col-lg-10 offset-lg-1">
              <div className="office-info">
                <div className="row">
                  <div className="col col-xl-6 col-lg-6 col-md-6 col-12">
                    <div className="office-info-item">
                      <div className="office-info-icon">
                        <div className="icon">
                          <i className="fi flaticon-maps-and-flags"></i>
                        </div>
                      </div>
                      <div className="office-info-text">
                        <h2>Address</h2>
                        <p>
                          Century Finance Limited Office 57/A, 2nd Floor
                          Mahindra Chamber Dr. D N Road Fort, Mumbai 400001
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col col-xl-6 col-lg-6 col-md-6 col-12">
                    <div className="office-info-item">
                      <div className="office-info-icon">
                        <div className="icon">
                          <i className="fi flaticon-email"></i>
                        </div>
                      </div>
                      <div className="office-info-text">
                        <h2>Email Us</h2>
                        <p>
                          <a href="mailto:general-inquiry@centuryfinancelimited.com">
                            general-inquiry@centuryfinancelimited.com
                          </a>
                        </p>
                        <p>
                          <a href="mailto:customerservice@centuryfinancelimited.com">
                            customerservice@centuryfinancelimited.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpo-contact-title">
                <h2>Have Any Question?</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  content of a page when looking.
                </p>
              </div>
              <div className="wpo-contact-form-area">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
        <section className="wpo-contact-map-section">
          <div className="wpo-contact-map">
            <iframe
              title="comtact-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.101630764862!2d77.37119297583713!3d28.62671598434421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5447d350e9f%3A0x4beba507fa3f455b!2sThe%20Iconic%20Corenthum!5e0!3m2!1sen!2sin!4v1746793573339!5m2!1sen!2sin"></iframe>
          </div>
        </section>
      </section>
    );
        
}

export default Contactpage;
