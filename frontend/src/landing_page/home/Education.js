import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img
            src="media/images/education.svg"
            style={{ width: "70%" }}
            alt="Learning Resources"
          />
        </div>

        <div className="col-6">
          <h1 className="mb-3 fs-2">
            Learn trading with structured educational resources
          </h1>

          <p>
            TradeSphere provides easy-to-understand learning materials covering
            stock market fundamentals, trading strategies, and portfolio
            management concepts designed for beginners and intermediate users.
          </p>

          <a href="" style={{ textDecoration: "none" }}>
            Learning Center{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>

          <p className="mt-5">
            Our community discussion forum allows users to ask questions, share
            trading ideas, and collaborate with other learners to improve their
            understanding of financial markets.
          </p>

          <a href="" style={{ textDecoration: "none" }}>
            Community Forum{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;