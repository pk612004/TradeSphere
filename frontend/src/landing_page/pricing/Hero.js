



import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">

        <h1>Platform Pricing</h1>

        <h3 className="text-muted mt-3 fs-5">
          Transparent and simple pricing for managing trades and investments
        </h3>

      </div>

      <div className="row p-5 mt-5 text-center">

        <div className="col-4 p-4">
          <img
            src="media/images/pricingEquity.svg"
            alt="Portfolio Management"
          />

          <h1 className="fs-3">Free portfolio management</h1>

          <p className="text-muted">
            Users can track holdings, monitor investments, and manage long-term
            portfolios at no additional cost within the TradeSphere platform.
          </p>
        </div>

        <div className="col-4 p-4">
          <img
            src="media/images/intradayTrades.svg"
            alt="Trade Execution"
          />

          <h1 className="fs-3">Low-cost trade simulation</h1>

          <p className="text-muted">
            A flat fee model is used to simulate intraday and derivatives trades,
            helping users understand transaction costs and trading workflows.
          </p>
        </div>

        <div className="col-4 p-4">
          <img
            src="media/images/pricingEquity.svg"
            alt="Investment Tools"
          />

          <h1 className="fs-3">Investment tools access</h1>

          <p className="text-muted">
            TradeSphere provides access to portfolio analytics, watchlists, and
            investment tracking tools to support informed financial decisions.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Hero;