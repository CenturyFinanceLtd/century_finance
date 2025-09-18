import React from "react";
import { useState, useEffect } from "react";
import PageTitle from "../components/pagetitle/PageTitle";
import Footer from "../components/footer";
import Team from "../components/team/Team";
import Partner from "../components/partner/Partner";
import dataTeam from "../assets/fake-data/data-team";
import dataPartner from "../assets/fake-data/data-partner";
import "./About01.scss";

function About01(props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { value: "$25.3K", label: "Monthly", icon: "💰" },
    { value: "$430K", label: "Investment", icon: "📈" },
    { value: "10,351", label: "Active Users", icon: "👥" },
    { value: "25+", label: "Years Experience", icon: "🏆" },
  ];

  const features = [
    {
      title: "Expert Training",
      description: "SEBI-certified stock advisors with practical experience",
      icon: "🎯",
    },
    {
      title: "Live Trading",
      description: "Real-world scenarios and live trading simulations",
      icon: "⚡",
    },
    {
      title: "Personalized Learning",
      description: "Customized training programs for every skill level",
      icon: "🎓",
    },
    {
      title: "Global Presence",
      description: "Headquartered in Dubai with branches in Mumbai",
      icon: "🌍",
    },
  ];

  const achievements = [
    { number: "150k+", label: "Courses", color: "#00D4AA" },
    { number: "100k+", label: "Demo Classes", color: "#00B4D8" },
    { number: "100k+", label: "Students", color: "#0077B6" },
    { number: "50k+", label: "Mentors", color: "#023E8A" },
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
                <div className="hero-badge">
                  <span className="badge-icon">⭐</span>
                  <span>25+ Years Of Experience</span>
                </div>
                <h1 className="hero-title">
                  Century Finance
                  <span className="title-highlight">
                    Your Trusted Partner in
                  </span>
                  <span className="title-main">
                    Stock Market Education & Advisory
                  </span>
                </h1>
                <p className="hero-description">
                  Century Finance Limited helps people approach financial
                  markets with clarity and confidence. Our training is based on
                  practical experience and real-world scenarios, led by a
                  SEBI-certified stock advisor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`stat-card ${isVisible ? "slide-up" : ""}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="stat-icon">{stat.icon}</div>
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
                  <h2 className="heading">OUR MISSION</h2>
                </div>
                <p className="section-description">
                  Our mission is to guide you through the world of stocks by
                  offering personalized training, live trading simulations, and
                  actionable investment insights. We guarantee that each learner
                  acquires practical skills, a thorough awareness of the market,
                  and the self-assurance to make wise judgements by going beyond
                  theory.
                </p>

                <h3 className="subsection-title">Global Presence</h3>
                <p className="subsection-text">
                  We are proudly headquartered at Dubai, with our main branch in
                  Mumbai, India. Our presence across diverse financial hubs
                  allows us to better serve our diverse clients and strengthen
                  our commitment towards financial education and services.
                </p>

                <h3 className="subsection-title">Our Values</h3>
                <p className="subsection-text">
                  At Century Finance, we believe in shared success – our values
                  lie in your growth. No matter if you are just starting out or
                  want to improve your strategies, our programs are designed to
                  meet every skill level.
                </p>
              </div>

              <div className="content-visual">
                <div className="visual-card">
                  <div className="visual-header">
                    <h4>Trading Analytics</h4>
                    <div className="status-indicator active"></div>
                  </div>
                  <div className="visual-content">
                    <div className="chart-placeholder">
                      <div className="chart-bars">
                        <div className="bar" style={{ height: "60%" }}></div>
                        <div className="bar" style={{ height: "80%" }}></div>
                        <div className="bar" style={{ height: "45%" }}></div>
                        <div className="bar" style={{ height: "90%" }}></div>
                        <div className="bar" style={{ height: "70%" }}></div>
                      </div>
                    </div>
                    <div className="metrics">
                      <div className="metric">
                        <span className="metric-label">Success Rate</span>
                        <span className="metric-value">94.2%</span>
                      </div>
                      <div className="metric">
                        <span className="metric-label">Active Traders</span>
                        <span className="metric-value">12,847</span>
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
                WHY CHOOSE <span>CENTURY FINANCE?</span>
              </h2>
            </div>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`feature-card ${isVisible ? "fade-in-up" : ""}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="feature-icon">{feature.icon}</div>
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
                  key={index}
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
