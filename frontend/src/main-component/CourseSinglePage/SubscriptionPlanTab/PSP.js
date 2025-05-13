import React from "react";
import abimg from "../../../images/about/basic.png"; // Assuming this path is correct for your project
import shape from "../../../images/about/shape.png"; // Assuming this path is correct for your project
import { Link } from "react-router-dom";

const ClickHandler = () => {
  window.scrollTo(10, 0); // Scrolls near the top of the page on click
};

const BasicPlan = (props) => {
  return (
    <section className="wpo-about-section-s2 section-padding">
      <div className="container">
        <div className="wpo-about-wrap">
          <div className="row align-items-center">
            {/* Image Column - Structure and image sources remain unchanged */}
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-img">
                <img src={abimg} alt="Premium Market Access Plan Visual" />
                <div className="back-shape">
                  <img src={shape} alt="Decorative Background Shape" />
                </div>
              </div>
            </div>

            {/* Text Content Column - Content replaced here */}
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-text">
                <div className="wpo-section-title">
                  <small>Premium Subscription Plan</small>
                  <h2>💼 Premium Market Access Plan</h2>
                </div>
                <p>
                  <strong>Price:</strong> ₹17,000/- <br />
                  <strong>Duration:</strong> 30 Days <br />
                  <strong>Total Calls:</strong> Included 45 Calls<br />
                  <strong>Coverage:</strong> Equity • Commodity • Foreign Market
                </p>

                <h4>📘 Detailed Plan Description</h4>
                <p>
                  The Premium Market Access Plan is built for serious traders
                  and investors who demand broad market exposure, consistent
                  accuracy, and real-time execution. It’s a full-spectrum
                  subscription offering meticulously researched trade calls
                  across Indian equities, global commodities, and emerging
                  digital assets.
                </p>
                <p>
                  This plan combines technical analysis, fundamental insights,
                  and real-time market tracking to deliver 45 actionable calls. Whether you’re focused on intraday, swing, or
                  positional trading, this plan empowers you with strategic
                  guidance across the financial landscape.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="mt-4">Full Asset Coverage</h4>
            <h5>🔹 Equity & Index Segment (NSE/BSE)</h5>
            <ul>
              <li>Nifty 50 – India's benchmark index for blue-chip stocks.</li>
              <li>
                Bank Nifty – High-volatility banking index, great for intraday
                trades.
              </li>
              <li>Fin Nifty – Focused on financial services companies.</li>
              <li>
                Midcap Nifty – Mid-sized companies offering growth potential.
              </li>
              <li>
                Sensex – BSE's top 30 companies, a legacy trading benchmark.
              </li>
            </ul>
            <strong>What you get:</strong>
            <ul>
              <li>Index option strategies</li>
              <li>Momentum-based stock picks</li>
              <li>Sector rotation insights</li>
            </ul>
            <h5>🛢 Commodity Market Segment (MCX Focused)</h5>
            <ul>
              <li>Gold & Silver – Precious metals for trend-based swings.</li>
              <li>Crude Oil – Global commodity known for high volatility.</li>
              <li>Natural Gas – Energy asset with seasonal patterns.</li>
              <li>
                Copper, Aluminium, Zinc – Industrial metals, ideal for both
                short and long-term setups.
              </li>
            </ul>
            <strong>What you get:</strong>
            <ul>
              <li>International trend correlation</li>
              <li>Inventory reports analysis</li>
              <li>Commodity cycle-based entries</li>
            </ul>

            <h5>🌍 Global & Crypto Markets</h5>
            <ul>
              <li>Bitcoin (BTC) – Market leader in digital currency space.</li>
              <li>
                Ethereum (ETH) – Smart contract platform and ecosystem base.
              </li>
              <li>Solana (SOL) – High-performance blockchain project.</li>
              <li>
                Particle Network – A new-generation Web3 infrastructure token
                focusing on cross-chain compatibility.
              </li>
            </ul>
            <strong>What you get:</strong>
            <ul>
              <li>Blockchain fundamentals + technical triggers</li>
              <li>Web3, DeFi & NFT trends</li>
              <li>
                Entry & exit levels based on volatility and breakout models
              </li>
            </ul>

            <h4>🛠 Core Features of the Plan</h4>
            <ul>
              <li>
                <strong>Calls per Month:</strong> 45 Handpicked opportunities
                across segments
              </li>
              <li>
                <strong>Duration:</strong> 30 Calendar Days
              </li>
              <li>
                <strong>Trade Types:</strong> Intraday, Positional, Swing
              </li>
              <li>
                <strong>Medium:</strong> Telegram / WhatsApp
              </li>
              <li>
                <strong>Language:</strong> Easy-to-understand format with visual
                charts (on request)
              </li>
              <li>
                <strong>Support:</strong> Dedicated market hours response
                support
              </li>
              <li>
                <strong>Accuracy Goal:</strong> 80–90% Target Hit Ratio
                (historical average)*
              </li>
              <li>
                <strong>Risk Management:</strong> Stop-loss levels included with
                every trade
              </li>
              <li>
                <strong>Market Timings:</strong> Trades align with Indian and
                global market sessions
              </li>
            </ul>

            <h4>🔐 Additional Benefits</h4>
            <ul>
              <li>
                ✅ Priority Trade Alerts – Early access to high-conviction ideas
              </li>
              <li>
                ✅ Market Trend Reports – Weekly summaries of trends & zones
              </li>
              <li>
                ✅ Education Add-ons – Brief insights into trade logic
                (optional)
              </li>
              <li>
                ✅ Flexible Risk Profiling – Guidance based on
                conservative/aggressive preferences
              </li>
            </ul>

            <h4>🧠 Who is This For?</h4>
            <ul>
              <li>Retail traders looking for well-guided, low-risk entries</li>
              <li>Active investors needing broad asset exposure</li>
              <li>Busy professionals who want ready-to-use signals</li>
              <li>
                Crypto-curious traders who want quality insights beyond the hype
              </li>
            </ul>

            <h4>📦 What Makes This Plan Unique?</h4>
            <ul>
              <li>
                Multi-Asset Coverage — From Indian stock market to
                cryptocurrencies
              </li>
              <li>No Guesswork — Every call is backed by data & rationale</li>
              <li>
                Non-Repetitive Trades — No recycled tips; every trade is new and
                relevant
              </li>
              <li>
                Real-Time Execution — Receive alerts before market move, not
                after
              </li>
            </ul>

            <Link
              onClick={ClickHandler}
              to="/about" // Link destination remains unchanged as requested
              className="theme-btn-s2">
              Explore Plan Details {/* Updated link text to be more relevant */}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicPlan;
