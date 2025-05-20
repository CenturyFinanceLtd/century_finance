import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";

const courses = [
  {
    id: 1,
    title: "Foundation",
    duration: "2-3 Weeks",
    price: "₹1,900 - ₹3,000",
    benefits: "Lays the groundwork for confident navigation across markets",
    description: (
      <>
        <p><strong>Focus:</strong> Understanding Indian and global markets</p>
        <p><strong>Key Skills:</strong> Support & resistance (critical price levels), market terminology, basics of price trends</p>
      </>
    ),
  },
  {
    id: 2,
    title: "Ignite",
    duration: "-",
    price: "-",
    benefits: "Build routine discipline with sector and international market awareness",
    description: (
      <>
        <p><strong>Focus:</strong> Developing a daily market habit</p>
        <p><strong>Coverage:</strong> Sector-wise analysis (Auto, Pharma, IT, FMCG etc.), major Indian indices like Nifty, Bank Nifty</p>
        <p><strong>Global Exposure:</strong> Overview of key European indices (FTSE, DAX) and US markets (Dow Jones, Dollar Index)</p>
      </>
    ),
  },
  {
    id: 3,
    title: "Explorer",
    duration: "6 Weeks",
    price: "₹4,100",
    benefits: "Step into trading beyond cash markets with practical derivatives insights",
    description: (
      <>
        <p><strong>Focus:</strong> Introduction to derivatives (options & futures), macroeconomic tracking</p>
        <p><strong>Technical:</strong> Breakout & breakdown patterns, chart basics (double tops, head & shoulders)</p>
      </>
    ),
  },
  {
    id: 4,
    title: "Advance Edge",
    duration: "8 Weeks",
    price: "₹5,200",
    benefits: "Start interacting with live markets confidently while managing risks",
    description: (
      <>
        <p><strong>Focus:</strong> Candlestick chart reading, market psychology, emotional trading aspects</p>
        <p><strong>Risk Management:</strong> Learn 1% risk rule, position sizing, and stop-loss setup</p>
      </>
    ),
  },
  {
    id: 5,
    title: "Trader Pro",
    duration: "10 Weeks",
    price: "₹6,300",
    benefits: "Transition from learning theory to active trading with personalized strategies",
    description: (
      <>
        <p><strong>Focus:</strong> Sector rotation and business cycles, monthly market outlooks</p>
        <p><strong>Tools:</strong> Personalized watchlist creation, gap theory for spotting trade opportunities</p>
      </>
    ),
  },
  {
    id: 6,
    title: "Market Master",
    duration: "12 Weeks",
    price: "₹7,400",
    benefits: "Sharpen technical analysis skills with hands-on trading simulations",
    description: (
      <>
        <p><strong>Technical Skills:</strong> Intermediate indicators — RSI, MACD, Bollinger Bands, Moving Averages</p>
        <p><strong>Practice:</strong> Access to mock trading platforms, market sentiment analysis</p>
      </>
    ),
  },
  {
    id: 7,
    title: "Index Wizard",
    duration: "14 Weeks",
    price: "₹8,500",
    benefits: "Diversify skills across multiple asset classes and global markets",
    description: (
      <>
        <p><strong>Focus:</strong> Forex and commodity basics (Gold, Oil, USD-INR), cryptocurrency market overview</p>
        <p><strong>Concepts:</strong> Global asset correlations, deeper candlestick pattern knowledge</p>
      </>
    ),
  },
  {
    id: 8,
    title: "Global Analyst",
    duration: "16 Weeks",
    price: "₹9,600",
    benefits: "Understand crowd psychology and global market interrelations for smarter investing",
    description: (
      <>
        <p><strong>Advanced Focus:</strong> Market sentiment tools, open interest charts, long-term portfolio building</p>
      </>
    ),
  },
  {
    id: 9,
    title: "Wealth Mentor",
    duration: "18 Weeks",
    price: "₹10,700",
    benefits: "Learn professional-level strategies and gain support from expert community",
    description: (
      <>
        <p><strong>Strategies:</strong> Advanced options trading (Iron Condor, Straddle), risk protection techniques</p>
        <p><strong>Community:</strong> Access to exclusive trader groups and weekly psychology deep-dives</p>
      </>
    ),
  },
  {
    id: 10,
    title: "Premium Vision",
    duration: "20 Weeks",
    price: "₹11,800",
    benefits: "Personalized guidance to accelerate growth and trading success",
    description: (
      <>
        <p><strong>Focus:</strong> Monthly 1-on-1 mentorship, real-time educational trade signals</p>
        <p><strong>Customization:</strong> Strategy adjustments tailored to your progress</p>
      </>
    ),
  },
  {
    id: 11,
    title: "Ultra Prime",
    duration: "22 Weeks",
    price: "₹14,000",
    benefits: "Exclusive professional trader access and tools for continuous learning",
    description: (
      <>
        <p><strong>Perks:</strong> Lifetime access to course materials and updates, AI-powered research tools</p>
        <p><strong>Workshops:</strong> Weekly premium sessions and elite networking opportunities</p>
      </>
    ),
  },
  {
    id: 12,
    title: "Elite",
    duration: "24 Weeks",
    price: "₹18,000",
    benefits: "Long-term strategic value, referrals, events, and top-tier community access",
    description: (
      <>
        <p><strong>Complete Access:</strong> Everything from all prior plans plus elite investor circle membership</p>
      </>
    ),
  },
];

const OnlineCourse = () => {
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  const toggleCourse = (id) => {
    setSelectedCourseId(selectedCourseId === id ? null : id);
  };

  return (
    <Fragment>
      <Helmet>
        <title>Online Courses - Century Finance Limited</title>
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
      <PageTitle pageTitle={"Online Courses"} pagesub={"Online Courses"} />

      <div style={{ maxWidth: "900px", margin: "30px auto", fontFamily: "Arial, sans-serif" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Century Finance Limited - Online Trading Courses
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "15px",
          }}
        >
          {courses.map((course) => (
            <div
              key={course.id}
              onClick={() => toggleCourse(course.id)}
              style={{
                cursor: "pointer",
                border: "2px solid #007bff",
                borderRadius: "8px",
                padding: "15px",
                backgroundColor: selectedCourseId === course.id ? "#e6f0ff" : "#fff",
                boxShadow: selectedCourseId === course.id ? "0 0 10px #007bff" : "none",
                transition: "all 0.3s ease",
              }}
            >
              <h3 style={{ marginTop: 0, color: "#007bff" }}>{course.title}</h3>
              <p>
                <strong>Duration:</strong> {course.duration} <br />
                <strong>Price:</strong> {course.price}
              </p>

              {selectedCourseId === course.id && (
                <>
                  <div
                    style={{
                      backgroundColor: "#d1ecf1",
                      color: "#0c5460",
                      padding: "10px",
                      borderRadius: "5px",
                      marginBottom: "15px",
                      fontWeight: "bold",
                    }}
                  >
                    Benefits: {course.benefits}
                  </div>
                  <div>{course.description}</div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default OnlineCourse;
