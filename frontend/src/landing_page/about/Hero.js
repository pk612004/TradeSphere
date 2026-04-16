import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We are redefining the digital trading experience
          <br />
          with powerful technology and user-focused design.
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
            TradeSphere was built with the vision of simplifying stock market
            participation for modern investors. Our platform focuses on speed,
            reliability, and an intuitive user interface to make trading
            accessible for everyone.
          </p>

          <p>
            We leverage modern web technologies and scalable backend systems to
            deliver real-time market data, portfolio insights, and seamless
            order management.
          </p>

          <p>
            Thousands of users can monitor their investments, track holdings,
            and manage funds efficiently through our integrated trading
            dashboard and analytics tools.
          </p>
        </div>

        <div className="col-6 p-5">
          <p>
            In addition to trading features, TradeSphere also provides
            educational resources and portfolio management tools to help users
            make informed financial decisions.
          </p>

          <p>
            Our platform is designed with a strong emphasis on performance,
            scalability, and user experience — ensuring reliable operation even
            during high market activity.
          </p>

          <p>
            We continue to enhance our technology stack and introduce new
            features to improve the overall trading and investment experience
            for our users.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;