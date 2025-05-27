import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import sImg1 from "../../images/shape/1.svg";
import sImg2 from "../../images/shape/2.svg";
import sImg3 from "../../images/shape/3.svg";
import sImg4 from "../../images/shape/4.svg";

const EquityMarket = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Equity Market - Century Finance Limited</title>
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
      <PageTitle pageTitle={"Equity Market"} pagesub={"Equity Market"} />
      <section className="wpo-page-title py-5 bg-gradient" style={{ background: "linear-gradient(to right, #e0f7fa, #f1f8e9)" }}>
        <div className="container">
          {/* Title Section */}
          <div className="text-center mb-5">
            <h2 className="fw-bold text-dark display-5">📊 Equity Market</h2>
            <p className="lead text-muted">Navigate the market with expert guidance and real-time updates.</p>
          </div>

          {/* 4 Animated, Clickable Cards */}
          <div className="row g-4">
            <div className="col-lg-6">
              <Link to="" className="text-decoration-none">
                <div className="card card-hover p-4 text-center h-100 shadow-lg border-0 rounded-4">
                  <h4 className="text-primary fw-bold mb-2">📈Indian Market</h4>
                  <p className="text-muted mb-0">Discover top stocks and monitor real-time market data.</p>
                </div>
              </Link>
            </div>
            <div className="col-lg-6">
              <Link to="" className="text-decoration-none">
                <div className="card card-hover p-4 text-center h-100 shadow-lg border-0 rounded-4">
                  <h4 className="text-success fw-bold mb-2">📰USA Market</h4>
                  <p className="text-muted mb-0">Stay updated with daily market movements and analysis.</p>
                </div>
              </Link>
            </div>
            <div className="col-lg-6">
              <Link to="" className="text-decoration-none">
                <div className="card card-hover p-4 text-center h-100 shadow-lg border-0 rounded-4">
                  <h4 className="text-warning fw-bold mb-2">💼 Europian Market</h4>
                  <p className="text-muted mb-0">Choose curated portfolios for long & short term goals.</p>
                </div>
              </Link>
            </div>
            <div className="col-lg-6">
              <Link to="" className="text-decoration-none">
                <div className="card card-hover p-4 text-center h-100 shadow-lg border-0 rounded-4">
                  <h4 className="text-danger fw-bold mb-2">🎯 Asians Market</h4>
                  <p className="text-muted mb-0">Talk to trading advisors for personalized guidance.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative shapes */}
        <div className="shape-1"><img src={sImg1} alt="" /></div>
        <div className="shape-2"><img src={sImg2} alt="" /></div>
        <div className="shape-3"><img src={sImg3} alt="" /></div>
        <div className="shape-4"><img src={sImg4} alt="" /></div>
      </section>
      

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default EquityMarket;