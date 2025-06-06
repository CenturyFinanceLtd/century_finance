import React, { useState } from "react";
// Retain reactstrap components for Tab Content rendering
import {
  TabContent,
  TabPane,
  Row as ReactstrapRow,
  Col as ReactstrapCol,
} from "reactstrap";
import classnames from "classnames";
import ApplianceFurnitureLoan from "./ApplianceFurnitureLoan";
import PersonalBusinessLoan from "./PersonalBusinessLoan";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faCrown,
} from "@fortawesome/free-solid-svg-icons"; // Or whichever icons you are using

const IconBasicPlan = () => <FontAwesomeIcon icon={faLightbulb} />;
const IconPremiumPlan = () => <FontAwesomeIcon icon={faCrown} />;

const FinanceServiceTab = ({ EventsDetails }) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  // Updated tab data to include descriptions for the tab buttons
  const tabInfo = [
    {
      id: "1",
      title: "Appliance & Finance Loan",
      IconComponent: IconBasicPlan,
      description:
        "", // Content for the tab button
      activeDescription:
        "", // Content for the active tab button
    },
    {
      id: "2",
      title: "Personal & Business Loan",
      IconComponent: IconPremiumPlan,
      description:
        "",
      activeDescription:
        "",
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
              <div className="col col-lg-4 col-md-6 col-6" key={tab.id}>
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
                  <div className="feature-item">
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
                <ApplianceFurnitureLoan EventsDetails={EventsDetails} />
              </ReactstrapCol>
            </ReactstrapRow>
          </TabPane>
          <TabPane tabId="2">
            <ReactstrapRow>
              <ReactstrapCol sm="12">
                <PersonalBusinessLoan EventsDetails={EventsDetails} />
              </ReactstrapCol>
            </ReactstrapRow>
          </TabPane>
         
        </TabContent>
      </div>
    </section>
  );
};

export default FinanceServiceTab;
