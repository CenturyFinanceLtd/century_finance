import React, { useEffect, useState } from "react";
import PageTitle from "../components/pagetitle/PageTitle";
import Footer from "../components/footer";
import Team from "../components/team/Team";
import Partner from "../components/partner/Partner";
import dataTeam from "../assets/fake-data/data-team";
import dataPartner from "../assets/fake-data/data-partner";
import "./About01.scss";

function About01() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    {
      value: "25+",
      label: "Years immersed in the capital markets",
      abbreviation: "YR",
    },
    {
      value: "12K",
      label: "Learners mentored across three countries",
      abbreviation: "LM",
    },
    {
      value: "$430M",
      label: "Capital guided through advisory mandates",
      abbreviation: "CG",
    },
    {
      value: "98%",
      label: "Client retention powered by disciplined processes",
      abbreviation: "CR",
    },
  ];

  const features = [
    {
      title: "Research First",
      description:
        "We build every recommendation on deep fundamental and quantitative analysis.",
      abbreviation: "RF",
    },
    {
      title: "Live Market Labs",
      description:
        "Participants learn in simulated trading rooms that mirror real volatility.",
      abbreviation: "LM",
    },
    {
      title: "Personalised Pathways",
      description:
        "Flexible learning tracks help beginners, pros, and entrepreneurs grow together.",
      abbreviation: "PP",
    },
    {
      title: "Global Reach",
      description:
        "Dubai headquarters with satellite desks in Mumbai and Kochi support local insight.",
      abbreviation: "GR",
    },
  ];

  const achievements = [
    { number: "150+", label: "Corporate programs delivered", color: "#00D4AA" },
    { number: "100K", label: "Training hours streamed", color: "#00B4D8" },
    { number: "40", label: "Certified mentors on the desk", color: "#0077B6" },
    { number: "24/5", label: "Research support coverage", color: "#023E8A" },
  ];

  const approachHighlights = [
    "Blend classroom clarity with market-floor reality",
    "Meet every learner where they are with structured roadmaps",
    "Scale portfolios responsibly through documented playbooks",
    "Commit to ethics, compliance, and transparent reporting",
  ];

  return (
    <div className="page-about home-1">
      <div className="about-v1">
        <PageTitle title="About Us" />

        {/* Hero Section */}
        <section className={`hero-section ${isVisible ? "fade-in" : ""}`}>
          <div className="hero-background">
            <div className="container">
              <div className="hero-content">
                <div className="hero-badge" aria-label="Century Finance experience">
                  <span className="badge-icon">CF</span>
                  <span>Since 1999</span>
                </div>
                <h1 className="hero-title">
                  Century Finance
                  <span className="title-highlight">Market wisdom for next-gen investors</span>
                  <span className="title-main">
                    We train, advise, and build disciplined investors for the long term.
                  </span>
                </h1>
                <p className="hero-description">
                  Century Finance Limited is a capital markets learning and advisory house.
                  From our Dubai headquarters we serve investors, founders, and family offices
                  in the Middle East and India through structured learning journeys,
                  research-backed advisory, and a community of traders who never stop testing ideas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section" aria-label="Century Finance in numbers">
          <div className="container">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`stat-card ${isVisible ? "slide-up" : ""}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="stat-icon" aria-hidden="true">
                    {stat.abbreviation}
                  </div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Content Section */}
        <section className="about-content-section">
          <div className="container">
            <div className="content-grid">
              <div className="content-text">
                <div className="tf-heading style-2 mission-heading">
                  <h2 className="heading">Our Mission</h2>
                </div>
                <p className="section-description">
                  We exist to demystify equities, commodities, and currency markets for serious investors.
                  Every playbook we teach is stress-tested by our trading desk and documented for reuse,
                  so learners graduate with a calm, repeatable process backed by data, risk controls,
                  and clear reporting structures.
                </p>

                <h3 className="subsection-title">How We Work</h3>
                <p className="subsection-text">
                  Training programmes combine policy, macro narratives, and price action frameworks.
                  Advisory clients receive independent research notes, model portfolios, and weekly pulse reviews
                  that translate noise into structured action.
                </p>

                <h3 className="subsection-title">Our Promise</h3>
                <ul className="subsection-list">
                  {approachHighlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="content-visual">
                <div className="visual-card">
                  <div className="visual-header">
                    <h4>Learning Journey Snapshot</h4>
                    <div className="status-indicator active" aria-hidden="true"></div>
                  </div>
                  <div className="visual-content">
                    <div className="chart-placeholder" aria-hidden="true">
                      <div className="chart-bars">
                        <div className="bar" style={{ height: "55%" }}></div>
                        <div className="bar" style={{ height: "70%" }}></div>
                        <div className="bar" style={{ height: "45%" }}></div>
                        <div className="bar" style={{ height: "85%" }}></div>
                        <div className="bar" style={{ height: "95%" }}></div>
                      </div>
                    </div>
                    <div className="metrics">
                      <div className="metric">
                        <span className="metric-label">Certification Rate</span>
                        <span className="metric-value">92%</span>
                      </div>
                      <div className="metric">
                        <span className="metric-label">Average Portfolio Lift</span>
                        <span className="metric-value">+18%</span>
                      </div>
                      <div className="metric">
                        <span className="metric-label">Mentorship Sessions</span>
                        <span className="metric-value">3,400+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="container">
            <div className="tf-heading features-heading">
              <h2 className="heading">
                Why Choose <span>Century Finance?</span>
              </h2>
            </div>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`feature-card ${isVisible ? "fade-in-up" : ""}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="feature-icon" aria-hidden="true">
                    {feature.abbreviation}
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="achievements-section">
          <div className="container">
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.label}
                  className={`achievement-card ${isVisible ? "scale-in" : ""}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className="achievement-number"
                    style={{ color: achievement.color }}
                  >
                    {achievement.number}
                  </div>
                  <div className="achievement-label">{achievement.label}</div>
                  <div
                    className="achievement-line"
                    style={{ backgroundColor: achievement.color }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Team data={dataTeam} />
        <Partner data={dataPartner} />

        <Footer />
      </div>
    </div>
  );
}

export default About01;
