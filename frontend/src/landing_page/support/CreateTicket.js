


import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">

        <h1 className="fs-2">
          To create a support ticket, select a relevant topic
        </h1>

        {/* Account Setup */}

        <div className="col-4 p-5">

          <h4>
            <i className="fa fa-plus-circle"></i> Account Setup
          </h4>

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Create New Account
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Verify Account Details
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Business / Company Account
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Account Activation
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Getting Started Guide
          </a>

        </div>

        {/* Trading & Orders */}

        <div className="col-4 p-5">

          <h4>
            <i className="fa fa-plus-circle"></i> Trading & Orders
          </h4>

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Place Buy / Sell Orders
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Order Status & History
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Modify or Cancel Orders
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Intraday & Positions
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Trading Limits & Margins
          </a>

        </div>

        {/* Funds & Portfolio */}

        <div className="col-4 p-5">

          <h4>
            <i className="fa fa-plus-circle"></i> Funds & Portfolio
          </h4>

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Add Funds
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Withdraw Funds
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Portfolio Overview
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Transaction History
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Fee Details
          </a>

        </div>

      </div>
    </div>
  );
}

export default CreateTicket;