import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage/HomePage'
// import CoursePage from '../CoursePage/CoursePage';
import HomePage2 from '../HomePage2/HomePage2';
import HomePage3 from '../HomePage3/HomePage3';
import HomePage4 from '../HomePage4/HomePage4';
import HomePage5 from '../HomePage5/HomePage5';
import AboutPage from '../AboutPage/AboutPage';
import TeamPage from '../TeamPage/TeamPage';
import TeamSinglePage from '../TeamSinglePage/TeamSinglePage';
import EventSinglePage from '../EventSinglePage/EventSinglePage';
import GalleryPage from '../GalleryPage/GalleryPage';
import ShopPage from '../ShopPage'
import ProductSinglePage from '../ProductSinglePage';
import CartPage from '../CartPage';
import CheckoutPage from '../CheckoutPage';
import OrderRecived from '../OrderRecived';
import BlogPage from '../BlogPage/BlogPage'
import BlogPageLeft from '../BlogPageLeft/BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth/BlogPageFullwidth'
import BlogDetails from '../BlogDetails/BlogDetails'
import BlogDetailsFull from '../BlogDetailsFull/BlogDetailsFull'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide/BlogDetailsLeftSiide'
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
import Crypto from "../Crypto/Crypto";
import Gold from "../Gold/Gold";
import Currencies from "../Currencies/Currencies";
import VerifyResetOtp from "../ForgotPassword/VerifyResetOtp";
import ResetPasswordPage from "../ForgotPassword/ResetPasswordPage";


const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="home-2" element={<HomePage2 />} />
          <Route path="home-3" element={<HomePage3 />} />
          <Route path="home-4" element={<HomePage4 />} />
          <Route path="home-5" element={<HomePage5 />} />
          <Route path="about" element={<AboutPage />} />
          {/* <Route path="course" element={<CoursePage />} /> */}
          <Route path="lesson" element={<LessonPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="teacher" element={<TeamPage />} />
          <Route path="team-single/:slug" element={<TeamSinglePage />} />
          <Route path="event-single/:slug" element={<EventSinglePage />} />
          <Route path="become-teacher" element={<BeComeTeacherPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="product-single/:slug" element={<ProductSinglePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="order-received" element={<OrderRecived />} />
          <Route path="privacypolicy" element={<PrivacyPage />} />
          <Route path="terms&conditions" element={<TermsPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog-left-sidebar" element={<BlogPageLeft />} />
          <Route path="blog-fullwidth" element={<BlogPageFullwidth />} />
          <Route path="blog-single/:slug" element={<BlogDetails />} />
          <Route
            path="blog-single-left-sidebar/:slug"
            element={<BlogDetailsLeftSiide />}
          />
          <Route
            path="blog-single-fullwidth/:slug"
            element={<BlogDetailsFull />}
          />
          <Route path="404" element={<ErrorPage />} />
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
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/gold" element={<Gold />} />
          <Route path="/currencies" element={<Currencies />} />
          <Route path="/verify-reset-otp" element={<VerifyResetOtp />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AllRoute;
