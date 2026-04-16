// import React from "react";

// function Footer() {
//   return (
//     <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
//       <div className="container border-top mt-5">
//         <div className="row mt-5">
//           <div className="col">
//             <img src="media/images/logo.svg" style={{ width: "50%" }} />
//             <p>
//               &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
//             </p>
//           </div>
//           <div className="col">
//             <p>Company</p>
//             <a href="">About</a>
//             <br />
//             <a href="">Products</a>
//             <br />
//             <a href="">Pricing</a>
//             <br />
//             <a href="">Referral programme</a>
//             <br />
//             <a href="">Careers</a>
//             <br />
//             <a href="">Zerodha.tech</a>
//             <br />
//             <a href="">Press & media</a>
//             <br />
//             <a href="">Zerodha cares (CSR)</a>
//             <br />
//           </div>
//           <div className="col">
//             <p>Support</p>
//             <a href="">Contact</a>
//             <br />
//             <a href="">Support portal</a>
//             <br />
//             <a href="">Z-Connect blog</a>
//             <br />
//             <a href="">List of charges</a>
//             <br />
//             <a href="">Downloads & resources</a>
//             <br />
//           </div>
//           <div className="col">
//             <p>Account</p>
//             <a href="">Open an account</a>
//             <br />
//             <a href="">Fund transfer</a>
//             <br />
//             <a href="">60 day challenge</a>
//             <br />
//           </div>
//         </div>
//         <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
//           <p>
//             Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
//             INZ000031633 CDSL: Depository services through Zerodha Securities
//             Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
//             through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
//             no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
//             #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
//             J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
//             complaints pertaining to securities broking please write to
//             complaints@zerodha.com, for DP related to dp@zerodha.com. Please
//             ensure you carefully read the Risk Disclosure Document as prescribed
//             by SEBI | ICF
//           </p>

//           <p>
//             Procedure to file a complaint on SEBI SCORES: Register on SCORES
//             portal. Mandatory details for filing complaints on SCORES: Name,
//             PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
//             Communication, Speedy redressal of the grievances
//           </p>

//           <p>
//             Investments in securities market are subject to market risks; read
//             all the related documents carefully before investing.
//           </p>

//           <p>
//             "Prevent unauthorised transactions in your account. Update your
//             mobile numbers/email IDs with your stock brokers. Receive
//             information of your transactions directly from Exchange on your
//             mobile/email at the end of the day. Issued in the interest of
//             investors. KYC is one time exercise while dealing in securities
//             markets - once KYC is done through a SEBI registered intermediary
//             (broker, DP, Mutual Fund etc.), you need not undergo the same
//             process again when you approach another intermediary." Dear
//             Investor, if you are subscribing to an IPO, there is no need to
//             issue a cheque. Please write the Bank account number and sign the
//             IPO application form to authorize your bank to make payment in case
//             of allotment. In case of non allotment the funds will remain in your
//             bank account. As a business we don't give stock tips, and have not
//             authorized anyone to trade on behalf of others. If you find anyone
//             claiming to be part of Zerodha and offering such services, please
//             create a ticket here.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;



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