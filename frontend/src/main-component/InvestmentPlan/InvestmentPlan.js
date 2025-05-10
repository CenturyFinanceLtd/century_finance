import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import CourseSinglePage from "../CourseSinglePage/InvestmentPlanTab/InvestmentPlanTab";

const InvestmentPlan = () => {
  return (
    <Fragment>
      <Navbar />
      <PageTitle pageTitle={"Investment Plan"} pagesub={"Investment Plan"} />
      <CourseSinglePage />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default InvestmentPlan;
