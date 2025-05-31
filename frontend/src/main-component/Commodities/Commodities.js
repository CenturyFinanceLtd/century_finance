import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";

const tabData = [
  { name: "Gold" },
  { name: "Silver" },
  { name: "Mini Silver" },
  { name: "Mini Gold" },
  { name: "Methen Oil" },
  { name: "Crude Oil" },
  { name: "Copper" },
  { name: "Natural Gas" },
  { name: "Gold Petal" },
];

const Commodities = () => {
  const [activeTab, setActiveTab] = useState("Gold");

  return (
    <Fragment>
      <Helmet>
        <title>Commodities - Century Finance Limited</title>
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
      <PageTitle pageTitle={"Commodities"} pagesub={"Commodities"} />

      <section className="section-padding" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <div className="wpo-about-wrap">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-md-12 col-12">
                <div className="wpo-about-text text-center">
                  <div className="wpo-section-title mb-4">
                    <h2 className="fw-bold mb-2" style={{ color: "#111" }}>
                      Explore Key Commodity Contracts
                    </h2>
                    <p style={{ color: "#555" }}>
                      Tap on each commodity tab to understand lot sizes, trading hours, and market benefits.
                    </p>
                  </div>

                  {/* Tabs */}
                  <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
                    {tabData.map((tab) => (
                      <button
                        key={tab.name}
                        onClick={() => setActiveTab(tab.name)}
                        className={`px-4 py-2 fw-semibold border rounded-pill ${activeTab === tab.name ? "bg-danger text-white border-danger" : "bg-light text-dark border-secondary"
                          }`}
                        style={{
                          transition: "0.3s",
                          boxShadow: activeTab === tab.name ? "0 4px 12px rgba(224,0,0,0.2)" : "none",
                        }}
                      >
                        {tab.name}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content Area */}
                  <div
                    className="text-start p-4 shadow rounded"
                    style={{
                      backgroundColor: "#FDFDFD",
                      borderLeft: "5px solid #E00000",
                      minHeight: "300px",
                    }}
                  >
                    <h4 className="fw-bold mb-3" style={{ color: "#e65410" }}>
                      {activeTab} Overview
                    </h4>
                    <p>
                      Content for <strong>{activeTab}</strong> will be displayed here. You can replace this block
                      with detailed contract specifications, trading rules, or analysis as needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default Commodities;
