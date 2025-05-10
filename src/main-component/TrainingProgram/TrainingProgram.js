import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import Newslatter from "../../components/Newslatter/Newslatter";

import Features from "../../components/Features/Features";
import CourseSinglePage from "../CourseSinglePage/Tabs/TrainingTab";

const TrainingProgram = () => {
  return (
    <Fragment>
      <Navbar />
      <PageTitle pageTitle={"Training Program"} pagesub={"Training Program"} />
      {/* <Features /> */}
      <CourseSinglePage />

      <Newslatter />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default TrainingProgram;
