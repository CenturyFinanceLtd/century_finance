import React, { useState } from "react";


const tabData = [
{
  name: "CSE 40",
  content: (
    <div style={{ color: "#333", fontSize: "1rem", lineHeight: "1.8" }}>
      <h4 className="fw-bold text-danger mb-3">📊 CSE 40 – Central Europe’s Emerging Market Pulse</h4>

      <h5 className="fw-semibold mt-4 mb-2"> What is CSE 40?</h5>
      <p>
        The <strong>CSE 40 (Central European Stock Exchange Index)</strong> is a diversified benchmark that captures
        the performance of 40 leading companies listed across Central European markets — primarily including countries
        like Poland, Hungary, Czech Republic, Austria, and Slovakia. These economies represent a strategic intersection
        of Eastern potential and Western institutional structure, making CSE 40 a powerful indicator of regional
        economic health.
      </p>

      <hr className="my-4" />

      <h5 className="fw-semibold mb-3"> Why CSE 40 Matters</h5>

      <p className="fw-semibold text-dark"> 1. Gateway to Emerging European Markets</p>
      <ul className="ps-3 mb-3">
        <li>Energy & Natural Resources</li>
        <li>Banking & Financial Services</li>
        <li>Automotive & Manufacturing</li>
        <li>Pharmaceuticals & Healthcare</li>
        <li>Telecommunications & Technology</li>
      </ul>

      <p className="fw-semibold text-dark"> 2. Stability with Growth Potential</p>
      <ul className="ps-3 mb-3">
        <li>EU-aligned economies with low volatility</li>
        <li>Suitable for portfolio diversification</li>
        <li>Used for institutional benchmarking</li>
        <li>Strong long-term growth prospects</li>
      </ul>

      <p className="fw-semibold text-dark"> 3. Industrial Backbone of Europe</p>
      <ul className="ps-3 mb-3">
        <li>Key suppliers in global manufacturing chains</li>
        <li>High international demand for exports</li>
        <li>Stable and predictable earnings patterns</li>
      </ul>

      <hr className="my-4" />

      <h5 className="fw-semibold mb-3"> Why Students & Learners Should Know CSE 40</h5>

      <p className="fw-semibold text-dark"> Educational Relevance:</p>
      <ul className="ps-3 mb-3">
        <li>Deepens understanding of regional financial structures</li>
        <li>Highlights inter-European trade and development patterns</li>
      </ul>

      <p className="fw-semibold text-dark"> Practical Skill Building:</p>
      <ul className="ps-3 mb-3">
        <li>Enhances comparative index analysis</li>
        <li>Teaches macroeconomic interpretation and forecasting</li>
        <li>Promotes critical thinking with cross-border data</li>
      </ul>

      <p className="fw-semibold text-dark"> Career Edge:</p>
      <ul className="ps-3 mb-3">
        <li>Valuable for roles in global equity research and portfolio strategy</li>
        <li>Advantageous for investment banking and institutional trading</li>
        <li>Relevant in international economic consulting and analytics</li>
      </ul>

      <hr className="my-4" />

      <h5 className="fw-semibold mb-3"> Key Highlights</h5>
      <div className="table-responsive">
        <table className="table table-bordered table-sm text-start">
          <tbody>
            <tr>
              <th>Region Covered</th>
              <td>Central Europe (Poland, Austria, Hungary, Czech Republic, Slovakia)</td>
            </tr>
            <tr>
              <th>No. of Companies</th>
              <td>40 diversified large and mid-cap companies</td>
            </tr>
            <tr>
              <th>Sectors Dominated</th>
              <td>Energy, Manufacturing, Financials, Tech, Healthcare</td>
            </tr>
            <tr>
              <th>Currency Impact</th>
              <td>Euro & national currencies — trading opportunities arise from fluctuations</td>
            </tr>
            <tr>
              <th>Risk Profile</th>
              <td>Medium – shaped by EU policy & regional political trends</td>
            </tr>
            <tr>
              <th>Investor Appeal</th>
              <td>Strategic mix of value & growth opportunities with regional stability</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="my-4" />

      <h5 className="fw-semibold mb-3"> Why Choose to Follow or Invest in CSE 40?</h5>
      <ul className="ps-3 mb-3">
        <li> <strong>Emerging Potential:</strong> Positioned for tech-integrated expansion</li>
        <li> <strong>Balanced Risk-Return:</strong> Better returns than saturated Western markets</li>
        <li> <strong>Global Connectivity:</strong> Many firms serve as global supply chain hubs</li>
        <li> <strong>Data-Driven Investing:</strong> Ideal for applying investment models and economic theories</li>
      </ul>
    </div>
  ),
},


  {
  name: "FTSE 100",
  content: (
    <div style={{ color: "#333", fontSize: "1rem", lineHeight: "1.8" }}>
      <h4 className="fw-bold text-danger mb-3">📊 FTSE 100 – The Pulse of the UK Economy</h4>

      <h5 className="fw-semibold mt-4 mb-2"> What is FTSE 100?</h5>
      <p>
        The <strong>FTSE 100 (Financial Times Stock Exchange 100 Index)</strong> represents the 100 largest publicly traded companies on the London Stock Exchange (LSE) by market capitalization. Often referred to as the "Footsie", it is the most widely followed indicator of the UK stock market and is recognized globally as a barometer of economic strength, corporate performance, and investor sentiment in the UK.
      </p>

      <hr className="my-4" />

      <h5 className="fw-semibold mb-3"> Why FTSE 100 Matters</h5>

      <p className="fw-semibold text-dark"> 1. Global Influence</p>
      <ul className="ps-3 mb-3">
        <li>Over 70% of FTSE 100 companies' revenue comes from outside the UK.</li>
        <li>It reflects both domestic and global economic conditions.</li>
        <li>Influences trading decisions across Europe, Asia, and North America.</li>
      </ul>

      <p className="fw-semibold text-dark"> 2. Sectoral Breadth</p>
      <ul className="ps-3 mb-3">
        <li>Includes leaders in Energy, Finance, Healthcare, Consumer Goods, and Telecommunications.</li>
        <li>Gives a diversified view of different industries under one index.</li>
      </ul>

      <p className="fw-semibold text-dark"> 3. Benchmark for Funds and Portfolios</p>
      <ul className="ps-3 mb-3">
        <li>Used as a benchmark by fund managers and ETF providers globally.</li>
        <li>Helps gauge performance of mutual funds, pensions, and institutional portfolios.</li>
      </ul>

      <hr className="my-4" />

      <h5 className="fw-semibold mb-3"> Why Students & Learners Should Know FTSE 100</h5>

      <p className="fw-semibold text-dark">Educational Relevance:</p>
      <ul className="ps-3 mb-3">
        <li>Essential for understanding how financial markets work in developed economies.</li>
        <li>Reveals the interconnectedness of global revenue streams and domestic performance.</li>
      </ul>

      <p className="fw-semibold text-dark"> Skill Building:</p>
      <ul className="ps-3 mb-3">
        <li>Improves skills in index tracking, portfolio analysis, and market sentiment interpretation.</li>
        <li>Ideal for learning about equity diversification and risk modeling.</li>
      </ul>

      <p className="fw-semibold text-dark"> Career Value:</p>
      <ul className="ps-3 mb-3">
        <li>Frequently referenced in investment banking, trading, and financial news.</li>
        <li>Crucial for aspiring analysts, fund managers, and global strategists.</li>
      </ul>

      <hr className="my-4" />

      <h5 className="fw-semibold mb-3"> Key Highlights</h5>
      <div className="table-responsive">
        <table className="table table-bordered table-sm text-start">
          <tbody>
            <tr>
              <th>Region Covered</th>
              <td>United Kingdom (UK-based firms with global reach)</td>
            </tr>
            <tr>
              <th>No. of Companies</th>
              <td>100 top publicly listed companies on LSE</td>
            </tr>
            <tr>
              <th>Market Capitalization</th>
              <td>Large-cap dominant index with global earnings exposure</td>
            </tr>
            <tr>
              <th>Sector Exposure</th>
              <td>Energy, Financials, Healthcare, Industrials, Technology</td>
            </tr>
            <tr>
              <th>Global Appeal</th>
              <td>Popular with international investors for stability and income</td>
            </tr>
            <tr>
              <th>Currency Sensitivity</th>
              <td>Strongly influenced by GBP (British Pound) movements</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="my-4" />

      <h5 className="fw-semibold mb-3"> Why Choose to Follow or Invest in FTSE 100?</h5>
      <ul className="ps-3 mb-3">
        <li> <strong>Global Earnings:</strong> Many companies generate most revenues from overseas</li>
        <li> <strong>Stable Dividends:</strong> Known for offering reliable dividend income</li>
        <li> <strong>Market Sentiment:</strong> Moves with global macroeconomic and geopolitical shifts</li>
        <li> <strong>Learning Ground:</strong> Great for building foundational investment knowledge</li>
      </ul>
    </div>
  ),
},

 {
  name: "OMX",
  content: (
    <div style={{ color: "#333", fontSize: "1rem", lineHeight: "1.8" }}>
      <h4 className="fw-bold text-danger mb-3">📊 OMX – Nordic Markets, Global Impact</h4>

      <h5 className="fw-semibold mt-4 mb-2"> What is OMX?</h5>
      <p>
        The <strong>OMX Index Series</strong> represents a group of major stock indices from the Nordic and Baltic regions — including Sweden, Finland, Denmark, and Iceland. Operated under the NASDAQ OMX Group, these indices provide a transparent, well-regulated view of some of Europe’s most innovative and sustainable economies.
      </p>
      <p>
        The most notable among them is the <strong>OMX Stockholm 30 (OMXS30)</strong>, which reflects the performance of Sweden’s 30 most traded companies — a key benchmark for Scandinavian economic health and investor confidence.
      </p>

      <hr className="my-4" />

      <h5 className="fw-semibold mb-3"> Why OMX Matters</h5>

      <p className="fw-semibold text-dark"> 1. Innovation-Driven Economies</p>
      <ul className="ps-3 mb-3">
        <li>Strong representation from technology, green energy, pharmaceuticals, and engineering sectors.</li>
        <li>High global competitiveness and ESG leadership among constituent companies.</li>
      </ul>

      <p className="fw-semibold text-dark"> 2. Sustainable & Ethical Investing</p>
      <ul className="ps-3 mb-3">
        <li>Nordic exchanges are known for high governance standards and climate-conscious operations.</li>
        <li>Attracts institutional investors focused on ESG-compliant portfolios.</li>
      </ul>

      <p className="fw-semibold text-dark"> 3. Currency & Market Stability</p>
      <ul className="ps-3 mb-3">
        <li>Offers stability through strong currencies (like SEK, DKK, EUR).</li>
        <li>Low political risk, high transparency, and digital-first economies.</li>
      </ul>

      <hr className="my-4" />

      <h5 className="fw-semibold mb-3"> Why Students & Learners Should Know OMX</h5>

      <p className="fw-semibold text-dark"> Academic Relevance:</p>
      <ul className="ps-3 mb-3">
        <li>Excellent case study of how innovation powers national economies.</li>
        <li>Highlights regional integration through ethical finance models.</li>
      </ul>

      <p className="fw-semibold text-dark"> Skill-Building Opportunity:</p>
      <ul className="ps-3 mb-3">
        <li>Trains learners in analyzing sustainable business strategies.</li>
        <li>Develops cross-border financial comparison and macroeconomic forecasting skills.</li>
      </ul>

      <p className="fw-semibold text-dark"> Professional Edge:</p>
      <ul className="ps-3 mb-3">
        <li>Essential for ESG analysts, fund advisors, and policy researchers.</li>
        <li>Valuable for careers in clean tech investing and Nordic economic relations.</li>
      </ul>

      <hr className="my-4" />

      <h5 className="fw-semibold mb-3"> Key Highlights</h5>
      <div className="table-responsive">
        <table className="table table-bordered table-sm text-start">
          <tbody>
            <tr>
              <th>Region Covered</th>
              <td>Nordic and Baltic nations (Sweden, Denmark, Finland, Iceland, Baltics)</td>
            </tr>
            <tr>
              <th>Flagship Index</th>
              <td>OMX Stockholm 30 (OMXS30)</td>
            </tr>
            <tr>
              <th>Sector Strength</th>
              <td>Tech, Industrial, Healthcare, Green Energy, Financials</td>
            </tr>
            <tr>
              <th>Market Type</th>
              <td>Mid- to Large-cap with strong liquidity</td>
            </tr>
            <tr>
              <th>Reputation</th>
              <td>High for innovation, ethics, and transparency</td>
            </tr>
            <tr>
              <th>Investor Appeal</th>
              <td>Ideal for ESG-focused investors and innovation-led portfolios</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="my-4" />

      <h5 className="fw-semibold mb-3"> Why Follow or Invest in OMX?</h5>
      <ul className="ps-3 mb-3">
        <li> <strong>Sustainability Leadership:</strong> ESG-ready companies dominate the index</li>
        <li> <strong>Innovation-Focused:</strong> Home to pioneers in AI, clean tech, and biotech</li>
        <li> <strong>Currency Resilience:</strong> Low inflation economies with strong global trade links</li>
        <li> <strong>Balanced Exposure:</strong> Strategic diversification across Nordic strengths</li>
      </ul>
    </div>
  ),
},

 {
  name: "DAX",
  content: (
    <div style={{ color: "#333", fontSize: "1rem", lineHeight: "1.8" }}>
      <h4 className="fw-bold text-danger mb-3">📊 DAX – Germany’s Economic Indicator</h4>

      <h5 className="fw-semibold mt-4 mb-2"> What is DAX?</h5>
      <p>
        The <strong>DAX (Deutscher Aktienindex)</strong> is the flagship stock market index of Germany. It consists of the 40 largest and most liquid companies listed on the Frankfurt Stock Exchange (FSE). These companies span across various sectors including automotive, chemical, banking, healthcare, and manufacturing — making DAX a reliable reflection of the economic health and industrial power of Europe’s largest economy.
      </p>

      <hr className="my-4" />

      <h5 className="fw-semibold mb-3"><strong>Why DAX Matters</strong> </h5>

      <p className="fw-semibold text-dark"><strong>1.Industrial and Economic Powerhouse</strong> </p>
      <ul className="ps-3 mb-3">
        <li>Includes global leaders like Siemens, Volkswagen, Bayer, Allianz, and SAP.</li>
        <li>Germany accounts for over 25% of the Eurozone’s GDP — DAX tracks its pulse.</li>
        <li>Companies listed are central to global supply chains, exports, and innovation.</li>
      </ul>

      <p className="fw-semibold text-dark"><strong> 2. Stability and Investor Trust</strong></p>
      <ul className="ps-3 mb-3">
        <li>Highly regulated and transparent financial ecosystem.</li>
        <li>Known for consistent dividend-paying blue-chip companies.</li>
        <li>Preferred by long-term global and institutional investors.</li>
      </ul>

      <p className="fw-semibold text-dark"> <strong>3. Global Investment Exposure</strong></p>
      <ul className="ps-3 mb-3">
        <li>Attracts global funds, ETFs, and pension schemes.</li>
        <li>Strong correlation with global industrial and economic trends.</li>
        <li>Acts as a benchmark for European performance indices.</li>
      </ul>

      <hr className="my-4" />

      <h4 className="fw-semibold mb-3"><strong> Why Students & Learners Should Know DAX</strong></h4>

      <p className="fw-semibold text-dark"> <strong>1. Academic Value:</strong> </p>
      <ul className="ps-3 mb-3">
        <li>Understanding DAX helps students learn about international trade, export economies, and European monetary policy.</li>
        <li>Case studies on DAX companies are used in global MBA and finance programs.</li>
      </ul>

      <p className="fw-semibold text-dark"><strong> 2. Skill-Building:</strong></p>
      <ul className="ps-3 mb-3">
        <li>Helps in practicing index tracking, trend analysis, and equity evaluation.</li>
        <li>Teaches how macroeconomic factors affect industrial output and investor returns.</li>
      </ul>

      <p className="fw-semibold text-dark"><strong>3. Career Relevance:</strong> </p>
      <ul className="ps-3 mb-3">
        <li>Vital for roles in investment banking, international trade finance, and global strategy consulting.</li>
        <li>Used in hedge funds and economic research related to European markets.</li>
      </ul>

      <hr className="my-4" />

      <h5 className="fw-semibold mb-3"> Key Highlights</h5>
      <div className="table-responsive">
        <table className="table table-bordered table-sm text-start">
          <tbody>
            <tr>
              <th>Region Covered</th>
              <td>Germany – Europe’s largest economy</td>
            </tr>
            <tr>
              <th>No. of Companies</th>
              <td>40 blue-chip companies</td>
            </tr>
            <tr>
              <th>Major Sectors</th>
              <td>Automotive, Chemicals, Financials, Healthcare, Technology</td>
            </tr>
            <tr>
              <th>Index Type</th>
              <td>Price-weighted with performance-based tracking</td>
            </tr>
            <tr>
              <th>Investor Profile</th>
              <td>Ideal for long-term institutional investors and industrial equity portfolios</td>
            </tr>
            <tr>
              <th>Dividend Culture</th>
              <td>Strong payout history with shareholder returns</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="my-4" />

      <h4 className="fw-semibold mb-3"> <strong>Why Follow or Invest in DAX?</strong></h4>
      <ol className="ps-3 mb-3">
        <li> <strong>Industrial Core:</strong> DAX is the heart of Europe’s industrial might</li>
        <li> <strong>Consistent Returns:</strong> Strong dividend-paying companies with global revenue streams</li>
        <li> <strong>Global Recognition:</strong> Used worldwide as a benchmark for European economic health</li>
        <li> <strong>Educational Strength:</strong> Perfect for students and analysts to study real-world financial modeling</li>
      </ol>
    </div>
  ),
},

];

const European = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].name);

  return (
    <section className="section-padding" style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <div className="wpo-about-wrap">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12 col-12">
              <div className="wpo-about-text text-center">
                 <div className="wpo-section-title mb-4">
                  <h2 className="fw-bold mb-2" style={{ color: "#111" }}>Explore India’s Key Market Indices</h2>
                  <p style={{ color: "#555" }}>
                    Navigate through India’s most influential stock indices. Tap each tab to learn about market trends and key benchmarks.
                  </p>
                </div>

              

                {/* Tabs */}
                <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
                  {tabData.map((tab) => (
                    <button
                      key={tab.name}
                      onClick={() => setActiveTab(tab.name)}
                      className={`px-4 py-2 fw-semibold border rounded-pill ${
                        activeTab === tab.name ? "active-tab" : "inactive-tab"
                      }`}
                      style={{
                        borderColor: activeTab === tab.name ? "#E00000" : "#D8D8D8",
                        color: activeTab === tab.name ? "#fff" : "#222",
                        backgroundColor: activeTab === tab.name ? "#E00000" : "#F8F8F8",
                        transition: "0.3s",
                      }}
                    >
                      {tab.name}
                    </button>
                  ))}
                </div>

                {/* Content */}
                <div className="text-start p-4 shadow rounded" style={{ backgroundColor: "#FDFDFD", borderLeft: "5px solid #E00000" }}>
                  <h4 className="fw-bold mb-3" style={{ color: "#222" }}>{activeTab}</h4>
                  <p style={{ color: "#444", lineHeight: "1.6" }}>
                    {tabData.find((tab) => tab.name === activeTab)?.content}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default European;
