import React, { useState } from "react";
// Retain reactstrap components for Tab Content rendering
import {
  TabContent,
  TabPane,
  Row as ReactstrapRow,
  Col as ReactstrapCol,
} from "reactstrap";
import classnames from "classnames";
import SmartSaver from "./SmartSaver";
import RichBoast from "./RichBoast";
import MoneyMax from "./MoneyMax";
import WealthBoast from "./WealthBoast";
import MoneyKickstart from "./MoneyKickstart";
import FastTrack from "./FastTrack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faCrown,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons"; // Or whichever icons you are using
import './style.css'

const IconBasicPlan = () => <FontAwesomeIcon icon={faLightbulb} />;
const IconPremiumPlan = () => <FontAwesomeIcon icon={faCrown} />;
const IconLearningToEarningPlan = () => <FontAwesomeIcon icon={faChartLine} />;

const InvestmentPlanTab = ({ EventsDetails }) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  // Updated tab data to include descriptions for the tab buttons
  const tabInfo = [
    {
      id: "1",
      title: "Smart Saver",
      IconComponent: IconBasicPlan,
      description:
        "Start your trading journey with foundational knowledge in key markets.", // Content for the tab button
      activeDescription:
        "Start your trading journey with foundational knowledge in key markets.", // Content for the active tab button
    },
    {
      id: "2",
      title: "Rich Boast",
      IconComponent: IconPremiumPlan,
      description:
        "Elevate your trading skills with advanced strategies and in-depth insights.",
      activeDescription:
        "Elevate your trading skills with advanced strategies and in-depth insights.",
    },
    {
      id: "3",
      title: "Money Max",
      IconComponent: IconLearningToEarningPlan,
      description:
        "Transform your expertise into tangible results and master the art of profitable trading.",
      activeDescription:
        "Transform your expertise into tangible results and master the art of profitable trading.",
    },
    {
      id: "4",
      title: "Wealth Boast",
      IconComponent: IconBasicPlan,
      description:
        "Start your trading journey with foundational knowledge in key markets.", // Content for the tab button
      activeDescription:
        "Start your trading journey with foundational knowledge in key markets.", // Content for the active tab button
    },
    {
      id: "5",
      title: "Money Kickstart",
      IconComponent: IconPremiumPlan,
      description:
        "Elevate your trading skills with advanced strategies and in-depth insights.",
      activeDescription:
        "Elevate your trading skills with advanced strategies and in-depth insights.",
    },
    {
      id: "6",
      title: "FastTrack",
      IconComponent: IconLearningToEarningPlan,
      description:
        "Transform your expertise into tangible results and master the art of profitable trading.",
      activeDescription:
        "Transform your expertise into tangible results and master the art of profitable trading.",
    },
  ];

  return (
    // Use <section> and classes from the Features component example
    <section className="wpo-features-area section-padding">
      {" "}
      {/* section-padding from original CourseTab */}
      <div className="container-fluid">
        {" "}
        {/* Class from Features component */}
        <div className="features-wrap">
          {" "}
          {/* Class from Features component */}
          <div className="row">
            {" "}
            {/* Bootstrap-like row for grid */}
            {tabInfo.map((tab) => (
              // Ensure all column classes from Features example are used
              <div className="col col-lg-2 col-md-6 col-12" key={tab.id}>
                <div
                  // Add 'item' as a base class for styling, 'active' when selected
                  className={classnames(
                    "feature-item-wrap",
                    "item", // Assuming 'item' is a general class for these elements
                    { active: activeTab === tab.id }
                  )}
                  onClick={() => toggle(tab.id)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) =>
                    (e.key === "Enter" || e.key === " ") && toggle(tab.id)
                  }
                  style={{ cursor: "pointer" }} // Explicitly set cursor
                >
                  {/* Content for the tab button in its default state */}
                  <div className="feature-item excep">
                    <div className="icon" style={{ fontSize: "30px" }}>
                      <tab.IconComponent />
                    </div>
                    <div className="feature-text">
                      <h2>{tab.title}</h2>
                      <p>{tab.description}</p>{" "}
                      {/* Description visible on the tab */}
                    </div>
                  </div>
                  {/* Content for the tab button when it's active
                      CSS should make this visible and hide ".feature-item" when parent is ".active" */}
                  <div className="feature-item-hidden">
                    <div className="icon" style={{ fontSize: "30px" }}>
                      <tab.IconComponent />{" "}
                      {/* Icon could be styled differently or be different if needed */}
                    </div>
                    <div className="feature-text">
                      <h2>{tab.title}</h2>
                      <p>{tab.activeDescription}</p>{" "}
                      {/* Potentially different/more detailed text for active state */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Tab Content Area - This displays the main content for each tab */}
      <div className="wpo-course-details-text" style={{ marginTop: "30px" }}>
        {" "}
        {/* Added margin for visual separation */}
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <ReactstrapRow>
              <ReactstrapCol sm="12">
                <SmartSaver EventsDetails={EventsDetails} />
              </ReactstrapCol>
            </ReactstrapRow>
          </TabPane>
          <TabPane tabId="2">
            <ReactstrapRow>
              <ReactstrapCol sm="12">
                <RichBoast EventsDetails={EventsDetails} />
              </ReactstrapCol>
            </ReactstrapRow>
          </TabPane>
          <TabPane tabId="3">
            <ReactstrapRow>
              <ReactstrapCol sm="12">
                <MoneyMax EventsDetails={EventsDetails} />
              </ReactstrapCol>
            </ReactstrapRow>
          </TabPane>
          <TabPane tabId="4">
            <ReactstrapRow>
              <ReactstrapCol sm="12">
                <WealthBoast EventsDetails={EventsDetails} />
              </ReactstrapCol>
            </ReactstrapRow>
          </TabPane>
          <TabPane tabId="5">
            <ReactstrapRow>
              <ReactstrapCol sm="12">
                <MoneyKickstart EventsDetails={EventsDetails} />
              </ReactstrapCol>
            </ReactstrapRow>
          </TabPane>
          <TabPane tabId="6">
            <ReactstrapRow>
              <ReactstrapCol sm="12">
                <FastTrack EventsDetails={EventsDetails} />
              </ReactstrapCol>
            </ReactstrapRow>
          </TabPane>
        </TabContent>
      </div>
    </section>
  );
};

export default InvestmentPlanTab;
