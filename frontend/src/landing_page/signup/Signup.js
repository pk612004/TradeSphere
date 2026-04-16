// // import React from 'react';
// // function Signup() {
// //     return ( 
// //         <h1>pricingPage</h1>
// //      );
// // }

// // export default Signup;

import React from "react";

function Signup() {

  const handleSignup = () => {
    // redirect to dashboard
    window.location.href = "http://localhost:3001";
  };

  return (
    <div className="text-center mt-5">
      <h1>Signup Page</h1>

      <button
        className="btn btn-primary mt-3"
        onClick={handleSignup}
      >
        Signup
      </button>
    </div>
  );
}

export default Signup;


