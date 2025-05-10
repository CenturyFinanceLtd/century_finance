import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import CourseSinglePage from "../CourseSinglePage/FinanceTab/FinanceTab";

const Finance = () => {
  return (
    <Fragment>
      <Navbar />
      <PageTitle pageTitle={"Finance"} pagesub={"Finance"} />
      <CourseSinglePage />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default Finance;
