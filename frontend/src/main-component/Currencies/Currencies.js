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
