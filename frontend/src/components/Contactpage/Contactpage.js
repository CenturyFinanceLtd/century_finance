import React from "react";
import ContactForm from "../ContactFrom/ContactForm";

const Contactpage = () => {
  return (
    <section className="wpo-contact-pg-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-lg-10 offset-lg-1">
            <div
              className="address-card-container"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px",
                marginTop: "40px",
              }}>
              {/* Address 1 */}
              <div className="card" style={cardStyle}>
                <h3 style={titleStyle}>Address 1</h3>
                <div className="map-container" style={mapContainerStyle}>
                  <iframe
                    title="map-1"
                    src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE_FOR_ADDRESS_1"
                    style={iframeStyle}
                    allowFullScreen
                    loading="lazy"></iframe>
                </div>
                <button
                  style={buttonStyle}
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/search/?api=1&query=123+Main+St,+City,+State,+12345",
                      "_blank"
                    )
                  }>
                  Open in Google Maps
                </button>
                <p style={textStyle}>123 Main St, City, State, 12345</p>
                <p style={textStyle}>
                  Mobile:{" "}
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noreferrer">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      alt="WhatsApp"
                      style={iconStyle}
                    />
                  </a>
                </p>
              </div>

              {/* Address 2 */}
              <div className="card" style={cardStyle}>
                <h3 style={titleStyle}>Address 2</h3>
                <div className="map-container" style={mapContainerStyle}>
                  <iframe
                    title="map-2"
                    src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE_FOR_ADDRESS_2"
                    style={iframeStyle}
                    allowFullScreen
                    loading="lazy"></iframe>
                </div>
                <button
                  style={buttonStyle}
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/search/?api=1&query=456+Elm+St,+City,+State,+67890",
                      "_blank"
                    )
                  }>
                  Open in Google Maps
                </button>
                <p style={textStyle}>456 Elm St, City, State, 67890</p>
                <p style={textStyle}>
                  Mobile:{" "}
                  <a
                    href="https://wa.me/0987654321"
                    target="_blank"
                    rel="noreferrer">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      alt="WhatsApp"
                      style={iconStyle}
                    />
                  </a>
                </p>
              </div>

              {/* Address 3 */}
              <div className="card" style={cardStyle}>
                <h3 style={titleStyle}>Address 3</h3>
                <div className="map-container" style={mapContainerStyle}>
                  <iframe
                    title="map-3"
                    src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE_FOR_ADDRESS_3"
                    style={iframeStyle}
                    allowFullScreen
                    loading="lazy"></iframe>
                </div>
                <button
                  style={buttonStyle}
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/search/?api=1&query=789+Oak+St,+City,+State,+11223",
                      "_blank"
                    )
                  }>
                  Open in Google Maps
                </button>
                <p style={textStyle}>789 Oak St, City, State, 11223</p>
                <p style={textStyle}>
                  Mobile:{" "}
                  <a
                    href="https://wa.me/1122334455"
                    target="_blank"
                    rel="noreferrer">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      alt="WhatsApp"
                      style={iconStyle}
                    />
                  </a>
                </p>
              </div>

              {/* Address 4 */}
              <div className="card" style={cardStyle}>
                <h3 style={titleStyle}>Address 4</h3>
                <div className="map-container" style={mapContainerStyle}>
                  <iframe
                    title="map-4"
                    src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE_FOR_ADDRESS_4"
                    style={iframeStyle}
                    allowFullScreen
                    loading="lazy"></iframe>
                </div>
                <button
                  style={buttonStyle}
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/search/?api=1&query=321+Pine+St,+City,+State,+44556",
                      "_blank"
                    )
                  }>
                  Open in Google Maps
                </button>
                <p style={textStyle}>321 Pine St, City, State, 44556</p>
                <p style={textStyle}>
                  Mobile:{" "}
                  <a
                    href="https://wa.me/919872393401"
                    target="_blank"
                    rel="noreferrer">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      alt="WhatsApp"
                      style={iconStyle}
                    />
                  </a>
                </p>
              </div>
            </div>

            <div>
              <div className="wpo-contact-title" style={{ marginTop: "50px" }}>
                <h2>Have Any Question?</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page.
                </p>
              </div>

              <div className="wpo-contact-form-area">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Styles
const cardStyle = {
  backgroundColor: "#fff",
  borderRadius: "10px",
  padding: "20px",
  width: "320px",
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
  border: "1px solid #e0e0e0",
  transition: "transform 0.3s",
};

const mapContainerStyle = {
  height: "150px",
  borderRadius: "8px",
  overflow: "hidden",
  marginBottom: "15px",
};

const iframeStyle = {
  border: 0,
  width: "100%",
  height: "100%",
};

const buttonStyle = {
  backgroundColor: "#007BFF",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  padding: "10px 15px",
  cursor: "pointer",
  fontSize: "14px",
  display: "block",
  margin: "0 auto 10px",
};

const textStyle = {
  textAlign: "center",
  color: "#555",
};

const titleStyle = {
  textAlign: "center",
  color: "#333",
};

const iconStyle = {
  width: "20px",
  verticalAlign: "middle",
  marginLeft: "5px",
};

export default Contactpage;
