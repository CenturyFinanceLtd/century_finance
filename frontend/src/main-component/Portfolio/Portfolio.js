import React from "react";

const PortfolioContent = () => {
  const container = {
    maxWidth: "900px",
    margin: "3rem auto",
    backgroundColor: "#fff",
    color: "#1f2937", // dark slate gray
    padding: "2.5rem 3rem",
    borderRadius: "10px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    lineHeight: 1.6,
  };

  const header = {
    color: "#e65410", // bright blue
    fontWeight: "700",
    fontSize: "2.25rem",
    marginBottom: "1rem",
    textAlign: "center",
  };

  const subtitle = {
    fontStyle: "italic",
    fontWeight: "600",
    color: "#3b82f6", // lighter blue
    marginBottom: "2rem",
    textAlign: "center",
  };

  const sectionTitle = {
    color: "#2563eb",
    fontWeight: "700",
    fontSize: "1.6rem",
    marginTop: "2.5rem",
    marginBottom: "1rem",
  };

  const highlightBox = {
    backgroundColor: "#fef3c7", // light amber
    borderLeft: "6px solid #f59e0b", // amber border
    padding: "1rem 1.5rem",
    marginBottom: "2rem",
    borderRadius: "8px",
    color: "#92400e",
    fontWeight: "600",
  };

  const benefitsBox = {
    backgroundColor: "#dbeafe", // light blue
    borderLeft: "6px solid #2563eb",
    padding: "1rem 1.5rem",
    marginBottom: "2rem",
    borderRadius: "8px",
  };

  const listStyle = {
    marginBottom: "1rem",
  };

  const ctaBox = {
    backgroundColor: "#bfdbfe", // softer blue
    borderRadius: "12px",
    padding: "2rem",
    textAlign: "center",
    fontWeight: "700",
    fontSize: "1.3rem",
    color: "#1e40af",
    marginTop: "3rem",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "1rem",
  };

  const thTdStyle = {
    borderBottom: "1px solid #e5e7eb",
    padding: "0.75rem 1rem",
    textAlign: "left",
  };

  return (
    <section style={container}>
      <h1 style={header}> Century Finance Limited — Comprehensive Portfolio Management Solutions</h1>
      <p style={subtitle}> “Your Money. Your Control. Our Expertise.”</p>

      <p>
        At <strong>Century Finance Limited</strong>, we specialize in{" "}
        <strong>professionally-managed, transparent, and growth-focused portfolio handling</strong>,
        catering to investors across different wealth tiers. Whether you're just starting your investment journey
        or are a seasoned investor seeking premium wealth management, we have a plan tailored for your goals.
      </p>

      <div style={highlightBox}>
        <p>
           <strong>Important Highlight:</strong> Your money, your control! <strong>75% stays with you</strong>, just 25% is utilized by us to create wealthfor you.</p>
      </div>

      {/* Wealth Foundation Plan */}
      <div>
        <h2 style={sectionTitle}> 1. Wealth Foundation Plan</h2>
        <p style={{ fontStyle: "italic" }}><strong>Perfect for New & Aspiring Investors</strong></p>
        <p> <strong>Portfolio Size:</strong> ₹1 Lakh – ₹15 Lakh</p>
        <p> <strong>Annual Fee:</strong> ₹10,000 / Year</p>

        <h3> Who It’s For:</h3>
        <ul style={listStyle}>
          <li>First-time investors</li>
          <li>Salaried professionals</li>
          <li>Low-risk individuals looking for guided exposure</li>
        </ul>

        <h3> Plan Features:</h3>
        <ol style={listStyle}>
          <li><strong>Basic Demat Handling Support:</strong> Seamless setup & annual maintenance with hassle-free management.</li>
          <li><strong>Guided Investment Start:</strong> Help you get familiar with market basics and risk-managed asset allocation.</li>
          <li><strong>Risk Protection Strategy:</strong> Introduce you to diversification, SIPs, and basic market instruments.</li>
          <li><strong>Quarterly Portfolio Health Reports:</strong> Understand how your money is performing.</li>
        </ol>

        <div style={benefitsBox}>
          <h4> Benefits:</h4>
          <ul>
            <li>Low-cost entry into managed finance</li>
            <li>Helps build financial discipline from Day 1</li>
            <li>Personalized support without overwhelming complexity</li>
          </ul>
          <p><strong> Best For:</strong> Anyone taking their first steps into capital markets but wanting professional backing and safe returns.</p>
        </div>
      </div>

      {/* Strategic Growth Plan */}
      <div>
        <h2 style={sectionTitle}> 2. Strategic Growth Plan</h2>
        <p style={{ fontStyle: "italic" }}><strong>Built for Evolving Investors Who Are Ready to Scale</strong></p>
        <p> <strong>Portfolio Size:</strong> ₹15 Lakh – ₹25 Lakh</p>
        <p> <strong>Annual Fee:</strong> ₹25,000 / Year</p>

        <h3> Who It’s For:</h3>
        <ul style={listStyle}>
          <li>Freelancers, consultants, business owners</li>
          <li>Mid-career professionals</li>
          <li>Investors aiming to accelerate growth with calculated risk</li>
        </ul>

        <h3> Plan Features:</h3>
        <ol style={listStyle}>
          <li><strong>Premium Demat Handling:</strong> All-inclusive portfolio handling with enhanced support.</li>
          <li><strong>Customized Financial Roadmap:</strong> Your risk appetite, future goals, and financial aspirations shape your investment path.</li>
          <li><strong>Sectoral Exposure Strategy:</strong> Smart diversification across Indian equity sectors (IT, Auto, Pharma, FMCG).</li>
          <li><strong>Monthly Advisory Sessions:</strong> Investment check-ins, tax optimization, and market alignment.</li>
          <li><strong>Capital Growth Plan:</strong> Balanced mix of equity, mutual funds, bonds, and short-term liquidity strategies.</li>
        </ol>

        <div style={benefitsBox}>
          <h4> Benefits:</h4>
          <ul>
            <li>Structured long-term wealth building</li>
            <li>Realignment based on market trends & your life stages</li>
            <li>Higher returns potential with active risk controls</li>
          </ul>
          <p><strong> Best For:</strong> Those ready to move beyond basic investing and start building wealth more assertively with expert supervision.</p>
        </div>
      </div>

      {/* Legacy Elite Portfolio */}
      <div>
        <h2 style={sectionTitle}> 3. Legacy Elite Portfolio</h2>
        <p style={{ fontStyle: "italic" }}><strong>Designed for Serious Investors & Wealth Protectors</strong></p>
        <p> <strong>Portfolio Size:</strong> ₹25 Lakh – ₹1 Crore</p>
        <p> <strong>Annual Fee:</strong> ₹65,000 / Year</p>

        <h3> Who It’s For:</h3>
        <ul style={listStyle}>
          <li>High Net-Worth Individuals (HNIs)</li>
          <li>Corporate professionals & entrepreneurs</li>
          <li>Legacy planners and multi-generational wealth builders</li>
        </ul>

        <h3>🔍 Plan Features:</h3>
        <ol style={listStyle}>
          <li><strong>VIP Demat Handling:</strong> Dedicated relationship manager, with priority service</li>
          <li><strong>360° Portfolio Management:</strong> Real estate planning, equity advisory, SIPs, fixed income instruments, digital assets</li>
          <li><strong>Real-Time Analytics Dashboard:</strong> Get updated insights, alerts, and rebalancing suggestions</li>
          <li><strong>Wealth Preservation Mechanisms:</strong> Asset shielding, long-term tax harvesting, succession planning</li>
          <li><strong>Multi-Asset Allocation:</strong> Investment in Indian & global equities, bonds, sovereign gold bonds, REITs, ETFs</li>
        </ol>

        <div style={benefitsBox}><h4> Benefits:</h4>
<ul>
<li>Ensures consistent growth with capital protection</li>
<li>Tax-efficient structures aligned with legal compliance</li>
<li>Offers complete control + guided expertise to secure a legacy</li>
</ul>
<p><strong> Best For:</strong> Investors with established capital looking to grow, protect, and pass on wealth.</p>
</div>
</div>

  {/* Common Benefits Table */}
  <div>
    <h2 style={sectionTitle}> Common Benefits Across All Plans:</h2>
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thTdStyle}>Feature</th>
          <th style={thTdStyle}>Included in All Plans</th>
        </tr>
      </thead>
      <tbody>
        {[
          [" Demat Account Handling", "✅ Yes"],
          [" Quarterly Performance Reports", "✅ Yes"],
          [" Capital Transparency", "✅ 75% remains untouched by us"],
          [" Financial Education Access", "✅ Yes"],
          [" Portfolio Monitoring Tools", "✅ Yes"],
          [" Investor Support Team", "✅ Available via call/email"],
          [" Secure & Compliant Handling", "✅ Yes"],
        ].map(([feature, included], i) => (
          <tr key={i}>
            <td style={thTdStyle}>{feature}</td>
            <td style={thTdStyle}>{included}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Call To Action */}
  <div style={ctaBox}>
    <p>📞 <strong>Ready to Start Your Wealth Journey?</strong></p>
    <p>Mail us or book a consultation to understand which plan aligns best with your portfolio and future goals.</p>
    <p><strong>Email:</strong>customerservice@centuryfinancelimited.com </p>
    <p><strong>Websaite:</strong>https://www.centuryfinancelimited.com/</p>
  </div>
</section>
);
};
export default PortfolioContent;