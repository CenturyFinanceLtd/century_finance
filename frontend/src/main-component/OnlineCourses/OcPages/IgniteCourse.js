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
          content="Advance your stock market skills with the Ignite Course by Century Finance. Learn indices, technicals, sectoral analysis and support/resistance strategies with SEBI-certified certification."
        />
        <meta
          name="keywords"
          content="Ignite Course, Stock Market, Century Finance, Indices, Technical Analysis, Support Resistance, SEBI Certified"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />
      <PageTitle pageTitle="Ignite Course" pagesub="Advance Your Market Knowledge" />

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "4rem 1rem",
        }}
      >
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            color: "#1f2937",
          }}
        >
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#e65410" }}>
              Ignite Course
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#4b5563", marginTop: "0.75rem" }}>
              <strong>Advance your skills in indices, global markets, and technical analysis with our SEBI-certified program.</strong>
            </p>
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
              <span><strong>Fee:</strong> ₹3000 + GST</span>
              <span><strong>Duration:</strong> 3 Weeks</span>
              <span><strong>EMIs:</strong> 3 Installments</span>
              <span><strong>Certification:</strong> SEBI-Certified</span>
              <span><strong>Topics:</strong> Index, Global Market, Support & Resistance</span>
            </div>
          </div>

          {/* Program Overview */}
          <div style={{ marginTop: "2rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b" }}>Program Overview</h2>
            <p style={{ color: "#374151", fontSize: "1.05rem", marginTop: "0.75rem" }}>
              The Ignite Course is a comprehensive program designed to equip aspiring traders and finance enthusiasts with a solid foundation in the financial market. It covers Indian and Global Indices, sectoral movement and technical analysis tools, providing real-time insights, practical analysis techniques and simplified explanation of complex financial concepts.
            </p>
          </div>

          {/* Skills */}
          <div style={{ marginTop: "2.5rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b" }}>Skills You Gain</h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                marginTop: "1rem",
                color: "#334155",
                fontSize: "1rem",
              }}
            >
              <span>✅ Equities</span>
              <span>✅ Indices</span>
              <span>✅ Commodities</span>
              <span>✅ Market Trends</span>
              <span>✅ Charting</span>
              <span>✅ Breakouts</span>
              <span>✅ Support & Resistance</span>
            </div>
          </div>

          {/* What You’ll Learn */}
          <div style={{ marginTop: "2.5rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b" }}>What You’ll Learn</h2>
            <ol style={{ marginTop: "1rem", paddingLeft: "1.25rem", color: "#475569", lineHeight: "1.75" }}>
              <li>Index Insights: Bank Nifty, Nifty 50, Midcap, Dow Jones, Dollar Index, CSA & more</li>
              <li>Global Market Overview: India, Europe & US</li>
              <li>Daily Market Summary & Sectoral Analysis (Auto, Pharma, IT, FMCG)</li>
              <li>Support & Resistance: Enhance the foundation of technical analysis</li>
            </ol>
          </div>

          {/* Modules */}
          <div style={{ marginTop: "2.5rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b" }}>Course Modules</h2>

            <div style={{ marginTop: "1.25rem" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#e65410" }}>
                Module 1: Market Indices & Global Insights
              </h3>
              <p style={{ color: "#374151", marginTop: "0.5rem" }}>
                This module offers insight into major Indian and global indices like Nifty 50, Bank Nifty, Dow Jones. Understand how global markets are interconnected and how sector weightage influences index movements. Build a strong foundation in reading market structure and recognizing global market trends effectively.
              </p>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#e65410" }}>
                Module 2: Sectoral Analysis & Daily Market Tracking
              </h3>
              <p style={{ color: "#374151", marginTop: "0.5rem" }}>
                This module helps learners to understand and analyze daily market summaries with ease. It covers sectoral performance across Auto, Pharma, IT, FMCG, and explains how sector movements influence broader indices. It provides practical exposure to how news and events impact market behavior and trends.
              </p>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#e65410" }}>
                Module 3: Technical Foundation - Support & Resistance Mastery
              </h3>
              <p style={{ color: "#374151", marginTop: "0.5rem" }}>
                Get the knowledge of the fundamentals of technical analysis, focusing on identifying and mastering support and resistance zones effectively. Learners will explore how these levels guide market entry and exit decisions. It covers the basics of chart reading along with key indicators that complement support and resistance analysis.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: "3rem",
              backgroundColor: "#fef9c3",
              borderRadius: "12px",
              padding: "2rem",
              textAlign: "center",
              border: "1px solid #fde68a",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#92400e" }}>
              Enroll Now & Accelerate Your Market Journey!
            </h3>
            <p style={{ marginTop: "0.75rem", color: "#78350f" }}>
              Join Century Finance and gain practical, certified financial market knowledge.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default IgniteCourse;
