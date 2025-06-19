import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";

// ✅ FIX IS HERE in the ExpandableText component
const ExpandableText = () => {
  const [visibleChunks, setVisibleChunks] = useState(1);
  const textChunks = [
    // Chunk 1: Introduction
    `<h1>Century Finance - Your Trusted Partner in Stock Market Education & Advisory</h1>
    <p>Century Finance Limited helps people approach financial markets with clarity and confidence. Our training is based on practical experience and real-world scenarios, led by a <strong>SEBI-certified</strong> stock advisor.</p>
    <p>Our mission is to guide you through the world of stocks by offering personalized training, live trading simulations, and actionable investment insights. We guarantee that each learner acquires practical skills, a thorough awareness of the market, and the self-assurance to make wise judgements by going beyond theory.</p>
    <p>We are proudly headquartered in <strong>Dubai</strong>, with our main branch in <strong>Mumbai, India</strong>. Our presence across diverse financial hubs allows us to better serve our diverse clients and strengthen our commitment towards financial education and services.</p>
    <p>At Century Finance, we believe in shared success—our values lie in your growth. No matter if you are just starting out or want to improve your strategies, our programs are designed to meet every skill level.</p>`,

    // Chunk 2: Why Century Finance?
    `<h2>Why Century Finance?</h2>
    <p>Choosing the right partner for financial learning and services plays a huge role in shaping your future, and Century Finance Limited understands that. We stand out by combining expert professional knowledge, hands-on experiences, and full financial assistance. With <strong>SEBI-certified advisors</strong>, we offer expert-guided programs, and practical workshops tailored to suit everyone—whether you're just starting or already experienced in trading.</p>
    <p>Our <strong>“Learning to Earning”</strong> model isn’t just an idea, it’s a philosophy. It’s a straightforward approach focused on turning education into real-world opportunities. Along with learning, we provide high-quality call subscription plans for equity, commodities, and foreign markets, giving traders the tools to make smart, timely decisions.</p>
    <p>We offer tailored portfolio services, investment options, and easy financial solutions like personal, business, and appliance loans. At Century Finance, we’re built on values like trust, transparency, and a genuine commitment to your success. Whether you’re looking to learn, invest, or start your journey in finance, we’re here to support you every step of the way.</p>`,

    // Chunk 3: What Do We Offer?
    `<h2>What Do We Offer?</h2>
    <p>Century Finance Limited provides complete financial services. It includes expert-led training online courses, market advice, investment strategies, and adjustable loan plans. The company helps people learn and seize opportunities to gain confidence in finance.</p>
    <h3>Training Programs</h3>
    <p>SEBI-certified experts conduct well-organized stock market and finance courses. These courses cater to students at all levels, from those just starting out to more advanced learners.</p>
    <h3>Call Subscription Plans</h3>
    <p>Get research-based trading calls in Equity and Commodity markets delivered in real-time. Subscription options, including Premium and Platinum, let you choose a plan that fits your trading style.</p>
    <h3>Online Classes</h3>
    <p>Learn with flexibility through Century Finance online classes. These sessions offer an accessible and interactive way to dive into financial topics anytime, from anywhere.</p>
    <h3>Portfolio Services</h3>
    <p>Get professional support to create, handle, and improve your investment portfolio. These services aim to help you achieve steady financial growth.</p>
    <h3>Investment Plans</h3>
    <p>Find fixed-return plans like Smart Saver and Wealth Boost crafted to align with specific financial goals and personal risk tolerance.</p>`,

    // Chunk 4: Finance Solutions and FAQs
    `<h3>Finance Solutions</h3>
    <p>Access various customized financial services designed to address individual finance needs and objectives. Loans with clear terms and adaptable options—from personal needs to business and appliances—ranging between ₹20,000 and ₹5,00,000 designed to suit both salaried and self-employed people.</p>
    <hr>
    <h2>Frequently Asked Questions (FAQs)</h2>
    <h4>1. Is this training suitable for beginners with no prior experience?</h4>
    <p>Absolutely! At Century Finance, we create training programs to help everyone, even those who are just starting out. We begin by teaching the basics and expand your understanding using practical exercises, live market simulations, and clear instructions from trainers certified by SEBI.</p>
    <h4>2. What makes your stock market training different from others?</h4>
    <p>Century Finance Limited takes a hands-on approach that focuses on results. We mix classroom concepts with real-world market exposure, live question-solving sessions, and one-on-one guidance. Supported by SEBI-certified experts, we aim to turn knowledge into income using our special “Learning to Earning” method.</p>
    <h4>3. What is the stock market & how does it work?</h4>
    <p>The stock market is a platform where investors buy and sell shares of publicly listed companies. When companies require capital, they raise it by issuing shares through an IPO. These shares get traded on stock exchanges such as NSE or BSE. Share prices change based on demand, news events, and company performance. Investors can gain profits either by selling shares at a higher price or by earning dividends. The stock market helps grow the economy by funding companies and opening up chances to create wealth.</p>`,
  ];
  const handleReadMore = () => setVisibleChunks((prev) => prev + 1);
  const handleReadLess = () => setVisibleChunks(1);
  const isFullyExpanded = visibleChunks >= textChunks.length;

  // This is the part that was fixed.
  return (
    <div className="expandable-text-container">
      {/*
        INSTEAD OF THIS:
        <p>
          {textChunks.slice(0, visibleChunks).map((chunk, index) => (
            <Fragment key={index}>{chunk}</Fragment>
          ))}
        </p>

        WE DO THIS:
      */}
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

// No changes to the Grid Component
const FeaturesGrid = () => {
  const gridData = [
    {
      id: 1,
      title: "Foundation Course",
      content:
        "",
      path: "/online-courses/foundation-course",
    },
    {
      id: 2,
      title: "Ignite Course",
      content:
        "",
      path: "/online-courses/ignite-course",
    },
    {
      id: 3,
      title: "Explorer Course",
      content:
        "",
      path: "/online-courses/explorer-course",
    },
    {
      id: 4,
      title: "Advance Edge Course",
      content:
        "",
      path: "/online-courses/advance-edge-course",
    },
    {
      id: 5,
      title: "Trader Pro Course",
      content: 
      "",
      path: "/online-courses/trader-pro-course",
    },
    {
      id: 6,
      title: " Market Master Course",
      content:
       "",
      path: "/online-courses/market-master-course",
    },
    {
      id: 7,
      title: "IndexWizard Course",
      content:
        "",
      path: "/online-courses/IndexWizardCourse",
    },
    {
      id: 8,
      title: " Global Analyst Course",
      content:
        "",
      path: "/online-courses/global-analyst-course",
    },
    {
      id: 9,
      title: "Wealth Mentor Course",
      content: 
        "",
      path: "/online-courses/wealth-mentor-course",
    },
    {
      id: 10,
      title: "Premium Plan Course",
      content:
        "",
      path: "/online-courses/premium-plan-course",
    },
    {
      id: 11,
      title: "Ultra Prime Course",
      content:
        "",
      path: "/online-courses/ultra-prime-course",
    },
    {
      id: 12,
      title: "Elite course",
      content: "",
      path: "/online-courses/elite-course",
    },
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

// No changes to the main component structure
const OnlineCourse = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Our Online Course - Century Finance Limited</title>
        <meta
          name="description"
          content="Explore our detailed content and features."
        />
      </Helmet>

      <style>{`
        .main-content-area {
          padding: 50px 15px;
          max-width: 1200px;
          margin: 0 auto;
          font-family: 'Arial', sans-serif;
        }
        
        /* Styles for Expandable Text */
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
        .expandable-text-container h3 { font-size: 1.4em; margin-top: 20px; color: #c02727;}
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
          background-color: #c02727;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .read-more-less-btn:hover {
          background-color: #a02020;
        }

        /* Styles for Features Grid */
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
          color: #c02727;
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
