



import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">

        <div className="row mt-5">

          {/* Logo Section */}

          <div className="col">
            <img
              src="media/images/logo.svg"
              style={{ width: "50%" }}
              alt="TradeSphere Logo"
            />

            <p>
              &copy; 2026 TradeSphere Technologies. All rights reserved.
            </p>
          </div>

          {/* Company */}

          <div className="col">
            <p><strong>Company</strong></p>

            <a href="">About</a>
            <br />

            <a href="">Products</a>
            <br />

            <a href="">Pricing</a>
            <br />

            <a href="">Careers</a>
            <br />

            <a href="">Technology</a>
            <br />

            <a href="">Press & Media</a>
          </div>

          {/* Support */}

          <div className="col">
            <p><strong>Support</strong></p>

            <a href="">Contact</a>
            <br />

            <a href="">Support Portal</a>
            <br />

            <a href="">Help Center</a>
            <br />

            <a href="">Platform Guide</a>
            <br />

            <a href="">Downloads</a>
          </div>

          {/* Account */}

          <div className="col">
            <p><strong>Account</strong></p>

            <a href="">Open an Account</a>
            <br />

            <a href="">Add Funds</a>
            <br />

            <a href="">Withdraw Funds</a>
            <br />

            <a href="">User Settings</a>
          </div>

        </div>

        {/* Bottom Note */}

        <div
          className="mt-5 text-muted"
          style={{ fontSize: "14px" }}
        >
          <p>
            TradeSphere is a full-stack trading platform developed for
            educational and demonstration purposes. The platform allows users
            to simulate trading activities, manage portfolios, and monitor
            investments using modern web technologies.
          </p>

          <p>
            This project showcases the implementation of a scalable financial
            dashboard using React.js, Node.js, Express.js, and MongoDB.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;