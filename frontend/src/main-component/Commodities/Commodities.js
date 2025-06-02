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
                        className={`px-4 py-2 fw-semibold border rounded-pill ${
                          activeTab === tab.name
                            ? "bg-danger text-white border-danger"
                            : "bg-light text-dark border-secondary"
                        }`}
                        style={{
                          transition: "0.3s",
                          boxShadow:
                            activeTab === tab.name
                              ? "0 4px 12px rgba(224,0,0,0.2)"
                              : "none",
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
                    {activeTab === "Gold" ? (
                      <div className="bg-white border-4 border-red-500 rounded-3xl shadow-xl p-8 md:p-12 max-w-5xl mx-auto my-12 transition-transform hover:scale-[1.02]">
                        <div className="text-center mb-6">
                          <h2 className="text-3xl font-extrabold text-red-600 mb-2">Why Invest in Gold?</h2>
                          <p className="text-gray-700 text-base max-w-2xl mx-auto leading-relaxed">
                            Gold has stood the test of time as a reliable asset for wealth preservation. In modern portfolio strategies, it acts as a hedge against inflation, market volatility, and currency depreciation.
                          </p>
                        </div>

                        <ul className="list-disc pl-6 space-y-3 text-gray-800 text-sm max-w-2xl mx-auto mb-8">
                          <li><strong>🌍 Global Store of Value:</strong> Gold is universally accepted and trusted—immune to local economic instability.</li>
                          <li><strong>💸 Inflation Hedge:</strong> Gold retains purchasing power even as fiat currency weakens.</li>
                          <li><strong>📉 Market Crash Protection:</strong> Often performs well when stock markets decline—great for diversification.</li>
                          <li><strong>💰 Portfolio Balancer:</strong> Non-correlated to equities, offering stability in high-volatility times.</li>
                          <li><strong>🪙 Easy to Liquidate:</strong> Gold ETFs and sovereign gold bonds offer exit flexibility without heavy loss.</li>
                        </ul>

                        <div className="bg-gray-50 border-l-4 border-red-400 p-6 rounded-xl shadow-inner mb-8">
                          <h3 className="text-lg font-bold text-red-600 mb-3">Why Enroll With Century Finance?</h3>
                          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                            <li>✅ Strategic Gold Allocation based on your risk profile</li>
                            <li>✅ Access to SGBs, Digital Gold & ETFs under expert guidance</li>
                            <li>✅ Transparent cost structure—no hidden charges</li>
                            <li>✅ Monthly performance reports & rebalancing insights</li>
                            <li>✅ RBI & SEBI-compliant advisory framework</li>
                          </ul>
                        </div>

                        <div className="bg-gradient-to-r from-red-50 via-white to-red-50 p-6 rounded-2xl shadow-md border border-red-200">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Important Highlights 📌</h4>
                          <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1">
                            <li>Gold allocation is recommended at 5-15% of total assets</li>
                            <li>Works as a safe asset during geopolitical tensions</li>
                            <li>Digital gold now available in small denominations (as low as ₹100)</li>
                            <li>Tax advantages available under Sovereign Gold Bonds (8-year lock-in)</li>
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <>
                        <h4 className="fw-bold mb-3" style={{ color: "#e65410" }}>
                          {activeTab} Overview
                        </h4>
                        <p>
                          Content for <strong>{activeTab}</strong> will be displayed here. You can replace this block with detailed contract specifications, trading rules, or analysis as needed.
                        </p>
                      </>
                    )}
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
