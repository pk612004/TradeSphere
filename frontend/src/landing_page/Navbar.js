// import React from "react";
// import { Link } from "react-router-dom";
// function Navbar() {
//   return (
//     <nav
//       class="navbar navbar-expand-lg border-bottom"
//       style={{ backgroundColor: "#FFF" }}
//     >
//       <div class="container p-2">
//         <Link class="navbar-brand" to="/">
//           <img
//             src="media/images/logo.svg"
//             style={{ width: "25%" }}
//             alt="Logo"
//           />
//         </Link>
//         <button
//           class="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//           <form class="d-flex" role="search">
//             <ul class="navbar-nav mb-lg-0">
//               <li class="nav-item">
//                 <Link class="nav-link active" aria-current="page" to="/signup">
//                   Signup
//                 </Link>
//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link active" to="/about">
//                   About
//                 </Link>
//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link active" to="/product">
//                   Product
//                 </Link>
//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link active" to="/pricing">
//                   Pricing
//                 </Link>
//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link active" to="/support">
//                   Support
//                 </Link>
//               </li>
//             </ul>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">

        {/* Logo + Brand */}

        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="media/images/logo.svg"
            // style={{ width: "40px", marginRight: "8px" }}
            style={{ width: "35%" }}
            alt="TradeSphere Logo"
          />
          {/* <span style={{ fontWeight: "600" }}>
            TradeSphere
          </span> */}
        </Link>

        {/* Toggle Button */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/product">
                Product
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;