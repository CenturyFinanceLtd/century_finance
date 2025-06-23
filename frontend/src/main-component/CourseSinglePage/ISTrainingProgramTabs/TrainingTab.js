import React, { useState } from "react";
// Retain reactstrap components for Tab Content rendering
import {
  TabContent,
  TabPane,
  Row as ReactstrapRow,
  Col as ReactstrapCol,
} from "reactstrap";
import classnames from "classnames";
import { useSelector } from "react-redux"; // To get authentication status and user data
import { useNavigate, useLocation } from "react-router-dom"; // To redirect to login
import { toast } from "react-toastify"; // For notifications
import BasicPlan from "./BasicPlan";
import PremiumPlan from "./PremiumPlan";

// We will create BookingModal.js next. For now, assume it exists.
import BookingModal from "../BookingModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faCrown,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons"; // Or whichever icons you are using

const IconBasicPlan = () => <FontAwesomeIcon icon={faLightbulb} />;
const IconPremiumPlan = () => <FontAwesomeIcon icon={faCrown} />;
const IconLearningToEarningPlan = () => <FontAwesomeIcon icon={faChartLine} />;

const TrainingTab = ({ EventsDetails }) => {
  const [activeTab, setActiveTab] = useState("1");
  const [isBookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedPlanData, setSelectedPlanData] = useState(null);

  const { isAuthenticated, user: authUser } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const location = useLocation(); // To get current path for redirecting back after login

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const courseName = "Training Program"; // Static for this specific tab component

  // Updated tab data to include descriptions for the tab buttons
  // Store plan details including price and the component to render
  const tabInfo = [
    {
      id: "1",
      title: "Basic Plan",
      IconComponent: IconBasicPlan,
      description: "Fee: Just 45,000 INR",
      activeDescription: "Fee: 45,000 INR",
      price: 45000, // Actual numeric price
      PlanComponent: BasicPlan, // Component to render for this tab's content
    },
    {
      id: "2",
      title: "Premium Plan",
      IconComponent: IconPremiumPlan,
      description: "Fee: Just 85,000 INR",
      activeDescription: "Fee: Just 85,000 INR",
      price: 85000,
      PlanComponent: PremiumPlan,
    },
   
  ];

  const handleBookNowClick = (planTitle, planPrice) => {
    if (!isAuthenticated || !authUser) {
      toast.info("Please log in to book a plan.");
      // Redirect to login, passing the current path to return to after login
      navigate("/login", {
        state: { from: location.pathname + location.search },
      });
      return;
    }
    // User is logged in, proceed to open modal
    setSelectedPlanData({
      courseName: courseName,
      planName: planTitle,
      planPrice: planPrice,
      // Pass relevant user data for pre-filling the form
      // Ensure authUser contains these fields from your Redux store
      currentUser: {
        fullName: authUser.fullName,
        email: authUser.email,
        phoneNumber: authUser.phoneNumber,
        fatherName: authUser.fatherName,
        universityOrCollege: authUser.universityOrCollege,
        // Do NOT pass password
      },
    });
    setBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setBookingModalOpen(false);
    setSelectedPlanData(null); // Clear selected plan data when modal closes
  };

  return (
    // Use <section> and classes from the Features component example
    <section className="wpo-features-area section-padding training-tab">
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
              <div className="col-lg-6 col-md-6 col-6 px-6" key={tab.id}>
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
      {/* Tab Content Area - Renders the selected plan's component */}
      <div className="wpo-course-details-text" style={{ marginTop: "30px" }}>
        <TabContent activeTab={activeTab}>
          {tabInfo.map((tab) => {
            const PlanComponentToRender = tab.PlanComponent;
            return (
              <TabPane tabId={tab.id} key={`content-${tab.id}`}>
                <ReactstrapRow>
                  <ReactstrapCol sm="12">
                    {/* Pass necessary props to the plan component */}
                    <PlanComponentToRender
                      EventsDetails={EventsDetails} // Existing prop
                      planName={tab.title} // Pass plan name
                      planPrice={tab.price} // Pass plan price
                      onBookNow={() => handleBookNowClick(tab.title, tab.price)} // Pass booking handler
                    />
                  </ReactstrapCol>
                </ReactstrapRow>
              </TabPane>
            );
          })}
        </TabContent>
      </div>
      {/* Booking Modal */}
      {isBookingModalOpen && selectedPlanData && (
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={handleCloseBookingModal}
          courseName={selectedPlanData.courseName}
          planName={selectedPlanData.planName}
          planPrice={selectedPlanData.planPrice}
          currentUserData={selectedPlanData.currentUser}
          // You will also need to pass a function to handle form submission from the modal
          // onSubmitBooking={handleBookingSubmit}
        />
      )}
    </section>
  );
};

export default TrainingTab;
