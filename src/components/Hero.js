import React from 'react';
import { ORG } from "../data.js"; 

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h3 className="display-5 fw-bold">We inspire and enable people to change their lives and the world around them!</h3>
            <p className="lead text-muted">
              {ORG.name} We inspire and enable people to change their lives and the world around them!
            </p>
            <div className="mt-3">
              <a className="btn btn-primary btn-lg me-2" href="/programs">Our Programs</a>
              <a className="btn btn-outline-secondary btn-lg" href="/contact">Get in touch</a>
            </div>
          </div>
          <div className="col-lg-5 text-center">
            <img src="/logos.png" alt="PPDP logo" style={{ maxWidth: 220}} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
