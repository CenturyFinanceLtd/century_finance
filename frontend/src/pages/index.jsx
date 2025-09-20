import Page404 from "./404";
import About01 from "./About01";
import About02 from "./About02";
import Blog from "./Blog";
import Category from "./Category";
import BlogDetails from "./BlogDetails";
import Tag from "./Tag";
import Collection from "./Collection";
import CommingSoon from "./CommingSoon";
import Contact from "./Contact";
import OurCourses from "./OurCourses";
import Faq01 from "./Faq01";
import Faq02 from "./Faq02";
import Home01 from "./Home01";
import Home02 from "./Home02";
import Home03 from "./Home03";
import ItemDetails from "./ItemDetails";
import Login from "./Login";
import OurTeam from "./OurTeam";
import ForgotPassword from "./ForgotPassword";
import Profile from "./Profile";
import RoadMap01 from "./RoadMap01";
import RoadMap02 from "./RoadMap02";
import RoadMap03 from "./RoadMap03";
import SignUp from "./SignUp";
import Testimonials from "./Testimonials";
import Portfolio from "./Portfolio";
import SEO from "../components/seo/SEO";
import PrivacyPolicy from "./PrivacyPolicy";
import RefundPolicy from "./RefundPolicy";
import TermsAndConditions from "./TermsAndConditions";

const SITE = "Century Finance Limited";

const routes = [
  {
    path: "/",
    component: (
      <>
        {" "}
        <SEO
          siteName={SITE}
          title="Home"
          description="Welcome to Century Finance Limited - explore products, updates, and resources."
          keywords="Century Finance Limited, home, finance"
        />{" "}
        <Home01 />{" "}
      </>
    ),
  },
  {
    path: "/home-v2",
    component: (
      <>
        {" "}
        <SEO
          siteName={SITE}
          title="Home v2"
          description="Discover Century Finance Limited - alternative homepage layout."
          keywords="Century Finance Limited, home v2"
        />{" "}
        <Home02 />{" "}
      </>
    ),
  },
  {
    path: "/home-v3",
    component: (
      <>
        {" "}
        <SEO
          siteName={SITE}
          title="Home v3"
          description="Explore Century Finance Limited - v3 layout and sections."
          keywords="Century Finance Limited, home v3"
        />{" "}
        <Home03 />{" "}
      </>
    ),
  },

  {
    path: "/about-v1",
    component: (
      <>
        {" "}
        <SEO
          siteName={SITE}
          title="About"
          description="Learn about Century Finance Limited - our mission, values, and team."
          keywords="about Century Finance Limited, mission, values"
        />{" "}
        <About01 />{" "}
      </>
    ),
  },
  {
    path: "/our-courses",
    component: (
      <>
        {" "}
        <SEO
          siteName={SITE}
          title="Our Courses"
          description="Discover SEBI-certified courses, immersive bootcamps, and trading programs from Century Finance Limited."
          keywords="century finance courses, trading bootcamp, finance training"
        />{" "}
        <OurCourses />{" "}
      </>
    ),
  },
  {
    path: "/about-v2",
    component: (
      <>
        {" "}
        <SEO
          siteName={SITE}
          title="About v2"
          description="About Century Finance Limited - extended overview."
          keywords="about, company, overview"
        />{" "}
        <About02 />{" "}
      </>
    ),
  },

  {
    path: "/roadmap-v1",
    component: (
      <>
        {" "}
        <SEO
          siteName={SITE}
          title="Roadmap"
          description="Our roadmap and milestones at Century Finance Limited."
          keywords="roadmap, milestones, plans"
        />{" "}
        <RoadMap01 />{" "}
      </>
    ),
  },
  {
    path: "/roadmap-v2",
    component: (
      <>
        {" "}
        <SEO
          siteName={SITE}
          title="Roadmap v2"
          description="Upcoming milestones and releases."
          keywords="roadmap v2, releases"
        />{" "}
        <RoadMap02 />{" "}
      </>
    ),
  },
  {
    path: "/roadmap-v3",
    component: (
      <>
        {" "}
        <SEO
          siteName={SITE}
          title="Roadmap v3"
          description="Future plans and timelines."
          keywords="roadmap v3, timelines"
        />{" "}
        <RoadMap03 />{" "}
      </>
    ),
  },

  {
    path: "/signin",
    component: (
      <>
        {" "}
        <SEO
          siteName={SITE}
          title="Sign In"
          description="Access your Century Finance Limited account."
          keywords="signin, login, account"
        />{" "}
        <Login />{" "}
      </>
    ),
  },
  {
    path: "/signup",
    component: (
      <>
        {" "}
        <SEO
          siteName={SITE}
          title="Create Account"
          description="Register a new account at Century Finance Limited."
          keywords="signup, register, create account"
        />{" "}
        <SignUp />{" "}
      </>
    ),
  },
  {
    path: "/forgot",
    component: (
      <>
        {" "}
        <SEO
          siteName={SITE}
          title="Forgot Password"
          description="Reset your account password via email OTP."
          keywords="forgot password, reset"
        />{" "}
        <ForgotPassword />{" "}
      </>
    ),
  },
  {
    path: "/profile",
    component: (
      <>
        {" "}
        <SEO
          siteName={SITE}
          title="Profile"
          description="View and manage your Century Finance Limited profile."
          keywords="profile, account, settings"
        />{" "}
        <Profile />{" "}
      </>
    ),
  },
  {
    path: "/faq-v1",
    component: (
      <>
        {" "}
        <SEO
          siteName={SITE}
          title="FAQs"
          description="Frequently asked questions and answers."
          keywords="faq, questions, help"
        />{" "}
        <Faq01 />{" "}
      </>
    ),
  },
  {
    path: "/faq-v2",
    component: (
      <>
        {" "}
        <SEO
          siteName={SITE}
          title="FAQs v2"
          description="Common questions and help topics."
          keywords="faq v2, support"
        />{" "}
        <Faq02 />{" "}
      </>
    ),
  },
  {
    path: "/our-team",
    component: (
      <>
        {" "}
        <SEO
          siteName={SITE}
          title="Our Team"
          description="Meet the Century Finance Limited team."
          keywords="team, members, company"
        />{" "}
        <OurTeam />{" "}
      </>
    ),
  },
  {
    path: "/collection",
    component: (
      <>
        {" "}
        <SEO
          siteName={SITE}
          title="Collection"
          description="Browse our featured collection."
          keywords="collection, items"
        />{" "}
        <Collection />{" "}
      </>
    ),
  },
  {
    path: "/testimonial",
    component: (
      <>
        {" "}
        <SEO
          siteName={SITE}
          title="Testimonials"
          description="What our users say about us."
          keywords="testimonials, reviews"
        />{" "}
        <Testimonials />{" "}
      </>
    ),
  },
  {
    path: "/item-details",
    component: (
      <>
        {" "}
        <SEO
          siteName={SITE}
          title="Item Details"
          description="Detailed view for a selected item."
          keywords="item details, product"
        />{" "}
        <ItemDetails />{" "}
      </>
    ),
  },
  {
    path: "/comming-soon",
    component: (
      <>
        {" "}
        <SEO
          siteName={SITE}
          title="Coming Soon"
          description="Exciting features are on the way."
          keywords="coming soon, updates"
        />{" "}
        <CommingSoon />{" "}
      </>
    ),
  },
  {
    path: "/page-404",
    component: (
      <>
        {" "}
        <SEO
          siteName={SITE}
          title="Page Not Found"
          description="The page you are looking for does not exist."
          keywords="404, not found"
          noIndex={true}
        />
        <Page404 />{" "}
      </>
    ),
  },

  {
    path: "/blogs",
    component: (
      <>
        {" "}
        <SEO
          siteName={SITE}
          title="Blog"
          description="Latest news, articles, and updates."
          keywords="blog, news, articles"
        />{" "}
        <Blog />{" "}
      </>
    ),
  },
  {
    path: "/blog",
    component: (
      <>
        {" "}
        <SEO
          siteName={SITE}
          title="Blog"
          description="Latest news, articles, and updates."
          keywords="blog, news, articles"
        />{" "}
        <Blog />{" "}
      </>
    ),
  },
  {
    path: "/blogs/category/:category",
    component: (
      <>
        {" "}
        <SEO
          siteName={SITE}
          title="Blog Category"
          description="Browse posts by category."
          keywords="blog, category"
        />{" "}
        <Category />{" "}
      </>
    ),
  },
  {
    path: "/blogs/tag/:tag",
    component: (
      <>
        {" "}
        <SEO
          siteName={SITE}
          title="Blog Tag"
          description="Browse posts by tag."
          keywords="blog, tag"
        />{" "}
        <Tag />{" "}
      </>
    ),
  },
  {
    path: "/blog/:slug",
    component: (
      <>
        {" "}
        <SEO
          siteName={SITE}
          title="Blog Post"
          description="Read this article on Century Finance Limited."
          keywords="blog, article"
        />{" "}
        <BlogDetails />{" "}
      </>
    ),
  },

  {
    path: "/contact",
    component: (
      <>
        {" "}
        <SEO
          siteName={SITE}
          title="Contact"
          description="Get in touch with Century Finance Limited."
          keywords="contact, support, address"
        />{" "}
        <Contact />{" "}
      </>
    ),
  },
  {
    path: "/portfolio",
    component: (
      <>
        {" "}
        <SEO
          siteName={SITE}
          title="Portfolio"
          description="Comprehensive portfolio management solutions by Century Finance Limited."
          keywords="portfolio, investment, wealth management, financial planning"
        />{" "}
        <Portfolio />{" "}
      </>
    ),
  },
  {
    path: "/privacy-policy",
    component: (
      <>
        <SEO siteName={SITE} title="Privacy Policy" description="Privacy Policy for Century Finance Limited" keywords="privacy policy" />
        <PrivacyPolicy />
      </>
    ),
  },
  {
    path: "/refund-policy",
    component: (
      <>
        <SEO siteName={SITE} title="Refund Policy" description="Refund & EMI Policy for Century Finance Limited" keywords="refund policy, emi" />
        <RefundPolicy />
      </>
    ),
  },
  {
    path: "/terms-and-conditions",
    component: (
      <>
        <SEO siteName={SITE} title="Terms & Conditions" description="Terms & Conditions for Century Finance Limited" keywords="terms and conditions" />
        <TermsAndConditions />
      </>
    ),
  },];

export default routes;



