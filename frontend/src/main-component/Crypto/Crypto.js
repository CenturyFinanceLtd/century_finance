// import React, { Fragment } from "react";
// import { Helmet } from "react-helmet";
// import Navbar from "../../components/Navbar/Navbar";
// import PageTitle from "../../components/pagetitle/PageTitle";
// import Scrollbar from "../../components/scrollbar/scrollbar";
// import Footer from "../../components/footer/Footer";
// const Crypto = () => {
//   return (
//     <Fragment>
//       <Helmet>
//         <title>Crypto - Century Finance Limited</title>
//         <meta
//           name="description"
//           content="Get in touch with Century Finance Limited for any inquiries or support. We're here to help with your financial needs."
//         />
//         <meta
//           name="keywords"
//           content="Contact, Century Finance, Financial Services, Support, Contact Us"
//         />
//         <meta name="robots" content="noindex, nofollow" />
//       </Helmet>

//       <Navbar />
//       <PageTitle pageTitle={"Foreign Market"} pagesub={"Foreign Market"} />


//       <Footer />
//       <Scrollbar />
//     </Fragment>
//   );
// };
// export default Crypto;
import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";

// --- Tab Content ---
const tabData = [
  {
    name: " Foreign Exchange Market",
    content: (
      <>
        <h4 className="fw-bold mb-3" style={{ color: "#222" }}>Purpose: Trade of national currencies</h4>
        <p>
          <b> Volume:</b> ~$7.5 trillion/day (as of 2024)...
        </p>
        <p>
          <b>Key Players:</b>  Central banks, commercial banks, hedge funds, corporations, retail traders...
        </p>
        <p>
          <b>Pairs:</b>Major (EUR/USD, USD/JPY), Minor, Exotic.
        </p>
        <p>
          <b>Participants Influencing Market-:</b>Banks (e.g., Citi, JPMorgan) , major liquidity providers Central banks , affect liquidity during interventions Hedge funds / proprietary traders , can cause sudden demand/supply shifts Corporates , large transactions for trade/hedging Retail traders,small,scale influence, but volume adds up via brokers
        </p>
        <p>
          <b>Factors Affecting FX Market-:</b> Time of day-Highest during London/NY overlap. Currency pair-:Majors (EUR/USD) have more depth Economic news releases-:Can thin out the book temporarily
        </p>
      </>
    ),
  },
  {
    name: "International Stock Markets",
    content: (
      <>
        <h4 className="fw-bold mb-3" style={{ color: "#222" }}>Companies from one country list shares in another.
        </h4>
        <h5 className="mt-4 fw-semibold">Major examples:</h5>
        <ul>
          <li>ADRs (American Depository Receipts),</li>
          <li>London Stock Exchange,.</li>
          <li>Hong Kong Stock Exchange..</li>
        </ul>
        <h4 className="fw-bold mb-3" style={{ color: "#222" }}>Market Trends & Influencing Factors.
        </h4>
        <h5 className="mt-4 fw-semibold">Trade Tensions: U.S. President Donald Trump's recent tariff announcements have led to significant:</h5>
        <ul>
          <li>market volatility. The delay of a 50% tariff on the European Union provided temporary relief, but uncertainty remains high</li>
          <li>Asian Markets: Asian indices showed resilience, with Japan's Nikkei 225 and Hong Kong's Hang Seng leading gains, while Australia's S&P/ASX 200 faced declines.</li>
          <li>European Markets: European indices like the DAX and FTSE 100 are showing positive movement, reflecting investor optimism despite global challenges.</li>
        </ul>
        <h4 className="fw-bold mb-3" style={{ color: "#222" }}>Global Stock Market Overview.
        </h4>
        <h5 className="mt-4 fw-semibold"></h5>
        <ul>
          <li>🇺🇸 United States-: S&P 500 (SPY): Currently at $592.71, up 0.55%
            Dow Jones Industrial Average (DIA): Currently at $423.71, up 0.21%
            Nasdaq 100 (QQQ): Currently at $523.21, up 0.79%</li>
          <li>🇩🇪 Germany-:DAX: Currently at 23,344.54, up 1.12%.</li>
          <li>🇬🇧 United Kingdom-:FTSE 100: Currently at 8,596.35, up 1.17%.</li>
          <li>🇯🇵 Japan-: Nikkei 225: Currently at 37,503.33, up 1.56%.</li>
          <li>🇮🇳 India-:Nifty 50: Currently at 24,461.15, up 0.47% .</li>
        </ul>
      </>
    ),
  },
  {
    name: "Global Bond Markets",
    content: (
      <>
        <h4 className="fw-bold mb-3" style={{ color: "#222" }}>Includes sovereign bonds, foreign corporate bonds, and Eurobonds (issued in a currency not native to the issuer's country)..</h4>
        <p>Important for debt financing in international trade....</p>
         <h4 className="fw-bold mb-3" style={{ color: "#222" }}>What are Global Bond Markets?</h4>
        <p>Global bond markets are financial markets where debt securities (bonds) issued by governments, corporations, and other entities from around the world are bought and sold. These markets provide a platform for raising capital, investment opportunities, and risk management.</p>
         <h4 className="fw-bold mb-3" style={{ color: "#222" }}>Trends and Issues</h4>
        <p>Low Interest Rate Environment: Many developed markets have experienced historically low yields, Quantitative Easing: Central banks’ bond-buying programs affect prices and yields,Globalization: Cross-border investment in bonds has increased.

.</p>
      </>

    ),
  },
  // {
  //   name: "Commodity Markets",
  //   content: (
  //     <>
  //       <h4 className="fw-bold mb-3" style={{ color: "#222" }}>Traded globally: crude oil, gold, agricultural goods...</h4>
  //       <p>Exchanges like NYMEX, LME, and ICE are key players....</p>
  //     </>

  //   ),
  // },
  {
    name: " Derivatives Markets",
    content: (
      <>
        <h4 className="fw-bold mb-3" style={{ color: "#222" }}>Instruments: Futures, options, swaps.
          ...</h4>
        <p>Important for debt financing in international trade....</p>
        <p>Purpose: Hedging against currency, interest rate, or price risks....</p>
        <p>Popular platforms: CME Group, Euronext, and Eurex
          ....</p>
           <h4 className="fw-bold mb-3" style={{ color: "#222" }}> What Are Derivatives?.
          ...</h4>
        <p>Stocks, Bonds, Commodities (e.g., oil, gold),Currencies.</p>
        <p>Interest rates, Indexes.</p>
        <p>Derivatives are contracts that derive their value from an underlying asset such as
          ....</p>
           <h4 className="fw-bold mb-3" style={{ color: "#222" }}>Uses of Derivatives.
          ...</h4>
        <p>Hedging: Protecting against price fluctuations (e.g., airlines hedging fuel costs).</p>
        <p>Speculation: Profiting from price movements.</p>
        <p>Arbitrage: Exploiting price differences across markets
          ....</p>
      </>

    ),
  },
  {
    name: "  Regulation  & Oversight",
    content: (
      <>
        <h4 className="fw-bold mb-3" style={{ color: "#222" }}>No central exchange for forex; decentralized and OTC (over-the-counter)
          ...</h4>
        <p>Regulated regionally:</p>
        <p>U.S.: SEC, CFTC</p>
        <p>U.K.: FCA
        </p>
        <p>EU: ESMA</p>
        <p>India: SEBI, RBI (for foreign currency control)</p>
      </>

    ),
  },
];

// --- USA Markets Section ---
const Usa = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].name);

  return (
    <section className="wpo-about-section-s2 section-padding" style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <div className="wpo-about-wrap">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12 col-12">
              <div className="wpo-about-text text-center">
                <div className="wpo-section-title mb-4">
                  <h2 className="fw-bold mb-2" style={{ color: "#111" }}>Explore Foreign Markets Indices</h2>
                  <p style={{ color: "#555" }}>
                    The Foreign Market refers to the global network of financial markets where international assets such as stocks, bonds, currencies, and derivatives are traded. It facilitates cross-border investment.
                  </p>
                </div>

                {/* Tabs */}
                <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
                  {tabData.map((tab) => (
                    <button
                      key={tab.name}
                      onClick={() => setActiveTab(tab.name)}
                      className={`px-4 py-2 fw-semibold border rounded-pill ${activeTab === tab.name
                        ? "bg-danger text-white border-danger"
                        : "bg-light text-dark border-secondary"
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

                {/* Tab Content */}
                <div className="text-start p-4 shadow rounded" style={{ backgroundColor: "#FDFDFD", borderLeft: "5px solid #E00000" }}>
                  {tabData.find((tab) => tab.name === activeTab)?.content}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
// --- Main Crypto Page ---
const Crypto = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Crypto - Century Finance Limited</title>
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
      <PageTitle pageTitle="Foreign Market" pagesub="Foreign Market" />
      <Usa />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default Crypto;
