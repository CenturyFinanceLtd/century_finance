import React, { useState } from "react";

const tabData = [
  {
    name: "Dow Jones",
    content: (
      <>
        <h4 className="fw-bold mb-3" style={{ color: "#222" }}>Study the backbone of U.S. stock performance.</h4>
        <p>
          The Dow Jones Industrial Average (DJIA) is one of the most recognized and oldest stock indices in the world. It represents 30 of the largest and most influential publicly traded companies in the United States and serves as a barometer of the U.S. stock market’s health.
        </p>

        <h5 className="mt-4 fw-semibold">Historical Context and Evolution</h5>
        <ul>
          <li><strong> Founded: May:</strong> 26, 1896: .</li>
          <li><strong>Created by:</strong> Charles Dow and Edward Jones.</li>
          <li><strong>Current Components:</strong> 12 industrial companies.</li>
          <li><strong>Initial Components:</strong> 30 blue-chip companies.</li>
          <li><strong>Base Value:</strong>  40.94.</li>
          <li><strong>Index Type:</strong> 12 Price-weighted.</li>
          <li><strong>Maintained by:</strong> S&P Dow Jones Indices, a joint venture of S&P Global</li>
          <li><strong>All-Time High:</strong> (as of May 2025): Over 39,000 points.</li>
        </ul>

        <h5 className="mt-4 fw-semibold">Key Metrics and Statistics</h5>
        <ul>

          <li><strong>Metric:</strong>	Value (approx., May 2025)</li>
          <li><strong>Index Value:</strong>	39,100+ points</li>
          <li><strong>Annualized Return (10 yrs):</strong>	~10.5%</li>
          <li><strong>Average P/E Ratio</strong>	20–22</li>
          <li><strong>Dividend Yield</strong>	~2.0%</li>
          <li><strong>Market Capitalization</strong>		~$10 Trillion+ (combined)</li>
          <li><strong>Update Frequency</strong>		Every 15 seconds during trading</li>
        </ul>

      </>
    ),
  },
  {
    name: "Gift Nifty",
    content: (
      <>
        <h4 className="fw-bold mb-3" style={{ color: "#222" }}></h4>
        <p>
          <strong>Gift Nifty</strong>   – Trade Internationally with India’s Offshore Derivative Product.
        </p>

        <h5 className="mt-4 fw-semibold"> What is Gift Nifty?</h5>
        <ul>
          <li> Gift Nifty is a rebranded version of the SGX Nifty (Singapore Exchange Nifty), now hosted on the GIFT City.</li>
          <li> (Gujarat International Finance Tec-City) under the International Financial Services Centre (IFSC) in India. It.</li>
          <li> represents India’s global face in the derivatives trading ecosystem, allowing international investors to trade Nifty index futures in U.S. dollars outside Indian market hours..</li>
        </ul>

        <h5 className="mt-4 fw-semibold">Key Features of Gift Nifty</h5>
        <ul>
          <li><b>Feature	Description
            Underlying Index</b>	Nifty 50 (National Stock Exchange of India)</li>
          <li><b>Location</b>NSE IFSC at GIFT City, Gandhinagar, Gujarat</li>
          <li><b>Currency Denomination</b>USD (U.S. Dollars)</li>
          <li><b>Trading Hours</b>Nearly 22 hours, including Asian, European, and U.S. market timings</li>
          <li><b>Contract Types</b>Index Futures and Options</li>
          <li><b>Clearing & Settlement</b>Through NSE IFSC Clearing Corporation (NICCL)</li>
          <li><b>Time Zone Advantage</b>	Bridges the gap between U.S. close and Indian market open</li>
        </ul>


      </>
    ),
  },
  {
    name: "Dollar Index (DXY)",
    content: (
      <>
        <h4 className="fw-bold mb-3" style={{ color: "#222" }}> Learn to track U.S. dollar strength and its effect on global trade and commodities.
        </h4>
        <p>
          The <strong>Dollar Index (DXY)</strong>Learn to Track U.S. Dollar Strength and Its Effect on Global Trade and Commodities
        </p>

        <h5 className="mt-4 fw-semibold">What is the Dollar Index (DXY)?</h5>
        <p> The U.S. Dollar Index (DXY) is a real-time, market-driven financial indicator that measures the value of the U.S. dollar relative to a basket of six major global currencies. It reflects the overall international strength of the dollar and acts as a crucial barometer of U.S. economic competitiveness, investor sentiment, and monetary policy impact.The index was introduced in 1973 by the Intercontinental Exchange (ICE) shortly after the collapse of the Bretton Woods Agreement, which had previously pegged major global currencies to the U.S. dollar.</p>

        <h5 className="mt-4 fw-semibold">Composition of the DXY Basket</h5>
        <ul>
          <li>The DXY includes six currencies with weights reflecting their importance in U.S. international trade:</li>
          <li><b>How is the DXY Calculated?</b>The DXY is a geometrically weighted index, calculated using the exchange rates of the U.S. dollar against each of the basket currencies. It is quoted as a number (e.g., 104.30), with a base value of 100 set in March 1973.

            A value above 100 means the U.S. dollar has strengthened compared to its 1973 level; below 100 indicates depreciation.</li>
        </ul>


      </>
    ),
  },
];

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
                  <h2 className="fw-bold mb-2" style={{ color: "#111" }}>USA Markets</h2>
                  <p style={{ color: "#555" }}>
                    Understand how the world’s most powerful financial markets operate and influence global movements.
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

                {/* Content */}
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

export default Usa;