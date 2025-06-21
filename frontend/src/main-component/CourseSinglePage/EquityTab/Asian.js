import React, { useState } from "react";

const tabData = [
  {
    name: "Nikkei",
    content: (
      <>
        <h4 className="fw-bold mb-3" style={{ color: "#222" }}>Overview of the Nikkei 225</h4>
        <p>
          The Nikkei 225 is Japan’s foremost stock market index and a bellwether for the country’s economic health. Composed of 225 leading blue-chip companies listed on the Tokyo Stock Exchange (TSE), the Nikkei provides a comprehensive snapshot of corporate performance across a diverse range of industries—from global technology giants and major automakers to consumer goods producers and financial institutions.
        </p>
        <p>
          As a price-weighted index, movements in higher-priced constituents exert a larger influence on the overall value, making it essential for investors to understand not just market direction, but also the individual stock dynamics driving those changes.
        </p>

        <h5 className="mt-4 fw-semibold">Historical Context and Evolution</h5>
        <ol>
          <li><strong>1950s–1960s:</strong> Rapid industrial expansion saw Japanese exporters gain global market share.</li>
          <li><strong>1970s–1980s:</strong> Tech and real estate booms drove gains, peaking near 39,000 in 1989.</li>
          <li><strong>1990s:</strong> Post-bubble stagnation led to policy-led recovery efforts.</li>
          <li><strong>2000s–Present:</strong> “Abenomics” reforms and globalization supported volatile but positive trends.</li>
        </ol>

        <h5 className="mt-4 fw-semibold">Composition and Calculation Methodology</h5>
        <ul>
          <li><strong>Selection of Constituents:</strong> Reviewed annually for sector balance and liquidity.</li>
          <li><strong>Price Aggregation:</strong> Sum of daily closing prices.</li>
          <li><strong>Divisor Adjustment:</strong> Ensures consistency during splits, mergers, or changes.</li>
          <li><strong>Final Index Value:</strong> Published as the official Nikkei 225 level.</li>
        </ul>
        <p>
          Because higher-priced stocks carry more weight, their moves disproportionately affect the index.
        </p>

        <h5 className="mt-4 fw-semibold">Trading Mechanism and Market Hours</h5>
        <ul>
          <li><strong>Access:</strong> Through electronic order books and brokerage platforms.</li>
          <li><strong>Morning Session:</strong> 9:00 AM – 11:30 AM JST</li>
          <li><strong>Afternoon Session:</strong> 12:30 PM – 3:00 PM JST</li>
        </ul>

        <h5 className="mt-4 fw-semibold">Macro Drivers and Key Influences</h5>
        <ul>
          <li><strong>Monetary Policy:</strong> Bank of Japan’s rates and QE programs.</li>
          <li><strong>Global Economic Climate:</strong> Fed policy, China’s growth, Eurozone factors.</li>
          <li><strong>Currency Movements:</strong> Yen fluctuations directly impact exporter profitability.</li>
          <li><strong>Corporate Earnings:</strong> Reports from auto, tech, and finance leaders shape sentiment.</li>
          <li><strong>Commodity Prices:</strong> Japan’s resource imports affect manufacturing margins.</li>
          <li><strong>Geopolitical Events:</strong> Trade tensions, crises, and regional issues move the index.</li>
        </ul>

        <h5 className="mt-4 fw-semibold">Sectoral Breakdown and Thematic Exposure</h5>
        <ul>
          <li><strong>Technology & Electronics:</strong> Semiconductors, automation, consumer devices.</li>
          <li><strong>Automotive & Transportation:</strong> Export giants, evolving mobility sectors.</li>
          <li><strong>Financial Services:</strong> Banks, insurance, and investment platforms.</li>
          <li><strong>Pharmaceuticals & Healthcare:</strong> Aging population and R&D growth.</li>
          <li><strong>Consumer Goods:</strong> Spanning household products and luxury exports.</li>
        </ul>
      </>
    ),
  },
  {
    name: "Hangseng",
    content: (
      <>
        <h4 className="fw-bold mb-3" style={{ color: "#222" }}>Overview of the Hang Seng Index</h4>
        <p>
          The <strong>Hang Seng Index (HSI)</strong> is Hong Kong’s premier benchmark for market performance, tracking the free-float market capitalization of the largest and most liquid companies listed on the Hong Kong Stock Exchange (HKEX).
        </p>

        <h5 className="mt-4 fw-semibold">Historical Context and Evolution</h5>
        <ol>
          <li><strong>1970s–1980s:</strong> Export and real estate boom pushed the index upward.</li>
          <li><strong>1987 & 1997:</strong> Crashes from global and regional crises hit hard.</li>
          <li><strong>1998–2007:</strong> China’s WTO entry and real estate surge fueled recovery.</li>
          <li><strong>2008–Now:</strong> Resilience from Stock Connect and Chinese tech strength.</li>
        </ol>

        <h5 className="mt-4 fw-semibold">Composition and Calculation Methodology</h5>
        <ol>
          <li><strong>Constituent Selection:</strong>
            <ul>
              <li>Based on market cap, liquidity, and sector balance.</li>
              <li>Quarterly reviews to ensure diversity and stability.</li>
            </ul>
          </li>
          <li><strong>Free-Float Market Capitalization Weighting:</strong>
            <ul>
              <li>Only tradable shares are counted.</li>
              <li>Weight caps prevent over-concentration.</li>
            </ul>
          </li>
          <li><strong>Index Calculation:</strong>
            <ul>
              <li>Free-float market cap ÷ base cap × index base (100).</li>
              <li>Corporate actions adjusted with a divisor mechanism.</li>
            </ul>
          </li>
          <li><strong>Sector Breakdown:</strong>
            <ul>
              <li>Finance, Utilities, Properties & Construction, Commerce & Industry.</li>
            </ul>
          </li>
        </ol>

        <h5 className="mt-4 fw-semibold">Trading Mechanism and Market Hours</h5>
        <ul>
          <li><strong>Order Types:</strong> Market, limit, conditional orders via brokers.</li>
          <li><strong>Sessions:</strong> 9:30 AM–12 PM & 1 PM–4 PM HKT.</li>
          <li><strong>Cross-Border Access:</strong> Stock Connect links with Shanghai and Shenzhen.</li>
        </ul>

        <h5 className="mt-4 fw-semibold">Macro Drivers and Key Influences</h5>
        <ul>
          <li><strong>Monetary Policy:</strong> Peg to USD ties local rates to U.S. Fed policy.</li>
          <li><strong>Chinese Data:</strong> GDP, output, and consumer trends drive H-shares.</li>
          <li><strong>Currency Flows:</strong> Large inflows/outflows impact volatility.</li>
          <li><strong>Earnings & Regulation:</strong> Key sectors respond to reports and policy shifts.</li>
          <li><strong>Global Events:</strong> Trade tensions, safe-haven flows affect market mood.</li>
        </ul>

        <h5 className="mt-4 fw-semibold">Sectoral Exposure and Thematic Opportunities</h5>
        <ol>
          <li><strong>Finance:</strong> Dominated by banks, insurers, securities firms.</li>
          <li><strong>Utilities:</strong> Water, gas, power with steady income.</li>
          <li><strong>Properties & Construction:</strong> Developers serving urbanization demand.</li>
          <li><strong>Commerce & Industry:</strong> Tech, retail, industrial firms shaping the future.</li>
        </ol>

        <h5 className="mt-4 fw-semibold">Investment Strategies and Vehicles</h5>
        <ul>
          <li><strong>Direct Equity:</strong> Active trading on HKEX.</li>
          <li><strong>ETFs & Index Funds:</strong> Broad and affordable market access.</li>
          <li><strong>Derivatives:</strong> Use of futures and options for leverage and hedging.</li>
          <li><strong>Thematic Portfolios:</strong> Tilt toward ESG, fintech, or growth sectors.</li>
        </ul>

        <h5 className="mt-4 fw-semibold">Global Significance</h5>
        <ul>
          <li><strong>Signals Asia Risk:</strong> Often leads emerging market moves.</li>
          <li><strong>Time Advantage:</strong> Bridges Asian and European/US markets.</li>
          <li><strong>China Proxy:</strong> Primary vehicle for international China exposure.</li>
        </ul>
      </>
    ),
  },
];

const Asian = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].name);

  return (
    <section className="section-padding" style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <div className="wpo-about-wrap">
          <div className="text-center mb-4">
            <h2 className="fw-bold" style={{ color: "#111" }}>Explore Asia’s Leading Indices</h2>
            <p style={{ color: "#555" }}>
              Gain strategic insights into Asia’s most influential stock market indices. Switch between Nikkei and Hang Seng to understand their role in global finance.
            </p>
          </div>

          {/* Tabs */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
  {tabData.map((tab) => (
    <button
      key={tab.name}
      onClick={() => setActiveTab(tab.name)}
      className={`px-4 py-2 fw-semibold border rounded-pill ${
        activeTab === tab.name ? "text-white" : "text-dark"
      }`}
      style={{
        transition: "0.3s",
        boxShadow: activeTab === tab.name ? "0 4px 12px rgba(33,231,134,0.2)" : "none",
        backgroundColor: activeTab === tab.name ? "#21E786" : "#D8D8D8",
        borderColor: activeTab === tab.name ? "#21E786" : "#F8F8F8",
      }}
    >
      {tab.name}
    </button>
  ))}
</div>


          {/* Tab Content */}
          <div className="p-4 shadow rounded" style={{ backgroundColor: "#fdfdfd", borderLeft: "5px solid #21E786", color: "#222" }}>
            {tabData.find((tab) => tab.name === activeTab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Asian;
