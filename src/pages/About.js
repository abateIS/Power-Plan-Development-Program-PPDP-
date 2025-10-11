import React, { useEffect } from "react";
import { ORG } from "../data.js";

function About() {
  // Scroll-triggered animation
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page">
      {/* Banner Section */}
      <section className="about-banner text-center text-light py-8">
        <div className="container">
          <h2 className="display-8 fw-bold fade-section">
            About {ORG.name}
          </h2>
          <p className="lead fade-section">
            “Empowering youth, women, and marginalized communities for a
            sustainable and inclusive Ethiopia.”
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="container my-5 fade-section">
        <h2 className="text-primary fw-bold mb-3">Who We Are</h2>
        <p className="lead">
          {ORG.name} is a legally registered non-profit, non-governmental
          development organization based in Addis Ababa, Ethiopia. Established
          under Proclamation No. 1113/2019, it works to empower vulnerable and
          underserved populations — particularly women, youth, and rural
          communities — through inclusive, community-centered programs.
        </p>
        <p>
          Founded by <strong>Mr. Berihun Eyasu Reta</strong>, PPDP strives to
          promote social transformation by addressing education, livelihoods,
          environmental protection, and equality at the grassroots level. The
          organization believes in change that begins from within the community
          itself.
        </p>
      </section>

      {/* HISTORY SECTION */}
      <section className="about-section-gradient py-5 fade-section">
        <div className="container">
          <h2 className="text-primary fw-bold mb-3">Our History</h2>
          <p>
            The vision for {ORG.name} emerged from the lived experiences of its
            founder, <strong>Mr. Berihun Eyasu Reta</strong>, whose early life in
            rural Ethiopia revealed the deep inequalities in access to education,
            economic opportunity, and social empowerment. His journey inspired
            the establishment of PPDP as a platform to bridge these gaps through
            inclusive community development.
          </p>
          <p>
            Since its founding, PPDP has launched successful projects in
            <strong> North Wollo</strong>, <strong>South Tigray</strong>, and{" "}
            <strong>Addis Ababa</strong> — improving access to education, WASH,
            youth employment, women’s leadership, and environmental resilience.
            The organization continues to grow its partnerships with government
            institutions, civil society, and international networks.
          </p>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="container py-5 fade-section">
        <h2 className="text-primary fw-bold mb-3">Vision & Mission</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card p-4 border-0 shadow-sm vision-card">
              <h4 className="text-primary fw-bold mb-2">Vision</h4>
              <p>
                A just and inclusive society where all people—especially youth
                and women—are socially, economically, and intellectually
                empowered to live dignified and productive lives.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card p-4 border-0 shadow-sm mission-card">
              <h4 className="text-primary fw-bold mb-2">Mission</h4>
              <p>
                To improve the quality of life of marginalized communities by
                enhancing access to education, health, livelihood, and
                environmental opportunities through capacity building, advocacy,
                and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="about-section-light py-5 fade-section">
        <div className="container">
          <h2 className="text-primary fw-bold mb-3">Core Values</h2>
          <div className="row g-3">
            {[
              "Equity & Inclusion",
              "Transparency & Accountability",
              "Efficiency & Sustainability",
              "Respect for Local Knowledge",
              "Innovation & Adaptability",
              "Empowerment through Participation",
              "Youth Leadership & Social Change",
            ].map((value, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card border-0 shadow-sm p-3 value-card h-100">
                  <h6 className="text-primary fw-bold mb-2">{value}</h6>
                  <p className="text-muted small">
                    Upholding this value ensures that PPDP’s programs remain
                    inclusive, effective, and community-driven.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONCLUSION QUOTE */}
      <section className="text-center py-5 fade-section">
        <div className="container">
          <blockquote className="blockquote px-4 py-5 about-quote">
            <p className="mb-3">
              “At {ORG.name}, we believe that transformation begins when
              communities themselves lead the change.”
            </p>
            <footer className="blockquote-footer text-light">
              Power Plan Development Program (PPDP)
            </footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
}

export default About;
