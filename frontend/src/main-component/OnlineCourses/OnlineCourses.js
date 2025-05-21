// OnlineCourse.js
import React, { Fragment, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import "./ExpandingCardGrid.css";

const coursesData = [
  {
    id: "foundation",
    courseNumber: 1,
    icon: "🔰",
    title: "Foundation Course",
    price: "₹1,900 to ₹3,000", // Re-used 'price' for 'priceText'
    duration: "2–3 Weeks",
    level: "Beginner Level",
    installmentOption: "2 Easy EMIs Available",
    whyChoose:
      "Start your trading journey with confidence through step-by-step guidance.",
    transformFrom: "“What is Sensex?” → To: “I understand how markets move”",
    tagline: "Begin your path from basics to expert level here.",
    // expandedDetails from previous step - user will update its content later
    expandedDetails: {
      takeaways: [
        "Start your journey into the stock market with this beginner-friendly course. If you’ve ever wondered, “What is Sensex?” or “How do I make money in the market?” — this course is designed just for you. We break down complex concepts into simple language, using visuals and real-life examples, so you never feel lost.","Why enroll? Because this is the foundation you need to build confidence and avoid costly beginner mistakes. You’ll learn how the Indian and global markets work, what moves prices, and how to read price charts to spot smart entry and exit points.","Why this course is unique:-This course is the starting point — it lays the groundwork. It’s designed for absolute beginners who want clear, simple explanations to build a solid foundation before moving to more advanced topics.","Flexible Payment Plan:- To make your learning journey easier, we offer this course in *2 easy installments.A small interest fee* applies to cover processing costs, helping you manage your budget comfortably while gaining valuable market knowledge!","This course offers a practical understanding of both Indian and global stock market indices. Learners will explore key Indian indices like Bank Nifty, Nifty Fifty, Fin Nifty, and Midcap Nifty, gaining insights into trends, price movements, and market sentiment.It also covers major European indices (CAC 40, FTSE 100, OMX, DAX) and U.S. benchmarks (Dow Jones, Dollar Index), explaining how global cues impact Indian markets, especially during overnight sessions.The course emphasizes strategy building using technical indicators, SEBI-compliant practices, and independent market analysis. Rather than tips or signals, students learn to spot buying and selling opportunities using real market data.By the end, participants will confidently interpret market behavior across time zones and trade indices strategically, with a focus on self-reliant, informed decision-making."     
      ],

    },
  },
  {
    id: "ignite",
    courseNumber: 2,
    icon: "🔥",
    title: "Ignite ",
    price: "₹3,000",
    duration: "3 Weeks",
    level: null, // No specific level mentioned in the new format for this one
    installmentOption: "2 Easy EMIs Available",
    whyChoose:
      "Understand daily market dynamics and improve your trading decisions.",
    transformFrom:
      "“What’s happening in the market?” → To: “I can track it daily”",
    tagline: "Confidently analyze market movements every day.",
    expandedDetails: {
      takeaways: [
        "Ready to move beyond basics?-This course builds daily habits to track the market confidently and understand sector-wise movements. Perfect for students and professionals wanting to develop market literacy.", "Why enroll?-Because knowing what’s happening daily can help you make timely decisions and spot opportunities others miss. You’ll learn to analyze market sectors, understand index movements, and use live examples of support and resistance.", "Why this course is unique:- the Foundation course focuses on daily market tracking and sector analysis, helping you develop a mindset to actively monitor and understand the market dynamics", "Flexible Payment Plan:-Enroll now with our convenient 2-installment plan, with  nominal interest charge. This helps you invest in your future without financial stress!", "The Foundation Plan is designed to build a strong base for beginners and traders who want to understand the real market behavior. You’ll learn to read the Daily Market Summary for both India and global markets, understanding what drives market movements.The course covers Sectoral Index Analysis, helping you spot which sectors like Auto, Pharma, IT, FMCG are gaining strength or losing momentum. You’ll also learn about Index Movers and Weightage, understanding how key stocks influence the overall market direction.A major focus is on Support & Resistance—learning to identify important price levels where trends pause or reverse, which is essential for technical analysis.This course is practical, with daily market tracking and live chart sessions, helping you develop skills to read the market confidently and make informed decisions based on logic, not emotions. It trains you to understand why the market moves, making it ideal for anyone starting their trading journey the right way.",

      ],

    },
  },
  {
    id: "explorer",
    courseNumber: 3,
    icon: "🌐",
    title: "Explorer: ",
    price: "₹4,100",
    duration: "6 Weeks",
    level: null,
    installmentOption: "2 Easy EMIs Available",
    whyChoose: "Learn derivatives and leverage smart trading strategies.",
    transformFrom: "“I’ve heard of Options” → To: “I understand how they work”",
    tagline: "Gain essential knowledge for smarter trading.",
    expandedDetails: {
      takeaways: [
        "Heard of Futures and Options but find them confusing? This course makes derivatives simple, helping you leverage your trades wisely.", "Why enroll?:- Because derivatives are powerful tools for growth and risk management — once you understand them clearly. You’ll learn macroeconomic trends, popular chart patterns, and how options trading works without jargon.", "Why this course is unique:- This course dives into derivatives — a completely new trading domain beyond basic stocks. It equips you with essential tools for more advanced strategies, setting the stage for further skill development.", "Flexible Payment Plan:- We provide a simple 2-part payment option to make the course affordable. Pay in 2 easy installments with a small interest fee to help you spread the investment over time.", "This part of the course builds on the foundation by introducing you to the world of derivatives, including options and futures, helping you understand how these powerful financial tools work and how they can be used in trading. Along with that, you get access to carefully selected weekly stock ideas to guide your investment choices with confidence.The course also teaches you how to follow the global economic calendar, so you know when important events are coming up that could impact markets worldwide. A key concept covered is learning to identify breakouts and breakdowns—recognizing when prices move strongly beyond key levels, which often signals good trading opportunities.Overall, this section helps you deepen your market understanding, combining technical analysis with broader economic insights, so you can make smarter, timely trading decisions. The learning is practical and ongoing, with regular updates and real-world examples to keep you connected to market dynamics."

      ],

    },
  },
  {
    id: "advance",
    courseNumber: 4,
    icon: "🎯",
    title: "Advance Edge",
    price: "₹5,200",
    duration: "8 Weeks",
    level: null,
    installmentOption: "2 Easy EMIs Available",
    whyChoose:
      "Master trading psychology and risk management to gain your edge.",
    transformFrom: "“I read charts” → To: “I understand trader psychology”",
    tagline: "Control your emotions and make better decisions.",
    expandedDetails: {
      takeaways: [
        "If you know how to read charts but want to understand why the market behaves a certain way, this course is for you.", "Why enroll? :-  Because trading psychology and risk management are the keys to consistent profits. You’ll learn to interpret candlesticks deeply, control emotions like fear and greed, and apply low-risk strategies.", "Why this course is unique :- While previous courses focus on knowledge and analysis, this course targets mindset and risk control, which are crucial for long-term success but often overlooked.", "Flexible Payment Plan :-Take advantage of our 2-installment payment plan with a small interest charge, making it easier for you to invest in your trading future without upfront pressure.", "In the Explorer Plan, the course focuses on strengthening your technical analysis skills through a deeper understanding of chart and candlestick patterns. You'll learn how to recognize common formations like double tops, head and shoulders, and flags—each of which signals potential market movements. These visual patterns help reveal whether buyers (bullish) or sellers (bearish) are in control, giving you better clarity on trend directions.Alongside this, the course introduces candlestick basics, helping you read market sentiment through price action. You’ll understand what each candlestick indicates about buyer-seller behavior, and how to use that insight for smarter trade entries or exits.To keep the learning interactive and practical, you’ll also get access to two live Q\&A sessions every month with a market analyst. These sessions give you a chance to clear doubts, discuss live charts, and apply what you've learned in real market scenarios—making this plan a valuable step forward in your trading journey.",


      ],

    },
  },
  {
    id: "traderpro",
    courseNumber: 5,
    icon: "💼",
    title: "Trader Pro",
    price: "₹6,300",
    duration: "10 Weeks",
    level: null,
    installmentOption: "3 Easy EMIs Available",
    whyChoose: "Learn strategy building and move beyond trading on tips.",
    transformFrom: "“I trade on tips” → To: “I create my own strategies”",
    tagline: "Plan your trades smartly with proven methods.",
    expandedDetails: {
      takeaways: [
        "Ready to become an independent trader? This course takes you from following tips to creating your own strategies.", "Why enroll? :- Because strategic trading with a clear plan beats random guessing. You’ll learn sector rotation, business cycles, monthly forecasting, and how to build your watchlist.", "Why this course is unique  :- This course teaches you how to think strategically about markets, moving from reactive to proactive trading. ", "Flexible Payment Plan:- Our easy 3-installment option lets you split the course fee into two manageable payments with a nominal interest charge, helping you start learning immediately!", "The Advance Edge Plan takes your trading knowledge to a more strategic level by diving into candle psychology and the emotional patterns behind market movements. You'll learn how each candle reflects trader sentiment—fear, greed, hesitation—and how to read those subtle cues to make sharper decisions.A strong focus is placed on risk management. You’ll be taught professional techniques like the 1% rule, proper position sizing, and how to place stop-losses effectively—so your capital is protected even in volatile market conditions. This helps you trade not just with skill, but with discipline.In addition, the course covers volume analysis, teaching you how to interpret trading volume to confirm price trends and spot valid breakouts. Volume acts like a truth detector in charts, and understanding it can greatly boost your accuracy.To make learning real and applicable, you’ll also participate in three live trading sessions each month with experienced analysts. This gives you hands-on exposure, allowing you to apply your skills in live markets while receiving expert guidance",

      ],

    },
  },
  {
    id: "marketmaster",
    courseNumber: 6,
    icon: "📊",
    title: "Market Master",
    price: "₹7,400",
    duration: "12 Weeks",
    level: null,
    installmentOption: "3 Easy EMIs Available",
    whyChoose: "Analyze markets using technical indicators like a pro.",
    transformFrom: "“I guess trends” → To: “I analyze with indicators”",
    tagline: "Use charts and tools to trade confidently.",
    expandedDetails: {
      takeaways: [
        "Want to use advanced tools and analyze markets like pros? This course introduces popular technical indicators and real-time mock trading.", "Why enroll?:- Because mastering tools like RSI, MACD, and Bollinger Bands gives you an edge in predicting price moves. Plus, live practice builds confidence before real trades.", "Why this course is unique:- this one combines theory with live practice, giving you hands-on experience to build confidence.", "Flexible Payment Plan:- Enroll with our 3-installment plan  with a small interest fee. This makes your investment in market mastery easier to manage!", "The Trader Pro Plan is designed to give you a broader and more strategic market vision. It helps you understand sector rotation and how the business cycle affects different sectors over time. This knowledge allows you to position your trades based on where the smart money is moving, improving your timing and decision-making.You'll also receive a monthly market outlook that covers both Indian and global trends, helping you stay aligned with macroeconomic shifts and upcoming opportunities. This keeps you updated and prepared for larger market moves.One-on-one support is available to help you create a personalized watchlist tailored to your goals and trading style—making your daily analysis more focused and efficient.Additionally, the course covers gap theory, where you’ll learn why price gaps happen, what they indicate about market sentiment, and how to trade them to your advantage. Overall, the Trader Pro Plan helps you think like a strategist, combining high-level insights with personalized tools and expert guidance."

      ],

    },
  },
  {
    id: "indexwizard",
    courseNumber: 7,
    icon: "💹",
    title: "Index Wizard",
    price: "₹8,500",
    duration: "14 Weeks",
    level: null,
    installmentOption: "4 Easy EMIs Available",
    whyChoose: "Understand global markets and diversify your portfolio.",
    transformFrom: "“I trade stocks” → To: “I understand global asset flows”",
    tagline: "Make your mark in the world of global trading.",
    expandedDetails: {
      takeaways: [
        "Step into global markets with a deeper understanding of Forex, Commodities, and Crypto.", "Why enroll? :- Because the market isn’t just local — global asset flows impact your trades. You’ll learn to analyze international markets and apply advanced candlestick patterns globally", "Why this course is unique :- This course expands your market view globally — a significant step beyond local Indian markets taug", "Flexible Payment Plan :- Our 4-part installment option with a nominal interest fee lets you learn globally without financial worry—pay half now, half later!", "The Market Master Plan takes your trading skills to the next level by helping you dive deeper into technical analysis. You'll learn to use indicators like RSI, MACD, Bollinger Bands, and Moving Averages to better understand momentum, volatility, and trend direction—tools that can sharpen your market entries and exits.You'll also be introduced to market sentiment tools and open interest charts, which give you a clearer view of how traders are positioned and where the market might be headed. This helps you align your trades with the broader market mood.The course also emphasizes candlestick pattern recognition, teaching you to interpret price action through formations like Doji, Hammer, and Engulfing candles. This skill adds depth to your chart reading and helps you spot reversals or continuations more effectively.To build confidence, you get access to a mock trading platform where you can apply everything you learn in real-time market simulations—without risking real money. This plan is all about giving you the tools, strategies, and hands-on practice to trade more independently and with greater accuracy."

      ],

    },
  },
  {
    id: "globalanalyst",
    courseNumber: 8,
    icon: "🌍",
    title: "Global Analyst",
    price: "₹9,600",
    duration: "16 Weeks",
    level: null,
    installmentOption: "4 Easy EMIs Available",
    whyChoose:
      "Become an expert in long-term investing and global market analysis.",
    transformFrom: "“I follow news” → To: “I analyze global sentiment”",
    tagline: "Build a strong foundation for strategic investing.",
    expandedDetails: {
      takeaways: [
        "Focus on strategic, long-term investing with global market insights and portfolio building.", "Why enroll? :- Because understanding global market sentiment and correlations helps build strong, diversified portfolios for wealth growth.", "Why this course is unique:- This course is about investing, not just trading. It focuses on portfolio building and wealth creation with a global perspective.", "Flexible Payment Plan:- Make the investment easier with our 4-installment plan, paying in parts with a small interest fee to help spread the cost comfortably.", "The Index Wizard Plan expands your market perspective by introducing you to global asset classes beyond equities. You'll learn the basics of trading in the forex and commodity markets—like gold, oil, and USD-INR—giving you a broader understanding of how global forces impact the Indian market. This makes your analysis more well-rounded and helps you spot opportunities across different segments.The course also covers asset correlation, helping you understand how various markets (such as stocks, commodities, and currencies) move in relation to each other. This knowledge is crucial for developing strategies that are both diversified and responsive to global shifts.A part of your training focuses on the cryptocurrency market, giving you a structured overview of this rapidly evolving space. You’ll understand how crypto trends work and how they’re influenced by global sentiment.To support all this, you’ll also master moving averages—how they reflect market trends and how they can be used as tools for entry, exit, or setting stop-losses. Overall, this plan helps you become a more informed, globally aware trader who can analyze across markets with better clarity and control."

      ],
    },
  },
  {
    id: "wealthmentor",
    courseNumber: 9,
    icon: "💼", // Re-using icon, can be changed
    title: "Wealth Mentor",
    price: "₹10,700",
    duration: "18 Weeks",
    level: null,
    installmentOption: "5 Easy EMIs Available",
    whyChoose: "Master professional risk management and grow your wealth.",
    transformFrom: "“I trade for profit” → To: “I manage risk like a pro”",
    tagline: "Develop institutional-level trading skills.",
    expandedDetails: {
      takeaways: [
        "Take your trading seriously with advanced options strategies, capital protection, and psychological coaching.", "Why enroll? :- Because managing risk is what separates winners from losers. Learn how to hedge, use complex options, and join professional trading groups for continuous growth.", "Why this course is unique: This course blends advanced trading techniques with professional-level psychological support and community learning.", "Flexible Payment Plan:- 5-installment payment plan with nominal interest—pay  ", "The Global Analyst Plan is designed to help you think like a seasoned investor with a long-term vision. In this course, you’ll learn how to build a strong and balanced portfolio that can grow steadily over time, regardless of short-term market fluctuations. The focus is on smart diversification and asset allocation—teaching you how to spread risk across various sectors, asset classes, and geographies to create a stable financial future.Along with strategy, the course includes access to real investment case studies, helping you see how successful portfolios are built and managed in real-world conditions. This makes your learning practical and relatable.You’ll also gain deep insights into risk management—understanding how to set effective stop-losses, calculate position sizes, and protect your capital even in volatile markets. This blend of strategy, practice, and risk control ensures you're not just investing—but investing wisely with a plan and purpose."

      ],

    },
  },
  {
    id: "premiumPlan",
    courseNumber: 10,
    icon: "👨‍🏫",
    title: "Premium Plan",
    price: "₹11,800",
    duration: "20 Weeks",
    level: null,
    installmentOption: "5 Easy EMIs Available",
    whyChoose:
      "Boost your skills with expert mentorship and personalized guidance.",
    transformFrom: "“I’m learning solo” → To: “I get personal guidance”",
    tagline: "Grow faster with dedicated support.",
    expandedDetails: {
      takeaways: [
        "Get personal mentorship and real-time trade signals to accelerate your growth.", "Why enroll? :- Because expert guidance and live feedback dramatically shorten your learning curve. You’ll get 1-on-1 calls, educational signals, and live strategy tweaks tailored to your progress.", "Why this course is unique:- Unlike all previous courses, this one offers personal coaching and live trade support, making it highly interactive and tailored to you.", "Flexible Payment Plan:- Our 5-installment plan allows you to pay comfortably in two parts with a small interest fee—start learning without delay!", "The Wealth Mentor Plan is crafted for those who want to take their market expertise to a more strategic and professional level. In this course, you’ll master advanced options strategies like Iron Condor, Straddle, and Strangle—techniques that are used to navigate different market conditions with greater precision and control. These are not just theoretical tools; you’ll learn when and how to apply them effectively in real trading situations.A key part of this plan is the in-depth focus on market psychology and sentiment. Through weekly webinars, you'll explore how crowd behavior, fear, greed, and emotional extremes impact market moves—allowing you to make more rational and confident decisions when others may panic.The plan also opens doors to a community of serious traders and investors where insights, strategies, and market views are exchanged regularly. This collaborative environment adds a layer of continuous learning and support, helping you stay ahead of trends and grow as a market participant through shared experiences and expert guidance."

      ],

    },
  },
  {
    id: "ultraprime",
    courseNumber: 11,
    icon: "🧠",
    title: "Ultra Prime",
    price: "₹14,000",
    duration: "22 Weeks",
    level: null,
    installmentOption: "5 Easy EMIs Available",
    whyChoose:
      "Get elite tools, AI support, and exclusive sessions for every market cycle.",
    transformFrom:
      "“I learn from YouTube” → To: “I access elite tools & knowledge”",
    tagline: "Maintain a consistent edge in the market.",
    expandedDetails: {
      takeaways: [
        "Join the elite with lifetime access, AI-powered tools, and exclusive live sessions.", "Why enroll?:- Because staying ahead requires constant updates, smart scanning tools, and networking with top traders — all included here.", "Why this course is unique:- This course provides lifelong learning and exclusive tools to stay at the cutting edge of market trading.", "Flexible Payment Plan:- Split your payment into 5 easy installments with a nominal interest fee, making elite learning accessible and budget-friendly.", "In the Premium Vision Plan, the course becomes highly personalized and mentorship-driven. You'll receive one-on-one monthly mentorship calls where your learning progress, strategies, and challenges are directly addressed. The focus here is on helping you fine-tune your trading style through custom strategies that match your pace and experience.You’ll get priority support for your queries, ensuring quicker solutions and better guidance. Alongside this, real-time trade signals are shared for educational purposes to help you observe practical trade setups and understand market movements live.This plan also teaches how to recognize consolidation phases—those sideways movements in price that often precede a strong breakout or trend continuation. Understanding this helps you stay patient and prepared for the right trading moment.Overall, this level is designed to make your learning more hands-on, guided, and adaptable to your trading journey—bridging the gap between theory and real-time market action.",

      ],

    },
  },
  {
    id: "elite",
    courseNumber: 12,
    icon: "🏆",
    title: "Elite ",
    price: "₹18,000",
    duration: "24 Weeks",
    level: null,
    installmentOption: "5 Easy EMIs Available",
    whyChoose:
      "Join the top 1% community with exclusive networking and strategy retreats.",
    transformFrom:
      "“I’ve taken many courses” → To: “I’m part of the top 1% community”",
    tagline: "Build your legacy of financial success.",
    expandedDetails: {
      takeaways: [
        "Become part of the top 1% investor community with exclusive access, retreats, and networking.", "Why enroll?:-Because building wealth and legacy requires high-level knowledge, community support, and continuous exposure to elite strategies. ", "Why this course is unique:- This is the ultimate program for those serious about long-term wealth and elite community access — beyond just trading skills.", "Flexible Payment Plan:- Enroll with confidence through our 5-installment payment plan (with a small interest fee), making this elite program financially manageable.", "The Ultra Prime Plan offers the most extensive and long-term learning experience in the entire program. With lifetime access to all modules and updates, you're ensured ongoing growth as market tools and strategies evolve. You also get a full year of access to exclusive weekly premium workshops, where deeper insights and advanced concepts are discussed in real time with experts.To enhance your trading decisions, this plan includes AI-powered trading and research tools that bring smart analytics and efficiency to your strategies. It’s not just about learning alone—you’ll also become part of the Elite Investor Circle, giving you opportunities for networking, attending investor events, and even referral-based collaborations.This plan also focuses on advanced techniques like spotting divergence, where tools like RSI or MACD show a mismatch between price and momentum. Learning to identify these signals helps you anticipate reversals before they happen, giving you a major edge in the market.Overall, this plan is for serious learners and investors who want advanced tools, elite community access, and long-term mentorship to stay ahead in every market phase."

      ],

    },
  },
];

const OnlineCourse = () => {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleCardClick = (courseId) => {
    setExpandedCardId((prevId) => (prevId === courseId ? null : courseId));
  };

  const handleCloseClick = (e) => {
    e.stopPropagation();
    setExpandedCardId(null);
  };

  const handleEnrollClick = (courseTitle) => {
    alert(`Proceeding to enrollment for ${courseTitle}...`);
  };

  useEffect(() => {
    document.body.classList.add("expanding-card-grid-body-styles");
    return () => {
      document.body.classList.remove("expanding-card-grid-body-styles");
    };
  }, []);

  return (
    <Fragment>
      <Helmet>
        <title>Online Courses - Century Finance Limited</title>
        <meta
          name="description"
          content="Explore our expanding range of online finance courses."
        />
        <meta
          name="keywords"
          content="Online Courses, Finance, Trading, Investment, Century Finance"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Slabo+27px|Yesteryear"
          rel="stylesheet"
        />
      </Helmet>

      <Navbar />
      <PageTitle pageTitle={"Online Courses"} pagesub={"Courses"} />

      <div className="wrapper-custom">
        <div className="header-custom">
          <h1 className="header-custom__title">Our Course Catalog</h1>
          <h2 className="header-custom__subtitle">
            Expand Your Financial Knowledge
          </h2>
        </div>

        <div className="cards-custom">
          {coursesData.map((course) => {
            const isExpanded = expandedCardId === course.id;
            const isInactive =
              expandedCardId !== null && expandedCardId !== course.id;

            let cardClasses = "card-custom";
            if (isExpanded) {
              cardClasses += " is-expanded";
            } else {
              cardClasses += " is-collapsed";
            }
            if (isInactive) {
              cardClasses += " is-inactive";
            }

            return (
              <div key={course.id} className={cardClasses}>
                {/* MODIFIED .card-custom__inner for new content structure */}
                <div
                  className="card-custom__inner"
                  onClick={() => handleCardClick(course.id)}>
                  <div className="card-header-line">
                    <span className="card-course-icon">{course.icon}</span>
                    <h3 className="card-title-main">
                      {course.courseNumber}. <em>{course.title}</em> –{" "}
                      {course.price}
                    </h3>
                  </div>

                  <div className="card-details-line">
                    <span className="card-duration-level">
                      ⏳ {course.duration}
                      {course.level && ` | 🧠 ${course.level}`}
                    </span>
                  </div>

                  {course.installmentOption && (
                    <div className="card-installment-line">
                      💳 <em>{course.installmentOption}</em>
                    </div>
                  )}

                  <div className="card-why-choose">
                    <p>
                      📌 <em>Why choose this plan?</em>
                      <br />
                      {course.whyChoose}
                    </p>
                  </div>

                  <div className="card-transform">
                    <p>
                      📘 <em>Transform from:</em> {course.transformFrom}
                    </p>
                  </div>

                  <div className="card-tagline">
                    <p>💥 {course.tagline}</p>
                  </div>

                  <div className="learn-btn">
                    <p>Learn More</p>
                  </div>
                </div>

                {/* Expander content remains the same as the previous step, using course.expandedDetails */}
                <div className="card-custom__expander">
                  <i
                    className="fa fa-close"
                    onClick={(e) => handleCloseClick(e)}></i>
                  <div className="expander-content-wrapper">
                    {course.expandedDetails && (
                      <>
                        {course.expandedDetails.takeaways &&
                          course.expandedDetails.takeaways.length > 0 && (
                            <>
                              <h4 className="expander-section-title">
                                Discription
                              </h4>
                              <ul className="expander-takeaways-list">
                                {course.expandedDetails.takeaways.map(
                                  (item, index) => (
                                    <li key={index}>{item}</li>
                                  )
                                )}
                              </ul>
                            </>
                          )}
                        {course.expandedDetails.callToAction && (
                          <button
                            className="expander-cta-button"
                            onClick={() => handleEnrollClick(course.title)}>
                            {course.expandedDetails.callToAction}
                          </button>
                        )}
                      </>
                    )}
                    {!course.expandedDetails && (
                      <p style={{ textAlign: "center", width: "100%" }}>
                        More details coming soon!
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default OnlineCourse;