import React from "react";

const GALLERY_IMAGES = [
  "/image001.jpg",
  "/image002.jpg",
  "/image003.jpg",
  "/image004.jpg",
  "/image005.jpg",
  "/image006.jpg",
  "/image007.jpg",
  "/image008.jpg",
  "/image009.jpg",
  "/image010.jpg",
  "/image011.jpg",
  "/image012.jpg",
  "/image013.jpg",
  "/image014.jpg",
  "/image016.jpg",
  "/image017.jpg",
  "/image018.jpg",
];

function Gallery() {
  return (
    <section className="container my-5 gallery-page">
      <h2 className="fw-bold text-center mb-3 gallery-title">
        Our Gallery
      </h2>

      <p className="text-center text-muted mb-5">
        A visual story of PPDP’s work across communities in Ethiopia.
      </p>

      <div className="row g-4">
        {GALLERY_IMAGES.map((src, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
            <div className="gallery-card">
              <img
                src={src}
                alt={`PPDP gallery ${index + 1}`}
                className="gallery-img"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
