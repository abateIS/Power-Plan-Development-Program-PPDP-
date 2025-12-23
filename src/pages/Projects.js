import React, { useState } from "react";

const PROJECTS = [
  {
    title: "SRHR Training for Youth",
    location: "North Wollo, Amhara",
    image: "/image010.jpg",
    summary:
      "Community-led youth workshops on sexual and reproductive health and rights, empowering local youth to advocate for better access and awareness.",
    details:
      "This project trained over 300 young men and women in North Wollo through peer-to-peer learning and collaboration with local health offices. PPDP provided educational materials and supported school clubs focusing on SRHR awareness and gender equality."
  },
  {
    title: "Vocational Training for Women",
    location: "Addis Ababa",
    image: "/image004.jpg",
    summary:
      "Empowering urban women through practical vocational and entrepreneurship training programs.",
    details:
      "The project established training centers focusing on tailoring, beauty services, digital literacy, and micro-business management. Over 200 women graduated and received toolkits for starting self-employment ventures."
  },
  {
    title: "Tree Planting & Climate Resilience",
    location: "Sidama & Oromia Regions",
    image: "/image001.jpg",
    summary:
      "Environmental rehabilitation and reforestation to build climate-resilient communities.",
    details:
      "PPDP organized community-led reforestation campaigns with local youth and farmers. Over 50,000 indigenous trees were planted, contributing to watershed protection and ecosystem restoration."
  },
  {
    title: "WASH Infrastructure Improvement",
    location: "SNNPR Rural Communities",
    image: "/image003.jpg",
    summary:
      "Improving access to clean water and sanitation facilities in rural schools and health centers.",
    details:
      "Constructed water points, rehabilitated wells, and implemented hygiene education programs benefiting over 4,000 people. The project helped reduce waterborne diseases and improved school attendance for girls."
  },
  {
    title: "Youth Peacebuilding & Dialogue Forums",
    location: "South Tigray",
    image: "/image020.jpg",
    summary:
      "Fostering peace and mutual understanding among youth in conflict-prone areas.",
    details:
      "This initiative trained 150 youth ambassadors as peace advocates and organized regional peace dialogues, strengthening social cohesion and reducing tension in communities affected by past conflicts."
  },
  {
    title: "Inclusive Education Access Program",
    location: "Addis Ababa & Hawassa",
    image: "/image014.jpg",
    summary:
      "Supporting marginalized children and youth with access to inclusive and quality education.",
    details:
      "Distributed educational materials, supported teachers’ capacity building, and created community-based literacy clubs reaching over 1,000 learners from vulnerable groups."
  }
];

function Projects() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="container my-5 projects-page">
      <h2 className="text-primary fw-bold mb-4 text-center">Our Key Projects</h2>
      <p className="text-center text-muted mb-5">
        PPDP implements transformative projects that empower communities and
        promote sustainable development across Ethiopia.
      </p>

      <div className="row g-4">
        {PROJECTS.map((p, i) => (
          <div className="col-md-6 col-lg-4" key={i}>
            <div
              className={`card project-card shadow-sm border-0 ${
                expanded === i ? "expanded" : ""
              }`}
            >
              <div className="image-wrapper">
                <img src={p.image} alt={p.title} className="project-image" />
                <div className="image-overlay"></div>
                <h5 className="overlay-title">{p.title}</h5>
              </div>

              <div className="card-body">
                <p className="text-muted small mb-1">
                  <i className="bi bi-geo-alt"></i> {p.location}
                </p>
                <p className="small text-dark">{p.summary}</p>

                {expanded === i && (
                  <div className="project-details">
                    <p className="small text-secondary">{p.details}</p>
                  </div>
                )}

                <button
                  className="btn btn-sm btn-outline-primary mt-2"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  {expanded === i ? "Show Less" : "Learn More"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
