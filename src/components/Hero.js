import React from 'react';
import { ORG } from "../data.js"; 

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h1 className="display-5 fw-bold">Empowering communities across Ethiopia</h1>
            <p className="lead text-muted">
              {ORG.name} works to empower women, youth and marginalized groups through community-led, sustainable programs.
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
