



import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">

        <h1 className="mt-5 display-4">
          404 — Page Not Found
        </h1>

        <p className="text-muted">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <Link
          to="/"
          className="btn btn-primary mt-3"
          style={{ width: "200px", margin: "0 auto" }}
        >
          Go to Homepage
        </Link>

      </div>
    </div>
  );
}

export default NotFound;