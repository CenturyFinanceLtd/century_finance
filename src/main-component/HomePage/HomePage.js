import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/hero/hero';
import About from '../../components/about/about';
import WhyCentury from '../../components/WhyCentury/WhyCentury';
import WhatdoWeOffer from '../../components/WhatDoWeOffer/WhatDoWeOffer';
import WhatdoWeOffer2 from '../../components/WhatDoWeOffer2/WhatDoWeOffer2';
import OurMIssion from '../../components/OurMission/OurMission';
import CategorySection from '../../components/CategorySection/CategorySection';
import CourseSection from '../../components/CourseSection/CourseSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import TeamSection from '../../components/TeamSection/TeamSection';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Newslatter from '../../components/Newslatter/Newslatter';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';

const HomePage =() => {
    return (
      <Fragment>
        <Navbar hclass={"wpo-header-style-4"} />
        <Hero />
        <About />
        <WhyCentury />
        <WhatdoWeOffer />
        <WhatdoWeOffer2 />
        <OurMIssion />
        {/* <CategorySection/> */}
        <CourseSection />
        <Testimonial />
        <TeamSection pbClass={"pb-big"} />
        <ChooseSection />
        <BlogSection />
        <Newslatter />
        <Footer />
        <Scrollbar />
      </Fragment>
    );
};
export default HomePage;