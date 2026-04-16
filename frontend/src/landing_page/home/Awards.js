import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="largestBroker" />
        </div>

        <div className="col-6 p-5 mt-5">
          <h1>Modern Trading Platform Features</h1>

          <p className="mb-5">
            TradeSphere is a full-stack trading platform designed to provide
            users with a seamless and efficient investment experience. The
            platform supports multiple financial instruments and portfolio
            management tools through an intuitive dashboard.
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Equity trading simulation</p>
                </li>
                <li>
                  <p>Portfolio and holdings management</p>
                </li>
                <li>
                  <p>Real-time market watchlist</p>
                </li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li>
                  <p>Funds and balance tracking</p>
                </li>
                <li>
                  <p>Order and position monitoring</p>
                </li>
                <li>
                  <p>Interactive trading dashboard</p>
                </li>
              </ul>
            </div>
          </div>

          <img
            src="media/images/pressLogos.png"
            style={{ width: "90%" }}
            alt="pressLogos"
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;