// src/pages/ErrorPage/ErrorPage.js (or adjust path as needed)
import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom"; // Import Link for internal navigation
import "./ErrorPage.css"; // Import the CSS file

// Ensure 'Arvo' font is loaded (e.g., via public/index.html or global CSS)
// <link href="https://fonts.googleapis.com/css?family=Arvo&display=swap" rel="stylesheet">

const ErrorPage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Error 404 - Century Finance Limited</title>
        <meta
          name="description"
          content="Get in touch with Century Finance Limited for any inquiries or support. We're here to help with your financial needs."
        />
        <meta
          name="keywords"
          content="Contact, Century Finance, Financial Services, Support, Contact Us"
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
    <section className="page_404">
      <div className="container_404">
        {" "}
        {/* Using a more specific class name */}
        <div className="row">
          {" "}
          {/* This class is for structure, assumes Bootstrap or custom styles */}
          <div className="col-sm-12">
            <div className="col-sm-10 col-sm-offset-1 text-center">
              {" "}
              {/* Ensure text-center is defined if not using Bootstrap */}
              <div className="four_zero_four_bg">
                <h1 className="text-center">404</h1>
              </div>
              <div className="contant_box_404">
                <h3 className="h2">
                  {" "}
                  {/* HTML provided h3 with class h2 */}
                  Look like you're lost
                </h3>
                <p>The page you are looking for is not available!</p>
                <Link to="/" className="link_404">
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      </Fragment>
  );
};

export default ErrorPage;
