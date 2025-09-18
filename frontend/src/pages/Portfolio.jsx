import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../components/pagetitle/PageTitle';
import Footer from '../components/footer';
import './Portfolio.scss';

const plans = [
  {
    id: 'wealth-foundation',
    name: 'Wealth Foundation Plan',
    portfolioSize: '₹1 Lakh – ₹15 Lakh',
    annualFee: '₹10,000 / Year',
    banner:
      'We open and manage your Demat account — for just ₹10,000/year. You keep 75% of all earnings. We retain only 25% as performance share.',
    whoFor: [
      'First-time investors',
      'Salaried professionals',
      'Low-risk individuals looking for guided exposure',
    ],
    features: [
      'Open Demat handling support. Systems setup & annual maintenance with hassle‑free management.',
      'Guided investment start: Get familiar with market basics and risk‑managed asset allocation.',
      'Basic portfolio strategy: Intro to diversification, SIPs, and themed baskets.',
      'Quarterly position health reports: Understand how your money is performing.',
    ],
    benefits: [
      'Clarity‑first entry into managed finance',
      'Helps build financial discipline from Day 1',
      'Personalized support without overwhelming complexity',
    ],
    bestFor:
      'Anyone taking their first steps into capital markets but wanting professional backing and safe returns.',
  },
  {
    id: 'strategic-growth',
    name: 'Strategic Growth Plan',
    portfolioSize: '₹15 Lakh – ₹50 Lakh',
    annualFee: '₹40,000 / Year',
    banner:
      'Full‑stack portfolio management tuned for mid‑risk growth. You keep 75% of all earnings. We retain only 25% as performance share.',
    whoFor: [
      'Professionals growing wealth with balanced risk',
      'Investors seeking smarter asset allocation and growth',
      'Those upgrading from DIY investing to pro management',
    ],
    features: [
      'Dynamic asset allocation across equities, debt, and indices',
      'Goal‑based planning with rebalancing and auto‑SIP recommendations',
      'Quarterly performance reviews & risk analytics',
      'Access to thematic baskets and high‑quality research',
    ],
    benefits: [
      'Better compounding through disciplined rebalancing',
      'Improved return consistency without high volatility',
      'Hands‑off execution with high transparency',
    ],
    bestFor:
      'Investors seeking steady growth while maintaining strong downside protection.',
  },
  {
    id: 'legacy-elite',
    name: 'Legacy Elite Portfolio',
    portfolioSize: '₹50 Lakh – ₹1 Crore',
    annualFee: '₹65,000 / Year',
    banner:
      'Deeply‑researched equity + multi‑asset framework with rigorous risk control. You keep 75% of all earnings. We retain only 25% as performance share.',
    whoFor: [
      'HNIs seeking curated exposure across public markets',
      'Entrepreneurs building long‑term, tax‑efficient wealth',
      'Investors preparing for inter‑generational planning',
    ],
    features: [
      'High‑conviction equity + factor strategies with drawdown controls',
      'Tax‑aware harvesting and capital preservation levers',
      'Quarterly in‑depth reviews and portfolio stress‑tests',
      'Priority support with custom dashboards',
    ],
    benefits: [
      'Higher alpha potential with risk visibility',
      'End‑to‑end guidance across planning, allocation, and reporting',
      'Premium service and faster turnaround',
    ],
    bestFor:
      'Investors who want a refined, research‑driven portfolio with superior reporting and control.',
  },
  {
    id: 'titanium-wealth',
    name: 'Titanium Wealth Plan',
    portfolioSize: '₹50 Lakh – ₹1 Crore',
    annualFee: '₹85,000 / Year',
    banner:
      'We open and manage your Demat account — for just ₹85,000/year. You keep 75% of all earnings. We retain only 25% as performance share.',
    whoFor: [
      'Senior executives with surplus deployable capital',
      'Successful entrepreneurs seeking multi‑asset growth',
      'Ultra‑strategic planners looking to diversify beyond traditional markets',
      'Wealthy individuals wanting deep control + high sophistication',
    ],
    features: [
      { label: 'Ultra‑Personalized Investment Architecture', desc: 'Ultra‑Personalized Investment Architecture' },
      { label: 'Dedicated Family Wealth Officer', desc: 'Your own financial expert acting as a personal CFO—bridging tax, legal, and investment advice.' },
      { label: 'Private Market Access & Alternatives', desc: 'Entry into exclusive assets like Private Equity, Pre‑IPOs, AIFs, Sovereign Funds & Structured Global ETFs.' },
      { label: 'Dynamic Cross‑Border Asset Allocation', desc: 'Exposure to US/UK/Asia equities, international debt, REITs, and currency‑hedged instruments—compliant with RBI\'s LRS norms.' },
      { label: 'On‑Demand Wealth Reviews', desc: 'Get deep insights into your portfolio anytime, including risk stress‑tests, goal tracking & market alignment reports.' },
      { label: 'Crisis‑Mode Rebalancing Strategy', desc: 'Smart alerts + expert intervention to protect your wealth during economic or geopolitical turbulence.' },
    ],
    benefits: [
      'Complete visibility + top‑tier discretion over high‑value assets',
      'Stronger returns through non‑retail market opportunities',
      'Strategic capital shielding, growth, and tax planning — all in one place',
      'Exceptional service without losing autonomy',
    ],
    bestFor: [
      'Investors who want serious capital multiplication without giving up control',
      'Individuals preparing for international diversification and succession planning',
      'HNIs aiming for global exposure, private market access, and legacy‑grade wealth management',
      'Visionaries who value confidentiality, depth, and data‑driven advisory over generic portfolio handling',
    ],
  },
];

const highlights = [
  'Your money, your control: 75% stays with you, just 25% is utilized by us to create wealth for you.',
  'Global‑Class Investment Exposure: Access private equity, international markets, and high‑yield alternatives — unavailable to retail investors.',
  'Dedicated Family Wealth Officer: Your own private financial strategist who understands your entire wealth ecosystem.',
  'Fully Compliant with RBI & SEBI Regulations: Peace of mind with every move — growth without grey zones.',
  'Live Dashboard & Emergency Rebalancing: Always know your net worth trajectory and activate defense strategies during downturns.',
];

const Portfolio = () => {
  const [active, setActive] = useState(plans[0].id);

  const current = plans.find((p) => p.id === active) || plans[0];

  return (
    <div className="page-portfolio">
      <PageTitle title="Portfolio" />

      {/* Fixed Intro Section (from image 2) */}
      <section className="tf-section portfolio-intro">
        <div className="tf-container">
          <div className="intro-wrap">
            <h2 className="intro-heading"> <span className="brand-gradient">Comprehensive Portfolio Management Solutions</span></h2>
            <div className="intro-sub">
              <strong>Your Money. Your Control. Our Expertise.</strong>
              <span>We specialize in professionally‑managed, transparent, and growth‑focused portfolio handling for all investors.</span>
            </div>

            <p className="intro-note">
              At Century Finance Limited, we believe in trust before transaction. Try a fully managed investment experience before opening your Demat account.
            </p>

            <div className="intro-points">
              <div><strong>Fully Managed Demo Portfolio:</strong> Try our professional handling for just ₹2000, valid for 15 days.</div>
              <div><strong>Transparency First:</strong> No commitment required — move to full service only if satisfied.</div>
              <div><strong>Clarity Guaranteed:</strong> Understand how real investment management works — without risk.</div>
            </div>

            <div className="intro-cta">
              <Link to="/contact" className="tf-button book-now">Book Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation (image 1 tabs) */}
      <section className="tf-section portfolio-plans">
        <div className="tf-container">
          <div className="tabs" role="tablist" aria-label="Portfolio plans">
            {plans.map((p) => (
              <button
                key={p.id}
                role="tab"
                aria-selected={active === p.id}
                aria-controls={`panel-${p.id}`}
                id={`tab-${p.id}`}
                className={`tab ${active === p.id ? 'active' : ''}`}
                onClick={() => setActive(p.id)}
              >
                {p.name}
              </button>
            ))}
            <span className="tab-underline" style={{ ['--active-index']: plans.findIndex((p) => p.id === active) }} />
          </div>

          {/* Plan Card */}
          <div
            id={`panel-${current.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${current.id}`}
            className="plan-card appear"
          >
            <div className="plan-header">
              <h3 className="plan-title">{current.name}</h3>
              <div className="plan-meta">
                <div><span className="label">Portfolio Size:</span> {current.portfolioSize}</div>
                <div><span className="label">Annual Fee:</span> {current.annualFee}</div>
              </div>
            </div>

            <div className="plan-banner">
              <i className="fas fa-check-circle" />
              <span>{current.banner}</span>
            </div>

            <div className="plan-grid">
              <div className="plan-block who">
                <h4>Who It’s For:</h4>
                <ol>
                  {current.whoFor.map((w, i) => (
                    <li key={i}>{w}</li>
                  ))}
                </ol>
              </div>

              <div className="plan-block features">
                <h4>Plan Features:</h4>
                <ul>
                  {current.features.map((f, i) => {
                    if (typeof f === 'string') return (<li key={i}>{f}</li>);
                    return (
                      <li key={i}><strong>{f.label} —</strong> {f.desc}</li>
                    );
                  })}
                </ul>
              </div>

              <div className="plan-block benefits">
                <h4>Benefits:</h4>
                <ol>
                  {current.benefits.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ol>
              </div>

              <div className="plan-block bestfor">
                <h4>Best For:</h4>
                {Array.isArray(current.bestFor) ? (
                  <ul className="bestfor-list">
                    {current.bestFor.map((bf, i) => (
                      <li key={i}>{bf}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{current.bestFor}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights (image 4) */}
      <section className="tf-section highlights-section">
        <div className="tf-container">
          <div className="highlights-card">
            <div className="highlights-title">Important Highlights</div>
            <ul className="highlights-list">
              {highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Callout (separate section with custom bottom padding) */}
      <section className="tf-section contact-section">
        <div className="tf-container">
          <div className="contact-callout">
            <div className="content">
              <p>
                Mail us or book a consultation to understand which plan aligns best with your portfolio and future goals.
              </p>
              <div className="links">
                <span><i className="fas fa-envelope" /> Email: <a href="mailto:info@centuryfinance.com">info@centuryfinance.com</a></span>
                <span><i className="fas fa-globe" /> Website: <a href="https://www.centuryfinance.com" target="_blank" rel="noreferrer">www.centuryfinance.com</a></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
