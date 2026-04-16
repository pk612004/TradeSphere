


import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-3 fs-2">Simple and transparent pricing</h1>

          <p>
            TradeSphere offers a straightforward pricing model designed to help
            users understand costs clearly while managing their trades and
            investments efficiently. No hidden charges, just predictable fees.
          </p>

          <a href="" style={{ textDecoration: "none" }}>
            View Pricing{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        <div className="col-2"></div>

        <div className="col-6 mb-5">
          <div className="row text-center">

            <div className="col p-3 border">
              <h1 className="mb-3">₹0</h1>
              <p>
                Free portfolio tracking and
                <br />
                long-term investment simulation
              </p>
            </div>

            <div className="col p-3 border">
              <h1 className="mb-3">₹20</h1>
              <p>
                Per simulated trade for
                <br />
                intraday and derivatives
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;