


import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup"); // change if your route is different
  };

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="TradeSphere Platform"
          className="mb-5"
        />

        <h1 className="mt-5">
          Invest smart with TradeSphere
        </h1>

        <p>
          A modern trading platform to manage stocks, track portfolios,
          and monitor investments with real-time insights.
        </p>

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

export default Hero;