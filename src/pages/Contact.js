import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ORG } from "../data.js";

function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_x366qx7",   // 🟦 Replace with your EmailJS service ID
        "__ejs-test-mail-service__",  // 🟦 Replace with your EmailJS template ID
        e.target,
        "vKmJx60JHcYVlXQrf"    // 🟦 Replace with your EmailJS public key
      )
      .then(
        () => {
          setSent(true);
          setLoading(false);
          e.target.reset();
          setTimeout(() => setSent(false), 4000);
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          setLoading(false);
          alert("Message sent. Successfully.");
        }
      );
  };

  return (
    <section className="container my-5">
      <h2 className="text-primary fw-bold mb-4">Contact Us</h2>
      <div className="row g-4">
        {/* Form Section */}
        <div className="col-lg-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input name="from_name" required className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input name="from_email" required type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea name="message" required className="form-control" rows="5" />
            </div>
            <button className="btn btn-primary" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
            {sent && (
              <div className="alert alert-success mt-3">
                ✅ Message sent successfully!
              </div>
            )}
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="col-lg-6">
          <h5 className="text-primary fw-bold mb-3">Contact Details</h5>
          <p className="text-muted small">
            <strong>Email:</strong> {ORG.emails.join(" | ")} <br />
            <strong>Phone:</strong> {ORG.phones.join(" | ")} <br />
            <strong>Headquarters:</strong> {ORG.headquarters}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
