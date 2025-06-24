import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import "./Portfolio.css";

const plans = [
  {
    id: "wealthFoundation",
    title: "Wealth Foundation Plan",
    portfolioSize: "₹1 Lakh – ₹15 Lakh",
    annualFee: "₹10,000 / Year",
    description: (
      <>
        <div className="alert alert-success p-3 rounded mb-4">
          <p><strong>We open and manage your Demat account — for just ₹10,000/year. You keep 75% of all earnings. We retain only 25% as performance share.</strong></p>
        </div>
        <p><strong>Who It’s For:</strong></p>
        <ul>
          <li>First-time investors</li>
          <li>Salaried professionals</li>
          <li>Low-risk individuals looking for guided exposure</li>
        </ul>
        <p><strong>Plan Features:</strong></p>
        <ul>
          <li>Basic Demat Handling Support: Seamless setup & annual maintenance with hassle-free management.</li>
          <li>Guided Investment Start: Help you get familiar with market basics and risk-managed asset allocation.</li>
          <li>Risk Protection Strategy: Introduce you to diversification, SIPs, and basic market instruments.</li>
          <li>Quarterly Portfolio Health Reports: Understand how your money is performing.</li>
        </ul>
        <p><strong>Benefits:</strong></p>
        <ul>
          <li>Low-cost entry into managed finance</li>
          <li>Helps build financial discipline from Day 1</li>
          <li>Personalized support without overwhelming complexity</li>
        </ul>
        <p><strong>Best For:</strong> Anyone taking their first steps into capital markets but wanting professional backing and safe returns.</p>
      </>
    ),
  },
  {
    id: "strategicGrowth",
    title: "Strategic Growth Plan",
    portfolioSize: "₹15 Lakh – ₹25 Lakh",
    annualFee: "₹25,000 / Year",
    description: (
      <>
        <div className="alert alert-success p-3 rounded mb-4">
          <p><strong>We open and manage your Demat account — for just ₹25,000/year. You keep 75% of all earnings. We retain only 25% as performance share.</strong></p>
        </div>
        <p><strong>Who It’s For:</strong></p>
        <ul>
          <li>Freelancers, consultants, business owners</li>
          <li>Mid-career professionals</li>
          <li>Investors aiming to accelerate growth with calculated risk</li>
        </ul>
        <p><strong>Plan Features:</strong></p>
        <ul>
          <li>Premium Demat Handling: All-inclusive portfolio handling with enhanced support.</li>
          <li>Customized Financial Roadmap: Your risk appetite, future goals, and financial aspirations shape your investment path.</li>
          <li>Sectoral Exposure Strategy: Smart diversification across Indian equity sectors (IT, Auto, Pharma, FMCG).</li>
          <li>Monthly Advisory Sessions: Includes investment check-ins, tax optimization, and market alignment.</li>
          <li>Capital Growth Plan: Balanced mix of equity, mutual funds, bonds, and short-term liquidity strategies.</li>
        </ul>
        <p><strong>Benefits:</strong></p>
        <ul>
          <li>Structured long-term wealth building</li>
          <li>Realignment based on market trends & your life stages</li>
          <li>Higher returns potential with active risk controls</li>
        </ul>
        <p><strong>Best For:</strong> Those ready to move beyond basic investing and start building wealth more assertively with expert supervision.</p>
      </>
    ),
  },
  {
    id: "legacyElite",
    title: "Legacy Elite Portfolio",
    portfolioSize: "₹25 Lakh – ₹1 Crore",
    annualFee: "₹65,000 / Year",
    description: (
      <>
        <div className="alert alert-success p-3 rounded mb-4">
          <p><strong>We open and manage your Demat account — for just ₹65,000/year. You keep 75% of all earnings. We retain only 25% as performance share.</strong></p>
        </div>
        <p><strong>Who It’s For:</strong></p>
        <ul>
          <li>High Net-Worth Individuals (HNIs)</li>
          <li>Corporate professionals & entrepreneurs</li>
          <li>Legacy planners and multi-generational wealth builders</li>
        </ul>
        <p><strong>Plan Features:</strong></p>
        <ul>
          <li>VIP Demat Handling: Dedicated relationship manager, with priority service</li>
          <li>360° Portfolio Management: Real estate planning, equity advisory, SIPs, fixed income instruments, digital assets</li>
          <li>Real-Time Analytics Dashboard: Get updated insights, alerts, and rebalancing suggestions</li>
          <li>Wealth Preservation Mechanisms: Asset shielding, long-term tax harvesting, succession planning</li>
          <li>Multi-Asset Allocation: Investment in Indian & global equities, bonds, sovereign gold bonds, REITs, ETFs</li>
        </ul>
        <p><strong>Benefits:</strong></p>
        <ul>
          <li>Ensures consistent growth with capital protection</li>
          <li>Tax-efficient structures aligned with legal compliance</li>
          <li>Offers complete control + guided expertise to secure a legacy</li>
        </ul>
        <p><strong>Best For:</strong> Investors with established capital looking to grow, protect, and pass on wealth.</p>
      </>
    ),
  },
  {
    id: "Titanium Wealth  Plan",
    title: " Titanium Wealth Plan",
    portfolioSize: "₹50 Lakh – ₹1 Crore",
    annualFee: "₹85,000 / Year",
    description: (
      <>
        <div className="alert alert-success p-3 rounded mb-4">
          <p><strong>We open and manage your Demat account — for just ₹85,000/year. You keep 75% of all earnings. We retain only 25% as performance share.</strong></p>
        </div>
        <p><strong>Who It’s For:</strong></p>
        <ol>
          <li>Senior executives with surplus deployable capital</li>
          <li>Successful entrepreneurs seeking multi-asset growth</li>
          <li>Ultra-strategic planners looking to diversify beyond traditional markets</li>
          <li>Wealthy individuals wanting deep control + high sophistication</li>
        </ol>
        <p><strong>Plan Features:</strong></p>
        <ul>
          <li><strong>Ultra‑Personalized Investment Architecture–</strong> Ultra‑Personalized Investment Architecture</li>
          <li><strong>Dedicated Family Wealth Officer–</strong> Your own financial expert acting as a personal CFO—bridging tax, legal, and investment advice.</li>
          <li><strong>Private Market Access & Alternatives–</strong> Entry into exclusive assets like Private Equity, Pre‑IPOs, AIFs, Sovereign Funds & Structured Global ETFs.</li>
          <li><strong>Dynamic Cross‑Border Asset Allocation–</strong> Exposure to US/UK/Asia equities, international debt, REITs, and currency‑hedged instruments—compliant with RBI’s LRS norms.</li>
          <li><strong>On‑Demand Wealth Reviews–</strong> Get deep insights into your portfolio anytime, including risk stress‑tests, goal tracking & market alignment reports.</li>
          <li><strong>Crisis‑Mode Rebalancing Strategy–</strong> Smart alerts + expert intervention to protect your wealth during economic or geopolitical turbulence.</li>
        </ul>
        <p><strong>Benefits:</strong></p>
        <ol>
          <li>Complete visibility + top‑tier discretion over high‑value assets</li>
          <li>Stronger returns through non‑retail market opportunities</li>
          <li>Strategic capital shielding, growth, and tax planning—all in one place</li>
          <li>Exceptional service without losing autonomy</li>
        </ol>
        <p><strong>Best For:</strong></p>
        <ul>
          <li>Investors who want serious capital multiplication without giving up control</li>
          <li>Individuals preparing for international diversification and succession planning</li>
          <li>HNIs aiming for global exposure, private market access, and legacy‑grade wealth management</li>
          <li>Visionaries who value confidentiality, depth, and data‑driven advisory over generic portfolio handling</li>
        </ul>
      </>
    ),
  },
];

const importantHighlights = [
  "Your money, your control! 75% stays with you, just 25% is utilized by us to create wealthfor you.",
  "Global‑Class Investment Exposure: Access private equity, international markets, and high‑yield alternatives—unavailable to retail investors.",
  "Dedicated Family Wealth Officer: Your own private financial strategist who understands your entire wealth ecosystem.",
  "Fully Compliant with RBI & SEBI Regulations: Peace of mind with every move—growth without grey zones.",
  "Live Dashboard & Emergency Rebalancing: Always know your net worth trajectory and activate defense strategies during downturns.",
];

const PortfolioContent = () => {
  const [activePlan, setActivePlan] = useState(plans[0].id);

  const container = {
    maxWidth: "2000px",
    margin: "3rem auto",
    backgroundColor: "",
    color: "#1f2937",
    padding: "2.5rem 3rem",
    borderRadius: "10px",
    boxShadow: "#080a0a",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    lineHeight: 1.6,
  };

  const header = {
    color: "#21E786", // ✅ changed from #e65410 to #21E786
    fontWeight: "700",
    fontSize: "2.25rem",
    marginBottom: "1rem",
    textAlign: "center",
  };

  const subtitle = {
    fontStyle: "italic",
    fontWeight: "600",
    color: "#3b82f6",
    marginBottom: "2rem",
    textAlign: "center",
  };

  const sectiontitle = {
    color: "#2563eb",
    fontWeight: "700",
    fontSize: "1.6rem",
    marginTop: "2.5rem",
    marginBottom: "1rem",
  };

  return (
    <Fragment>
      <Helmet>
        <title>Portfolio - Century Finance Limited</title>
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
      <PageTitle pageTitle={"Portfolio"} pagesub={"Portfolio"} bgImage="/bg-image/portfolio.png" />
      <div style={container}>
        <h2 style={header}>
          Century Finance Limited — Comprehensive Portfolio Management Solutions
        </h2>
        <p style={subtitle}>
          <strong>Your Money. Your Control. Our Expertise.</strong>
          <br />
          We specialize in professionally-managed, transparent, and
          growth-focused portfolio handling for all investors.
        </p>

        <div className="bg-white border-4 border-yellow-400 rounded-3xl shadow-2xl px-6 py-10 md:px-10 md:py-14 max-w-6xl mx-auto my-12 transition-all duration-300 hover:scale-[1.01]">
          <div className="text-center mb-6">
            <p className="text-base text-gray-700 leading-relaxed max-w-2xl mx-auto">
              At{" "}
              <span className="font-semibold text-gray-900">
                Century Finance Limited
              </span>
              , we believe in <em>trust before transaction</em>. Try a fully
              managed investment experience before opening your Demat account.
            </p>
          </div>
          <ul className="list-disc pl-6 space-y-3 text-sm text-gray-800 max-w-xl mx-auto mb-8">
            <li>
               <strong>Fully Managed Demo Portfolio:</strong> Try our
              professional handling for just ₹2000, valid for 15 days.
            </li>
            <li>
               <strong>Transparency First:</strong> No commitment
              required—move to full service only if satisfied.
            </li>
            <li>
               <strong>Clarity Guaranteed:</strong> We help you understand how
              real investment management works—without risk.
            </li>
          </ul>
        </div>

        <div className="text-center mb-12" style={{ padding: "15px 0px" }}>
          <a href="#" className="book-now-btn">
            Book Now
          </a>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "35px",
            borderBottom: "2px solid #e1e1e1",
          }}
        >
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setActivePlan(plan.id)}
              style={{
                cursor: "pointer",
                padding: "15px 35px",
                margin: "0 12px",
                border: "none",
                borderBottom:
                  activePlan === plan.id
                    ? "4px solid #007bff"
                    : "4px solid transparent",
                backgroundColor: "transparent",
                fontWeight: activePlan === plan.id ? "700" : "500",
                fontSize: "18px",
                color: activePlan === plan.id ? "#007bff" : "#666",
                transition: "all 0.3s ease",
                outline: "none",
                borderRadius: "0 0 8px 8px",
              }}
            >
              {plan.title}
            </button>
          ))}
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "30px 35px",
            backgroundColor: "#f7f9fc",
            minHeight: "420px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
            fontSize: "16px",
            color: "#1f2937",
          }}
        >
          {plans.map(
            (plan) =>
              activePlan === plan.id && (
                <div key={plan.id}>
                  <h3
                    style={{
                      color: "#004085",
                      marginBottom: "15px",
                      fontWeight: "700",
                      fontSize: "1.9rem",
                    }}
                  >
                    {plan.title}
                  </h3>
                  <p style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                    Portfolio Size:{" "}
                    <span style={{ color: "#555" }}>{plan.portfolioSize}</span>
                  </p>
                  <p
                    style={{
                      fontWeight: "600",
                      fontSize: "1.1rem",
                      marginBottom: "20px",
                    }}
                  >
                    Annual Fee:{" "}
                    <span style={{ color: "#555" }}>{plan.annualFee}</span>
                  </p>
                  <div>{plan.description}</div>
                </div>
              )
          )}
        </div>

        <div
          style={{
            marginTop: "50px",
            padding: "25px 30px",
            backgroundColor: "#e9f5ff",
            borderLeft: "6px solid #007bff",
            borderRadius: "8px",
            fontWeight: "600",
            color: "#004085",
           
          }}
        >
          <h3
            style={{
              marginBottom: "15px",
              fontWeight: "700",
              fontSize: "1.8rem",
              borderBottom: "2px solid #007bff",
              paddingBottom: "8px",
            }}
          >
            Important Highlights
          </h3>
          <ul style={{ paddingLeft: "20px", marginTop: "10px", listStyleType: "disc" }}>
            {importantHighlights.map((point, idx) => (
              <li key={idx} style={{ marginBottom: "10px" }}>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div
          style={{
            marginTop: "60px",
            padding: "30px 35px",
            backgroundColor: "",
            color: "#fff",
            borderRadius: "12px",
            textAlign: "center",
            boxShadow: "0 6px 20px rgba(59,130,246,0.5)",
            fontSize: "1.2rem",
            maxWidth: "1000px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h3 style={{ fontWeight: "700", fontSize: "2rem", marginBottom: "15px" }}>
            📞 Ready to Start Your Wealth Journey?
          </h3>
          <p style={{ marginBottom: "10px" }}>
            Mail us or book a consultation to understand which plan aligns best with your portfolio and future goals.
          </p>
          <p style={{ fontSize: "1rem", marginBottom: "5px" }}>
            📧 <strong>Email:</strong>{" "}
            <a href="customerservice@centuryfinancelimited.com" style={{ color: "#21E786", textDecoration: "underline" }}>
              info@centuryfinance.com
            </a>
          </p>
          <p style={{ fontSize: "1rem" }}>
            🌐 <strong>Website:</strong>{" "}
            <a
              href="https://www.centuryfinancelimited.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#21E786", textDecoration: "underline" }}
            >
              www.centuryfinance.com
            </a>
          </p>
        </div>
      </div>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default PortfolioContent;
