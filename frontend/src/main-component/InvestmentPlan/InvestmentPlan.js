import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import CourseSinglePage from "../CourseSinglePage/InvestmentPlanTab/InvestmentPlanTab";

const InvestmentPlan = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Investment Plan - Century Finance Limited</title>
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
      <PageTitle pageTitle={"Investment Plan"} pagesub={"Investment Plan"} />
      <CourseSinglePage />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default InvestmentPlan;
