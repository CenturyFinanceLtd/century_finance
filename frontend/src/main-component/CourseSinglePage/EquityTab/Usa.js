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
           <li>Average P/E Ratio<strong></strong></li>
        </ul>

        <h5 className="mt-4 fw-semibold">Market Significance</h5>
        <ul>
          <li><strong>Trading Volume:</strong> Most liquid index on NSE with active derivatives market.</li>
          <li><strong>Use Case:</strong> Benchmark for mutual funds, index funds, and ETFs.</li>
          <li><strong>Global Attention:</strong> Tracked by foreign portfolio investors (FPIs) and MSCI indices.</li>
        </ul>

        <h5 className="mt-4 fw-semibold">Sectoral Leadership</h5>
        <ul>
          <li><strong>IT & Tech:</strong> Infosys, TCS, Wipro drive export revenues.</li>
          <li><strong>Banking:</strong> HDFC Bank, ICICI Bank anchor financial exposure.</li>
          <li><strong>FMCG:</strong> HUL and Nestle provide defensive growth.</li>
        </ul>


      </>
    ),
  },
  {
    name: "Nifty-50",
    content: (
      <>
        <h4 className="fw-bold mb-3" style={{ color: "#222" }}>Nifty-50: India’s Premier Blue-Chip Index</h4>
        <p>
          The <strong>Nifty-50</strong> is a subset of the broader Indian equity market, acting as a key indicator of large-cap stock performance. With 50 high-performing companies from 14 sectors, it accurately mirrors India’s economic growth and industrial diversification.
        </p>

        <h5 className="mt-4 fw-semibold">Features and Composition</h5>
        <ul>
          <li><strong>Free Float Market Cap:</strong> Ensures real-market exposure by excluding promoter holdings.</li>
          <li><strong>Liquidity:</strong> Stocks with high trading volumes and consistent delivery percentages.</li>
          <li><strong>Sector Weighting:</strong> Banking and IT dominate, followed by FMCG and Oil & Gas.</li>
        </ul>

        <h5 className="mt-4 fw-semibold">Role in Investment Strategy</h5>
        <ul>
          <li>Ideal for ETFs and Index Mutual Funds</li>
          <li>Frequently used in technical and fundamental analysis</li>
          <li>Derivatives: Basis for most traded index options and futures</li>
        </ul>


      </>
    ),
  },
  {
    name: "Bank Nifty",
    content: (
      <>
        <h4 className="fw-bold mb-3" style={{ color: "#222" }}>Bank Nifty: Pulse of Indian Banking</h4>
        <p>
          The <strong>Bank Nifty</strong> index comprises the 12 most liquid and large capitalized banking stocks listed on the NSE. It serves as the key indicator for banking sector health and is one of the most traded derivative products in India.
        </p>

        <h5 className="mt-4 fw-semibold">Constituents and Focus</h5>
        <ul>
          <li><strong>Core Banks:</strong> HDFC Bank, ICICI Bank, Axis Bank, SBI</li>
          <li><strong>Public & Private:</strong> Blended mix offering broad banking exposure</li>
          <li><strong>Loan Growth & NPAs:</strong> Major impact on index value</li>
        </ul>

        <h5 className="mt-4 fw-semibold">Importance in Trading</h5>
        <ul>
          <li>High beta index, ideal for options and intraday trading</li>
          <li>Reflects RBI policy impacts quickly</li>
          <li>Benchmarked by hedge funds and institutional players</li>
        </ul>


      </>
    ),
  },
  {
    name: "Fin Nifty",
    content: (
      <>
        <h4 className="fw-bold mb-3" style={{ color: "#222" }}>Fin Nifty: Beyond Banks</h4>
        <p>
          The <strong>Fin Nifty</strong> Index tracks the performance of diversified financial services firms, including NBFCs, insurance companies, AMCs, and more. It captures financial innovation and fintech growth beyond traditional banking.
        </p>

        <h5 className="mt-4 fw-semibold">Composition Overview</h5>
        <ul>
          <li>Includes HDFC Ltd, Bajaj Finance, LIC Housing Finance</li>
          <li>Focus on consumer credit, life insurance, asset management</li>
          <li>NBFC and fintech contribution rising steadily</li>
        </ul>

        <h5 className="mt-4 fw-semibold">Strategic Role</h5>
        <ul>
          <li>Captures the full financial services landscape</li>
          <li>Useful for thematic investing and sector rotation</li>
          <li>Effective in capturing changing consumption-based financial trends</li>
        </ul>


      </>
    ),
  },
  {
    name: "Midcap",
    content: (
      <>
        <h4 className="fw-bold mb-3" style={{ color: "#222" }}>Midcap Index: Growth with Agility</h4>
        <p>
          The <strong>Midcap Index</strong> includes companies that are not large enough to be blue-chip but too big to be classified as small caps. These companies are typically high-growth businesses in niche sectors or fast-developing segments of the Indian economy.
        </p>

        <h5 className="mt-4 fw-semibold">Profile</h5>
        <ul>
          <li>Nifty Midcap 150 / Midcap 100 are the key indices</li>
          <li>Offer balance of risk and reward</li>
          <li>Higher volatility than large-caps, but often stronger upcycles</li>
        </ul>

        <h5 className="mt-4 fw-semibold">Investment Use</h5>
        <ul>
          <li>Ideal for long-term investors seeking alpha</li>
          <li>Preferred by portfolio managers for sectoral plays</li>
          <li>Momentum-driven, sector-rotation sensitive</li>
        </ul>


      </>
    ),
  },
  {
    name: "Sensex",
    content: (
      <>
        <h4 className="fw-bold mb-3" style={{ color: "#222" }}>Sensex: India’s Oldest Market Barometer</h4>
        <p>
          The <strong>S&P BSE Sensex</strong>, launched in 1986, is the oldest stock market index in India. Comprising 30 of the largest and most actively traded stocks on the Bombay Stock Exchange (BSE), it reflects the country’s overall economic strength and market momentum.
        </p>

        <h5 className="mt-4 fw-semibold">Key Facts</h5>
        <ul>
          <li>Free-float market capitalization based</li>
          <li>Sector-balanced with Finance, IT, Oil & Gas, and Pharma leaders</li>
          <li>Globally followed and forms the core of many global funds</li>
        </ul>

        <h5 className="mt-4 fw-semibold">Market Influence</h5>
        <ul>
          <li>Acts as a headline index for India</li>
          <li>Basis for ETFs and BSE F&O contracts</li>
          <li>Mirrors business cycles and reform sentiments</li>
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