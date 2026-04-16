



import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">

      <div className="p-5" id="supportWrapper">
        <h4>TradeSphere Support Portal</h4>
        <a href="">Track Support Tickets</a>
      </div>

      <div className="row p-5 m-3">

        {/* Left Section */}

        <div className="col-6 p-3">
          <h1 className="fs-3">
            Search for answers or browse help topics to create a support ticket
          </h1>

          <input
            placeholder="Eg. how do I place a trade"
            className="form-control mb-3"
          />

          <br />

          <a href="">Track account setup</a>
          <br />

          <a href="">Track feature activation</a>
          <br />

          <a href="">Trading limits and margins</a>
          <br />

          <a href="">Platform user guide</a>

        </div>

        {/* Right Section */}

        <div className="col-6 p-3">
          <h1 className="fs-3">Featured Help Topics</h1>

          <ol>
            <li>
              <a href="">
                Understanding account verification process
              </a>
            </li>

            <li>
              <a href="">
                Latest platform updates and trading features
              </a>
            </li>
          </ol>

        </div>

      </div>

    </section>
  );
}

export default Hero;