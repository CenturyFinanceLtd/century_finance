import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/hero/hero";
import About from "../../components/about/about";
import WhyCentury from "../../components/WhyCentury/WhyCentury";
import WhatdoWeOffer from "../../components/WhatDoWeOffer/WhatDoWeOffer";
import WhatdoWeOffer2 from "../../components/WhatDoWeOffer2/WhatDoWeOffer2";
import OurMIssion from "../../components/OurMission/OurMission";
import FaqSection from "../../components/FaqSection/FaqSection";
import Newslatter from "../../components/Newslatter/Newslatter";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Home - Century Finance Limited</title>
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

      <Navbar hclass={"wpo-header-style-4"} />
      <Hero />
      <About />
      <WhyCentury />
      <WhatdoWeOffer />
      <WhatdoWeOffer2 />
      <OurMIssion />
      <FaqSection />
      <Newslatter />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default HomePage;
