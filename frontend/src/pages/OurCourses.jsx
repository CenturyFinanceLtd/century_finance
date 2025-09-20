import React from "react";
import PageTitle from "../components/pagetitle/PageTitle";
import Partner from "../components/partner/Partner";
import Footer from "../components/footer";
import Collection from "../components/collection/Collection";
import PlacementTrack from "../components/placement-track/PlacementTrack";
import dataCollection from "../assets/fake-data/data-collection";
import dataPartner from "../assets/fake-data/data-partner";
import placementTracks from "../assets/fake-data/data-placement-tracks";
import "./OurCourses.scss";

const highlights = [
  {
    title: "Guaranteed Placement Track",
    description:
      "Dedicated placement cell with interview mentoring, hiring drives, and employer partnerships to secure your first role.",
  },
  {
    title: "Certified Courses",
    description:
      "Earn industry-recognised credentials from SEBI-certified mentors with rigorous assessments and project-based evaluations.",
  },
  {
    title: "Placement-Ready Skills",
    description:
      "Hands-on trading simulations, soft-skill mastery, and portfolio storytelling so you walk into interviews with confidence.",
  },
];

function OurCourses() {
  return (
    <div className="page-our-courses">
      <PageTitle title="Our Courses" />

      <section className="tf-section courses-overview">
        <div className="tf-container">
          <div className="overview-grid">
            <div className="overview-content">
              <h2>Build Confidence With Placement-Ready Learning</h2>
              <p>
                Explore immersive bootcamps and online cohorts designed for aspiring traders, finance professionals,
                and technology enthusiasts. Every program blends structured curriculum with real-market exposure,
                certification pathways, and one-on-one mentor guidance culminating in guaranteed placement support.
              </p>
              <ul className="overview-highlights">
                {highlights.map((item) => (
                  <li key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="overview-note">
              <span className="note-tag">Results that matter</span>
              <p>
                From short-term accelerators to full-stack mastery programs, you receive lifetime access to premium
                resources, execution frameworks, dedicated placement managers, and post-program community support.
              </p>
              <div className="note-series">
                <h4>Placement-ready program series</h4>
                <ul>
                  <li>
                    <strong>Code Craft Series:</strong> Tailored for B.Tech and engineering learners to convert classroom
                    knowledge into production-ready code and software careers.
                  </li>
                  <li>
                    <strong>Campus Trader Series:</strong> Open to anyone passionate about markets, trading, and finance with
                    live dealing room practice and SEBI-aligned market frameworks.
                  </li>
                  <li>
                    <strong>Applied Business Analytics &amp; Management Series:</strong> Built for business students to sharpen
                    analytics, HR, and management decision-making with real corporate case studies.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PlacementTrack tracks={placementTracks} />

      <section className="tf-section courses-showcase">
        <div className="tf-container narrow">
          <div className="tf-heading align-center">
            <h2 className="heading">Explore Our Structured Programs</h2>
            <p className="sub-heading">
              Pick the cohort that aligns with your ambitionâ€”from foundational finance to advanced analytics and
              technology specialisations.
            </p>
          </div>
        </div>
        <Collection data={dataCollection} />
      </section>

      <Partner data={dataPartner} />

      <Footer />
    </div>
  );
}

export default OurCourses;
