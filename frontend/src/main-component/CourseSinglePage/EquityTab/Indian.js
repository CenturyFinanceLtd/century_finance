import React, { useState } from "react";

const tabData = [
    {
        name: "Nifty",
        content: (
            <>
                <h2 className="fw-bold mb-3" style={{ color: "#222" }}>Overview of the Nifty Index</h2>
                <p>
                    The <strong>Nifty</strong>, shorthand for the NSE’s flagship equity benchmark, represents the broad performance of India’s most actively traded, high-quality companies. It spans a diverse array of sectors—from banking and information technology to energy, consumer goods, and pharmaceuticals—providing investors with a comprehensive gauge of domestic market health. As a free-float, market-capitalization-weighted index, the Nifty dynamically adjusts to changes in corporate structure and investor participation, making it a preferred benchmark for both institutional and retail participants.
                </p>

                <h4 className="mt-4 fw-semibold">Historical Evolution</h4>
                <ul>
                    <li><strong>Early Years:</strong> Post-liberalization reforms and increased foreign interest set the stage for robust early growth, as new capital flowed into privatized and emerging enterprises.</li>
                    <li><strong>Technology Era:</strong> The boom in software exports and digital services in the late 1990s and early 2000s propelled the index’s rise, showcasing India’s emergence as a global IT hub.</li>
                    <li><strong>Global Crisis Response:</strong> Periods of global turbulence—such as the financial crisis of the late 2000s and more recent pandemic-related shocks—tested the market, but timely policy interventions by regulators and the central bank enabled swift recoveries.</li>
                    <li><strong>Modern Expansion:</strong> Broad-based reforms in taxation, infrastructure spending, and corporate governance throughout the 2010s have underpinned the Nifty’s steady ascent, even amid intermittent volatility tied to global policy shifts.</li>
                </ul>

                <h4 className="mt-4 fw-semibold">Composition and Maintenance</h4>
                <ul>
                    <li><strong>Constituent Selection:</strong> Companies must demonstrate strong governance, consistent earnings growth, and sufficient trading volumes to qualify.</li>
                    <li><strong>Sector Balance:</strong> Periodic reviews ensure that the index remains representative of emerging themes while preserving core exposures in financial services, manufacturing, and consumer staples.</li>
                    <li><strong>Review Cycle:</strong> An independent committee meets quarterly to add or remove constituents, based on updated market data and evolving sector dynamics.</li>
                </ul>

                <h4 className="mt-4 fw-semibold">Weighting Methodology</h4>
                <ul>
                    <li><strong>Free-Float Market Capitalization:</strong> Only shares available for public trading are counted, excluding promoter holdings and strategic blocks.</li>
                    <li><strong>Dynamic Rebalancing:</strong> Adjustments for corporate events—stock splits, bonus issues, and rights offerings—maintain continuity and comparability.</li>
                </ul>

                <h4 className="mt-4 fw-semibold">Trading Framework and Market Sessions</h4>
                <ul>
                    <li><strong>Cash Market:</strong> Direct equity trades executed through the NSE’s platform, offering real-time price discovery.</li>
                    <li><strong>Derivatives Market:</strong> Futures and options on the Nifty enable leveraged exposure and risk management.</li>
                    <li><strong>Trading Hours:</strong> Includes Pre-Open Window, Continuous Session, and Post-Close Activities.</li>
                </ul>

                <h4 className="mt-4 fw-semibold">Drivers of Nifty Performance</h4>
                <ul>
                    <li><strong>Monetary Policy:</strong> Decisions by RBI directly influence borrowing costs and investor sentiment.</li>
                    <li><strong>Economic Indicators:</strong> GDP, industrial output, and fiscal announcements guide market trends.</li>
                    <li><strong>Corporate Earnings:</strong> Sectoral shifts are often sparked by earnings reports of key companies.</li>
                    <li><strong>Global Trends:</strong> External policies and commodity cycles impact domestic markets.</li>
                    <li><strong>Foreign Investment:</strong> FPIs’ capital flows cause short-term volatility and longer-term growth.</li>
                    <li><strong>Geopolitical Events:</strong> Major global developments often induce cautious optimism or risk aversion.</li>
                </ul>

                <h4 className="mt-4 fw-semibold">Sectoral Composition</h4>
                <ul>
                    <li><strong>Financial Services:</strong> Banks, NBFCs, and insurers reflecting credit growth and rate cycles.</li>
                    <li><strong>Information Technology:</strong> Software firms tied to global digital demand and currency hedges.</li>
                    <li><strong>Energy and Utilities:</strong> Power and integrated producers capturing infrastructure trends.</li>
                    <li><strong>Consumer Goods:</strong> FMCG and retail companies tracking income and lifestyle changes.</li>
                    <li><strong>Healthcare:</strong> Pharma and diagnostics firms offering defensive and innovative growth.</li>
                </ul>

                <h4 className="mt-4 fw-semibold">Investment Vehicles and Strategies</h4>
                <ul>
                    <li><strong>Passive Approaches:</strong> Index funds, ETFs, and Nifty derivatives for low-cost exposure and hedging.</li>
                    <li><strong>Active Approaches:</strong> Fundamental analysis, sector rotation, and algorithmic strategies.</li>
                </ul>

                <h4 className="mt-4 fw-semibold">Global Context and Correlations</h4>
                <ul>
                    <li><strong>Intermarket Linkages:</strong> U.S., Europe, and Asia indices help forecast or mirror Nifty moves.</li>
                    <li><strong>Currency Dynamics:</strong> INR–USD relationships impact exports, FPIs, and profit margins.</li>
                    <li><strong>Emerging-Market Sentiment:</strong> Global appetite for EM exposure often drives large swings in the Nifty.</li>
                </ul>
            </>
        )
    },
    

    {
        name: "Nifty-50",
        content: (
            <>
                <h2 className="fw-bold mb-3" style={{ color: "#222" }}>Nifty-50: India’s Premier Blue-Chip Index</h2>
                <p>
                    The <strong>Nifty-50</strong> is a subset of the broader Indian equity market, acting as a key indicator of large-cap stock performance. With 50 high-performing companies from 14 sectors, it accurately mirrors India’s economic growth and industrial diversification.
                </p>


                <h4 className="mt-4 fw-semibold">Features and Composition</h4>
                <ul>
                    <li><strong>Free Float Market Cap:</strong> Ensures real-market exposure by excluding promoter holdings.</li>
                    <li><strong>Liquidity:</strong> Stocks with high trading volumes and consistent delivery percentages.</li>
                    <li><strong>Sector Weighting:</strong> Banking and IT dominate, followed by FMCG and Oil & Gas.</li>
                </ul>


                <h4 className="mt-4 fw-semibold">Role in Investment Strategy</h4>
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
                <h3 className="fw-bold mb-3" style={{ color: "#222" }}>Bank Nifty: Pulse of Indian Banking</h3>
                <p>
                    The <strong>Bank Nifty</strong> index comprises the 12 most liquid and large capitalized banking stocks listed on the NSE. It serves as the key indicator for banking sector health and is one of the most traded derivative products in India.
                </p>


                <h4 className="mt-4 fw-semibold">Constituents and Focus</h4>
                <ul>
                    <li><strong>Core Banks:</strong> HDFC Bank, ICICI Bank, Axis Bank, SBI</li>
                    <li><strong>Public & Private:</strong> Blended mix offering broad banking exposure</li>
                    <li><strong>Loan Growth & NPAs:</strong> Major impact on index value</li>
                </ul>


                <h4 className="mt-4 fw-semibold">Importance in Trading</h4>
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
                <h3 className="fw-bold mb-3" style={{ color: "#222" }}>Fin Nifty: Beyond Banks</h3>
                <p>
                    The <strong>Fin Nifty</strong> Index tracks the performance of diversified financial services firms, including NBFCs, insurance companies, AMCs, and more. It captures financial innovation and fintech growth beyond traditional banking.
                </p>


                <h4 className="mt-4 fw-semibold">Composition Overview</h4>
                <ul>
                    <li>Includes HDFC Ltd, Bajaj Finance, LIC Housing Finance</li>
                    <li>Focus on consumer credit, life insurance, asset management</li>
                    <li>NBFC and fintech contribution rising steadily</li>
                </ul>


                <h4 className="mt-4 fw-semibold">Strategic Role</h4>
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
                <h3 className="fw-bold mb-3" style={{ color: "#222" }}>Midcap Index: Growth with Agility</h3>
                <p>
                    The <strong>Midcap Index</strong> includes companies that are not large enough to be blue-chip but too big to be classified as small caps. These companies are typically high-growth businesses in niche sectors or fast-developing segments of the Indian economy.
                </p>


                <h4 className="mt-4 fw-semibold">Profile</h4>
                <ul>
                    <li>Nifty Midcap 150 / Midcap 100 are the key indices</li>
                    <li>Offer balance of risk and reward</li>
                    <li>Higher volatility than large-caps, but often stronger upcycles</li>
                </ul>


                <h4 className="mt-4 fw-semibold">Investment Use</h4>
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
                <h3 className="fw-bold mb-3" style={{ color: "#222" }}>Sensex: India’s Oldest Market Barometer</h3>
                <p>
                    The <strong>S&P BSE Sensex</strong>, launched in 1986, is the oldest stock market index in India. Comprising 30 of the largest and most actively traded stocks on the Bombay Stock Exchange (BSE), it reflects the country’s overall economic strength and market momentum.
                </p>


                <h4 className="mt-4 fw-semibold">Key Facts</h4>
                <ul>
                    <li>Free-float market capitalization based</li>
                    <li>Sector-balanced with Finance, IT, Oil & Gas, and Pharma leaders</li>
                    <li>Globally followed and forms the core of many global funds</li>
                </ul>


                <h4 className="mt-4 fw-semibold">Market Influence</h4>
                <ul>
                    <li>Acts as a headline index for India</li>
                    <li>Basis for ETFs and BSE F&O contracts</li>
                    <li>Mirrors business cycles and reform sentiments</li>
                </ul>




            </>
        ),
    },


    // ... other tab objects unchanged
];

const Indian = () => {
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
                                            className={`px-4 py-2 fw-semibold border rounded-pill ${activeTab === tab.name ? "bg-success text-white border-success" : "bg-light text-dark border-secondary"
                                                }`}
                                            style={{
                                                transition: "0.3s",
                                                boxShadow: activeTab === tab.name ? "0 4px 12px rgba(33,231,134,0.2)" : "none",
                                                backgroundColor: activeTab === tab.name ? "#21E786" : undefined,
                                                borderColor: activeTab === tab.name ? "#21E786" : undefined,
                                            }}
                                        >
                                            {tab.name}
                                        </button>
                                    ))}
                                </div>

                                {/* Content */}
                                <div className="text-start p-4 shadow rounded" style={{ backgroundColor: "#FDFDFD", borderLeft: "5px solid #21E786" }}>
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

export default Indian;
