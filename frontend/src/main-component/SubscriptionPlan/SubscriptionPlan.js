import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import CourseSinglePage from "../CourseSinglePage/SubscriptionPlanTab/SubscriptionPlanTab";
import FAQ from "./FaqSection"

const CallsSubscriptionPlan = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Calls Subscription Plan - Century Finance Limited</title>
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
      <PageTitle pageTitle={"Calls Subscription Plan"} pagesub={"Calls Subscription Plan"} bgImage="/bg-image/call.png" />
      <CourseSinglePage />
      <FAQ />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default CallsSubscriptionPlan;
