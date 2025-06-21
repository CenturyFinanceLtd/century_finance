import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";

const ExpandableText = () => {
  const [visibleChunks, setVisibleChunks] = useState(1);
  const textChunks = [
    `<h1>Learn Stock Market Trading - From Anywhere</h1>
    <h2>What is the Stock Market?</h2>
    <p>The stock market is a platform where individuals and institutions trade shares of publicly listed companies. It links investors with companies in need of funding to expand. These traders are facilitated in India by exchanges such as NSE and BSE. Businesses use IPOs to raise money by selling shares to the general public, which are then freely traded on the market. In addition to stocks, the market also contains derivatives, bonds and mutual funds.</p>`,
    
    `<h2>Century Finance Online Courses</h2>
    <p>At Century Finance Limited, we believe that good financial education ought to be easily accessible, useful and career-oriented. Our online trading courses are designed to cater to learners at every stage starting out in the finance industry to future professionals prepared to enter the market. Whether you’re interested in the online courses for equity market, commodity or foreign market, our organized learning path provides flexible online trading classes, certified mentorship and real-world insights.</p>
    <p>Experienced financial professionals and SEBI-certified instructors lead our courses, making sure that each session is engaging, relevant and directly related to today’s dynamic market environment. To help you develop the confidence and abilities required to be successful in trading and investing, each course is accompanied with hands-on-demos, real-time market examples and interactive tests.</p>`,

    `<h2>Each Course Include:</h2>
    <h3>Well-Structured Learning Paths:</h3>
    <p>Every course is made with a specific goal in mind, taking you from the basic idea to the advanced marketing tactics.</p>
    <h3>Market-Aligned Skill Development:</h3>
    <p>The curriculum helps you develop practical skills that are applicable to real-world finance employment because it is designed to meet the expectations of the business.</p>
    <h3>Hands-on Training With Tools:</h3>
    <p>With detailed instructions and live market practice, learn how to navigate trading platforms and financial instruments.</p>
    <h3>Applying Knowledge in Real-Time:</h3>
    <p>To guarantee that you can confidently apply what you learn, courses incorporate case studies, technical analysis and simulation.</p>
    <h3>Industry-Recognized Certificate:</h3>
    <p>Get a validated digital certificate upon successful completion, which will add credibility to your resume and career profile.</p>`,

    `<h2>What You’ll Learn:</h2>
    <p>At Century Finance Limited, our stock market courses are designed not only to teach theory but to build real-world insights. Here’s what you can learn across our courses:</p>
    <h3>Market Fundamentals:</h3>
    <p>Recognize how the domestic and international foreign market, commodity and equities market operate.</p>
    <h3>Technical & Fundamental Analysis:</h3>
    <p>Learn how to read charts, spot trends and assess business using important financial metrics with technical and fundamental analysis.</p>
    <h3>Analysis of Indexes and Sectors:</h3>
    <p>Monitor important indices such as the NIFTY50, Dow Jones and DAX and examine industries like FMCG, IT, Pharma and auto.</p>
    <h3>Trading Platforms & Tools:</h3>
    <p>Gain practical exposure with real-time trading and market stimulators.</p>
    <h3>Derivative Instruments:</h3>
    <p>Understands the basics of futures, options and leverage strategies for informed training.</p>
    <h3>Risk Management:</h3>
    <p>Acquire the skills necessary to properly allocate your capital through positioning sizing and asset allocation.</p>
    <h3>Global Market Awareness:</h3>
    <p>Analyze currency change, economic calendars and global market movements.</p>
    <h3>Career Readiness:</h3>
    <p>Develop the abilities necessary for positions in finance, including analyst, traders, investment advisor and others.</p>
    <hr>
    <h2 style="text-align:center;">BEGIN YOUR ADVANCE JOURNEY WITH CENTURY FINANCE LIMITED</h2>`,
  ];
  const handleReadMore = () => setVisibleChunks((prev) => prev + 1);
  const handleReadLess = () => setVisibleChunks(1);
  const isFullyExpanded = visibleChunks >= textChunks.length;

  return (
    <div className="expandable-text-container">
      <div>
        {textChunks.slice(0, visibleChunks).map((chunk, index) => (
          <div key={index} dangerouslySetInnerHTML={{ __html: chunk }} />
        ))}
      </div>

      {!isFullyExpanded && (
        <button onClick={handleReadMore} className="read-more-less-btn">
          Read More...
        </button>
      )}
      {isFullyExpanded && (
        <button onClick={handleReadLess} className="read-more-less-btn">
          Read Less
        </button>
      )}
    </div>
  );
};

const FeaturesGrid = () => {
  const gridData = [
    { id: 1, title: "Foundation Course", content: "", path: "/online-courses/foundation-course" },
    { id: 2, title: "Ignite Course", content: "", path: "/online-courses/ignite-course" },
    { id: 3, title: "Explorer Course", content: "", path: "/online-courses/explorer-course" },
    { id: 4, title: "Advance Edge Course", content: "", path: "/online-courses/advance-edge-course" },
    { id: 5, title: "Trader Pro Course", content: "", path: "/online-courses/trader-pro-course" },
    { id: 6, title: " Market Master Course", content: "", path: "/online-courses/market-master-course" },
    { id: 7, title: "IndexWizard Course", content: "", path: "/online-courses/IndexWizardCourse" },
    { id: 8, title: " Global Analyst Course", content: "", path: "/online-courses/global-analyst-course" },
    { id: 9, title: "Wealth Mentor Course", content: "", path: "/online-courses/wealth-mentor-course" },
    { id: 10, title: "Premium Plan Course", content: "", path: "/online-courses/premium-plan-course" },
    { id: 11, title: "Ultra Prime Course", content: "", path: "/online-courses/ultra-prime-course" },
    { id: 12, title: "Elite course", content: "", path: "/online-courses/elite-course" },
  ];

  return (
    <div className="features-grid-container">
      <h2>Explore Our Features</h2>
      <div className="grid">
        {gridData.map((item) => (
          <div key={item.id} className="grid-box">
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <a href={item.path} className="grid-read-more-btn">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const OnlineCourse = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Our Online Course - Century Finance Limited</title>
        <meta name="description" content="Explore our detailed content and features." />
      </Helmet>

      <style>{`
        .main-content-area {
          padding: 50px 15px;
          max-width: 1200px;
          margin: 0 auto;
          font-family: 'Arial', sans-serif;
        }

        .expandable-text-container {
          background-color: #f9f9f9;
          padding: 30px;
          border-radius: 8px;
          margin-bottom: 50px;
          text-align: justify;
        }

        .expandable-text-container h1,
        .expandable-text-container h2,
        .expandable-text-container h3,
        .expandable-text-container h4 {
          text-align: left;
          margin-bottom: 15px;
          color: #333;
        }

        .expandable-text-container h1 { font-size: 2.2em; }
        .expandable-text-container h2 { font-size: 1.8em; margin-top: 25px; }
        .expandable-text-container h3 { font-size: 1.4em; margin-top: 20px; color: #21E786; }
        .expandable-text-container h4 { font-size: 1.1em; margin-top: 20px; }

        .expandable-text-container p {
          line-height: 1.8;
          color: #555;
          margin-bottom: 1em;
        }

        .read-more-less-btn {
          display: block;
          margin: 20px auto 0;
          padding: 10px 20px;
          font-size: 16px;
          background-color: #21E786;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .read-more-less-btn:hover {
          background-color: #1bc671;
        }

        .features-grid-container {
          text-align: center;
        }

        .features-grid-container h2 {
          margin-bottom: 30px;
          color: #333;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .grid-box {
          background-color: #ffffff;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 25px;
          text-align: left;
          box-shadow: 0 4px 8px rgba(0,0,0,0.05);
          transition: transform 0.3s, box-shadow 0.3s;
          display: flex;
          flex-direction: column;
        }

        .grid-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.1);
        }

        .grid-box h3 {
          margin-top: 0;
          color: #21E786;
        }

        .grid-box p {
          flex-grow: 1; 
          color: #666;
          line-height: 1.6;
        }

        .grid-read-more-btn {
          display: inline-block;
          margin-top: 15px;
          padding: 8px 16px;
          background-color: #222;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          text-align: center;
          transition: background-color 0.3s;
        }

        .grid-read-more-btn:hover {
          background-color: #444;
        }

        @media (max-width: 991px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 767px) {
          .grid {
            grid-template-columns: 1fr;
          }
          .main-content-area {
            padding: 30px 15px;
          }
        }
      `}</style>

      <Navbar />
      <PageTitle
        pageTitle={"Our Online Course"}
        pagesub={"Content"}
        bgImage="/bg-image/online.png"
      />

      <div className="main-content-area">
        <ExpandableText />
        <FeaturesGrid />
      </div>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default OnlineCourse;
