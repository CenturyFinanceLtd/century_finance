import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage/HomePage'
// import CoursePage from '../CoursePage/CoursePage';
import AboutPage from '../AboutPage/AboutPage';
import TeamPage from '../TeamPage/TeamPage';
import TeamSinglePage from '../TeamSinglePage/TeamSinglePage';
import GalleryPage from '../GalleryPage/GalleryPage';
import ShopPage from '../ShopPage'
import ProductSinglePage from '../ProductSinglePage';
import CartPage from '../CartPage';
import CheckoutPage from '../CheckoutPage';
import OrderRecived from '../OrderRecived';
import BlogPageFullwidth from '../BlogPageFullwidth/BlogPageFullwidth'
import BlogDetails from '../BlogDetails/BlogDetails'
import BlogDetailsFull from '../BlogDetailsFull/BlogDetailsFull'
import ContactPage from '../ContactPage/ContactPage';
import BeComeTeacherPage from '../BeComeTeacherPage/BeComeTeacherPage';
import LessonPage from '../LessonPage/LessonPage';
import PrivacyPage from '../PrivacyPage/PrivacyPage';
import TermsPage from '../TermsPage/TermsPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import LoginPage from '../LoginPage';
import SignUpPage from '../SignUpPage';
import ForgotPassword from '../ForgotPassword';
import OnlineCourses from '../OnlineCourses/OnlineCourses';
import TrainingProgram from "../TrainingProgram/TrainingProgram";
import Portfolio from "../Portfolio/Portfolio";
import SubscriptionPlan from "../SubscriptionPlan/SubscriptionPlan";
import Investment from "../Investment/Investment";
import FinanceService from "../FinanceService/FinanceService";
import VerifyOtpPage from "../SignUpPage/VerifyOtpPage";
import EditProfilePage from "../EditProfilePage";
import Equity from "../EquityMarket/Equity";
import Commodities from "../Commodities/Commodities";
import ForeignMarket from "../Crypto/Crypto";

import Currencies from "../Currencies/Currencies";
import VerifyResetOtp from "../ForgotPassword/VerifyResetOtp";
import ResetPasswordPage from "../ForgotPassword/ResetPasswordPage";
import RefundPolicy from "../RefundPolicy/RefundPolicy"
import FoundationCourse from "../OnlineCourses/OcPages/FoundationCourse"
import IgniteCourse from "../OnlineCourses/OcPages/IgniteCourse";
import ExplorerCourse from "../OnlineCourses/OcPages/ExplorerCourse";
import AdvanceEdgeCourse from "../OnlineCourses/OcPages/AdvanceEdgeCourse";
import TraderProCourse from "../OnlineCourses/OcPages/TraderProCourse";
import  MarketMasterCourse from "../OnlineCourses/OcPages/MarketMasterCourse";
import  IndexWizardCourse from "../OnlineCourses/OcPages/IndexWizardCourse";
import   GlobalAnalystCourse from "../OnlineCourses/OcPages/GlobalAnalystCourse";
import  WealthMentorCourse  from "../OnlineCourses/OcPages/WealthMentorCourse";
import   PremiumPlanCourse from "../OnlineCourses/OcPages/PremiumPlanCourse";
import  UltraPrimeCourse from "../OnlineCourses/OcPages/UltraPrimeCourse";
import  EliteCourse from "../OnlineCourses/OcPages/EliteCourse";

const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="about-us" element={<AboutPage />} />
          {/* <Route path="course" element={<CoursePage />} /> */}
          <Route path="lesson" element={<LessonPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="teacher" element={<TeamPage />} />
          <Route path="team-single/:slug" element={<TeamSinglePage />} />
          <Route path="become-teacher" element={<BeComeTeacherPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="product-single/:slug" element={<ProductSinglePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="order-received" element={<OrderRecived />} />
          <Route path="privacy-policy" element={<PrivacyPage />} />
          <Route path="terms-and-conditions" element={<TermsPage />} />
          <Route path="blogs" element={<BlogPageFullwidth />} />
          <Route path="blog/:slug" element={<BlogDetails />} />
          <Route
            path="blog-single-fullwidth/:slug"
            element={<BlogDetailsFull />}
          />
          <Route path="*" element={<ErrorPage />} />
          <Route path="contactus" element={<ContactPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<SignUpPage />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="online-courses" element={<OnlineCourses />} />
          <Route path="training-program" element={<TrainingProgram />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route
            path="calls-subscription-plan"
            element={<SubscriptionPlan />}
          />
          <Route path="investment" element={<Investment />} />
          <Route path="finance-services" element={<FinanceService />} />
          <Route path="/verify-otp" element={<VerifyOtpPage />} />
          <Route path="/edit-profile" element={<EditProfilePage />} />
          <Route path="/equity" element={<Equity />} />
          <Route path="/commodities" element={<Commodities />} />
          <Route path="/foreign-market" element={<ForeignMarket />} />
          <Route path="/currencies" element={<Currencies />} />
          <Route path="/verify-reset-otp" element={<VerifyResetOtp />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route
            path="/online-courses/foundation-course"
            element={<FoundationCourse />}
          />
          <Route
            path="/online-courses/ignite-course"
            element={<IgniteCourse />}
          />
          <Route
            path="/online-courses/explorer-course"
            element={<ExplorerCourse/>}
          />
           <Route
            path="/online-courses/advance-edge-course"
            element={<AdvanceEdgeCourse/>}
          />
          <Route
            path="/online-courses/trader-pro-course"
            element={<TraderProCourse/>}
          />
           <Route
            path="/online-courses/market-master-course"
            element={< MarketMasterCourse/>}
          />
           <Route
            path="/online-courses/IndexWizardCourse"
            element={< IndexWizardCourse/>}
          />
           <Route
            path="/online-courses/global-analyst-course"
            element={<  GlobalAnalystCourse/>}
          />
          <Route
            path="/online-courses/wealth-mentor-course "
            element={<WealthMentorCourse  />}
          />
           <Route
            path="/online-courses/premium-plan-course "
            element={<PremiumPlanCourse />}
          />
            <Route
            path="/online-courses/ultra-prime-course "
            element={<UltraPrimeCourse/>}
          />
           <Route
            path="/online-courses/elite-course"
            element={<EliteCourse/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AllRoute;
