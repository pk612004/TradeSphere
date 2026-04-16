


import React from "react";
import { useNavigate } from "react-router-dom";

function OpenAccount() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup"); 
  };

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">

        <h1 className="mt-5">
          Open a TradeSphere account
        </h1>

        <p>
          Experience a modern trading platform with real-time portfolio
          tracking, transparent pricing, and an intuitive user interface.
        </p>

        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "220px", margin: "0 auto" }}
          onClick={handleSignup}
        >
          Sign up Now
        </button>

      </div>
    </div>
  );
}

export default OpenAccount;