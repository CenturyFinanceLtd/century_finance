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
        <title>Foundaion Course - Century Finance Limited</title>
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
      <PageTitle pageTitle={"Foundaion Course"} pagesub={"Foundaion Course"} />
      <div
        style={{
          maxWidth: "1200px",
          margin: "2rem auto",
          padding: "2rem",
          background: "#f9fafb",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        }}>
        <h2
          style={{
            color: "#e65410",
            fontWeight: "700",
            fontSize: "2rem",
            marginBottom: "1rem",
          }}>
          🪙 Gold Petal – Micro Gold Futures for Retail Participation
        </h2>

        <h4 style={{ fontSize: "1.4rem", marginBottom: "15px" }}>
          📘 What is Gold Petal?
        </h4>
        <p>
          Gold Petal is a micro gold futures contract launched on the Multi
          Commodity Exchange (MCX). It allows retail investors to trade in gold
          in extremely small quantities—making it one of the most accessible and
          affordable bullion derivative contracts in India. It’s perfect for
          investors with limited capital who want to gain exposure to gold.
        </p>

        <h4 style={{ fontSize: "1.4rem", marginTop: "25px" }}>
          🌟 Key Highlights
        </h4>
        <ul style={{ marginLeft: "1rem", lineHeight: "1.8" }}>
          <li>
            <strong>Symbol:</strong> GOLDPETAL
          </li>
          <li>
            <strong>Exchange:</strong> MCX (Multi Commodity Exchange of India)
          </li>
          <li>
            <strong>Lot Size:</strong> 1 gram
          </li>
          <li>
            <strong>Tick Size:</strong> ₹0.10
          </li>
          <li>
            <strong>Contract Value:</strong> ~₹6,000 (varies with market price)
          </li>
          <li>
            <strong>Settlement:</strong> Physical Delivery (available in select
            cities)
          </li>
          <li>
            <strong>Trading Hours:</strong> 9:00 AM – 11:30 PM (Monday to
            Friday)
          </li>
          <li>
            <strong>Delivery Center:</strong> Ahmedabad and other MCX vaults
          </li>
        </ul>

        <h4 style={{ fontSize: "1.4rem", marginTop: "25px" }}>
          💡 Benefits of Trading Gold Petal
        </h4>
        <ul style={{ marginLeft: "1rem", lineHeight: "1.8" }}>
          <li>
            <strong>Low Capital Requirement:</strong> Allows small investors to
            enter gold futures trading.
          </li>
          <li>
            <strong>Physical Delivery Option:</strong> Investors can receive 1
            gram gold in demat form.
          </li>
          <li>
            <strong>Portfolio Diversification:</strong> Great for building
            precious metal exposure gradually.
          </li>
          <li>
            <strong>Learning Platform:</strong> Ideal for new traders to
            understand futures trading safely.
          </li>
          <li>
            <strong>High Liquidity:</strong> Actively traded with tight spreads.
          </li>
          <li>
            <strong>Safe-Haven Access:</strong> Retail route to hedge against
            inflation with gold.
          </li>
        </ul>

        <h4 style={{ fontSize: "1.4rem", marginTop: "25px" }}>
          📊 Common Use Cases
        </h4>
        <ol style={{ marginLeft: "1rem", lineHeight: "1.8" }}>
          <li>
            <strong>Micro Hedging:</strong> Small investors hedge physical gold
            exposure.
          </li>
          <li>
            <strong>Retail Trading:</strong> New traders get hands-on with
            futures trading at minimal risk.
          </li>
          <li>
            <strong>Gifting & Delivery:</strong> Take delivery of 1g gold for
            gifting or saving.
          </li>
          <li>
            <strong>Wealth Building:</strong> Systematic micro-investing in gold
            over time.
          </li>
        </ol>

        <h4 style={{ fontSize: "1.4rem", marginTop: "25px" }}>
          ⚠️ Important Considerations
        </h4>
        <ul style={{ marginLeft: "1rem", lineHeight: "1.8", color: "#b91c1c" }}>
          <li>Check expiry and plan exit to avoid unplanned delivery.</li>
          <li>Delivery options may be limited by city.</li>
          <li>
            Gold Petal prices are influenced by global gold rates and forex
            movement.
          </li>
          <li>Liquidity may reduce during non-peak trading hours.</li>
        </ul>

        <h4 style={{ fontSize: "1.4rem", marginTop: "25px" }}>
          🧭 Strategic Role in Indian Commodity Markets
        </h4>
        <ul style={{ marginLeft: "1rem", lineHeight: "1.8" }}>
          <li>
            <strong>Financial Inclusion:</strong> Makes gold trading accessible
            to everyone.
          </li>
          <li>
            <strong>Digital Transition:</strong> Promotes demat-based gold
            accumulation in India.
          </li>
          <li>
            <strong>Risk Management:</strong> Helps reduce exposure in volatile
            financial climates.
          </li>
        </ul>
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default FoundaionCourse;
