import React, { useState } from "react";

const tabData = [
  { name: "Nifty", content: "Nifty represents the NSE benchmark index comprising 50 large-cap stocks across diverse sectors, offering a reliable market snapshot." },
  { name: "Nifty-50", content: "Nifty-50 is NSE’s flagship index, reflecting the weighted performance of the top 50 blue-chip Indian companies." },
  { name: "Bank Nifty", content: "Bank Nifty tracks India's most liquid banking stocks, serving as a key indicator for the banking sector’s performance." },
  { name: "Fin Nifty", content: "Fin Nifty focuses on financial services including NBFCs, insurance, and asset management companies." },
  { name: "Midcap", content: "The Midcap index highlights companies with medium market capitalization, ideal for balanced growth and risk." },
  { name: "Sensex", content: "Sensex, the BSE index, features 30 top companies and acts as a barometer for India’s economic health." },
];

const Indian = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].name);

  return (
    <section className="wpo-about-section-s2 section-padding" style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <div className="wpo-about-wrap">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12 col-12">
              <div className="wpo-about-text text-center">
                <div className="wpo-section-title mb-4">
                  <h2 className="fw-bold mb-2" style={{ color: "#111" }}>Explore India’s Key Market Indices</h2>
                  <p style={{ color: "#555" }}>
                    Navigate through India’s most influential stock indices. Tap each tab to learn about market trends and key benchmarks.
                  </p>
                </div>

                {/* Tabs */}
                <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
                  {tabData.map((tab) => (
                    <button
                      key={tab.name}
                      onClick={() => setActiveTab(tab.name)}
                      className={`px-4 py-2 fw-semibold border rounded-pill ${
                        activeTab === tab.name
                          ? "active-tab"
                          : "inactive-tab"
                      }`}
                      style={{
                        borderColor: activeTab === tab.name ? "#E00000" : "#D8D8D8",
                        color: activeTab === tab.name ? "#fff" : "#222",
                        backgroundColor: activeTab === tab.name ? "#E00000" : "#F8F8F8",
                        transition: "0.3s",
                      }}
                    >
                      {tab.name}
                    </button>
                  ))}
                </div>

                {/* Content */}
                <div className="text-start p-4 shadow rounded" style={{ backgroundColor: "#FDFDFD", borderLeft: "5px solid #E00000" }}>
                  <h4 className="fw-bold mb-3" style={{ color: "#222" }}>{activeTab}</h4>
                  <p style={{ color: "#444", lineHeight: "1.6" }}>
                    {tabData.find((tab) => tab.name === activeTab)?.content}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Indian;
