import React from "react";
import { TEAM } from "../data.js";

function Team() {
  const imageMap = {
    "Berihun Eyasu Reta": "/Berihun.png",
    "Abraham Tsegaye": "/Abraham.png",
    "Etsegenet Milugeta": "/Etsegenet.png",
  };

  return (
    <section className="team-section container my-5">
      <h2 className="text-center fw-bold mb-4">Leadership & Team</h2>
      <p className="text-center text-muted mb-5">
        Our leadership team drives PPDP’s mission with integrity, dedication, and vision for a just and empowered society.
      </p>

      <div className="row g-4">
        {TEAM.map((member, index) => (
          <div key={index} className="col-sm-6 col-md-4">
            <div className="card team-card h-100 text-center border-0 shadow-sm">
              <div className="team-photo-wrapper mx-auto mt-4">
                <img
                  src={imageMap[member.name] || "/default-profile.png"}
                  alt={member.name}
                  className="team-photo rounded-circle"
                />
              </div>
              <div className="card-body">
                <h5 className="fw-bold text-primary">{member.name}</h5>
                <p className="text-muted">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
