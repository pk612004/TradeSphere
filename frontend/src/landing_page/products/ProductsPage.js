


import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function PricingPage() {
  return (
    <>
      <Hero />

      <LeftSection
        imageURL="media/images/kite.png"
        productName="Trade Terminal"
        productDesription="A fast and responsive trading interface with real-time market data, advanced charts, and an intuitive user experience. Access your trading dashboard seamlessly across devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageURL="media/images/console.png"
        productName="Portfolio Dashboard"
        productDesription="A centralized dashboard to monitor trades, track holdings, analyze performance, and view detailed reports of your investments."
        learnMore=""
      />

      <LeftSection
        imageURL="media/images/coin.png"
        productName="Investment Hub"
        productDesription="Manage and monitor long-term investments with a simplified interface designed to help users organize their portfolios efficiently."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageURL="media/images/kiteconnect.png"
        productName="Developer API"
        productDesription="Build custom financial applications and integrate trading features using secure REST APIs designed for scalability and performance."
        learnMore=""
      />

      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Learning Center"
        productDesription="A structured collection of educational content covering trading basics, portfolio management, and financial concepts to help users improve their investment knowledge."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <p className="text-center mt-5 mb-5">
        Want to explore the technology behind TradeSphere? Check out our
        platform documentation and development insights.
      </p>

      <Universe />
    </>
  );
}

export default PricingPage;