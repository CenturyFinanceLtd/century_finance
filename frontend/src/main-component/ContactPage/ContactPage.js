import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Contactpage from "../../components/Contactpage/Contactpage";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";

const ContactPage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Contact Us - Century Finance Limited</title>
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
      <PageTitle pageTitle={"Contact Us"} pagesub={"Contact"} />
      <Contactpage />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default ContactPage;
