import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/NavLandingPage.css";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update current year on component mount
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="container company-info d-flex justify-content-between align-items-center gap-3 mt-5 flex-wrap px-4">
          <div className="about">
            <h3 className="navbar-brand main-title font-2x">
              RADHE ENTERPRISE
            </h3>
            <p>
              We have creels that helps your business to make reach new heights.
            </p>
          </div>
          <div className="links">
            <h5 className="mb-3">COMPANY</h5>
            <p>About</p>
            <p>Features</p>
            <p>Works</p>
            <p>Career</p>
          </div>
          <div className="links">
            <h5 className="mb-3">Help</h5>
            <p>Customer Support</p>
            <p>Delivery Details</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className="copyright d-flex flex-wrap justify-content-between align-items-center px-5 gap-3">
          <div>
            © 2012 - {currentYear} Radhe Enterprise Pvt. Ltd. All Rights
            Reserved
          </div>
          <div className="me">
            Developed By{" "}
            <Link to="https://www.instagram.com/mithil__suthar/">
              Mithil Suthar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
