



import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">

        <div className="col-8 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Trading Cost Calculator</h3>
          </a>

          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
            className="text-muted"
          >
            <li>
              TradeSphere provides a simple fee structure to help users estimate
              the cost of simulated trades and portfolio transactions.
            </li>

            <li>
              All trade summaries and transaction reports are available digitally
              through the user dashboard.
            </li>

            <li>
              Users can monitor order history, positions, and holdings directly
              from the platform interface.
            </li>

            <li>
              The platform supports multiple asset types for educational and
              demonstration purposes.
            </li>

            <li>
              Pricing calculations are displayed transparently to help users
              understand trading costs before placing orders.
            </li>

            <li>
              The system is designed for learning, portfolio tracking, and
              trading workflow simulation.
            </li>
          </ul>
        </div>

        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Platform Fee Details</h3>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Brokerage;