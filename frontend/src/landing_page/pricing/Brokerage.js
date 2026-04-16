// import React from "react";

// function Brokerage() {
//   return (
//     <div className="container">
//       <div className="row p-5 mt-5 text-center border-top">
//         <div className="col-8 p-4">
//           <a href="" style={{ textDecoration: "none" }}>
//             <h3 className="fs-5">Brokerage calculator</h3>
//           </a>
//           <ul
//             style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
//             className="text-mut"
//           >
//             <li>
//               Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
//               GST per order.
//             </li>
//             <li>Digital contract notes will be sent via e-mail.</li>
//             <li>
//               Physical copies of contract notes, if required, shall be charged
//               ₹20 per contract note. Courier charges apply.
//             </li>
//             <li>
//               For NRI account (non-PIS), 0.5% or ₹100 per executed order for
//               equity (whichever is lower).
//             </li>
//             <li>
//               For NRI account (PIS), 0.5% or ₹200 per executed order for equity
//               (whichever is lower).
//             </li>
//             <li>
//               If the account is in debit balance, any order placed will be
//               charged ₹40 per executed order instead of ₹20 per executed order.
//             </li>
//           </ul>
//         </div>
//         <div className="col-4 p-4">
//           <a href="" style={{ textDecoration: "none" }}>
//             <h3 className="fs-5">List of charges</h3>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Brokerage;



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