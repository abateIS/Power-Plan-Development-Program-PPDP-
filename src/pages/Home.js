import React from "react";
import { ORG } from "../data.js";

function Home() {
  return (
    <>
      {/* === HERO SECTION === */}
      <section className="hero position-relative">
        <div className="container">
          <div className="row align-items-center">
            {/* Text Section */}
            <div className="col-lg-7 col-md-12 text-lg-start text-center">
            <h1
  className="display-5 fw-bold mb-3 faded-title"
>
  Empowering Communities Across Ethiopia
</h1>

              <p className="lead text-muted mb-4">
                <strong style={{ fontSize: "1.25rem", color: "#0d6efd" }}>
                  {ORG.name}
                </strong>{" "}
                works to empower women, youth, and marginalized groups through
                community-led, sustainable programs that inspire long-term change.
              </p>
              <div className="mt-3">
                <a className="btn btn-primary btn-lg me-3" href="/programs">
                  Our Programs
                </a>
                <a className="btn btn-outline-secondary btn-lg" href="/contact">
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Image Section */}
            <div className="col-lg-5 col-md-12 text-center mt-5 mt-lg-0">
              <img
                src="/logos.png"
                alt="Empowering Community"
                className="hero-img shadow-lg rounded-4"
              />
            </div>
          </div>
        </div>

        {/* Decorative background shape */}
        <div className="hero-bg-shape"></div>
      </section>

      {/* === INFO CARD SECTION === */}
      <section className="info-cards py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{ color: "#0d6efd", fontWeight: "700" }}>What We Do</h2>
            <p className="text-muted fs-5">
              PPDP focuses on sustainable development and community empowerment through key impact areas.
            </p>
          </div>

          <div className="row g-4">
            {/* Card 1: Mission */}
            <div className="col-md-4">
              <div className="card info-card p-4 text-center h-100">
                <img
                  src="https://www.shutterstock.com/shutterstock/photos/2276750979/display_1500/stock-photo-mission-team-building-or-hands-of-business-people-with-goals-support-or-motivation-for-success-or-2276750979.jpg"
                  alt="Mission"
                  className="info-img rounded-3 mb-3"
                />
                <h4>Our Mission</h4>
                <p>
                  To enhance the quality of life in Ethiopian communities by promoting empowerment,
                  education, and environmental sustainability through inclusive, people-centered programs.
                </p>
              </div>
            </div>

            {/* Card 2: Focus Areas */}
            <div className="col-md-4">
              <div className="card info-card p-4 text-center h-100">
                <img
                  src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=500&q=80"
                  alt="Focus Areas"
                  className="info-img rounded-3 mb-3"
                />
                <h4>Our Focus Areas</h4>
                <p>
                  PPDP implements initiatives in gender equality, livelihoods, youth development,
                  environmental protection, and peacebuilding — ensuring lasting impact and local participation.
                </p>
              </div>
            </div>

            {/* Card 3: Get Involved */}
            <div className="col-md-4">
              <div className="card info-card p-4 text-center h-100">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=500&q=80"
                  alt="Get Involved"
                  className="info-img rounded-3 mb-3"
                />
                <h4>Get Involved</h4>
                <p>
                  Join us in creating sustainable change. Partner, volunteer, or support our programs
                  to help empower communities across Ethiopia.
                </p>
                <a href="/contact" className="btn btn-outline-primary mt-3">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
