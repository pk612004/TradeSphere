import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">Founder</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/prakash.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
            alt="Prakash Kumar"
          />
          <h4 className="mt-5">Prakash Kumar</h4>
          <h6>Founder & Full Stack Developer</h6>
        </div>

        <div className="col-6 p-3">
          <p>
            Prakash Kumar is the creator of TradeSphere, a full-stack trading
            platform designed to simplify stock market participation through a
            modern and intuitive interface. The platform enables users to track
            portfolios, monitor holdings, and manage investments efficiently.
          </p>

          <p>
            He is a BTech student specializing in Electronics and Communication
            Engineering (ECE) with a strong interest in software development,
            full-stack technologies, and financial technology systems.
          </p>

          <p>
            His technical expertise includes building scalable web applications
            using React.js, Node.js, Express.js, and MongoDB, with a focus on
            performance, usability, and real-world problem solving.
          </p>

          <p>
            Connect on{" "}
            <a href="https://github.com/pk612004" target="_blank">
              GitHub
            </a>{" "}
            /{" "}
            <a href="https://www.linkedin.com/in/prakash612004/" target="_blank">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;