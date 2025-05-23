import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import CoursesCategory from "../../api/CoursesCategory"; // Your data file
import cImag from "../../images/shape/1.svg";
import cImag2 from "../../images/shape/2.svg";
import cImag3 from "../../images/shape/3.svg";
import cImag4 from "../../images/shape/4.svg";
// Remove 'Link' from 'react-router-dom' if no longer used elsewhere for this specific functionality
// import { Link } from "react-router-dom";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const Investment = (props) => {
  return (
    <Fragment>
      <Helmet>
        <title>Investment - Century Finance Limited</title>
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

      <Navbar />
      <PageTitle pageTitle={"Investment"} pagesub={"Investment"} />
      <section
        className={`wpo-courses-section-s2 section-padding ${props.cClass}`}>
        <div className="container">
          <div className="row wpo-courses-wrap">
            {CoursesCategory.map((category, aitem) => (
              <div
                className={`col-lg-4 col-md-6 col-12 grid s${category.Id}`}
                key={aitem} // It's generally better to use category.Id for keys if they are unique
              >
                <div className="wpo-courses-item">
                  <div className="wpo-courses-text">
                    <div className="courses-icon">
                      {/* You can use category.thumb here if it's meant for the class */}
                      <i className={`fi ${category.thumb}`}></i>
                    </div>
                    <h2>
                      {/* Changed Link to a tag for download */}
                      <a
                        onClick={ClickHandler} // This will scroll the page before download starts
                        href={category.slug} // Path to your PDF in the public folder
                        download // This attribute triggers the download
                        // Optionally, suggest a filename: download={`${category.title.replace(/\s+/g, '_')}.pdf`}
                      >
                        {category.title}
                      </a>
                    </h2>

                    <h4 style={{}}>
                      {/* Changed Link to a tag for download */}
                      <a
                        style={{ color: "#000000" }}
                        onClick={ClickHandler} // This will scroll the page before download starts
                        href={category.slug2} // Path to your PDF in the public folder
                        download // This attribute triggers the download
                        // Optionally, suggest a filename: download={`${category.title.replace(/\s+/g, '_')}.pdf`}
                      >
                        Download Here
                      </a>
                    </h4>
                    {/* Ensure your CoursesCategory data has a description property */}
                    {/* <p>{category.description}</p> */}
                    {/* If description is commented out in your data, this will show nothing. */}
                    {/* You can uncomment it in CoursesCategory.js if needed. */}
                  </div>
                </div>
              </div>
            ))}
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

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default Investment;
