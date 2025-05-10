import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import CourseSinglePage from "../CourseSinglePage/TrainingProgramTabs/TrainingTab";

const TrainingProgram = () => {
  return (
    <Fragment>
      <Navbar />
      <PageTitle pageTitle={"Training Program"} pagesub={"Training Program"} />
      <CourseSinglePage />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default TrainingProgram;
