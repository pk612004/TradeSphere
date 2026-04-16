// import React from "react";

// function Stats() {
//   return (
//     <div className="container p-3">
//       <div className="row p-5">
//         <div className="col-6 p-5">
//           <h1 className="fs-2 mb-5">Trust with confidence</h1>
//           <h2 className="fs-4">Customer-first always</h2>
//           <p className="text-muted">
//             That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
//             worth of equity investments.
//           </p>
//           <h2 className="fs-4">No spam or gimmicks</h2>
//           <p className="text-muted">
//             No gimmicks, spam, "gamification", or annoying push notifications.
//             High quality apps that you use at your pace, the way you like.
//           </p>
//           <h2 className="fs-4">The Zerodha universe</h2>
//           <p className="text-muted">
//             Not just an app, but a whole ecosystem. Our investments in 30+
//             fintech startups offer you tailored services specific to your needs.
//           </p>
//           <h2 className="fs-4">Do better with money</h2>
//           <p className="text-muted">
//             With initiatives like Nudge and Kill Switch, we don't just
//             facilitate transactions, but actively help you do better with your
//             money.
//           </p>
//         </div>
//         <div className="col-6 p-5">
//           <img src="media/images/ecosystem.png" style={{ width: "90%" }} />
//           <div className="text-center">
//             <a href="" className="mx-5" style={{ textDecoration: "none" }}>
//               Explore our products{" "}
//               <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
//             </a>
//             <a href="" style={{ textDecoration: "none" }}>
//               Try Kite demo{" "}
//               <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Stats;



import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">

        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trade with confidence</h1>

          <h2 className="fs-4">User-focused design</h2>
          <p className="text-muted">
            TradeSphere is designed to provide a smooth and reliable trading
            experience with an intuitive interface that helps users manage
            investments and monitor portfolios efficiently.
          </p>

          <h2 className="fs-4">Clean and distraction-free platform</h2>
          <p className="text-muted">
            Our platform emphasizes simplicity and usability, allowing users to
            focus on their trading decisions without unnecessary notifications
            or distractions.
          </p>

          <h2 className="fs-4">Integrated trading ecosystem</h2>
          <p className="text-muted">
            TradeSphere combines watchlists, portfolio tracking, order
            management, and analytics into a single dashboard for seamless
            financial management.
          </p>

          <h2 className="fs-4">Smart financial insights</h2>
          <p className="text-muted">
            Users can analyze holdings, monitor positions, and track funds in
            real time to make informed investment decisions.
          </p>
        </div>

        <div className="col-6 p-5">
          <img
            src="media/images/ecosystem.png"
            style={{ width: "90%" }}
            alt="TradeSphere Ecosystem"
          />

          <div className="text-center">

            <a
              href=""
              className="mx-5"
              style={{ textDecoration: "none" }}
            >
              Explore platform features{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>

            <a
              href=""
              style={{ textDecoration: "none" }}
            >
              Try trading demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Stats;