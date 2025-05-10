import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import CourseSinglePage from "../CourseSinglePage/Tabs/PortfolioTab";

const Portfolio = () => {
  return (
    <Fragment>
      <Navbar />
      <PageTitle pageTitle={"Portfolio"} pagesub={"Portfolio"} />
      <CourseSinglePage />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default Portfolio;
