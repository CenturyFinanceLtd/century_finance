import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../../components/Navbar/Navbar";
import PageTitle from "../../../components/pagetitle/PageTitle";
import Scrollbar from "../../../components/scrollbar/scrollbar";
import Footer from "../../../components/footer/Footer";

const FoundationCourse = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Foundation Course - Century Finance Limited</title>
        <meta
          name="description"
          content="Join the Foundation Course by Century Finance: A 2-week beginner-friendly program on Indian and global markets. Learn equity basics, international indicators, trading platforms, and more. SEBI-certified."
        />
        <meta
          name="keywords"
          content="Foundation Course, Stock Market Basics, Global Finance, Equity Training, SEBI Certification, Century Finance"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />
      <PageTitle pageTitle="Foundation Course" pagesub="Start Your Financial Journey with Global Perspective" />

      <section style={{ display: "flex", justifyContent: "center", padding: "4rem 1rem" }}>
        <div style={{ fontFamily: "Inter, sans-serif", color: "#1f2937", maxWidth: "900px" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#e65410" }}>FOUNDATION COURSE</h1>
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
              <span><strong>Fee:</strong> ₹1,900 + GST</span>
              <span><strong>Duration:</strong> 2 Weeks</span>
              <span><strong>Level:</strong> Beginner</span>
              <span><strong>Installments:</strong> 2 EMIs</span>
              <span><strong>Certification:</strong> SEBI-Certified</span>
            </div>
          </div>

          <div style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b", marginBottom: "1rem" }}>Program Overview</h2>
            <p style={{ fontSize: "1.05rem", color: "#374151" }}>
              The Foundation Plan is intended to provide students with a simplified, beginner-friendly introduction to the fundamentals of the stock market. The main goal of this program is to assist students in comprehending how financial markets operate both domestically in India and abroad. It offers a concise overview of the main equity indices, the fundamentals of trading and the behavior of the international market. This course establishes the foundation for future investing decisions and further financial learning, making it perfect for students, aspiring traders and anybody new to the stock market.
            </p>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "0.75rem", color: "#1f2937" }}>Skills You Gain</h3>
            <p style={{ color: "#374151", fontSize: "1rem" }}>
              Equity Market &nbsp;||&nbsp; Index &nbsp;||&nbsp; Global Finance &nbsp;||&nbsp; Trading Platform &nbsp;||&nbsp; Market Trends &nbsp;||&nbsp; Securities
            </p>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "0.75rem", color: "#1f2937" }}>What You'll Learn</h3>
            <ol style={{ paddingLeft: "1rem", color: "#374151", fontSize: "1rem", lineHeight: "1.75rem" }}>
              <li>Index function and Market fundamentals</li>
              <li>Interaction between regional and international market</li>
              <li>Relationship indicators and global movements</li>
              <li>Key terms used in international and Indian Stock Markets</li>
            </ol>
          </div>

          <div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#1f2937", marginBottom: "1rem" }}>Course Modules</h3>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4><strong>Module 1: Understanding the Stock Market Basics</strong></h4>
              <p>
                Learn the fundamentals of the stock market, such as the factors that influence price fluctuations. Learn about stocks, indices such as Nifty 50 and Bank Nifty, the distinction between Intraday and delivery trading, how to open and use a demat account. This helps you to navigate the Indian Market while strengthening your foundation in equity expertise.
              </p>
            </div>

            <div>
              <h4><strong>Module 2: Foreign Market Introduction</strong></h4>
              <p>
                Explore the global market - from FTSE 100 to Dow Jones - and how they affect Indian Trading. Learn the fundamentals of trading future and options as well as Dollar Index and Gift Nifty. Learn about the difference between holding and delivery, as well as how the international market affects your portfolio.
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

export default FoundationCourse;
