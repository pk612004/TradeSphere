// import React from "react";

// function Universe() {
//   return (
//     <div className="container mt-5">
//       <div className="row text-center">
//         <h1>The Zerodha Universe</h1>
//         <p>
//           Extend your trading and investment experience even further with our
//           partner platforms
//         </p>

//         <div className="col-4 p-3 mt-5">
//           <img src="media/images/smallcaseLogo.png" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="media/images/smallcaseLogo.png" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="media/images/smallcaseLogo.png" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="media/images/smallcaseLogo.png" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="media/images/smallcaseLogo.png" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="media/images/smallcaseLogo.png" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <button
//           className="p-2 btn btn-primary fs-5 mb-5"
//           style={{ width: "20%", margin: "0 auto" }}
//         >
//           Signup Now
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Universe;



import React from "react";
import { useNavigate } from "react-router-dom";

function Universe() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup"); // change if needed
  };

  return (
    <div className="container mt-5">
      <div className="row text-center">

        <h1>The TradeSphere Ecosystem</h1>

        <p>
          Extend your trading and investment experience with integrated tools
          designed to simplify portfolio management and market analysis.
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" alt="Portfolio Analytics" />
          <p className="text-small text-muted">
            Portfolio analytics and performance tracking
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" alt="Market Watchlist" />
          <p className="text-small text-muted">
            Real-time watchlist and market monitoring
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" alt="Order Management" />
          <p className="text-small text-muted">
            Order and position management tools
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" alt="Funds Management" />
          <p className="text-small text-muted">
            Funds tracking and balance management
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" alt="Investment Insights" />
          <p className="text-small text-muted">
            Investment insights and reporting dashboard
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" alt="Learning Center" />
          <p className="text-small text-muted">
            Educational resources and trading tutorials
          </p>
        </div>

        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
          onClick={handleSignup}
        >
          Get Started
        </button>

      </div>
    </div>
  );
}

export default Universe;