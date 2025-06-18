import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../../components/Navbar/Navbar";
import PageTitle from "../../../components/pagetitle/PageTitle";
import Scrollbar from "../../../components/scrollbar/scrollbar";
import Footer from "../../../components/footer/Footer";

const FoundaionCourse = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Foundation Course - Century Finance Limited</title>
        <meta
          name="description"
          content="Master the basics of equity and global markets with Century Finance's beginner-friendly Foundation Course. Learn from professionals and earn a SEBI-certified certification."
        />
        <meta
          name="keywords"
          content="Stock Market Course, Equity, Global Market, Century Finance, Trading Course, SEBI Certification"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />
      <PageTitle pageTitle="Foundation Course" pagesub="Learn the Market from the Ground Up" />

      {/* Main Container */}
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
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#e65410" }}> Foundation Course</h1>
            <p style={{ fontSize: "1.125rem", color: "#4b5563", marginTop: "0.75rem" }}>
              <strong>Master the basics of equity and global markets with our SEBI-certified beginner course.</strong>
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
              <span><strong>Fee:</strong> ₹1900 + GST</span>
              <span><strong>Duration:</strong> 2 Weeks</span>
              <span><strong>Level:</strong> Beginner</span>
              <span><strong>EMIs:</strong> 2 Installments</span>
              <span><strong>Certification:</strong> SEBI-Certified</span>
              <span><strong>Topics:</strong> Equity, Global Markets, European Trends</span>
            </div>
          </div>

          {/* Program Overview */}
          <div style={{ marginTop: "2rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b" }}> Program Overview</h2>
            <p style={{ color: "#374151", fontSize: "1.05rem", marginTop: "0.75rem" }}>
              The Foundation Plan is intended to provide students with a simplified, beginner-friendly introduction to the fundamentals of the stock market. The main goal of this program is to assist students in comprehending how financial markets operate both domestically in India and abroad. It offers a concise overview of the main equity indices, the fundamentals of trading and the behavior of the international market. This course establishes the foundation for future investing decisions and further financial learning, making it perfect for students, aspiring traders and anybody new to the stock market.

            </p>
          </div>

          {/* Skills */}
          <div style={{ marginTop: "2.5rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b" }}> Skills You Gain</h2>
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
              <span>✅ Equity Market</span>
              <span>✅ Index Analysis</span>
              <span>✅ Global Finance</span>
              <span>✅ Trading Platforms</span>
              <span>✅ Market Trends</span>
              <span>✅ Securities</span>
            </div>
          </div>

          {/* What You'll Learn */}
          <div style={{ marginTop: "2.5rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b" }}> What You’ll Learn</h2>
            <ol style={{ marginTop: "1rem", paddingLeft: "1.25rem", color: "#475569", lineHeight: "1.75" }}>
              <li> index works and market fundamentals</li>
              <li>Interaction between regional and international market</li>
              <li>Relationship indicators and global movements</li>
              <li>Key terms used in international and Indian Stock Markets </li>
            </ol>
          </div>

          {/* Modules */}
          <div style={{ marginTop: "2.5rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b" }}> Course Modules</h2>

            <div style={{ marginTop: "1.25rem" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#e65410" }}>
                Module 1: Understanding Stock Market Basics
              </h3>
              <p style={{ color: "#374151", marginTop: "0.5rem" }}>
                Learn the fundamentals of the stock market, such as the factors that influence price fluctuations. Learn about stocks, indices  such as Nifty 50 and Bank Nifty, the distinction between Intraday and  delivery trading, how to open and use a demat account. This helps you to navigate the Indian Market while strengthening your foundation in equity expertise.

              </p>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#e65410" }}>
                Module 2: Introduction to Foreign Markets
              </h3>
              <p style={{ color: "#374151", marginTop: "0.5rem" }}>
                Explore the global market - from FTSE 100 to Dow Jones - and how they affect Indian Trading. Learn the fundamentals of trading future and options as well as Dollar Index and Gift Nifty. Learn about the difference between holding and delivery, as well as how the international market affects your portfolio.

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
               Enroll Now & Begin Your Financial Journey!
            </h3>
            <p style={{ marginTop: "0.75rem", color: "#78350f" }}>
              Learn from experienced professionals at Century Finance. Build your future with confidence.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default FoundaionCourse;
