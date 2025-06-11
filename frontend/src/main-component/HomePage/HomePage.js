import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/hero/hero";
import About from "../../components/about/about";
import WhyCentury from "../../components/WhyCentury/WhyCentury";
import WhatdoWeOffer from "../../components/WhatDoWeOffer/WhatDoWeOffer";
import OurMIssion from "../../components/OurMission/OurMission";
import FaqSection from "../../components/FaqSection/FaqSection";
// import Newslatter from "../../components/Newslatter/Newslatter";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>
          Century Finance Limited | Investment & Finance Solutions in India
        </title>
        <meta
          name="description"
          content="Explore trusted financial services with Century Finance Limited. Get expert investment, equity, commodity, and global marketing training all in one place."
        />
        <meta
          name="keywords"
          content="century finance, century finance limited, century finance company, century finance company ltd, century finance online"
        />
      </Helmet>

      <Navbar hclass={"wpo-header-style-4"} />
      <Hero />
      <About />
      <WhyCentury />

      <WhatdoWeOffer />
      {/* <WhatdoWeOffer2 /> */}
      <OurMIssion />
      <FaqSection />
      {/* <Newslatter /> */}
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default HomePage;
