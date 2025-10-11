import React, { useState } from "react";
import { PROGRAMS } from "../data.js";

function Programs() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="container my-5 programs-page">
      <h2 className="text-primary fw-bold mb-4 text-center">
        Programs & Focus Areas
      </h2>

      <div className="row g-4">
        {PROGRAMS.map((program, index) => (
          <div className="col-sm-6 col-lg-4" key={index}>
            <div
              className={`card program-card border-0 shadow-sm p-4 ${
                expanded === index ? "expanded" : ""
              }`}
            >
              <h5 className="fw-bold text-brand mb-2">{program.title}</h5>
              <p className="text-muted small mb-3">{program.summary}</p>

              {/* Expandable Details */}
              {expanded === index && (
                <div className="program-details">
                  <p>{program.details}</p>
                </div>
              )}

              <button
                className="btn btn-sm btn-outline-primary mt-3"
                onClick={() =>
                  setExpanded(expanded === index ? null : index)
                }
              >
                {expanded === index ? "Show Less" : "Learn More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Programs;
