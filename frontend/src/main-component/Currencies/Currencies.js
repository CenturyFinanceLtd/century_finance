import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import "./Currencies.css"; // Import CSS for styling

const currenciesData = [
  {
    name: "US Dollar (USD)",
    symbol: "$",
    description:
      <i>"Symbol: $ Code: USD Issued by: United States Department of the Treasury  Controlled by: Federal Reserve (U.S. central bank) Subunit: 1 dollar = 100 cents Coins: 1¢, 5¢, 10¢, 25¢, 50¢, $1 Banknotes: $1, $2, $5, $10, $20, $50, $100 .",</i>
  },
  {
    name: "Euro (EUR)",
    symbol: "€",
    description:
     <i> " Symbol: € Code: EUR Introduced: 1999 (electronic), 2002 (cash) Issued by: European Central Bank Subunit: 1 Euro = 100 cents Coins: 1¢, 2¢, 5¢, 10¢, 20¢, 50¢, €1, €2 Banknotes: €5, €10, €20, €50, €100, €200, €500*.",</i>

  },
  {
    name: "British Pound (GBP)",
    symbol: "£",
    description:
      <i> "Currency Name: Pound Sterling Symbol: £ Code: GBP Subunit: 1 Pound = 100 Pence Coins: 1p, 2p, 5p, 10p, 20p, 50p, £1, £2 Banknotes: £5, £10, £20, £50, (£100 in Scotland) Issued by: Bank of England (main), plus Scottish & Northern Irish banks.", </i>  
  },
  {
    name: "Japanese Yen (JPY)",
    symbol: "¥",
    description:
      <i> "Currency Name: Japanese Yen Symbol: ¥, Code: JPY, Subunit: 1 Yen = 100 Sen (Sen are not used in practice), Coins: ¥1, ¥5, ¥10, ¥50, ¥100, ¥500. Banknotes: ¥1,000, ¥2,000*, ¥5,000, ¥10,000, Issued by: Bank of Japan (BoJ), Introduced: 1871 ", </i>
  },
  {
    name: "Swiss Franc (CHF)",
    symbol: "CHF",
    description:
      <i> "Currency Name: Swiss Franc, Symbol: CHF or Fr. / SFr, Code: CHF, Subunit: 1 Franc = 100 Rappen (German) / Centimes (French) / Centesimi (Italian), Coins: 5¢, 10¢, 20¢, 50¢, 1 Fr, 2 Fr, 5 Fr, Banknotes: 10, 20, 50, 100, 200, 1000 CHF, Issued by: Swiss National Bank (SNB).", </i>
  },
   {
    name: "🇮🇳 Indian Rupee",
    symbol: "₹",
    description:
      <i> "The Indian currency system is managed by the Reserve Bank of India (RBI),. / Notes	₹2 to ₹2,000	Most active; ₹2,000 phased /Coins	₹1 to ₹10	Active and in use, Withdrawn	₹500, ₹1,000,  Banknotes: 10, 20, 50, 100, 200, 2000, Digital	Digital Rupee (e₹)	Pilot phase in progress", </i>
  },
   {
    name: "United Arab Emirates  (AED)",
    symbol: " د.إ",
    description:
      <i> "Currency Code (ISO): AED., /Common Symbol: د.إ or Dh / Centimes,Subunit: 1 Dirham = 100 Fils,25 Fils	1/4 Dirham,50 Fils	1/2 Dirham	Widely used,1 Dirham	1 Dirham	Most common coin ,Issued by: Central Bank of the UAE.", </i>
  },
   {
    name: " Kuwaiti Dinar (KWD)",
    symbol: "د.ك or KD",
    description:
      <i> "Currency Code (ISO): KWD, Symbol: Symbol: د.ك or KD./Subunit: 1 Dinar = 1,000 Fils, 5 Fils	0.005 KWD	Rare, low value /10 Fils	0.01 KWD	Rare, low value, 25 Fils	0.025 KWD	Rare, low value, , 50 Fils	0.05 KWD	Rare, low value. Central Bank: Central Bank of Kuwait (established in 1969)", </i>
  },
   {
    name: "Saudi Arabia’s  (SAR)",
    symbol: "	ر.س Arabic ",
    description:
      <i> "Currency Name: Currency Name	Saudi Riyal. / SFr,Currency Code (ISO)	SAR /Symbol	ر.س (Arabic) or SR,Subunit	1 Riyal = 100 Halalas, Fixed Peg	1 USD = 3.75 SAR, Issued by:Saudi Central Bank (SAMA).", </i>
  },
];

const Currencies = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Currencies - Century Finance Limited</title>
        <meta
          name="description"
          content="Explore global currencies and their market roles. Learn about USD, EUR, JPY, and more with Century Finance Limited."
        />
        <meta
          name="keywords"
          content="Currencies, Forex, Century Finance, Financial Markets, USD, EUR, Global Currencies"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />
      <PageTitle pageTitle={"Currencies"} pagesub={"Currencies"} />

      {/* Currencies Content */}
      <section className="currencies-section">
        <div className="container">
          <h2 className="section-title">Major Global Currencies</h2>
          <p className="section-subtitle">
            Learn about the most influential currencies in the global financial market.
          </p>

          <div className="currency-cards">
            {currenciesData.map((currency, index) => (
              <div className="currency-card" key={index}>
                <div className="currency-header">
                  <span className="currency-symbol">{currency.symbol}</span>
                  <h3 className="currency-name">{currency.name}</h3>
                </div>
                <p className="currency-description">{currency.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default Currencies;
