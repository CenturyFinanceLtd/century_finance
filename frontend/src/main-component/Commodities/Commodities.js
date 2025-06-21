import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";

const tabData = [
  { name: "Gold" },
  { name: "Silver" },
  { name: "Mini Silver" },
  { name: "Mini Gold" },
  { name: "Methen Oil" },
  { name: "Crude Oil" },
  { name: "Copper" },
  { name: "Natural Gas" },
  { name: "Gold Petal" },
];

const methenOilContent = (
    <div className="text-sm text-gray-800">
    <h5 className="text-lg font-semibold mb-3 text-red-600">What is Methenol (Methanol)?</h5>
    <p className="mb-3 text-gray-700">
      Methenol, commonly known as Methanol, is a clean-burning liquid used in
      making chemicals, plastics, and fuel. It's colorless, flammable, and widely
      used in modern industries. From powering cars and ships to being a base for
      pharmaceuticals and adhesives—Methenol plays a key role in global trade.
    </p>

    <h6 className="font-bold text-red-600 mb-2">Why is Methenol Important in the Market?</h6>
    <ul className="list-disc pl-5 space-y-2 text-gray-700">
      <li>📊 Traded on Indian exchanges like MCX with good liquidity</li>
      <li>🏭 Used heavily in construction, textiles, paints, and fuel-blending</li>
      <li>🔁 Tracks global energy and commodity cycles—helpful for forecasting</li>
      <li>💼 Strong demand from Asia-Pacific and Middle East industries</li>
      <li>🌱 Growing role in clean energy and green chemistry solutions</li>
    </ul>

    <div className="bg-gray-50 border-l-4 border-red-500 p-4 rounded-xl shadow-inner mt-6">
      <h6 className="font-bold text-red-600 mb-2">Why Should Students & Traders Learn About Methenol?</h6>
      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-800">
        <li>✅ Learn how industrial commodities drive real-world economics</li>
        <li>✅ Useful for understanding volatility, charting, and risk management</li>
        <li>✅ Practice commodity trades with low entry capital</li>
        <li>✅ Understand the link between global oil prices and Methenol</li>
        <li>✅ Gain exposure to a lesser-known but valuable asset class</li>
      </ul>
    </div>

    <div className="bg-gradient-to-r from-red-50 via-white to-red-50 p-5 rounded-2xl shadow-md border border-red-200 mt-6">
      <h6 className="text-base font-semibold text-gray-900 mb-2">Key Highlights 📌</h6>
      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
        <li>Methenol is a cost-effective entry point for commodity market learners</li>
        <li>Plays a role in green energy investments (alternative fuels)</li>
        <li>Ideal for students learning how macroeconomics impact trading</li>
        <li>Offers insight into demand-supply analysis across global markets</li>
      </ul>
    </div>
  </div>
);

const crudeOilContent = (
  <div className="text-sm text-gray-800">
    <h5 className="text-lg font-semibold mb-3 text-red-600">Crude Oil – Fueling the Global Economy</h5>
    <p className="mb-3 text-gray-700">
      Crude Oil is one of the world’s most actively traded commodities, essential for transportation, industry, and global economic development. Its price impacts inflation, currency strength, and overall market direction.
    </p>

    <h6 className="font-bold text-red-600 mb-2">Benefits of Crude Oil</h6>
    <ul className="list-disc pl-5 space-y-2 text-gray-700">
      <li>🛢️ Highly liquid with strong price movements—ideal for intraday and swing traders</li>
      <li>🌐 Influenced by global events—great for news-based strategies</li>
      <li>⚡ Traded in both futures and options markets on platforms like MCX</li>
      <li>💰 Suitable for hedging energy-intensive business operations</li>
      <li>📊 Key for understanding macroeconomic trends and inflation cycles</li>
    </ul>

    <div className="bg-gray-50 border-l-4 border-red-500 p-4 rounded-xl shadow-inner mt-6">
      <h6 className="font-bold text-red-600 mb-2">Crude Oil in the Stock Market</h6>
      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-800">
        <li>✅ Volatile—offers big opportunities for disciplined traders</li>
        <li>✅ Actively used by institutional and retail traders for speculation</li>
        <li>✅ Heavily traded on Indian exchanges like MCX with high volume</li>
        <li>✅ Affects stock prices in oil, transport, and energy sectors</li>
        <li>✅ Offers educational value in commodity fundamentals and global economics</li>
      </ul>
    </div>

    <div className="bg-gradient-to-r from-red-50 via-white to-red-50 p-5 rounded-2xl shadow-md border border-red-200 mt-6">
      <h6 className="text-base font-semibold text-gray-900 mb-2">Important Highlights 📌</h6>
      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
        <li>Perfect for learning price action and macroeconomic impact trading</li>
        <li>Teaches discipline, risk management, and real-time decision-making</li>
        <li>High visibility in financial media—easy to track and analyze</li>
        <li>Great case study for understanding supply-demand economics</li>
        <li>Often used in student trading competitions and simulations</li>
      </ul>
    </div>
  </div>
);

const copperContent = (
  <div className="text-sm text-gray-800">
    <h5 className="text-lg font-semibold mb-3 text-red-600">Copper – The Economic Barometer</h5>
    <p className="mb-3 text-gray-700">
      Copper is one of the most important industrial metals and is often called the "Doctor of the Economy" because its demand reflects economic health. It plays a big role in manufacturing, infrastructure, electronics, and renewable energy.
    </p>

    <h6 className="font-bold text-red-600 mb-2">Benefits of Copper</h6>
    <ul className="list-disc pl-5 space-y-2 text-gray-700">
      <li>⚒️ High industrial demand from construction, wiring, and machinery</li>
      <li>🌍 Closely tied to global infrastructure growth</li>
      <li>📈 Acts as an economic trend indicator—great for strategic trading</li>
      <li>💼 Popular for both long-term holding and short-term technical trades</li>
      <li>📊 Available as futures contracts on Indian exchanges like MCX</li>
    </ul>

    <div className="bg-gray-50 border-l-4 border-red-500 p-4 rounded-xl shadow-inner mt-6">
      <h6 className="font-bold text-red-600 mb-2">Copper in the Stock Market</h6>
      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-800">
        <li>✅ Used to hedge risk in industrial portfolios</li>
        <li>✅ Good liquidity and price movement for daily traders</li>
        <li>✅ Technical analysis plays a strong role in trading copper</li>
        <li>✅ Influenced by global supply chains and mining operations</li>
        <li>✅ Offers price transparency and low entry costs for students</li>
      </ul>
    </div>

    <div className="bg-gradient-to-r from-red-50 via-white to-red-50 p-5 rounded-2xl shadow-md border border-red-200 mt-6">
      <h6 className="text-base font-semibold text-gray-900 mb-2">Important Highlights 📌</h6>
      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
        <li>Valuable for students learning economic cycle-based trading</li>
        <li>Great exposure to global demand trends</li>
        <li>Good balance of fundamentals and technical analysis</li>
        <li>High volume and open interest in Indian commodity markets</li>
        <li>Ideal for understanding industrial commodity movements</li>
      </ul>
    </div>
  </div>
);

const naturalGasContent = (
  <div className="text-sm text-gray-800">
    <h5 className="text-lg font-semibold mb-3 text-red-600">Natural Gas – Powering Modern Economies</h5>
    <p className="mb-3 text-gray-700">
      Natural Gas is a clean, efficient energy source used worldwide for electricity generation, heating, and industrial operations. In the stock and commodity markets, it’s a key instrument for traders due to its high volatility and demand-driven price patterns.
    </p>

    <h6 className="font-bold text-red-600 mb-2">Benefits of Natural Gas</h6>
    <ul className="list-disc pl-5 space-y-2 text-gray-700">
      <li>🔥 High price movement—ideal for intraday traders</li>
      <li>📈 Strong correlation with weather and seasonal demand</li>
      <li>🧪 Used in electricity, fertilizer, and industrial applications</li>
      <li>💡 Volatile but predictable for skilled analysis-based trading</li>
      <li>📊 Adds diversification to energy-based portfolios</li>
    </ul>

    <div className="bg-gray-50 border-l-4 border-red-500 p-4 rounded-xl shadow-inner mt-6">
      <h6 className="font-bold text-red-600 mb-2">Natural Gas in the Stock Market</h6>
      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-800">
        <li>✅ Offered as a commodity derivative on Indian exchanges like MCX</li>
        <li>✅ High liquidity and trading volume—suitable for quick entry/exit</li>
        <li>✅ Popular among commodity traders for short-term strategies</li>
        <li>✅ Used by industries and institutions for hedging costs</li>
        <li>✅ Requires market awareness, technical and seasonal knowledge</li>
      </ul>
    </div>

    <div className="bg-gradient-to-r from-red-50 via-white to-red-50 p-5 rounded-2xl shadow-md border border-red-200 mt-6">
      <h6 className="text-base font-semibold text-gray-900 mb-2">Important Highlights 📌</h6>
      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
        <li>Great for students learning short-term commodity trading</li>
        <li>Quick-moving market—teaches fast decision-making</li>
        <li>Perfect for experienced traders looking to diversify</li>
        <li>Frequently influenced by global and environmental events</li>
        <li>Offers strong earning potential with calculated strategies</li>
      </ul>
    </div>
  </div>
);

const goldPetalContent = (
  <div className="text-sm text-gray-800">
    <h5 className="text-lg font-semibold mb-3 text-red-600">Gold Petal – Small Contract, Big Value</h5>
    <p className="mb-3 text-gray-700">
      Gold Petal is a micro-contract of gold offered on the commodity exchange (MCX). It’s designed especially for retail investors who want to invest in gold with minimal capital. Each Gold Petal contract represents 1 gram of gold, making it the most accessible way to start gold trading.
    </p>

    <h6 className="font-bold text-red-600 mb-2">Benefits of Gold Petal</h6>
    <ul className="list-disc pl-5 space-y-2 text-gray-700">
      <li> Extremely low entry cost—perfect for new investors</li>
      <li> Tracks live gold prices just like larger contracts</li>
      <li> Ideal for learning short-term trading strategies</li>
      <li> Helps build investment discipline and habit</li>
      <li> Flexible and risk-managed due to small size</li>
    </ul>

    <div className="bg-gray-50 border-l-4 border-red-500 p-4 rounded-xl shadow-inner mt-6">
      <h6 className="font-bold text-red-600 mb-2">Gold Petal’s Role in the Stock Market</h6>
      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-800">
        <li>✅ Suitable for school/college students and beginners</li>
        <li>✅ Used for testing trading strategies at low risk</li>
        <li>✅ Great learning tool for commodity market education</li>
        <li>✅ Fully regulated by SEBI and traded via MCX</li>
        <li>✅ Can be sold anytime during exchange hours</li>
      </ul>
    </div>

    <div className="bg-gradient-to-r from-red-50 via-white to-red-50 p-5 rounded-2xl shadow-md border border-red-200 mt-6">
      <h6 className="text-base font-semibold text-gray-900 mb-2">Key Highlights 📌</h6>
      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
        <li>Most affordable way to start gold investment</li>
        <li>Best suited for students, part-time traders, and learners</li>
        <li>Live price exposure with minimum capital outlay</li>
        <li>Enables step-by-step learning of technical charts</li>
        <li>Builds confidence before trading larger contracts</li>
      </ul>
    </div>
  </div>
);

const goldContent = (
  <div className="text-sm text-gray-800">
    <h5 className="text-lg font-semibold mb-3 text-red-600">Gold – A Trusted Asset for Generations</h5>
    <p className="mb-3 text-gray-700">
      Gold is one of the oldest and most trusted investment assets. Beyond its traditional role in jewelry, it plays a vital part in modern portfolio management. Gold acts as a strong hedge against inflation, market crashes, and currency devaluation.
    </p>

    <h6 className="font-bold text-red-600 mb-2">Benefits of Investing in Gold</h6>
    <ul className="list-disc pl-5 space-y-2 text-gray-700">
      <li> Reliable during market volatility – protects your capital</li>
      <li> Works independently of stocks – great for diversification</li>
      <li> Available via ETFs, Sovereign Gold Bonds, and Digital Gold</li>
      <li> Acts as an inflation shield over the long-term</li>
      <li> Maintains value even when stock markets decline</li>
    </ul>

    <div className="bg-gray-50 border-l-4 border-red-500 p-4 rounded-xl shadow-inner mt-6">
      <h6 className="font-bold text-red-600 mb-2">Gold’s Role in the Stock Market</h6>
      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-800">
        <li>✅ Helps reduce portfolio risk through diversification</li>
        <li>✅ Gold prices stay stable in uncertain market conditions</li>
        <li>✅ Easy to understand for new investors</li>
        <li>✅ Protects your investment during financial crises</li>
        <li>✅ Preferred by both institutional and retail investors</li>
      </ul>
    </div>

    <div className="bg-gradient-to-r from-red-50 via-white to-red-50 p-5 rounded-2xl shadow-md border border-red-200 mt-6">
      <h6 className="text-base font-semibold text-gray-900 mb-2">Important Highlights 📌</h6>
      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
        <li>Gold suits all types of investors — beginners to experienced</li>
        <li>Balances equity-heavy portfolios with stability</li>
        <li>Helps avoid panic during stock market crashes</li>
        <li>Easily investable through ETFs and SGBs</li>
        <li>Timeless asset that retains value through economic challenges</li>
      </ul>
    </div>
  </div>
);

const silverContent = (
   <div className="text-sm text-gray-800">
    <h5 className="text-lg font-semibold mb-3 text-red-600">Silver – A Dual-Purpose Investment</h5>
    <p className="mb-3 text-gray-700">
      Silver is both a precious metal and an industrial asset. It plays a key role in electronics, solar panels, batteries, and more. In finance, silver is popular for its affordability and ability to provide both safety and profit potential.
    </p>

    <h6 className="font-bold text-red-600 mb-2">Benefits of Investing in Silver</h6>
    <ul className="list-disc pl-5 space-y-2 text-gray-700">
      <li> Acts as both a safe asset and a growth opportunity</li>
      <li> Industrial demand makes it essential in modern tech</li>
      <li> More price movement than gold – better for short-term trades</li>
      <li> Affordable investment for small and new investors</li>
      <li> Useful during inflation and currency weakness</li>
    </ul>

    <div className="bg-gray-50 border-l-4 border-red-500 p-4 rounded-xl shadow-inner mt-6">
      <h6 className="font-bold text-red-600 mb-2">Silver’s Role in the Stock Market</h6>
      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-800">
        <li>✅ Helps balance high-risk equity positions</li>
        <li>✅ Suitable for active and short-term traders</li>
        <li>✅ Can enhance portfolio returns in bullish commodity cycles</li>
        <li>✅ Traded on Indian exchanges via contracts and ETFs</li>
        <li>✅ Helps understand commodity correlation with stock market trends</li>
      </ul>
    </div>

    <div className="bg-gradient-to-r from-red-50 via-white to-red-50 p-5 rounded-2xl shadow-md border border-red-200 mt-6">
      <h6 className="text-base font-semibold text-gray-900 mb-2">Important Highlights 📌</h6>
      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
        <li>Great choice for students and beginners due to low entry cost</li>
        <li>Lets you practice commodity trading without big risks</li>
        <li>Supports clean energy and technology-based investing</li>
        <li>Complements traditional equity investments</li>
        <li>Strong liquidity in Indian markets like MCX</li>
      </ul>
    </div>
  </div>
);

const miniSilverContent = (
    <div className="text-sm text-gray-800">
    <h5 className="text-lg font-semibold mb-3 text-red-600">Mini Silver – Start Small, Learn Big</h5>
    <p className="mb-3 text-gray-700">
      Mini Silver is a smaller contract version of regular silver trading on commodity exchanges like MCX. It's specially designed for retail investors and students who want to explore the silver market with lower risk and capital.
    </p>

    <h6 className="font-bold text-red-600 mb-2">Benefits of Mini Silver</h6>
    <ul className="list-disc pl-5 space-y-2 text-gray-700">
      <li> Easier entry into silver commodity trading</li>
      <li> Requires less margin and capital</li>
      <li> Ideal for learning and practicing without high exposure</li>
      <li> Reflects similar market dynamics as full-size silver contracts</li>
      <li> Better suited for short-term trades and intraday learning</li>
    </ul>

    <div className="bg-gray-50 border-l-4 border-red-500 p-4 rounded-xl shadow-inner mt-6">
      <h6 className="font-bold text-red-600 mb-2">Why Mini Silver Matters in the Stock Market</h6>
      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-800">
        <li>✅ Makes commodities accessible for students and small investors</li>
        <li>✅ Helps understand silver's impact on portfolio diversification</li>
        <li>✅ Offers hands-on experience with technical and fundamental analysis</li>
        <li>✅ Builds trading discipline and confidence gradually</li>
        <li>✅ Aligned with MCX and SEBI guidelines for safe retail participation</li>
      </ul>
    </div>

    <div className="bg-gradient-to-r from-red-50 via-white to-red-50 p-5 rounded-2xl shadow-md border border-red-200 mt-6">
      <h6 className="text-base font-semibold text-gray-900 mb-2">Key Highlights 📌</h6>
      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
        <li>Best suited for educational and skill-building purposes</li>
        <li>Real-time exposure to silver market trends</li>
        <li>Lower financial pressure with similar market benefits</li>
        <li>Can be traded easily online through verified platforms</li>
        <li>Helps bridge the gap between learning and real trading</li>
      </ul>
    </div>
  </div>
);

const miniGoldContent = (
    <div className="text-sm text-gray-800">
    <h5 className="text-lg font-semibold mb-3 text-red-600">Mini Gold – A Smart Way to Start</h5>
    <p className="mb-3 text-gray-700">
      Mini Gold is a smaller version of standard gold trading contracts. It allows retail investors and students to gain exposure to the gold market at a lower cost. It mirrors regular gold price movements but with reduced capital and risk, making it ideal for learning and gradual wealth building.
    </p>

    <h6 className="font-bold text-red-600 mb-2">Benefits of Mini Gold</h6>
    <ul className="list-disc pl-5 space-y-2 text-gray-700">
      <li> Lower margin requirements for beginners</li>
      <li> Helps manage portfolio with smaller risk exposure</li>
      <li> Same price behavior as full gold—great for practice</li>
      <li> Encourages disciplined investing habits</li>
      <li> Builds knowledge of gold trading with real-time learning</li>
    </ul>

    <div className="bg-gray-50 border-l-4 border-red-500 p-4 rounded-xl shadow-inner mt-6">
      <h6 className="font-bold text-red-600 mb-2">Mini Gold’s Role in the Stock Market</h6>
      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-800">
        <li>✅ Easy access for small investors in commodities</li>
        <li>✅ Helps diversify a stock-heavy portfolio with limited funds</li>
        <li>✅ Popular for short-term and intraday trading practice</li>
        <li>✅ Traded on MCX with full regulatory compliance</li>
        <li>✅ Offers exposure to gold prices without large investments</li>
      </ul>
    </div>

    <div className="bg-gradient-to-r from-red-50 via-white to-red-50 p-5 rounded-2xl shadow-md border border-red-200 mt-6">
      <h6 className="text-base font-semibold text-gray-900 mb-2">Key Highlights 📌</h6>
      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
        <li>Best for learners and first-time commodity investors</li>
        <li>Real-time market exposure without large capital</li>
        <li>Enhances understanding of how gold impacts markets</li>
        <li>Can be traded online easily with low risk</li>
        <li>Supports long-term financial literacy and planning</li>
      </ul>
    </div>
  </div>
);

const Commodities = () => {
  const [activeTab, setActiveTab] = useState("Gold");

  const contentMap = {
    "Gold": goldContent,
    "Silver": silverContent,
    "Mini Silver": miniSilverContent,
    "Mini Gold": miniGoldContent,
    "Methen Oil": methenOilContent,
    "Crude Oil": crudeOilContent,
    "Copper": copperContent,
    "Natural Gas": naturalGasContent,
    "Gold Petal": goldPetalContent
  };

  return (
    <Fragment>
      <Helmet>
        <title>Commodities - Century Finance Limited</title>
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
      <PageTitle
        pageTitle={"Commodities"}
        pagesub={"Commodities"}
        bgImage="/bg-image/commodity.png"
      />

      <section className="section-padding" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <div className="wpo-about-wrap">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-md-12 col-12">
                <div className="wpo-about-text text-center">
                  <div className="wpo-section-title mb-4">
                    <h2 className="fw-bold mb-2" style={{ color: "#111" }}>
                      Explore Key Commodity Contracts
                    </h2>
                    <p style={{ color: "#555" }}>
                      Tap on each commodity tab to understand lot sizes, trading
                      hours, and market benefits.
                    </p>
                  </div>

                <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
  {tabData.map((tab) => (
    <button
      key={tab.name}
      onClick={() => setActiveTab(tab.name)}
      className={`px-4 py-2 fw-semibold border rounded-pill ${
        activeTab === tab.name
          ? "text-white"
          : "text-dark border-secondary"
      }`}
      style={{
        backgroundColor: activeTab === tab.name ? "#21E786" : "#f8f9fa",
        borderColor: activeTab === tab.name ? "#21E786" : "#ccc",
        transition: "0.3s",
        boxShadow:
          activeTab === tab.name
            ? "0 4px 12px rgba(33, 231, 134, 0.3)"
            : "none",
      }}>
      {tab.name}
    </button>
  ))}
</div>


                  <div
                    className="text-start p-4 shadow rounded"
                    style={{
                      backgroundColor: "#FDFDFD",
                      borderLeft: "5px solid #21E786",
                      minHeight: "300px",
                    }}>
                    <h4 className="fw-bold mb-3" style={{ color: "#e65410" }}>
                      {activeTab} Overview
                    </h4>
                    {contentMap[activeTab] || (
                      <p>
                        Content for <strong>{activeTab}</strong> will be
                        displayed here. You can replace this block with detailed
                        contract specifications, trading rules, or analysis as
                        needed.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default Commodities;
