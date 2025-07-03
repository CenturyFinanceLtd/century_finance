import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../../components/Navbar/Navbar";
import PageTitle from "../../../components/pagetitle/PageTitle";
import Scrollbar from "../../../components/scrollbar/scrollbar";
import Footer from "../../../components/footer/Footer";

const IgniteCourse = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Ignite Course - Century Finance Limited</title>
        <meta
          name="description"
          content="Enroll in the Ignite Course by Century Finance: a 3-week SEBI-certified program covering Indian and global indices, support/resistance, sectoral analysis, and technical foundations."
        />
        <meta
          name="keywords"
          content="Ignite Course, Stock Market Training, Sector Analysis, Technical Analysis, SEBI Certification, Century Finance"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />
      <PageTitle pageTitle="Ignite Course" pagesub="Advance Your Market Knowledge with Global Insight" />

      <section style={{ display: "flex", justifyContent: "center", padding: "4rem 1rem" }}>
        <div style={{ fontFamily: "Inter, sans-serif", color: "#1f2937", maxWidth: "900px" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#e65410" }}>IGNITE COURSE</h1>
            <p style={{ fontSize: "1.125rem", color: "#4b5563", marginTop: "0.75rem" }}>
              <strong>Join with Century Finance Limited</strong>
            </p>

            <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
              <button
                style={{
                  backgroundColor: "#e65410",
                  color: "#fff",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "8px",
                  fontWeight: "600",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => window.location.href = "/pay-now"}
              >
                Pay Now
              </button>
              <button
                style={{
                  backgroundColor: "#1f2937",
                  color: "#fff",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "8px",
                  fontWeight: "600",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => window.location.href = "/book-course"}
              >
                Book Course
              </button>
            </div>

            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "1rem",
                backgroundColor: "#f9fafb",
                padding: "1.5rem 2rem",
                borderRadius: "12px",
                fontSize: "1rem",
                color: "#111827",
              }}
            >
              <span><strong>Fee:</strong> ₹3,000 + GST</span>
              <span><strong>Duration:</strong> 3 Weeks</span>
              <span><strong>Installments:</strong> 3 EMIs</span>
              <span><strong>Certification:</strong> SEBI-Certified</span>
            </div>
          </div>

          <div style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b", marginBottom: "1rem" }}>Program Overview</h2>
            <p style={{ fontSize: "1.05rem", color: "#374151" }}>
              The Ignite Course is a comprehensive program designed to equip aspiring traders and finance enthusiasts with a solid foundation in the financial market. It covers Indian and Global Indices, sectoral movement and technical analysis tools, providing real-time insights, practical analysis techniques and simplified explanation of complex financial concepts.
            </p>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "0.75rem", color: "#1f2937" }}>Skills You Gain</h3>
            <p style={{ color: "#374151", fontSize: "1rem" }}>
              Equities &nbsp;||&nbsp; Indices &nbsp;||&nbsp; Commodities &nbsp;||&nbsp; Market &nbsp;||&nbsp; Charting &nbsp;||&nbsp; Breakouts &nbsp;||&nbsp; Support &nbsp;||&nbsp; Resistance
            </p>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "0.75rem", color: "#1f2937" }}>What You'll Learn</h3>
            <ol style={{ paddingLeft: "1rem", color: "#374151", fontSize: "1rem", lineHeight: "1.75rem" }}>
              <li>Index Insights: Bank Nifty, Nifty 50, Midcap, Dow Jones, Dollar Index, CSA & more</li>
              <li>Global Market Overview: India, Europe & US</li>
              <li>Daily market summary & Sectoral Analysis (Auto, Pharma, IT, FMCG)</li>
              <li>Support & Resistance: Enhance the foundation of the technical analysis</li>
            </ol>
          </div>

          <div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#1f2937", marginBottom: "1rem" }}>Course Modules</h3>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4><strong>Module 1: Market Indices & Global Insights</strong></h4>
              <p>
                This module offers insight into major Indian and global indices like Nifty50, Bank Nifty, Dow Jones. Understand how global markets are interconnected and how sector weightage influences index movements. Build a strong foundation in reading market structure and recognizing global market trends effectively.
              </p>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4><strong>Module 2: Sectoral Analysis & Daily Market Tracking</strong></h4>
              <p>
                This module helps learners to understand and analyze daily market summaries with ease. It covers sectoral performance across Auto, pharma etc., and explains how sector movements influence broader indices. It provides a practical exposure to how news and events impact market behavior and trends.
              </p>
            </div>

            <div>
              <h4><strong>Module 3: Technical Foundation - Support & Resistance Mastery</strong></h4>
              <p>
                Get the knowledge of the fundamentals of technical analysis, focusing on identifying and supporting and resistance zones effectively. Learners will explore how these levels guide market entry and exit decisions. It covers the basics chart reading techniques along with the key indicator that complement support and resistance analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default IgniteCourse;
