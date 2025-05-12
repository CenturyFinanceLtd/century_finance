import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import About from "../../components/about/about";
import FunFact2 from "../../components/FunFact2/FunFact2";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";

const AboutPage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>About Us - Century Finance Limited</title>
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
      <PageTitle pageTitle={"About Us"} pagesub={"About"} />
      <About />
      <FunFact2 />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default AboutPage;
