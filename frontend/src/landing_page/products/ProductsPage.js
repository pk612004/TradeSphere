// import React from "react";

// import Hero from "./Hero";
// import LeftSection from "./LeftSection";
// import RightSection from "./RightSection";
// import Universe from "./Universe";


// function PricingPage() {
//   return (
//     <>
//       <Hero />
//       <LeftSection
//         imageURL="media/images/kite.png"
//         productName="Kite"
//         productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
//         tryDemo=""
//         learnMore=""
//         googlePlay=""
//         appStore=""
//       />
//       <RightSection
//         imageURL="media/images/console.png"
//         productName="Console"
//         productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
//         learnMore=""
//       />
//       <LeftSection
//         imageURL="media/images/coin.png"
//         productName="Coin"
//         productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
//         tryDemo=""
//         learnMore=""
//         googlePlay=""
//         appStore=""
//       />
//       <RightSection
//         imageURL="media/images/kiteconnect.png"
//         productName="Kite Connect API"
//         productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
//         learnMore=""
//       />
//       <LeftSection
//         imageURL="media/images/varsity.png"
//         productName="Varsity mobile"
//         productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
//         tryDemo=""
//         learnMore=""
//         googlePlay=""
//         appStore=""
//       />
//       <p className="text-center mt-5 mb-5">
//         Want to know more about our technology stack? Check out the Zerodha.tech
//         blog.
//       </p>
//       <Universe />
//     </>
//   );
// }

// export default PricingPage;



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