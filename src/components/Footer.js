import React from "react";
import { ORG } from "../data.js";

function Footer() {
  return (
    <footer className="footer text-light pt-5">
      {/* Top Footer */}
      <div className="container pb-4">
        <div className="row gy-4 align-items-start">
          {/* Left Section */}
          <div className="col-md-6">
            <h5 className="fw-bold mb-3">{ORG.name}</h5>
            <p className="small text-light opacity-75 mb-1">
              Reg. No: {ORG.regNo} &nbsp; | &nbsp; TIN: {ORG.tin}
            </p>
            <p className="small text-light opacity-75 mb-1">
              Headquarters: {ORG.headquarters}
            </p>
            <p className="small text-light opacity-75">
              <strong>Email:</strong> {ORG.emails.join(" | ")} <br />
              <strong>Phone:</strong> {ORG.phones.join(" | ")}
            </p>
          </div>

          {/* Right Section */}
          <div className="col-md-6 text-md-end text-center">
            <p className="small mb-2">
              <em>{ORG.tagline}</em>
            </p>
            <div className="social-icons mt-2">
              
             
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="footer-bottom py-3 mt-4 text-center">
        <div className="container">
          <p className="mb-0 small">
            © {new Date().getFullYear()} <strong>{ORG.name}</strong>. All rights
            reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
