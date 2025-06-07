import React, { useState } from "react";
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
} from "@fortawesome/free-solid-svg-icons";

const IconBasicPlan = () => <FontAwesomeIcon icon={faLightbulb} />;
const IconPremiumPlan = () => <FontAwesomeIcon icon={faCrown} />;

const FinanceServiceTab = ({ EventsDetails }) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const tabInfo = [
    {
      id: "1",
      title: "Appliance & Finance Loan",
      IconComponent: IconBasicPlan,
      description: "",
      activeDescription: "",
    },
    {
      id: "2",
      title: "Personal & Business Loan",
      IconComponent: IconPremiumPlan,
      description: "",
      activeDescription: "",
    },
  ];

  return (
    <section className="wpo-features-area section-padding w-100">
      <div className="w-100 px-0">
        <div className="features-wrap w-100">
          <div className="row mx-0">
            {tabInfo.map((tab) => (
              <div className="col-lg-4 col-md-6 col-6 px-2" key={tab.id}>
                <div
                  className={classnames(
                    "feature-item-wrap item",
                    { active: activeTab === tab.id }
                  )}
                  onClick={() => toggle(tab.id)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) =>
                    (e.key === "Enter" || e.key === " ") && toggle(tab.id)
                  }
                  style={{ cursor: "pointer" }}
                >
                  <div className="feature-item">
                    <div className="icon" style={{ fontSize: "30px" }}>
                      <tab.IconComponent />
                    </div>
                    <div className="feature-text">
                      <h2>{tab.title}</h2>
                      <p>{tab.description}</p>
                    </div>
                  </div>
                  <div className="feature-item-hidden">
                    <div className="icon" style={{ fontSize: "30px" }}>
                      <tab.IconComponent />
                    </div>
                    <div className="feature-text">
                      <h2>{tab.title}</h2>
                      <p>{tab.activeDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content Area */}
      <div className="wpo-course-details-text mt-5 w-100 px-0">
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <ReactstrapRow className="mx-0">
              <ReactstrapCol sm="12" className="px-0">
                <ApplianceFurnitureLoan EventsDetails={EventsDetails} />
              </ReactstrapCol>
            </ReactstrapRow>
          </TabPane>
          <TabPane tabId="2">
            <ReactstrapRow className="mx-0">
              <ReactstrapCol sm="12" className="px-0">
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
